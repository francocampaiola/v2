En cuatro semanas, el backlog de FACHA en Notion pasó de cero a **483 tickets**. **435 están terminados** y
**402 llegaron con su Pull Request**. Casi ninguno lo escribí campo por campo: los fui cargando conversando
con ChatGPT, y los implementaron agentes de IA orquestados por un sistema que armé y que corre solo en una
VPS. Se llama **harness-os**.

Esta nota cuenta cómo funciona, por qué está armado así y qué aprendí.

> **En corto:** escribo (o digo en voz alta) qué quiero. ChatGPT lo convierte en un ticket bien armado en
> Notion. harness-os lo toma, escribe una spec, la implementa con un agente, corre los mismos chequeos que
> el CI, la hace revisar por otro modelo y abre el PR. Yo reviso y mergeo.

## El problema: tener ideas es fácil, bajarlas a código no escala

Cuando armás un producto solo o con un equipo chico, el cuello de botella no son las ideas. Es el trabajo
entre la idea y el PR: escribir el ticket bien, pensar el alcance, implementar, testear, revisar, abrir el
PR, actualizar el tablero. Los agentes de código ya escriben buen código, pero si los usás a mano seguís
siendo vos el que copia, pega, corre los tests y empuja cada paso.

Lo que quería era otra cosa: **un sistema que lleve un ticket de punta a punta sin que yo esté en el medio**,
salvo para decidir qué se hace y para aprobar el resultado.

## Cómo viaja un ticket

::figure harness-os | harness-os como un banco con una cinta: sello, prensa, comparador y lupa

Cada ticket pasa por **dos runs**, separados por la spec:

1. **Plan.** Cuando un ticket pasa a `Ready`, un agente *planner* lee el ticket y el repo y escribe una
   **spec con estructura fija**: objetivo, qué entra y qué no, criterios de aceptación con ID, áreas que
   va a tocar y plan de tests. El código valida esa estructura: si falta una sección o queda una pregunta
   abierta, la spec no pasa.
2. **Implementación.** Con la spec aprobada, un agente *implementer* escribe el código y los tests. Después
   corre el **quality gate**: el mismo `check` que usa el CI (lint, tipos, tests y build) más reglas propias
   (por ejemplo, que el diff no toque la configuración del gate). Un *reviewer* revisa el diff contra la spec,
   criterio por criterio. Si hay hallazgos importantes o el gate falla, vuelve al implementer, **hasta tres
   veces**. Si todo pasa, se abre el PR y el ticket queda en `Review`.

Cuando mergeo el PR, el ticket pasa solo a `Done`. Si quiero cambios, comento en el PR y lo muevo a
`Changes Requested`: el sistema retoma la misma branch.

## Las decisiones que lo hacen confiable

Hacer que un agente escriba código es la parte fácil. Lo difícil es que puedas confiar en lo que llega.
Estas son las decisiones que más pesaron (cada una está escrita como un ADR en el repo):

### 1. El código decide, el prompt no

No hay un "agente orquestador". Todo lo que se puede resolver con código es código determinístico:
elegir el próximo ticket, validar la spec, commitear, pushear, abrir el PR y actualizar Notion. Los modelos
solo hacen lo que necesita criterio sobre código: especificar, implementar y revisar.

### 2. Seguridad por lo que el sandbox no tiene

Cada agente corre en un **container efímero**, sin root, sin capabilities y con límites de CPU, RAM y
procesos. Adentro solo tiene la credencial del modelo. **No tiene tokens de GitHub ni de Notion**, ni
acceso al host, ni salida hacia la red interna. El que pushea y abre el PR es el orchestrator, desde afuera,
y solo puede pushear branches `agent/*`.

### 3. Un run nunca espera a una persona

Si hace falta una decisión mía, el run termina y deja el ticket en `Blocked` con un motivo que se puede
accionar ("falta el criterio de aceptación", "la spec contradice el documento de producto"). Nada queda
colgado esperando.

### 4. Un run fallido no deja basura

Cada run trabaja sobre un clone limpio, que se borra al terminar. Nada llega a GitHub hasta el final. Si el
servicio se reinicia a la mitad, al arrancar marca esos runs como fallidos y los vuelve a dejar listos para
empezar de cero.

### 5. Modelos distintos para escribir y para revisar

El implementer y el reviewer son de **familias distintas** (por ejemplo, Codex escribe y Claude revisa), así
uno no le aprueba al otro sus propios puntos ciegos. Cada rol tiene una cadena de respaldo: si se agota la
cuota de un modelo, el run sigue con otro.

### 6. Todo run se puede reconstruir

Cada run guarda una "caja negra" en disco: los inputs exactos, la spec, los diffs, los resultados del gate
y las reviews. Cuando algo sale mal, se puede ver exactamente qué pasó.

## Qué corre en la VPS

![Servicios en la VPS: orchestrator con SQLite, mirrors, gate y panel; containers de agentes; runner de CI; cloud-poller; studio-sync](/blog/harness-os/vps.svg)

- **El orchestrator** (Bun + TypeScript, con systemd). Usa SQLite como fuente de verdad del estado y
  mantiene mirrors de cada repo para clonar rápido.
- **Un panel web de solo lectura**, accesible solo por la VPN, para ver cada run y los logs de los agentes
  en vivo.
