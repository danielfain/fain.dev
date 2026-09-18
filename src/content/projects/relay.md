---
title: Relay
summary: 'A small webhook service built around a big idea: delivery should be reliable, observable, and easy to understand.'
technologies: [Go, PostgreSQL, Docker]
featuredOrder: 2
year: '2026'
kind: Developer tool
artwork: relay
sample: true
---

## Between “sent” and “received”

Sending an HTTP request is simple. Knowing what happened when the destination times out is less so. Relay is an illustrative design for a webhook delivery service that makes that uncertainty visible.

The concept separates accepting an event from delivering it. A successful acceptance response means the event is durably recorded, not that its destination has already processed it.

## A small, explicit lifecycle

Each delivery would move through a handful of states: pending, in progress, delivered, or exhausted. Attempts would record a timestamp, response status, and a bounded error summary.

Retries would use exponential backoff with jitter and a maximum attempt count. The destination would receive a stable event identifier on every attempt so it could implement idempotent handling.

> Reliability includes explaining failure, not just trying again.

## Boundaries that matter

- Persist accepted events before acknowledging them.
- Apply request timeouts and limit response-body size.
- Authenticate event producers and validate destination URLs against network access policy.
- Keep delivery history separate from sensitive payload data.

PostgreSQL could serve as both durable event storage and a modest work queue. Multiple workers would need a safe claiming strategy and a recovery policy for interrupted attempts.

## Showing the work

A real version of this case study would include retry behavior under failure, examples of operational diagnostics, and measured delivery characteristics. This sample deliberately makes no claims about performance or production use.
