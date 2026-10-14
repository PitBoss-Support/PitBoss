---
title: How to use
description: How the PitBoss panel, sections, board extras, warning banners, and toolbar popup work.
permalink: /how-to-use/
---

# How to use

PitBoss runs only on `boardgamearena.com`. The panel appears on a Heat game table, not in the lobby.

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

After the draft: your modules as chips. A played module is marked `Played — in discard`.

### Engine (on)

Gear and Heat in the engine, shown as a gauge.

### Boost (on)

Chance of each speed 1–4 if you boost, the average (EV), and spin-out warnings on your turn.

### Play Speed (on)

For your selected cards: the chance of each total speed, EV with Stress cards, speed choices, and spin-out risk.

### HeatAI (on)

The move suggested by the built-in HeatAI model, with the stage, `HeatAI thinking…`, and tags `SHORT`, `PAY-HEAT`, `SPIN`, and `UNDER`.

- **Ask HeatAI** gives a fresh suggestion.
- **No valid moves found** appears when nothing is playable.
- Empty during the garage draft.

Tag meanings: details coming soon. See the [FAQ]({{ '/faq/' | relative_url }}#what-do-the-heatai-tags-mean).

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

The next corner's distance (`+N`), limit, `~N` turns, and a mode badge `CRUISE` / `SETUP` / `APPROACH`. Options are compared on Heat or Cross/Spin/Heat.

Badge meanings: details coming soon. See the [FAQ]({{ '/faq/' | relative_url }}#what-do-cruise-setup-and-approach-mean).

## On the board {#on-the-board}

**Landing lines** are strips showing where opponents may land. The **Lines** switch cycles Off / All / Ahead. The **Humans** switch includes or skips human players.

**Board landing spot marks** are car-coloured lines for the opponent you hover.

**Card pictures:** when BGA's card images are loaded, hovering a card icon shows a larger picture. PitBoss uses BGA's images and does not ship them.

## Warning banners {#warning-banners}

**BGA format not recognized** means advice pauses until the format is understood, and card tracking may be incomplete.

Lost sync or wrong card counts are usually caused by playing from another device or a missed update. **Reload first.** If it stays wrong, click **Reset**, which clears saved tracking for that table and reloads.

## Toolbar popup {#toolbar-popup}

The toolbar popup shows table ID, gear, turn, and deck size — or `No active game`. It also has links to Settings, BGA, and Report a bug, and the crash-report question.
