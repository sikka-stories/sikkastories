(function () {
  var lang = App.getLang();
  var t = UI[lang];
  var u = UI2[lang];
  App.chrome(lang);
  var esc = App.esc;

  var qs = new URLSearchParams(location.search);
  var slug = qs.get("b");
  var book = null;
  BOOKS.forEach(function (b) { if (b.slug === slug && b.status === "live") book = b; });

  var $ = function (id) { return document.getElementById(id); };
  $("back").textContent = "← " + t.back;
  $("back").href = "index.html?lang=" + lang;

  if (!book) {
    $("book").innerHTML = "<p>" + esc(t.notfound) + "</p>";
    $("wa").hidden = true;
    return;
  }

  /* The share link carries no name, so a friend can enter their own. */
  var base = location.href.split("?")[0].replace(/[^\/]*$/, "");
  var shareUrl = base + "s/" + book.slug + ".html?lang=" + lang;
  $("wa").textContent = t.share;
  $("wa").href = "https://wa.me/?text=" + encodeURIComponent(((book.cardTitle && book.cardTitle[lang]) || book.title[lang].replace("{name}", "").trim()) + " " + shareUrl);
  $("print").textContent = t.print;
  $("print").addEventListener("click", function () { window.print(); });
  $("printws").textContent = t.printWs;
  $("printws").addEventListener("click", function () {
    document.body.classList.add("print-ws");
    var done = function () { document.body.classList.remove("print-ws"); window.removeEventListener("afterprint", done); };
    window.addEventListener("afterprint", done);
    window.print();
  });

  /* The hero comes from the saved choice (asked once, used by every book).
     A link can also carry ?n=Name&g=b or g to override it for one visit. */
  var hero = App.readHero(lang);
  if (qs.get("n") && (qs.get("g") === "b" || qs.get("g") === "g")) hero = { name: qs.get("n"), g: qs.get("g") };
  function tpl(s) { return App.tpl(s, hero); }
  function forgetLinkName() {
    if (!qs.get("n")) return;
    var u = new URL(location.href); u.searchParams.delete("n"); u.searchParams.delete("g");
    history.replaceState(null, "", u.toString()); qs = new URLSearchParams(location.search);
  }
  var SKY = Art.sky(book.slug);

  /* Activity tracking, only for readers who chose to log in. It never slows or breaks reading. */
  var sent = {};
  function track(ev, data, once) {
    if (once) { if (sent[ev]) return; sent[ev] = 1; }
    if (!Acct.enabled || !Acct.hasStored()) return;
    Acct.init().then(function () { Acct.log(ev, slug, data); });
  }
  function trackAnswer(sec, row, value, good) {
    var rows = row.parentNode.querySelectorAll("[data-row]");
    var i = Array.prototype.indexOf.call(rows, row);
    var prev = row._prev === undefined ? null : row._prev;
    row._prev = value;
    track("answer", { s: sec, i: i, v: value, prev: prev, ok: good ? 1 : 0 });
  }

  /* ---------- First visit only: pick a name and a look ---------- */
  function showSetup() {
    $("book").innerHTML = "";
    $("print").hidden = true;
    $("printws").hidden = true;
    $("herochip").innerHTML = "";
    $("setup").hidden = false;
    document.title = (book.cardTitle ? book.cardTitle[lang] : "") + " | " + SITE.name[lang];
    $("s-title").textContent = t.heroTitle;
    $("s-sub").textContent = t.heroSub;
    var input = App.heroForm($("s-form"), lang, null, function (h) { hero = h; forgetLinkName(); showBook(); });
    input.focus();
  }

  /* ---------- The book ---------- */
  function trail(i) {
    var stops = book.stops[lang];
    return '<ol class="trail" aria-label="' + esc(t.trail) + '">' + stops.map(function (s, k) {
      return '<li class="' + (k < i ? "done" : k === i ? "now" : "") + '"><i></i><span>' + esc(s) + "</span></li>";
    }).join("") + "</ol>";
  }

  function art(n) {
    var a = document.createElement("section");
    a.className = "pg art";
    a.style.background = SKY[n];
    a.setAttribute("role", "img");
    a.setAttribute("aria-label", n ? (lang === "en" ? book.scenes[n - 1] : t.art + " " + n + ": " + book.stops[lang][n - 1]) : tpl(book.title[lang]));
    a.innerHTML = Art.scene(n, hero.g, book.slug);
    return a;
  }

  function mk0(tag, cls, html) { var x = document.createElement(tag); if (cls) x.className = cls; if (html) x.innerHTML = html; return x; }

  /* Listen: the browser's own text-to-speech. Nothing is sent anywhere. */
  var SPEAK = { en: "en-IN", hi: "hi-IN", mr: "mr-IN" };
  var speakBtn = null;
  function haveVoice() {
    var vs = window.speechSynthesis.getVoices();
    if (!vs.length) return true;
    return vs.some(function (v) { return v.lang && v.lang.toLowerCase().indexOf(lang) === 0; });
  }
  function stopSpeaking() {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    if (speakBtn) { speakBtn.classList.remove("on"); speakBtn.textContent = "🔊 " + u.listen; speakBtn = null; }
  }
  function listenBtn(text) {
    if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") return null;
    var b = mk0("button", "btn listen no-print", "🔊 " + esc(u.listen));
    b.type = "button";
    b.addEventListener("click", function () {
      if (speakBtn === b) { stopSpeaking(); return; }
      stopSpeaking();
      if (!haveVoice()) { b.textContent = u.noVoice; return; }
      var ut = new SpeechSynthesisUtterance(text);
      ut.lang = SPEAK[lang] || "en-IN"; ut.rate = 0.9;
      ut.onend = ut.onerror = function () { if (speakBtn === b) stopSpeaking(); };
      speakBtn = b; b.classList.add("on"); b.textContent = "⏹ " + u.stopListen;
      window.speechSynthesis.speak(ut);
    });
    return b;
  }
  window.addEventListener("pagehide", function () { if (window.speechSynthesis) window.speechSynthesis.cancel(); });

  function showBook() {
    $("setup").hidden = true;
    $("print").hidden = false;
    $("printws").hidden = false;
    App.heroChip($("herochip"), lang, function (h) { hero = h; forgetLinkName(); showBook(); });
    var title = tpl(book.title[lang]);
    document.title = title + " | " + SITE.name[lang];
    var root = $("book");
    root.innerHTML = "";

    /* Page 1: cover, personalised */
    var cover = document.createElement("section");
    var rt = App.readTime(book, lang);
    cover.className = "pg cover";
    cover.style.background = book.color;
    cover.innerHTML = '<p class="starring">' + esc(t.starring) + ": " + esc(hero.name) + "</p><h1>" + esc(title) + '</h1><p class="sub">' + esc(book.subtitle[lang]) + '</p><div class="coverart"></div><p class="time">' + esc(t.timeLine.replace("{t}", rt.total).replace("{s}", rt.story).replace("{q}", rt.quiz)) + '</p><p class="by">' + esc(SITE.credit[lang] || "") + '</p><span class="pn">1</span>';
    cover.querySelector(".coverart").style.background = SKY[0];
    cover.querySelector(".coverart").innerHTML = Art.scene(0, hero.g, book.slug);
    root.appendChild(cover);

    /* Big idea and a jump bar (screen only, so the printed pages stay exactly as before) */
    var bigIdea = tpl(book.recap[lang].remember[0] || "");
    var intro = mk0("div", "intro no-print", '<p class="bigidea"><b>' + esc(u.bigIdea) + ":</b> " + esc(bigIdea) + '</p><nav class="jump" aria-label="' + esc(u.jStory + " / " + u.jQuiz + " / " + u.jPromise) + '"><button type="button" data-j="story">' + esc(u.jStory) + '</button><button type="button" data-j="quiz">' + esc(u.jQuiz) + '</button><button type="button" data-j="promise">' + esc(u.jPromise) + "</button></nav>");
    root.appendChild(intro);

    /* Pages 2 to 9: four story spreads (text page, then picture page) */
    book.story[lang].forEach(function (text, i) {
      var s = document.createElement("div");
      s.className = "spread";
      var tp = document.createElement("section");
      tp.className = "pg text";
      tp.innerHTML = trail(i) + "<p>" + esc(tpl(text)) + '</p><span class="pn">' + (2 + i * 2) + "</span>";
      var lb = listenBtn(tpl(text));
      if (lb) tp.appendChild(lb);
      var ap = art(i + 1);
      var pn = document.createElement("span");
      pn.className = "pn"; pn.textContent = String(3 + i * 2);
      ap.appendChild(pn);
      s.appendChild(tp); s.appendChild(ap);
      root.appendChild(s);
    });

    /* Pages 10 to 12: remember, quizzes, promise */
    var r = book.recap[lang];
    function mk(tag, cls, html) { var x = document.createElement(tag); if (cls) x.className = cls; if (html) x.innerHTML = html; return x; }

    function section(title, key) {
      var sec = mk("div", "qsec", '<h2>' + esc(title) + '</h2><span class="score no-print"></span>');
      sec.setAttribute("data-sec", key);
      sec.update = function () {
        var rows = sec.querySelectorAll("[data-row]"), ok = sec.querySelectorAll('[data-row][data-state="1"]');
        sec.querySelector(".score").textContent = t.score + ": " + ok.length + "/" + rows.length;
      };
      return sec;
    }

    /* A row with several buttons, one of them correct */
    function choiceRow(labelHtml, opts, ans) {
      var row = mk("div", "crow", '<div class="clabel">' + labelHtml + '</div><div class="copts"></div><span class="mark" aria-live="polite"></span>');
      row.setAttribute("data-row", "1");
      opts.forEach(function (o) {
        var bt = mk("button", "opt"); bt.type = "button"; bt.textContent = o.t;
        bt.addEventListener("click", function () {
          var good = o.k === ans;
          row.querySelectorAll(".opt").forEach(function (x) { x.classList.remove("ok", "bad"); });
          bt.classList.add(good ? "ok" : "bad");
          row.setAttribute("data-state", good ? "1" : "0");
          row.querySelector(".mark").textContent = good ? "✓ " + t.correct : "✗ " + t.tryagain;
          row.querySelector(".mark").className = "mark " + (good ? "good" : "no");
          row.parentNode.update && row.parentNode.update();
          trackAnswer(row.parentNode.getAttribute("data-sec"), row, String(o.k), good);
        });
        row.querySelector(".copts").appendChild(bt);
      });
      return row;
    }

    /* Page 10: remember + fill in the blanks */
    var p10 = mk("section", "pg recap");
    p10.appendChild(mk("h2", "", esc(t.remember)));
    p10.appendChild(mk("ul", "", r.remember.map(function (x) { return "<li>" + esc(tpl(x)) + "</li>"; }).join("")));
    var fs = section(t.fillT, "fill");
    fs.appendChild(mk("p", "bank", "<b>" + esc(t.bankT) + ":</b> " + r.fill.bank.map(function (w) { return "<span>" + esc(w) + "</span>"; }).join("")));
    r.fill.items.forEach(function (it) {
      var parts = tpl(it[0]).split("@@");
      var row = mk("div", "frow");
      row.setAttribute("data-row", "1");
      var sel = mk("select"); sel.setAttribute("aria-label", t.choose);
      sel.innerHTML = '<option value="">' + esc(t.choose) + "</option>" + r.fill.bank.map(function (w) { return '<option value="' + esc(w) + '">' + esc(w) + "</option>"; }).join("");
      var mark = mk("span", "mark");
      sel.addEventListener("change", function () {
        var good = sel.value === it[1];
        sel.className = sel.value ? (good ? "ok" : "bad") : "";
        row.setAttribute("data-state", good ? "1" : "0");
        mark.textContent = !sel.value ? "" : good ? "✓" : "✗ " + t.tryagain;
        mark.className = "mark " + (good ? "good" : "no");
        fs.update();
        if (sel.value) trackAnswer("fill", row, sel.value, good);
      });
      row.appendChild(mk("span", "", esc(parts[0])));
      row.appendChild(sel);
      row.appendChild(mk("span", "bl", "__________"));
      row.appendChild(mk("span", "", esc(parts[1] || "")));
      row.appendChild(mark);
      fs.appendChild(row);
    });
    p10.appendChild(fs); fs.update();
    p10.appendChild(mk("span", "pn", "10"));
    root.appendChild(p10);

    /* Page 11: sorting quiz + true or false */
    var p11 = mk("section", "pg recap");
    var sortOpts = r.sortOpts || [{ k: "need", t: t.need }, { k: "want", t: t.want }];
    var ss = section(r.sortTitle || t.sortT, "sort");
    r.sort.forEach(function (it) {
      ss.appendChild(choiceRow((it.icon ? Art.prop(it.icon) : "") + "<span>" + esc(tpl(it.label)) + "</span>", sortOpts, it.a));
    });
    p11.appendChild(ss); ss.update();
    var ts = section(t.tfT, "tf");
    r.tf.forEach(function (it) {
      ts.appendChild(choiceRow("<span>" + esc(tpl(it.q)) + "</span>", [{ k: "t", t: t.tru }, { k: "f", t: t.fls }], it.a ? "t" : "f"));
    });
    p11.appendChild(ts); ts.update();
    p11.appendChild(mk("span", "pn", "11"));
    root.appendChild(p11);

    /* Page 12: think it through + promise + answer key (key shows on paper only) */
    var p12 = mk("section", "pg recap");
    var hs = section(t.thinkT, "think");
    r.think.forEach(function (it) {
      hs.appendChild(choiceRow("<span>" + esc(tpl(it.q)) + "</span>", it.opts.map(function (o, i) { return { k: i, t: tpl(o) }; }), it.a));
    });
    p12.appendChild(hs); hs.update();
    p12.appendChild(mk("div", "promise", "<h2>" + esc(t.promise) + "</h2><p>" + esc(tpl(r.promise)) + '</p><p class="sig">' + esc(t.sign) + ": ____________ &nbsp; " + esc(t.date) + ": ________</p>"));
    function optText(k) { var f = sortOpts.filter(function (o) { return o.k === k; })[0]; return f ? f.t : k; }
    var key = [
      t.fillT + ": " + r.fill.items.map(function (i) { return i[1]; }).join(", "),
      (r.sortTitle || t.sortT) + " " + r.sort.map(function (i) { return optText(i.a); }).join(", "),
      t.tfT + " " + r.tf.map(function (i) { return i.a ? t.tru : t.fls; }).join(", "),
      t.thinkT + ": " + r.think.map(function (i) { return tpl(i.opts[i.a]); }).join(", ")
    ];
    p12.appendChild(mk("p", "key", "<b>" + esc(t.answers) + "</b><br>" + key.map(esc).join("<br>")));
    p12.appendChild(mk("p", "by", esc(SITE.name[lang]) + " · " + esc(SITE.credit[lang] || "") + (/^https?:$/.test(location.protocol) ? "<br>" + esc(location.host + location.pathname.replace(/[^\/]*$/, "").replace(/\/$/, "")) : "")));
    p12.appendChild(mk("span", "pn", "12"));
    root.appendChild(p12);
    intro.querySelectorAll("[data-j]").forEach(function (b) {
      b.addEventListener("click", function () {
        var k = b.getAttribute("data-j");
        var target = k === "story" ? root.querySelector(".spread") : k === "quiz" ? p10 : p12.querySelector(".promise");
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
    var redrawFinish = function () {};
    var stampMsg = mk("p", "stampmsg no-print");
    stampMsg.setAttribute("role", "status");
    function checkStamp() {
      var rows = root.querySelectorAll("[data-row]");
      var all = rows.length > 0;
      rows.forEach(function (r) { if (r.getAttribute("data-state") !== "1") all = false; });
      if (all) { App.addStamp(book.slug); track("quiz_perfect", null, true); stampMsg.innerHTML = '<span class="stamp" aria-hidden="true">&#9733;</span> ' + esc(t.stampEarned); stampMsg.classList.add("show"); redrawFinish(); }
      else { stampMsg.classList.remove("show"); stampMsg.textContent = ""; }
    }
    root.addEventListener("click", function () { setTimeout(checkStamp, 0); });
    root.addEventListener("change", function () { setTimeout(checkStamp, 0); });
    root.appendChild(stampMsg);
    var live = BOOKS.filter(function (b) { return b.status === "live"; });
    var idx = live.indexOf(book), next = live.length > 1 ? live[(idx + 1) % live.length] : null;
    var end = mk("div", "endcap finish no-print");
    var pubUrl = "https://sikka-stories.github.io/sikkastories/s/" + book.slug + ".html";
    var stampsNow = function () { return App.getStamps().filter(function (x) { return BOOKS.some(function (b) { return b.slug === x; }); }).length; };
    function drawFinish() {
      var got = App.getStamps().indexOf(book.slug) >= 0;
      var h = '<div class="bigstamp' + (got ? " got" : "") + '" aria-hidden="true">&#9733;</div><h2>' + esc(u.finTitle) + "</h2><p class=\"well\">" + esc(u.finWell.replace("{name}", hero.name)) + "</p>" +
        '<p class="fst">' + esc(got ? u.finStampYes : u.finStampNo) + " " + esc(u.finCount.replace("{n}", stampsNow()).replace("{m}", BOOKS.length)) + "</p>";
      if (next) {
        var nt = App.tpl((next.cardTitle && next.cardTitle[lang]) || next.title[lang], hero);
        h += '<p class="nextline">' + esc(u.finNext) + ": " + esc(next.subtitle[lang]) + '</p><a class="btn primary big" href="book.html?b=' + next.slug + "&lang=" + lang + '">' + esc(nt) + " →</a>" +
          '<p><a class="btn" href="index.html?lang=' + lang + '">' + esc(t.more) + "</a></p>";
      } else {
        h += '<a class="btn primary big" href="index.html?lang=' + lang + '">' + esc(t.more) + "</a>";
      }
      h += '<div class="sharebox"><h3>' + esc(u.shareTitle) + '</h3><div class="sharerow"><button type="button" class="btn" data-sh="copy">' + esc(u.copyLink) + '</button><a class="btn" target="_blank" rel="noopener" href="https://t.me/share/url?url=' + encodeURIComponent(pubUrl + "?lang=" + lang) + "&text=" + encodeURIComponent((book.cardTitle && book.cardTitle[lang]) || "") + '">' + esc(u.telegram) + '</a><a class="btn" target="_blank" rel="noopener" href="https://wa.me/?text=' + encodeURIComponent(((book.cardTitle && book.cardTitle[lang]) || "") + " " + pubUrl + "?lang=" + lang) + '">WhatsApp</a></div>' +
        '<img class="qr" src="' + QRSRC(book.slug) + '" width="132" height="132" alt="' + esc(u.qrAlt) + '"><p class="qrnote">' + esc(u.qrNote) + '</p><p class="copied" role="status"></p></div>';
      end.innerHTML = h;
      var cb = end.querySelector('[data-sh="copy"]');
      cb.addEventListener("click", function () {
        var link = pubUrl + "?lang=" + lang, msg = end.querySelector(".copied");
        var ok = function () { msg.textContent = u.copied; };
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(link).then(ok, function () { window.prompt("", link); });
        else window.prompt("", link);
      });
    }
    drawFinish();
    redrawFinish = drawFinish;
    root.appendChild(end);
    window.scrollTo(0, 0);
    track("book_open", null, true);
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { track("book_read", null, true); io.disconnect(); } });
      }, { threshold: 0.3 });
      io.observe(p10);
    }
  }

  if (hero) showBook(); else showSetup();
})();
