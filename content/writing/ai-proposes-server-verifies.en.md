---
title: "AI proposes, the server verifies"
summary: "How FACHA uses an LLM to recommend marketing actions without letting it make things up: every proposal has to cite evidence the server checks."
date: 2026-10-22
draft: true
---

When I started building [FACHA](https://facha.app), the easy part was getting a language model to say sensible things about a fashion brand. The hard part was getting it to say them **about that brand**, with its products, sales and stock, and not about a generic brand the model imagines.

Ask an LLM "what should I promote this week?" and it always answers. The problem is that it answers with the same confidence whether it has data or not. For someone running a small brand on their own, a made-up recommendation isn't a detail: it's a week of content aimed at the wrong product.

## The rule

The decision that shaped everything was simple: **AI proposes, the server verifies.**

FACHA builds a snapshot of the brand: confirmed context, catalog and sales signals, memory of what was already done, and active opportunities. From that, the model proposes up to three marketing actions. But every action has to **cite the evidence** behind it: which product, which signal, which data point.

Then plain code checks those citations against the database. If an action cites a product that doesn't exist, a sale that didn't happen or a signal that isn't in the snapshot, it's dropped. Not fixed, not rephrased: dropped.

## What doesn't count as evidence

There's a detail I missed at first. During onboarding, FACHA reads the brand's website and an LLM drafts its context: tone, customer, visual identity. The person reviews it and **only what they confirm is saved**.

But while a section of the context is inferred and unconfirmed, it doesn't count as evidence. Otherwise the model could justify a recommendation with something another model assumed. Two chained inferences look like a fact, and they aren't.

## Simple signals before opaque models

For opportunities (which product deserves attention today) I made the opposite call from what the hype suggests: **simple, traceable signals with deterministic ordering.** The first one is almost obvious: a new product that has no generated content yet.

Could it be smarter? Sure. But without data on which recommendations worked, a "smart" ranking is a ranking I can't explain or debug. I'd rather have something boring I can defend, and improve it once there's real feedback.

## The same idea, further down the flow

The pattern repeats across the creative pipeline:

- Ad concepts proposed by the model go through a diversity matrix. Duplicates are redone once.
- Each concept is compiled into an image prompt with a contract of required blocks. If one is missing, it fails **before** spending a generation.
- Each generated image is checked by a vision model against the original garment photo. If it fails, it's regenerated once with the reason. If it fails again, it's delivered flagged for review, never as if it were fine.

## What I take away

Models are great at what requires judgment: reading a website, proposing a concept, writing copy. They're bad as a source of truth. The architecture that works for me gives them the job of proposing and leaves code the job of deciding what's true.

It's not an original idea. But it's easy to forget when the model answers so well.
