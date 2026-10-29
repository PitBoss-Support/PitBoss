---
title: How to use
description: How the PitBoss panel, sections, board extras, warning banners, and toolbar popup work.
permalink: /how-to-use/
---

# How to use

PitBoss runs only on `boardgamearena.com`. The panel appears on a Heat game table, not in the lobby. It runs on Chrome and Brave on the desktop. Firefox is not supported yet.

<div class="toc">
<p>On this page</p>
<ul>
  <li><a href="#the-panel">The panel</a></li>
  <li><a href="#sections">Sections</a></li>
  <li><a href="#on-the-board">On the board</a></li>
  <li><a href="#warning-banners">Warning banners</a></li>
  <li><a href="#toolbar-popup">Toolbar popup</a></li>
</ul>
</div>

## The panel {#the-panel}

The header shows the title, version, a Live indicator, Settings, and Minimize.

- Drag the header to move the panel.
- Resize from the bottom-right corner.
- Position and size are remembered.
- Minimize (or double-click an empty part of the header) folds the panel to the header.
- Click a section title to fold that section. Folded sections stay folded after a reload.
- The panel stays clear of BGA's action bar.

Settings opens the Options page. There is no in-panel settings screen.

For bug reports, Shift+click the title to show diagnostics. You can also copy a diagnostic dump from Options. See [Support]({{ '/support/' | relative_url }}).

## Sections {#sections}

Default order is below. Each section notes whether it is on or off by default. Show, hide, and reorder all of them under **HUD Sections** in Options.

### Garage Module (on)

During the garage draft: draft status, your picks, and a MARKET table ranking each module on offer per track, with an AVG column for several tracks and the top suggestion highlighted.

Lower rank is better; 1 is best. On the 10 base tracks, each track column is the module's rank out of 65 by average finishing position over 500 simulated games, AVG is the mean of those ranks, and the suggestion is the best-ranked module on offer. On other tracks, the AI scores the modules instead (higher is better), shows up to 3, and shows no rank numbers. See the [FAQ]({{ '/faq/' | relative_url }}#how-are-garage-modules-ranked) and [Garage by track]({{ '/garage-by-track/' | relative_url }}). That page shows Overall Score and a column per track from the same sims, and can disagree with this average-finish order. Those scores are absolute, so compare cards within a column; track ceilings differ and flow into Overall Score. The sims may also be newer than the copy bundled in your extension.

After the draft: your modules as chips. A played module is marked `Played — in discard`.

### Engine (on)

Gear and Heat in the engine, shown as a gauge.

### Boost (on)

Chance of each speed 1–4 if you boost, the average (EV), and spin-out warnings on your turn.

### Play Speed (on)

For your selected cards: the chance of each total speed, EV with Stress cards, speed choices, and spin-out risk.

### AI (on)

The move suggested by the on-device AI, with the stage, `AI thinking…`, and tags `SHORT`, `PAY-HEAT`, `SPIN`, and `UNDER`.

- **Ask AI** gives a fresh suggestion.
- **No valid moves found** appears when nothing is playable.
- Empty during the garage draft.

Chips on the top suggestion are judged against the next corner ahead. **SPIN** means the move would spin you out, because the Heat owed for going over the corner's limit is more than the Heat you have left. **PAY-HEAT** means you get past the corner without spinning but pay Heat for going over the limit. **UNDER** means you get past the corner within the limit and pay no Heat. **SHORT** means the move doesn't get past the corner; landing exactly on the corner space still counts as short. See the [FAQ]({{ '/faq/' | relative_url }}#what-do-the-ai-tags-mean).

How the suggestion is produced is on [How AI works]({{ '/how-ai-works/' | relative_url }}).

### Draw Deck (on)

Cards left, the chance of drawing at least N copies on the next refill (allowing for reshuffles), a reshuffle countdown, and known top-of-deck cards first.

### Discard Pile (on)

Cards seen going to discard, average speed, and Heat and Stress counts.

### Opponents (on)

- Humans show heat (H), gear (G), hand and deck counts.
- Legends show an expected speed range.
- Landing estimates use public info only.
- Known garage modules appear as chips.

### Hand (off)

Your current hand.

### Corner Advisor (off)

Off by default. Turn it on under HUD Sections if you want the next corner's distance, limit, a rough turn count, and a mode badge (`CRUISE`, `SETUP`, or `APPROACH`). It is optional and not part of the default panel. A short description of the badges is in the [FAQ]({{ '/faq/' | relative_url }}#what-do-cruise-setup-and-approach-mean).

## On the board {#on-the-board}

**Landing lines** are strips showing where opponents may land. The **Lines** switch cycles Off / All / Ahead. The **Humans** switch includes or skips human players. The home screenshot shows those controls set to Lines All and Humans On; it is the table view, not a separate picture of the lines themselves.

**Board landing spot marks** are car-coloured lines for the opponent you hover.

**Card pictures:** when BGA's card images are loaded, hovering a card icon shows a larger picture. PitBoss uses BGA's images and does not ship them.

## Warning banners {#warning-banners}

**BGA format not recognized** means advice pauses until the format is understood, and card tracking may be incomplete.

Lost sync or wrong card counts are usually caused by playing from another device or a missed update. **Reload first.** If it stays wrong, click **Reset**, which clears saved tracking for that table and reloads.

## Toolbar popup {#toolbar-popup}

The toolbar popup shows table ID, gear, turn, and deck size — or `No active game`. It also has links to Settings, BGA, and Report a bug, and the crash-report question.
