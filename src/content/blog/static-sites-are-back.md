---
title: "Why Static Sites Are Having a Moment Again"
description: "The pendulum that swung from static HTML to heavy client-side apps and back to server rendering has swung again — and this time it's landed somewhere better."
pubDate: 2026-09-12
category: technology
tags: ["web dev", "astro"]
---

Web architecture has a habit of rediscovering old ideas and calling them new. Static sites were the
default in the 90s, got replaced by server-rendered apps in the 2000s, got replaced again by
client-heavy single-page apps in the 2010s — and now a lot of that complexity is being walked back,
for content-heavy sites in particular.

## The actual problem client-side frameworks solved

React, Vue, and friends solved a real problem: building *interactive* applications — dashboards,
editors, anything with heavy client state — got dramatically easier. The mistake was applying that
model to sites that are mostly just... content. A blog post doesn't need a virtual DOM. It needs to
be fast, indexable, and cheap to host, and shipping a full JS framework to render text is solving a
problem the page never had.

## What "islands" actually changed

Tools like Astro didn't invent static site generation — that's decades old. What changed is the
"islands" model: ship plain HTML by default, and only hydrate JavaScript for the specific
components that actually need interactivity, opted into individually. You get the interactivity of
a modern framework exactly where you asked for it, and the performance of a static site everywhere
else, instead of paying the framework tax on every page regardless of whether anything on it moves.

For something like a personal blog — five categories, markdown posts, a dark mode toggle — that
tradeoff isn't subtle. Almost the entire site is static. A handful of small interactive widgets are
the exception, not the rule, and the architecture should reflect that ratio rather than invert it.

## The general lesson

Match the tool to the actual shape of the content, not to what's popular for building the hardest
5% of sites. Most sites are not that 5%.
