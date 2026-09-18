---
title: Keep a little developer notebook
description: Small notes that make tomorrow’s debugging session a little easier.
date: 2026-08-03
category: Working notes
sample: true
---

A developer notebook does not need to be a knowledge management system. It can be a text file with a date at the top and a few sentences about what you are trying to understand.

The useful part is making your current thinking available to your future self.

## Record the question first

Before collecting commands and stack traces, write the question you are investigating. “Why does the second request time out?” is a better heading than “Debugging.”

Then record observations separately from guesses. That small distinction can prevent an early assumption from quietly becoming a fact.

```text
Question: Why does the second request time out?

Observed: The first request succeeds after a restart.
Observed: The second request waits until the client deadline.
Hypothesis: A resource is not released after the first request.
Next check: Inspect connection acquisition and release paths.
```

## Keep the dead ends

A failed experiment is still useful if you remember what it ruled out. A sentence is enough: what you changed, what happened, and what you learned.

This is especially helpful when you return to a problem after a meeting or a weekend. You can resume the investigation instead of repeating it.

## End with a next step

When you stop working, leave yourself a specific action. “Continue tomorrow” is an intention. “Add logging around the connection release path” is a place to begin.

The notebook does not have to be beautiful. It just has to make the next session easier to start.
