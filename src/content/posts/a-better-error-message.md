---
title: What makes a useful error message?
description: Treating failure as part of the interface, rather than the end of the conversation.
date: 2026-08-24
category: Craft
sample: true
---

An error message arrives at a moment when something has already gone wrong. The user may be confused, interrupted, or worried about losing work. The message has a job: help them decide what to do next.

## Answer the next question

“Something went wrong” is sometimes accurate, but it rarely helps. A useful message explains what failed, what happened to the user's work, and what action is available.

For example, a note-taking application might say:

> We could not save this note to your device. Your text is still open. Copy it somewhere safe, then try saving again.

This makes a narrower claim than “Your work is safe.” It tells the user what is known and offers a concrete next step.

## Separate explanation from diagnostics

The person using the application needs a clear description. The developer investigating the problem needs context: an operation, a correlation identifier, and a useful error chain.

Those are different audiences. A raw exception dump usually serves neither very well.

- Keep the visible message concise and specific.
- Preserve enough diagnostic context to investigate.
- Avoid including secrets or private content in logs.
- Offer retry only when retrying can help.

## Test the failure path

A polished success state can hide a brittle application. Try disconnecting the network, denying storage access, or returning an unexpected response from a dependency.

The question is not only whether an error appears. It is whether the interface leaves the person with a truthful understanding of what just happened.
