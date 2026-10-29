---
title: How AI works
description: PitBoss move suggestions and garage draft ranks run on your device. Game state is not uploaded for analysis.
permalink: /how-ai-works/
---

# How AI works

Move suggestions and garage draft ranks run **on your device**, in the browser, from data Board Game Arena already sends for your table.

No game state is uploaded to a PitBoss or HeatAI server for analysis.

## What runs locally

- **AI** suggestions on your turn. The section can show tags such as SPIN, PAY-HEAT, UNDER, and SHORT. **Ask AI** requests a fresh suggestion. See [what the tags mean]({{ '/faq/' | relative_url }}#what-do-the-ai-tags-mean).
- **Garage draft** ranks for the modules on offer. Published base-track scores are on [Garage by track]({{ '/garage-by-track/' | relative_url }}). Those sims may be newer than the file bundled in your extension until the next PitBoss update, and that page ranks by Overall Score rather than by the panel’s average-finish order.
- **Lookahead search** is a slower search that also runs in the browser, after the AI’s first pick. It shows its own line when the two disagree. In the current friends-beta build it is on until you turn it off under **Lookahead search (slower)** in Options.

## Crash reports

Crash reports are sent only if you opt in. PitBoss asks once. Nothing is sent unless you say yes. If you opt in, reports are kept for 90 days.

The full account of what stays on your computer, and what a crash report contains, is in the [privacy policy]({{ '/privacy/' | relative_url }}).
