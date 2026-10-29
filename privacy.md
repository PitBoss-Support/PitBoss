---
title: Privacy policy
description: PitBoss analyses your Heat table in the browser. Crash reports are sent only if you opt in.
permalink: /privacy/
---

# Privacy policy

**Effective date: October 14, 2026**

PitBoss is an unofficial Chrome extension for *Heat: Pedal to the Metal* on Board Game Arena. This page describes what it stores on your computer and what it may send over the network.

## Analysis stays in your browser

The game is analysed only in your browser, using data Board Game Arena already sends for your table. The AI and lookahead run locally. No game state is uploaded to a PitBoss or HeatAI server for analysis. See [How AI works]({{ '/how-ai-works/' | relative_url }}).

## Stored locally

PitBoss stores the following in extension storage:

- Settings
- Card tracking per table
- Garage modules seen per table
- Your crash-report answer
- Debug logs, only if Debug Logs is on (last 15 races)

**Purge Logs** (in Options → Storage & Data) or uninstalling the extension removes this stored data.

## Sent over the network

The only thing PitBoss sends over the network is **crash reports**, and only if you opt in.

PitBoss asks once. Nothing is sent unless you say yes. You can change this in Options (**Send crash reports** is off until you say yes).

If you opt in, crash reports are kept for 90 days.

If you opt in, a crash or card-count problem sends **one note** to the developer's Google Apps Script web app. That note contains:

- Type (`crash` or `warning`)
- Error name (up to 80 characters)
- Error message (up to 500 characters)
- PitBoss version
- Build code
- BGA table number
- Up to 20 recent PitBoss log lines (each up to 180 characters, with player names removed and game data replaced by a placeholder)

In Options, **Report webhook URL** accepts only Google Apps Script addresses. Clearing that URL stops uploads.

## What PitBoss does not do

- No accounts
- No ads
- No selling of data
- No analytics beyond the optional crash reports described above

## Contact

Privacy questions: [pitbosssupport@gmail.com](mailto:pitbosssupport@gmail.com)
