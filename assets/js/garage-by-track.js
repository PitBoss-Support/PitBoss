(function () {
  var board = document.getElementById("garage-board");
  if (!board) return;

  var url = board.getAttribute("data-cards-url");
  var tbody = document.querySelector("#garage-table tbody");
  var caption = document.getElementById("garage-caption");
  var status = document.getElementById("garage-status");
  var radios = board.querySelectorAll('input[name="garage-track"]');
  if (!url || !tbody || !radios.length) return;

  var trackNames = {};

  function scoreOf(card, trackId) {
    return trackId === "avg" ? card.avg : card.scores[trackId];
  }

  function tieOf(card, trackId) {
    return card.tie[trackId];
  }

  // Track scores are integer tenths (512 = 51.2). Avg is integer hundredths.
  function formatScore(value, trackId) {
    var v = Math.abs(value);
    if (trackId === "avg") {
      return Math.trunc(v / 100) + "." + String(v % 100).padStart(2, "0");
    }
    return Math.trunc(v / 10) + "." + String(v % 10);
  }

  function statusText(trackId) {
    if (trackId === "avg") {
      return "Average of the 10 base-track scores, highest first.";
    }
    return (trackNames[trackId] || trackId) + " only, highest score first.";
  }

  function captionText(trackId) {
    if (trackId === "avg") {
      return "65 garage cards ranked by average score across the 10 base tracks. Higher score is better.";
    }
    return "65 garage cards ranked by " + (trackNames[trackId] || trackId) + " score. Higher score is better.";
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
      tr.appendChild(textCell(formatScore(scoreOf(card, trackId), trackId), "score-cell"));
      frag.appendChild(tr);
    });
    tbody.replaceChildren(frag);
    if (caption) caption.textContent = captionText(trackId);
    if (status) status.textContent = statusText(trackId);
  }

  fetch(url)
    .then(function (res) {
      if (!res.ok) throw new Error(String(res.status));
      return res.json();
    })
    .then(function (data) {
      data.tracks.forEach(function (track) {
        trackNames[track.id] = track.name;
      });
      radios.forEach(function (radio) {
        radio.addEventListener("change", function () {
          if (radio.checked) render(data, radio.value);
        });
      });
      var selected = board.querySelector('input[name="garage-track"]:checked');
      render(data, selected ? selected.value : "avg");
    })
    .catch(function () {
      if (status) {
        status.textContent = "Showing the average ranking. Track filters could not be loaded.";
      }
    });
})();
