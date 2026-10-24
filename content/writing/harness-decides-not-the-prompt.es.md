---
title: "El harness decide, no el prompt"
summary: "Lo que aprendí diseñando harness-os, un sistema que lleva un ticket de Notion hasta un Pull Request con agentes que corren en containers sin credenciales."
date: 2026-10-15
draft: true
---

Quería que los tickets de FACHA se convirtieran en Pull Requests sin que yo estuviera en el medio, salvo en dos momentos: aprobar qué se va a construir y aprobar lo que se construyó. El resultado es **harness-os**, un sistema que corre en una VPS y lleva un ticket de Notion hasta un PR listo para revisión.

La tentación con estos sistemas es armar "un agente orquestador" que decida todo. Fui en la dirección contraria.

## El flujo

```
Notion (Ready) → spec → aprobación humana → implementación → quality gate → review → PR
```

Hay tres roles de agente:

- **Planner:** lee el ticket y el repo, y escribe una spec con criterios de aceptación.
- **Implementer:** construye la spec aprobada.
- **Reviewer:** revisa el diff contra la spec, criterio por criterio.

Si el reviewer encuentra problemas bloqueantes o el quality gate falla, hay hasta tres ciclos de corrección. Después, PR. El merge lo hago siempre yo.

## El harness decide, el prompt no

No hay agente orquestador. **La orquestación es código.** Todo lo que se puede resolver de forma determinística (elegir la tarea, validar el ticket, correr lint, tipos, tests y build, commitear, abrir el PR, actualizar Notion) es TypeScript con tests. Los modelos solo hacen lo que requiere criterio sobre código: especificar, implementar y revisar.

Esto tiene una consecuencia práctica enorme: cuando algo falla, sé dónde mirar. Un prompt que "a veces no commitea" es un bug imposible de reproducir. Una función que commitea es un bug con stack trace.

## Seguridad por lo que el sandbox no tiene

En lugar de mantener una lista de comandos prohibidos, cada agente corre en un **container efímero** sin root, sin capabilities, con límites de CPU y memoria, y con una sola credencial: la del proveedor del modelo. No tiene token de GitHub, ni de Notion, ni variables de producción, ni acceso al host.

El único que pushea es el orchestrator, y solo puede pushear ramas `agent/*`. Hay un test que lo garantiza.

## Un run nunca espera a una persona

Si un agente necesita una decisión mía, el run no se queda colgado esperando: termina y deja el ticket en `Blocked` con un motivo accionable. Y si el proceso se cae a la mitad, al arrancar reconcilia: todo run que quedó a medias pasa a fallido y su workspace se borra. **Nunca se retoma a medias** y nada llega a GitHub hasta el final.

## Un revisor de otra familia

El implementer y el reviewer usan modelos de **familias distintas**. Si el mismo tipo de modelo escribe y revisa, tiende a encontrar razonable lo que él mismo haría. Cuando se agota la cuota del reviewer, el sistema espera al reset en lugar de caer a un modelo de la misma familia que el implementer.

## Lo que me llevo

Los agentes no reemplazan al diseño de sistemas: lo vuelven más importante. Cuanto más trabajo le das a un modelo, más necesitás que todo lo que lo rodea sea aburrido, determinístico y fácil de auditar.
