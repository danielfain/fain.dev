---
title: Fieldnotes
summary: A quiet home for scattered thoughts. A local-first notebook that keeps the writing experience simple.
technologies: [TypeScript, React, IndexedDB]
featuredOrder: 1
year: '2026'
kind: Web application
artwork: notes
sample: true
---

## A little room to think

Notes tend to end up everywhere: text files, browser tabs, messages to yourself. Fieldnotes is an example concept for bringing those fragments into one calm workspace, with as little ceremony as possible.

The goal is straightforward: open the notebook, capture a thought, and get back to what you were doing.

## Designing around the writing

The proposed interface has three pieces: a short list of notebooks, a list of notes, and a generous writing surface. Formatting stays close to the text. Navigation stays out of its way.

- Store notes locally so the core experience works offline.
- Save as you type, with an explicit indication of save state.
- Support plain-text export so notes remain useful outside the application.

## The engineering questions

A local-first design shifts responsibility to the client. Storage failures need a visible recovery path. Schema changes need migrations. “Saved” must mean the write actually succeeded, rather than that a timer ran.

IndexedDB would hold the notes and their metadata, while a small repository interface would keep persistence separate from the editor. That boundary would also make testing failures possible without driving the full user interface.

## What a finished case study would show

Replace this example with the real constraints, decisions, and results of your project. Include a screenshot of the working product, explain a tradeoff you made, and link to a repository or live demo when available.

The most useful story is not a list of technologies. It is why the software ended up the way it did.
