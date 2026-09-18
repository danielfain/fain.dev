---
title: Tiny Index
summary: An experiment in finding more with less. Lightweight search for a small collection of personal documents.
technologies: [TypeScript, Node.js]
featuredOrder: 3
year: '2025'
kind: Small experiment
artwork: search
sample: true
---

## Search at a human scale

Not every search problem needs a distributed system. Tiny Index is an example exploration of the other end of the spectrum: a few hundred documents, a compact index, and results you can explain.

The imagined corpus is a directory of Markdown notes. A build step reads the files, extracts useful text, and produces a static index.

## Starting with an inverted index

An inverted index maps each term to the documents that contain it. The first iteration could use consistent token normalization and give title matches more weight than body matches.

```ts
type Posting = {
  documentId: string;
  titleMatches: number;
  bodyMatches: number;
};

type InvertedIndex = Map<string, Posting[]>;
```

This is only a starting point. Real search also needs decisions about punctuation, partial words, language, and what to do with an empty query.

## Useful constraints

The project would prioritize a small payload, keyboard-friendly navigation, and a clear “no results” state. It would avoid sending the document collection to a third-party service.

Keeping the scope small makes it easier to inspect the ranking logic and understand why a result appeared.

## Where to take the experiment

A finished writeup could compare several queries against an expected result set, measure index size, and document the cases the first version handles poorly. Replace this sample with your own findings and implementation links.
