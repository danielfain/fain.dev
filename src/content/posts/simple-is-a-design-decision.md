---
title: Simple is a design decision
description: A few thoughts on choosing the smallest solution that still respects the problem.
date: 2026-09-10
category: Engineering
favoriteOrder: 1
sample: true
---

Simple software rarely appears by accident. It usually comes from someone being precise about what the software needs to do, and patient about everything it does not need to do yet.

That does not mean writing the fewest lines. A short function can hide a remarkable number of assumptions. A longer one can make each decision clear.

## Start with the actual constraint

“We need a queue” is a proposed solution. “This request must return before the work finishes” is a constraint. The distinction matters because several designs might satisfy the latter.

Before choosing a tool, write down the behavior that must hold. How much work arrives? What happens if the process stops? Can the user retry? Does ordering matter?

These questions are not overhead. They are how the design gets smaller.

## Make uncertainty visible

When the requirements are incomplete, it is tempting to build something flexible enough for every possible future. That flexibility has a cost today, even if none of those futures arrives.

An alternative is to name the uncertainty and place a small boundary around it.

```ts
interface NoteStore {
  read(id: string): Promise<string | null>;
  write(id: string, content: string): Promise<void>;
}
```

The interface does not solve every storage problem. It gives the rest of the application a stable vocabulary for the two operations it currently needs.

## Leave a useful explanation

The next developer needs to understand why the choice was made. A short note about a constraint is often more valuable than a long description of the code.

> Prefer a small decision with a clear reason over a large abstraction with an imagined future.

Simple is not a permanent property. As the problem changes, the right solution may grow. The aim is to make that growth deliberate.
