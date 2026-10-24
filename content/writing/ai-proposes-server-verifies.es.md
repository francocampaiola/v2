---
title: "La IA propone, el servidor verifica"
summary: "Cómo FACHA usa un LLM para recomendar acciones de marketing sin dejar que invente: cada propuesta tiene que citar evidencia que el servidor comprueba."
date: 2026-10-22
draft: true
---

Cuando empecé a construir [FACHA](https://facha.app), la parte fácil era que un modelo de lenguaje dijera cosas sensatas sobre una marca de ropa. La difícil era que las dijera **sobre esa marca**, con sus productos, sus ventas y su stock, y no sobre una marca genérica que el modelo se imagina.

Un LLM al que le pedís "¿qué debería promocionar esta semana?" siempre contesta. El problema es que contesta con la misma seguridad cuando tiene datos que cuando no. Para una persona que lleva sola una marca chica, una recomendación inventada no es un detalle: es una semana de contenido apuntada al producto equivocado.

## La regla

La decisión que ordenó todo fue simple: **la IA propone, el servidor verifica.**

FACHA arma un snapshot de la marca: el contexto confirmado, las señales del catálogo y de ventas, la memoria de lo que ya se hizo y las oportunidades activas. Con eso, el modelo propone hasta tres acciones de marketing. Pero cada acción tiene que **citar la evidencia** que la justifica: qué producto, qué señal, qué dato.

Después, código común y corriente revisa esas citas contra la base de datos. Si una acción cita un producto que no existe, una venta que no ocurrió o una señal que no está en el snapshot, se descarta. No se corrige, no se reformula: se descarta.

## Lo que no cuenta como evidencia

Hay un detalle que me costó ver al principio. En el onboarding, FACHA lee la web de la marca y un LLM propone un borrador del contexto: tono, cliente, identidad visual. La persona lo revisa y **solo se guarda lo que confirma**.

Pero mientras una sección del contexto está inferida y sin confirmar, no cuenta como evidencia. Si no, el modelo podría justificar una recomendación con algo que otro modelo supuso. Dos inferencias encadenadas parecen un dato y no lo son.

## Señales simples antes que modelos opacos

Para las oportunidades (qué producto merece atención hoy) tomé la decisión opuesta a lo que pide el hype: **señales simples, trazables y con orden determinístico.** La primera es casi obvia: un producto nuevo que todavía no tiene contenido generado.

¿Se puede hacer algo más inteligente? Seguro. Pero sin datos de qué recomendaciones funcionaron, un ranking "inteligente" es un ranking que no puedo explicar ni depurar. Prefiero algo aburrido que pueda defender, y mejorarlo cuando haya feedback real.

## La misma idea, más adelante en el flujo

El patrón se repite en todo el pipeline creativo:

- Los conceptos de anuncio que propone el modelo pasan por una matriz de diversidad. Los repetidos se rehacen una vez.
- Cada concepto se compila en un prompt de imagen con un contrato de bloques obligatorios. Si falta uno, falla **antes** de gastar una generación.
- Cada imagen generada la revisa un modelo de visión contra la foto original de la prenda. Si no pasa, se regenera una vez con el motivo. Si vuelve a fallar, se entrega marcada para revisar, nunca como si estuviera bien.

## Lo que me llevo

Los modelos son buenísimos para lo que requiere criterio: leer una web, proponer un concepto, escribir un copy. Son malos como fuente de verdad. La arquitectura que me funciona es darles el trabajo de proponer y dejarle al código el trabajo de decidir qué es cierto.

No es una idea original. Pero es fácil olvidarla cuando el modelo contesta tan bien.
