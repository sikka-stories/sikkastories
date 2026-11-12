(function () {
  var lang = App.getLang();
  var t = UI[lang];
  var u = UI2[lang];
  App.chrome(lang);
  var $ = function (id) { return document.getElementById(id); };
  document.title = SITE.name[lang];
  $("h1").textContent = SITE.name[lang];
  $("tag").textContent = t.tagline;
  $("byline").textContent = (SITE.credit && SITE.credit[lang]) || "";
  $("lib").textContent = t.library;
  $("how-t").textContent = t.howT;
  $("about-t").textContent = t.aboutT;
  $("about-p").textContent = t.aboutP;

  var ready = BOOKS.filter(function (b) { return b.status === "live"; }).length;
  $("count").textContent = t.ready.replace("{n}", ready);
  $("order").textContent = t.orderNote;
  $("q").placeholder = t.search;
  $("q").setAttribute("aria-label", t.search);

  $("steps").innerHTML = [t.s1, t.s2, t.s3].map(function (s, i) {
    return "<li><b>" + (i + 1) + "</b><span>" + App.esc(s) + "</span></li>";
  }).join("");

  $("peek-t").textContent = u.peekT;
  document.querySelectorAll(".peek img").forEach(function (im, k) { im.alt = u["peekA" + (k + 1)]; });
  [u.peek1, u.peek2, u.peek3].forEach(function (c, i) { $("peekc" + (i + 1)).textContent = c; });
  var hero = App.readHero(lang);

  /* Hero picture: the first book's cover, with the reader's own look */
  function drawHeroArt() {
    var h = $("heroart");
    h.style.background = Art.sky("money-swap")[0];
    h.innerHTML = Art.scene(0, hero ? hero.g : "g", "money-swap");
  }

  /* Topic filter */
  var topics = [];
  BOOKS.forEach(function (b) { var k = b.topic[lang]; if (topics.indexOf(k) < 0) topics.push(k); });
  var current = "", query = "";
  function drawChips() {
    $("chips").innerHTML = [""].concat(topics).map(function (k) {
      return '<button type="button" data-k="' + App.esc(k) + '" aria-pressed="' + (k === current) + '">' + App.esc(k || t.all) + "</button>";
    }).join("");
    document.querySelectorAll("#chips button").forEach(function (b) {
      b.addEventListener("click", function () { current = b.getAttribute("data-k"); drawChips(); drawGrid(); });
    });
  }

  function lvl(b) { return Math.min(5, Math.floor(BOOKS.indexOf(b) / 4) + 1); }
  function dots5(n) { var o = ""; for (var i = 1; i <= 5; i++) o += i <= n ? "\u25CF" : "\u25CB"; return o; }

  /* Cards show the reader's own name in the title and their own look on the cover */
  function drawGrid() {
    var stamps = App.getStamps();
    var shown = BOOKS.filter(function (b) {
      if (current && b.topic[lang] !== current) return false;
      if (!query) return true;
      var hay = [b.topic[lang], b.cardTitle && b.cardTitle[lang], b.subtitle && b.subtitle[lang], b.title[lang].replace("{name}", "")].join(" ").toLowerCase();
      return hay.indexOf(query) >= 0;
    });
    if (!shown.length) { $("grid").innerHTML = '<p class="none">' + App.esc(t.noResults) + "</p>"; return; }
    var grouped = !query && !current;
    var GROUPS = [[0, u.g1], [6, u.g2], [13, u.g3]];
    $("grid").innerHTML = shown.map(function (b) {
      var live = b.status === "live";
      var plain = (b.cardTitle && b.cardTitle[lang]) || b.title[lang].replace("{name}", "").trim();
      var title = live && hero ? App.tpl(b.title[lang], hero) : plain;
      var thumb = live
        ? '<div class="thumb art" style="background:' + Art.sky(b.slug)[0] + '" aria-hidden="true">' + Art.scene(0, hero ? hero.g : "g", b.slug) + "</div>"
        : '<div class="thumb" style="background:' + b.color + '" aria-hidden="true">✏️</div>';
      var inner = thumb +
        '<div class="body"><span class="tag"><b class="num">' + (BOOKS.indexOf(b) + 1) + "</b> · " + App.esc(b.topic[lang]) + "</span>" +
        '<span class="name">' + App.esc(title) + "</span>" +
        (live ? (stamps.indexOf(b.slug) >= 0 ? '<span class="pill done">&#10003; ' + App.esc(t.stampDone) + "</span>" : '<span class="pill">' + App.esc(t.read) + "</span>") : '<span class="pill grey">' + App.esc(t.soon) + "</span>") +
        '<span class="meta">' + App.esc(t.minShort.replace("{n}", App.readTime(b, lang).total)) + " · " + App.esc(t.pages) + (live ? ' · <span class="lvl" role="img" aria-label="' + App.esc(u.level.replace("{n}", lvl(b))) + '">' + dots5(lvl(b)) + "</span>" : "") + "</span></div>";
      var head = "";
      if (grouped) GROUPS.forEach(function (g) { if (BOOKS.indexOf(b) === g[0]) head = '<h3 class="grp">' + App.esc(g[1]) + "</h3>"; });
      return head + (live
        ? '<a class="card" href="book.html?b=' + b.slug + "&lang=" + lang + '">' + inner + "</a>"
        : '<div class="card soon">' + inner + "</div>");
    }).join("");
  }

  /* Start here / Continue, and the stamp strip */
  function drawProgress() {
    var stamps = App.getStamps().filter(function (s) { return BOOKS.some(function (b) { return b.slug === s; }); });
    var firstLeft = null;
    BOOKS.forEach(function (b, i) { if (!firstLeft && b.status === "live" && stamps.indexOf(b.slug) < 0) firstLeft = { b: b, n: i + 1 }; });
    var st = $("start");
    if (!stamps.length) { st.textContent = t.startBook; st.href = "book.html?b=" + BOOKS[0].slug + "&lang=" + lang; }
    else if (firstLeft) { st.textContent = t.continueBook.replace("{n}", firstLeft.n); st.href = "book.html?b=" + firstLeft.b.slug + "&lang=" + lang; }
    else { st.textContent = t.allDone.replace("{n}", BOOKS.length); st.href = "#lib"; }
    var bar = $("stampsbar");
    if (!stamps.length) { bar.hidden = true; return; }
    bar.hidden = false;
    var dots = BOOKS.map(function (b) { return '<i class="' + (stamps.indexOf(b.slug) >= 0 ? "on" : "") + '"></i>'; }).join("");
    bar.innerHTML = "<b>" + App.esc(t.stampsT) + ": " + stamps.length + " / " + BOOKS.length + '</b><span class="dots" aria-hidden="true">' + dots + "</span><small>" + App.esc(t.stampNote) + "</small>" + (stamps.length >= 5 ? '<a class="btn certlink" href="certificate.html?lang=' + lang + '">' + App.esc(u.certBtn) + "</a>" : "");
  }
  $("q").addEventListener("input", function () { query = this.value.trim().toLowerCase(); drawGrid(); });

  App.heroChip($("herochip"), lang, function (h) { hero = h; drawHeroArt(); drawGrid(); });
  drawHeroArt(); drawChips(); drawGrid(); drawProgress();
})();
