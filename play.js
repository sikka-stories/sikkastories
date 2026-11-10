/* Play page: seven quick games, weekly leaderboards, last weeks' winners. */
(function () {
  var lang = App.getLang(), t = UI[lang], u = UI2[lang];
  App.chrome(lang);
  var esc = App.esc, $ = function (id) { return document.getElementById(id); };
  document.title = u.playTitle + " | " + SITE.name[lang];
  var hero = App.readHero(lang) || { name: u.friend, g: "b" };
  function tpl(s) { return App.tpl(s, hero); }
  var CAP = { "daily-quiz": 100 }, DAILY = "daily-quiz";

  /* ---------- Best scores kept on this device ---------- */
  function bests() { try { return JSON.parse(localStorage.getItem("ss-best") || "{}") || {}; } catch (e) { return {}; } }
  function saveBest(g, s) {
    var b = bests(); if (!(b[g] >= s)) { b[g] = s; try { localStorage.setItem("ss-best", JSON.stringify(b)); } catch (e) {} }
  }
  function dailyDoneToday() { try { return (localStorage.getItem("ss-daily") || "").split("|")[0] === Games.today(); } catch (e) { return false; } }

  /* ---------- Page skeleton ---------- */
  var root = $("play");
  root.innerHTML =
    '<div id="hub"><h1>' + esc(u.playTitle) + '</h1><p class="lead">' + esc(u.playSub) + '</p><div id="who"></div>' +
    '<div class="ggrid" id="ggrid"></div>' +
    '<section class="boards" id="boards"><h2>' + esc(u.board) + '</h2><div class="bchips" id="bchips" role="group"></div>' +
    '<div class="pertabs" id="pertabs" role="group"></div><p class="note" id="reset"></p><ol class="rows" id="rows"></ol><p class="note" id="mine"></p>' +
    '<p class="note">' + esc(u.prizes) + '</p></section>' +
    '<section class="hall" id="hall"><h2>' + esc(u.hall) + '</h2><div id="hallbody"></div></section></div>' +
    '<div id="arena" hidden></div>';

  function drawWho() {
    var w = $("who");
    if (!Acct.enabled || Acct.user) { w.innerHTML = ""; return; }
    w.innerHTML = '<p class="note">' + esc(u.guestPlay) + ' <a class="btn" href="account.html?lang=' + lang + '">' + esc(u.makeAcc) + "</a></p>";
  }
  function drawGrid() {
    var b = bests();
    $("ggrid").innerHTML = Games.order.map(function (id) {
      var g = u.games[id];
      return '<button type="button" class="gcard" data-g="' + id + '"><span class="gi" aria-hidden="true">' + g[2] + '</span><b>' + esc(g[0]) + "</b><span>" + esc(g[1]) + "</span>" +
        (b[id] ? '<em>' + esc(u.yourBest) + ": " + esc(b[id]) + "</em>" : "") + "</button>";
    }).join("");
    document.querySelectorAll(".gcard").forEach(function (c) { c.addEventListener("click", function () { openGame(c.getAttribute("data-g")); }); });
  }

  /* ---------- A game ---------- */
  var arena = $("arena"), hub = $("hub"), timer = null;
  function closeGame() { if (timer) clearInterval(timer); timer = null; arena.hidden = true; arena.innerHTML = ""; hub.hidden = false; drawGrid(); loadBoard(); window.scrollTo(0, 0); }
  function openGame(id) {
    hub.hidden = true; arena.hidden = false; window.scrollTo(0, 0);
    var g = u.games[id], done = id === DAILY && dailyDoneToday();
    arena.innerHTML = '<p><button type="button" class="btn" id="gback">← ' + esc(u.back) + '</button></p><div class="stage"><p class="gi big" aria-hidden="true">' + g[2] + "</p><h1>" + esc(g[0]) + "</h1><p class=\"lead\">" + esc(g[1]) + "</p>" +
      (done ? '<p class="note">' + esc(u.dailyDone) + "</p>" : '<p><button type="button" class="btn primary big" id="gstart">' + esc(u.start) + "</button></p>") + "</div>";
    $("gback").addEventListener("click", closeGame);
    if (!done) $("gstart").addEventListener("click", function () { run(id); });
  }

  function run(id) {
    var isDaily = id === DAILY, cap = CAP[id] || 600;
    var next = isDaily ? null : Games.make(id, { lang: lang, t: t, u: u, tpl: tpl });
    var dq = isDaily ? Games.daily(lang, tpl) : null;
    var score = 0, streak = 0, qi = 0, t0 = Date.now(), endAt = t0 + 60000, shownAt = 0, locked = false, finished = false;
    var stage;

    function hud() { return '<div class="hud"><span>' + (isDaily ? "❓ " + (qi + 1) + " / " + dq.length : "⏱ <b id=\"tl\">60</b>") + "</span><span>⭐ " + esc(u.score) + ": <b id=\"sc\">" + score + "</b></span></div>"; }
    function show() {
      var q = isDaily ? dq[qi] : next();
      locked = false; shownAt = Date.now();
      arena.innerHTML = hud() + '<div class="qbox"><p class="qtext">' + q.html + "</p>" + (q.svg || "") + '</div><div class="qopts' + (q.wide ? " wide" : "") + '">' +
        q.opts.map(function (o, i) { return '<button type="button" class="qopt" data-i="' + i + '">' + esc(o.label) + "</button>"; }).join("") + '</div><p class="fb" id="fb" role="status"></p>';
      arena.querySelectorAll(".qopt").forEach(function (b) {
        b.addEventListener("click", function () {
          if (locked || finished || Date.now() - shownAt < 350) return;
          locked = true;
          var i = +b.getAttribute("data-i"), good = q.opts[i].ok;
          arena.querySelectorAll(".qopt").forEach(function (x, k) { x.disabled = true; if (q.opts[k].ok) x.classList.add("ok"); });
          if (!good) b.classList.add("bad");
          if (good) { streak++; score += isDaily ? 20 : 10 + (streak % 5 === 0 ? 5 : 0); } else { streak = 0; if (!isDaily) score = Math.max(0, score - 5); }
          $("sc").textContent = score;
          $("fb").textContent = good ? "✓ " + u.correct + (streak >= 5 && streak % 5 === 0 ? " 🔥 +5" : "") : "✗ " + u.wrong;
          setTimeout(function () {
            if (finished) return;
            qi++;
            if (isDaily && qi >= dq.length) return finish();
            show();
          }, good ? 400 : 1000);
        });
      });
    }
    if (!isDaily) {
      timer = setInterval(function () {
        var left = Math.max(0, Math.ceil((endAt - Date.now()) / 1000)), el = $("tl");
        if (el) el.textContent = left;
        if (Date.now() >= endAt) finish();
      }, 200);
    }

    function finish() {
      if (finished) return; finished = true;
      if (timer) clearInterval(timer); timer = null;
      score = Math.min(score, cap);
      var ms = isDaily ? Math.max(5000, Date.now() - t0) : 60000;
      var prevBest = bests()[id] || 0;
      saveBest(id, score);
      if (isDaily) { try { localStorage.setItem("ss-daily", Games.today() + "|" + score); } catch (e) {} }
      arena.innerHTML = '<div class="stage"><p class="gi big" aria-hidden="true">' + u.games[id][2] + "</p><h1>" + esc(isDaily ? u.games[id][0] : u.over) + '</h1><p class="bigscore">' + esc(u.yourScore) + ": <b>" + score + "</b></p>" +
        '<p class="note">' + esc(u.yourBest) + ": " + Math.max(prevBest, score) + '</p><p class="note" id="saveinfo" role="status"></p>' +
        '<p>' + (isDaily ? "" : '<button type="button" class="btn primary big" id="again">' + esc(u.playAgain) + "</button> ") + '<button type="button" class="btn" id="gback">← ' + esc(u.back) + "</button></p></div>";
      $("gback").addEventListener("click", closeGame);
      if (!isDaily) $("again").addEventListener("click", function () { run(id); });
      var info = $("saveinfo");
      if (!Acct.enabled) return;
      var go = Acct.hasStored() ? Acct.init() : Promise.resolve();
      go.then(function () {
        if (!Acct.user) { info.innerHTML = esc(u.guestPlay) + ' <a class="btn" href="account.html?lang=' + lang + '">' + esc(u.makeAcc) + "</a>"; return; }
        info.textContent = u.working;
        return Acct.submitScore(id, score, ms).then(function (r) {
          if (r && r.ok) {
            info.textContent = (r.gained > 0 ? u.saved.replace("{n}", r.gained) : u.savedNo) + (r.week_rank ? " · " + u.rankNow.replace("{n}", r.week_rank) : "");
          } else if (r && r.error === "already_played") info.textContent = u.dailyDone;
          else info.textContent = u.notSaved + (r && r.error ? " (" + r.error + ")" : "");
        }, function () { info.textContent = u.notSaved + ": " + u.errNet; });
      });
    }
    show();
  }

  /* ---------- Leaderboard ---------- */
  var bGame = "all", bPeriod = "week";
  function drawBoardChips() {
    var all = [["all", u.overall]].concat(Games.order.map(function (id) { return [id, u.games[id][0]]; }));
    $("bchips").innerHTML = all.map(function (x) { return '<button type="button" data-g="' + x[0] + '" aria-pressed="' + (bGame === x[0]) + '">' + esc(x[1]) + "</button>"; }).join("");
    $("pertabs").innerHTML = [["week", u.thisWeek], ["alltime", u.allTime]].map(function (x) { return '<button type="button" data-p="' + x[0] + '" aria-pressed="' + (bPeriod === x[0]) + '">' + esc(x[1]) + "</button>"; }).join("");
    document.querySelectorAll("#bchips button").forEach(function (b) { b.addEventListener("click", function () { bGame = b.getAttribute("data-g"); drawBoardChips(); loadBoard(); }); });
    document.querySelectorAll("#pertabs button").forEach(function (b) { b.addEventListener("click", function () { bPeriod = b.getAttribute("data-p"); drawBoardChips(); loadBoard(); }); });
  }
  var MEDAL = ["🥇", "🥈", "🥉"];
  function loadBoard() {
    if (!Acct.enabled) { $("boards").hidden = true; $("hall").hidden = true; return; }
    $("rows").innerHTML = '<li class="none">' + esc(u.working) + "</li>";
    Acct.init().then(function () { drawWho(); return Acct.leaderboard(bGame, bPeriod); }).then(function (r) {
      if (!r || !r.ok) throw 0;
      var me = Acct.user && Acct.user.username;
      $("rows").innerHTML = r.rows.length ? r.rows.map(function (x) {
        return '<li class="' + (x.username === me ? "me" : "") + '"><span class="rk">' + (MEDAL[x.rank - 1] || x.rank) + '</span><span class="av" aria-hidden="true">' + esc(Acct.avatar(x.avatar)) + "</span><b>" + esc(x.username) + "</b>" +
          (x.crowns ? ' <span class="crown" title="' + esc(u.crowns) + '">👑' + (x.crowns > 1 ? "×" + esc(x.crowns) : "") + "</span>" : "") + '<span class="sc">' + esc(x.score) + "</span></li>";
      }).join("") : '<li class="none">' + esc(u.noScores) + "</li>";
      $("mine").textContent = r.me ? u.you + ": #" + r.me.rank + " · " + r.me.score : "";
      var ms = new Date(r.ends).getTime() - Date.now();
      $("reset").textContent = bPeriod === "week" && ms > 0 ? u.resets.replace("{d}", Math.floor(ms / 864e5)).replace("{h}", Math.floor(ms % 864e5 / 36e5)) : "";
    }).catch(function () { $("rows").innerHTML = '<li class="none">' + esc(u.errNet) + "</li>"; });
  }
  function loadHall() {
    if (!Acct.enabled) return;
    Acct.init().then(function () { return Acct.hall(); }).then(function (rows) {
      rows = rows || [];
      if (!rows.length) { $("hallbody").innerHTML = '<p class="note">' + esc(u.noHall) + "</p>"; return; }
      var weeks = [];
      rows.forEach(function (x) { if (weeks.indexOf(x.week) < 0) weeks.push(x.week); });
      var loc = lang === "en" ? "en-IN" : lang + "-IN";
      $("hallbody").innerHTML = weeks.slice(0, 2).map(function (w) {
        var games = ["all"].concat(Games.order);
        var lines = games.map(function (g) {
          var top = rows.filter(function (x) { return x.week === w && x.game === g; }).sort(function (a, b) { return a.rank - b.rank; });
          if (!top.length) return "";
          return "<li><b>" + esc(g === "all" ? u.overall : u.games[g][0]) + "</b> " + top.map(function (x) { return (MEDAL[x.rank - 1] || x.rank) + " " + esc(Acct.avatar(x.avatar)) + " " + esc(x.username) + " (" + esc(x.score) + ")"; }).join(" · ") + "</li>";
        }).join("");
        var d = new Date(w + "T00:00:00");
        return '<div class="hweek"><h3>' + esc(d.toLocaleDateString(loc, { day: "numeric", month: "short" })) + "</h3><ul>" + lines + "</ul></div>";
      }).join("");
    }).catch(function () {});
  }

  drawWho(); drawGrid(); drawBoardChips(); loadBoard(); loadHall();
  if (Acct.enabled) Acct.onChange(function () { drawWho(); });
})();
