---
title: FAQ
description: PitBoss FAQ — Unlisted store install, switching from an unpacked copy, AI tags, and privacy.
permalink: /faq/
---

# FAQ

## What is PitBoss?

An unofficial extension for *Heat: Pedal to the Metal* on Board Game Arena. It is a fan tool, not affiliated with or endorsed by Days of Wonder, Board Game Arena, or the Heat designers.

## Is it free?

Yes — **free during the beta.** PitBoss is currently v0.9.0 beta.

## Which browsers are supported?

**Chrome** and **Brave** on the desktop (Chromium, Manifest V3). Firefox is not supported yet.

## Is it on the Chrome Web Store?

Yes, as an **Unlisted** friends and family beta. It does not appear in store search. You need the direct link on the [Install]({{ '/install/' | relative_url }}) page. Prefer that store build. Loading the extension unpacked is only a fallback for contributors, or if the store link is unavailable.

## Prefer the Unlisted store build {#prefer-the-unlisted-store-build}

Install from the [Unlisted listing](https://chromewebstore.google.com/detail/pitboss/dpklofklabanhonajhhiefdjdeoiaeco) for the friends beta. Share that link with people you want in the beta; searching the store will not find it.

## I previously loaded PitBoss unpacked {#switching-from-an-unpacked-install}

Remove the unpacked extension before you install from the store. Two copies conflict.

1. Open the Extensions page (`chrome://extensions` in Chrome, or `brave://extensions` in Brave).
2. Find the unpacked PitBoss and choose **Remove**.
3. Install from the [Unlisted listing](https://chromewebstore.google.com/detail/pitboss/dpklofklabanhonajhhiefdjdeoiaeco).

Then reload Board Game Arena and open a Heat table. If card counts look wrong, [reload, then Reset](#the-panel-looks-wrong-or-card-counts-do-not-match).

## Will my settings carry over?

Updates that keep the **same Chrome extension ID** keep storage and settings. A different ID does not — that includes a sideload or an unpacked copy with another ID. Removing an extension deletes the data stored for that ID.

## I see two PitBoss entries {#two-pitboss-copies}

That is a conflict. Remove the extra one, usually the unpacked copy, and keep the store install. Then reload Board Game Arena and open a Heat table. If card counts look wrong, [reload, then Reset](#the-panel-looks-wrong-or-card-counts-do-not-match).

## Where does the panel appear?

Only on a Heat game table on `boardgamearena.com`. It does not appear in the lobby. PitBoss does not run on other sites.

## What happens on first install?

PitBoss opens its Help page at the Welcome section.

## How do I move or resize the panel?

Drag the header to move it. Resize from the bottom-right corner. Position and size are remembered. Minimize, or double-click an empty part of the header, to fold it to the header. Click a section title to fold that section; folded sections stay folded after a reload. The panel stays clear of BGA's action bar.

## How do I show, hide, or reorder sections?

Under **HUD Sections** in Options. Defaults are listed on [How to use]({{ '/how-to-use/' | relative_url }}#sections).

## Why are Hand and Corner Advisor missing?

They are off by default. Turn them on under HUD Sections. Corner Advisor is optional and is not part of the default panel.

## What do the AI tags mean? {#what-do-the-ai-tags-mean}

<a id="what-do-the-heatai-tags-mean"></a>

Chips on the top AI suggestion are judged against the next corner ahead:

- **SPIN** means the move would spin you out, because the Heat owed for going over the corner's limit is more than the Heat you have left.
- **PAY-HEAT** means you get past the corner without spinning but pay Heat for going over the limit.
- **UNDER** means you get past the corner within the limit and pay no Heat.
- **SHORT** means the move doesn't get past the corner. Landing exactly on the corner space still counts as short.

Ask AI gives a fresh suggestion. `No valid moves found` means nothing is playable. The section is empty during the garage draft.

## Corner Advisor (optional) {#what-do-cruise-setup-and-approach-mean}

Corner Advisor is off by default. Turn it on under HUD Sections if you want it. When it is on, badges reflect expected turns to the next corner without boosting: **CRUISE** is 2.5 or more turns away, **SETUP** is 1.5 to 2.5 turns away, and **APPROACH** is under 1.5 turns away (the columns switch to Cross / Spin / Heat, and spin-risk rows show).

## How are garage modules ranked? {#how-are-garage-modules-ranked}

Lower is better. 1 is best.

On the 10 base tracks, each track column is the module's rank out of 65 by average finishing position over 500 simulated games. AVG is the mean of those ranks. The suggestion is the best-ranked module on offer.

The same sims are published as scores on [Garage by track]({{ '/garage-by-track/' | relative_url }}). That page shows an Overall Score (the mean of the ten absolute track scores, higher is better) and a score column for each base track, so its order can differ from the panel. Scores are absolute: ceilings differ by track, so compare cards within a column (a USA 78 and a Nederland 27 are not the same scale). Because Overall Score averages those absolute scores, track ceilings flow into it. The formula is in the methodology on that page. The sims may also be newer than the copy in your installed extension until the next PitBoss update. A live pick still depends on what is on offer and what you have already picked.

On other tracks, the AI scores the modules instead (higher is better), shows up to 3, and shows no rank numbers. There is no static table for those tracks.

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

A slower in-browser search that runs after the AI's pick and shows its own pick when they disagree. It stays on your device. In the current friends-beta build it is on until you turn it off under **Lookahead search (slower)** in Options. See [How AI works]({{ '/how-ai-works/' | relative_url }}).

## Does the AI send my game to a server?

No. The game is analysed only in your browser using data BGA already sends for your table. The AI and lookahead run locally. Nothing is uploaded to a PitBoss or HeatAI server for analysis. See [How AI works]({{ '/how-ai-works/' | relative_url }}) and the [privacy policy]({{ '/privacy/' | relative_url }}).

## Are crash reports sent automatically?

No. Send crash reports stays off until you say yes. PitBoss asks once. Nothing is sent unless you opt in. You can change this in Options. If you opt in, crash reports are kept for 90 days.

## How do I report a bug?

Email [pitbosssupport@gmail.com](mailto:pitbosssupport@gmail.com) or open a GitHub Issue. Unlisted friends-beta testers can use that same address. Include the PitBoss version, BGA table number, and what happened. Optionally paste a **Copy Diagnostic Dump** (from Options → Help). Shift+click the PitBoss title to show diagnostics for bug reports. See [Support]({{ '/support/' | relative_url }}).

## Where do card pictures come from?

When BGA's card images are loaded, hovering a card icon shows a larger picture. PitBoss uses BGA's images and does not ship them.
