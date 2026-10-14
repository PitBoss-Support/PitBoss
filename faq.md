---
title: FAQ
description: PitBoss FAQ — install, where it runs, troubleshooting (reload then Reset), HeatAI tags, and privacy.
permalink: /faq/
---

# FAQ

## What is PitBoss?

An unofficial Chrome extension for *Heat: Pedal to the Metal* on Board Game Arena. It is a fan tool, not affiliated with or endorsed by Days of Wonder, Board Game Arena, or the Heat designers.

## Is it free?

Yes — **free during the beta.** PitBoss is currently v0.9.0 beta.

## Which browsers are supported?

Chrome and Brave on the desktop (Manifest V3).

## Is it on the Chrome Web Store?

Not yet. Install it unpacked for now. A store listing is planned later, as a private beta first. See [Install]({{ '/install/' | relative_url }}).

## Where does the panel appear?

Only on a Heat game table on `boardgamearena.com`. It does not appear in the lobby. PitBoss does not run on other sites.

## What happens on first install?

PitBoss opens its Help page at the Welcome section.

## How do I move or resize the panel?

Drag the header to move it. Resize from the bottom-right corner. Position and size are remembered. Minimize, or double-click an empty part of the header, to fold it to the header. Click a section title to fold that section; folded sections stay folded after a reload. The panel stays clear of BGA's action bar.

## How do I show, hide, or reorder sections?

Under **HUD Sections** in Options. Defaults are listed on [How to use]({{ '/how-to-use/' | relative_url }}#sections).

## Why are Hand and Corner Advisor missing?

They are off by default. Turn them on under HUD Sections.

## What do the HeatAI tags mean? {#what-do-the-heatai-tags-mean}

HeatAI suggestions can show the tags `SHORT`, `PAY-HEAT`, `SPIN`, and `UNDER`. Details coming soon.

Ask HeatAI gives a fresh suggestion. `No valid moves found` means nothing is playable. The section is empty during the garage draft.

## What do CRUISE, SETUP, and APPROACH mean? {#what-do-cruise-setup-and-approach-mean}

They are mode badges on Corner Advisor, next to the upcoming corner. Details coming soon.

## The panel looks wrong, or card counts do not match {#the-panel-looks-wrong-or-card-counts-do-not-match}

Card tracking can drift in the beta, especially if you played from another device or an update was missed.

1. **Reload** first.
2. If it stays wrong, click **Reset**. Reset clears saved tracking for that table and reloads.

## What does “BGA format not recognized” mean?

Advice pauses until the format is understood. Card tracking may be incomplete. See [known limitations]({{ '/known-limitations/' | relative_url }}).

## Does PitBoss support Narrow Streets?

Not yet.

## Why does Settings open a separate page?

There is no in-panel settings screen. Settings opens Options. Changes apply immediately.

## Auto-show HUD on Game Start does nothing

That setting is saved but not used yet.

## What is Lookahead search?

An optional, slower, experimental in-browser search that runs after HeatAI's pick and shows its own pick when they disagree. It is off by default. It runs locally.

## Does HeatAI send my game to a server?

No. The game is analysed only in your browser using data BGA already sends for your table. HeatAI and lookahead run locally. See the [privacy policy]({{ '/privacy/' | relative_url }}).

## Are crash reports sent automatically?

No. Send crash reports stays off until you say yes. PitBoss asks once. Nothing is sent unless you opt in. You can change this in Options.

## How do I report a bug?

Email [pitbosssupport@gmail.com](mailto:pitbosssupport@gmail.com) or open a GitHub Issue. Include the PitBoss version, BGA table number, and what happened. Optionally paste a **Copy Diagnostic Dump** (from Options → Help). Shift+click the PitBoss title to show diagnostics for bug reports. See [Support]({{ '/support/' | relative_url }}).

## Where do card pictures come from?

When BGA's card images are loaded, hovering a card icon shows a larger picture. PitBoss uses BGA's images and does not ship them.
