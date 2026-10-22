---
title: "The harness decides, not the prompt"
summary: "What I learned designing harness-os, a system that takes a Notion ticket to a pull request with agents running in containers that hold no credentials."
date: 2026-10-15
draft: true
---

I wanted FACHA's tickets to turn into pull requests without me in the middle, except at two points: approving what gets built and approving what was built. The result is **harness-os**, a system that runs on a VPS and takes a Notion ticket to a PR ready for review.

The temptation with these systems is to build "an orchestrator agent" that decides everything. I went the other way.

## The flow

```
Notion (Ready) → spec → human approval → implementation → quality gate → review → PR
```

There are three agent roles:

- **Planner:** reads the ticket and the repo, and writes a spec with acceptance criteria.
- **Implementer:** builds the approved spec.
- **Reviewer:** checks the diff against the spec, criterion by criterion.

If the reviewer finds blocking issues or the quality gate fails, there are up to three fix cycles. Then, a PR. I always do the merge myself.

## The harness decides, not the prompt

There's no orchestrator agent. **Orchestration is code.** Everything that can be solved deterministically (picking the task, validating the ticket, running lint, types, tests and build, committing, opening the PR, updating Notion) is TypeScript with tests. Models only do what requires judgment about code: specifying, implementing and reviewing.

That has a huge practical consequence: when something breaks, I know where to look. A prompt that "sometimes doesn't commit" is a bug you can't reproduce. A function that commits is a bug with a stack trace.

## Security from what the sandbox doesn't have

Instead of maintaining a list of forbidden commands, each agent runs in an **ephemeral container**: non-root, no capabilities, CPU and memory limits, and a single credential, the model provider's. No GitHub token, no Notion token, no production env, no host access.

The only thing that pushes is the orchestrator, and it can only push `agent/*` branches. There's a test that guarantees it.

## A run never waits on a person

If an agent needs a decision from me, the run doesn't hang waiting: it ends and leaves the ticket in `Blocked` with an actionable reason. And if the process dies halfway, on startup it reconciles: any half-finished run is marked failed and its workspace deleted. **Nothing resumes halfway**, and nothing reaches GitHub until the end.

## A reviewer from a different family

The implementer and the reviewer use models from **different families**. When the same kind of model writes and reviews, it tends to find reasonable what it would have done itself. When the reviewer's quota runs out, the system waits for the reset instead of falling back to a model from the implementer's family.

## What I take away

Agents don't replace systems design: they make it more important. The more work you hand to a model, the more you need everything around it to be boring, deterministic and easy to audit.