- **Un runner de CI efímero.** Cuando se terminaron los 2.000 minutos de GitHub Actions del mes, el CI dejó
  de arrancar y el merge automático se frenó. La solución fue correr los jobs en la VPS: un runner que toma
  **un** job, lo corre en un container y se borra, con su propio usuario y sin acceso a las credenciales del
  harness, porque el código de los PRs lo escriben agentes y se trata como no confiable.
- **cloud-poller**: cada 5 minutos mira Notion y, si hay tickets listos con sus dependencias terminadas,
  dispara agentes de **Claude Code en la nube** para implementarlos.
- **studio-sync**: dispara el estudio de videos, baja los previews que genera y los sube a Google Drive.

Hacia afuera, lo único expuesto es el endpoint del webhook de Notion. El resto se usa por VPN.

## Notion como tablero, ChatGPT como interfaz de voz

Notion es la fuente de verdad: cada ticket tiene título, objetivo, criterios de aceptación, restricciones,
tipo, prioridad y repo. El sistema se entera por **webhook** apenas cambia un estado (con un poll de
respaldo cada 10 minutos por si se pierde un evento) y reserva cada ticket con un ID de run para no tomarlo
dos veces.

Pero escribir tickets buenos a mano cansa. Así que armé una **skill** para que una IA lo haga conmigo.

![Del audio al ticket: modo voz en ChatGPT, Proyecto con la skill del backlog, app de Notion, harness-os y aviso en Discord](/blog/harness-os/voz-notion-chatgpt.svg)

### Cómo está armada la integración

1. En ChatGPT conecté la **app de Notion** con el workspace de FACHA.
2. Creé un **Proyecto** ("Backlog FACHA") y le pegué como instrucciones la skill del backlog: los estados,
   los campos, qué es un buen ticket y qué no puede tocar nunca.
3. Subí como archivos del Proyecto ejemplos de conversaciones y el documento de producto.

Con eso, desde el celular, en **modo voz**, puedo decir cosas como:

- *"¿Qué tickets hay en Ready?"* → lee la base y me los lista.
- *"Quiero que los usuarios puedan exportar sus datos a CSV."* → me propone un ticket completo, con
  criterios verificables, y espera que le confirme antes de crearlo.
- *"Esto es muy grande, partilo."* → lo divide en tickets chicos con sus dependencias ("Va después de
  FACHA-12"), que el sistema respeta solo.
- *"¿Por qué está bloqueado FACHA-40?"* → me lee el motivo y me propone cómo destrabarlo.

### Las reglas que hacen que funcione

La skill no es solo "creá tickets". Tiene reglas que hacen que lo que llega al harness sea implementable:

- **Un ticket = un cambio**, chico, que se revisa en minutos. Si para explicarlo hacen falta más de cinco
  criterios, son varios tickets.
- **Criterios de aceptación verificables por un test** ("Cuando no hay oportunidades, el sistema debe
  mostrar el estado vacío con el botón Conectar Tiendanube"). Nada de "que funcione bien".
- **Fuera de alcance explícito**, para que el agente sepa dónde parar.
- **Marcas en el título** para lo que el sistema no debe tomar solo: `[MANUAL]` (lo hago yo con mis
  cuentas), `[DECISIÓN]` (espera una decisión de producto) y `[LATER]`.
- **Campos del sistema que la IA nunca escribe**: el ID del run, los intentos, la branch y el PR.
- Si falta información, **pregunta antes de inventar**.

El resultado: una charla de unos minutos alcanza para dejar varios tickets listos, y el sistema empieza a
implementarlos solo.

## Lo que aprendí

- **La calidad del ticket define la calidad del PR.** Por eso la skill insiste tanto en tickets chicos y
  con criterios que se pueden testear: un agente no puede adivinar dónde parar.
- **El quality gate tiene que ser el mismo que el CI.** Si el agente pasa un chequeo y el CI corre otro,
  vas a descubrir los problemas tarde. Un solo comando (`check`), sin secretos reales, para los dos.
- **Menos avisos, mejores avisos.** Al principio mandaba a Discord cada spec, cada bloqueo y cada PR. Era
  ruido. Ahora Discord avisa solo "PR para revisar"; el resto queda en Notion.
- **Los límites se notan rápido.** Con unas 40 corridas de CI por día, los 2.000 minutos de GitHub Actions
  no alcanzaron. Mover el CI a la VPS, bien aislado, lo resolvió.
- **No hay auto-merge.** El sistema hace casi todo, pero el merge a `main` lo sigue haciendo una persona.

## Preguntas frecuentes

**¿Qué modelos usa?**
Por rol: el planner y el reviewer usan Claude Code; el implementer, Codex. Cada uno tiene un respaldo por
OpenCode si se agota la cuota. El reviewer siempre es de otra familia que el implementer.

**¿El agente puede romper algo en producción?**
No tiene cómo: corre en un container sin credenciales de GitHub, de Notion ni de producción, y todo cambio
llega como PR que revisa una persona.

**¿Sirve para otros repos?**
Sí. Cualquier repo que tenga un `AGENTS.md` con sus reglas y un comando `check` que corra lint, tipos, tests y
build se suma con una entrada de configuración.

**¿Hace falta ChatGPT Plus para la parte de voz?**
Para usar Proyectos con la app de Notion, sí. La skill también funciona en otras IAs que soporten skills o
instrucciones de proyecto.
