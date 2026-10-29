(function () {
  var board = document.getElementById("garage-board");
  if (!board) return;

  var url = board.getAttribute("data-cards-url");
  var table = document.getElementById("garage-table");
  var tbody = table && table.querySelector("tbody");
  var caption = document.getElementById("garage-caption");
  var status = document.getElementById("garage-status");
  var radios = board.querySelectorAll('input[name="garage-track"]');
  if (!url || !table || !tbody || !radios.length) return;

  var trackNames = {};

  function scoreOf(card, trackId) {
    return trackId === "avg" ? card.avg : card.scores[trackId];
  }

  function tieOf(card, trackId) {
    return card.tie[trackId];
  }

  // Track scores are integer tenths (512 = 51.2). Overall is integer hundredths.
  function formatScore(value, trackId) {
    var v = Math.abs(value);
    if (trackId === "avg") {
      return Math.trunc(v / 100) + "." + String(v % 100).padStart(2, "0");
    }
    return Math.trunc(v / 10) + "." + String(v % 10);
  }

  function sortName(trackId) {
    if (trackId === "avg") return "Overall Score";
    return trackNames[trackId] || trackId;
  }

  function statusText(trackId) {
    return "Sorted by " + sortName(trackId) + ", highest first.";
  }

  function captionText(trackId) {
    if (trackId === "avg") {
      return "65 garage cards with an Overall Score and one score per base track, sorted by Overall Score, highest first. Higher score is better.";
    }
    return "65 garage cards sorted by " + sortName(trackId) + " score, highest first. Overall Score stays the mean of the ten track scores. Higher score is better.";
  }

  function textCell(text, className) {
    var td = document.createElement("td");
    td.className = className;
    td.textContent = text;
    return td;
  }

  function htmlCell(html, className) {
    var td = document.createElement("td");
    td.className = className;
    td.innerHTML = html || "";
    return td;
  }

  function markSort(trackId) {
    var headers = table.querySelectorAll("thead th[data-sort]");
    headers.forEach(function (th) {
      var on = th.getAttribute("data-sort") === trackId;
      th.setAttribute("aria-sort", on ? "descending" : "none");
      var btn = th.querySelector("button");
      if (btn) btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
    radios.forEach(function (radio) {
      radio.checked = radio.value === trackId;
    });
  }

  function render(data, trackId) {
    var ranked = data.cards.slice().sort(function (a, b) {
      return scoreOf(b, trackId) - scoreOf(a, trackId) || tieOf(a, trackId) - tieOf(b, trackId) || a.id - b.id;
    });
    var frag = document.createDocumentFragment();
    ranked.forEach(function (card, index) {
      var tr = document.createElement("tr");
      tr.appendChild(textCell(String(index + 1), "rank-cell"));
      tr.appendChild(htmlCell(card.face, "card-cell"));
      tr.appendChild(htmlCell(card.speed, "speed-cell"));
      tr.appendChild(htmlCell(card.details, "details-cell"));
      var overall = textCell(formatScore(card.avg, "avg"), "score-cell score-cell--overall");
      if (trackId === "avg") overall.classList.add("is-sort-col");
      tr.appendChild(overall);
      data.tracks.forEach(function (track) {
        var td = textCell(formatScore(card.scores[track.id], track.id), "score-cell score-cell--track");
        if (track.id === trackId) td.classList.add("is-sort-col");
        tr.appendChild(td);
      });
      frag.appendChild(tr);
    });
    tbody.replaceChildren(frag);
    markSort(trackId);
    if (caption) caption.textContent = captionText(trackId);
    if (status) status.textContent = statusText(trackId);
  }

  function revealColumn(trackId) {
    var th = table.querySelector('thead th[data-sort="' + trackId + '"]');
    if (th && th.scrollIntoView) {
      th.scrollIntoView({ inline: "nearest", block: "nearest" });
    }
  }

  fetch(url)
    .then(function (res) {
      if (!res.ok) throw new Error(String(res.status));
      return res.json();
    })
    .then(function (data) {
      data.tracks.forEach(function (track) {
        trackNames[track.id] = track.name;
        var th = table.querySelector('thead th[data-sort="' + track.id + '"]');
        var btn = th && th.querySelector("button");
        if (!btn) return;
        if (track.short) btn.textContent = track.short;
        btn.title = track.name;
        btn.setAttribute("aria-label", "Sort by " + track.name);
      });
      table.querySelector("thead").addEventListener("click", function (event) {
        var btn = event.target.closest("button");
        if (!btn || !table.contains(btn)) return;
        var th = btn.closest("th");
        var trackId = th && th.getAttribute("data-sort");
        if (!trackId) return;
        render(data, trackId);
        revealColumn(trackId);
      });
      radios.forEach(function (radio) {
        radio.addEventListener("change", function () {
          if (!radio.checked) return;
          render(data, radio.value);
          revealColumn(radio.value);
        });
      });
      var selected = board.querySelector('input[name="garage-track"]:checked');
      render(data, selected ? selected.value : "avg");
    })
    .catch(function () {
      if (status) {
        status.textContent = "Showing the Overall Score ranking. Column sorting could not be loaded.";
      }
    });
})();
