/* Shared helpers: language, the reader's hero, header, footer. No frameworks, no build step. */
(function () {
  var LANGS = [["en", "English"], ["hi", "हिन्दी"], ["mr", "मराठी"]];

  function getLang() {
    var p = new URLSearchParams(location.search).get("lang");
    if (p && window.UI[p]) return p;
    try {
      var s = localStorage.getItem("pp-lang");
      if (s && window.UI[s]) return s;
    } catch (e) {}
    return "en";
  }

  function setLang(l) {
    try { localStorage.setItem("pp-lang", l); } catch (e) {}
    var u = new URL(location.href);
    u.searchParams.set("lang", l);
    location.href = u.toString();
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }


  /* Reading time, worked out from the words in each book so it stays right when books change.
     Story: words at a child's reading speed, plus 15 seconds to look at each of the 4 pictures.
     Quiz: 20 seconds per question. Rounded up to whole minutes. */
  var WPM = { en: 110, hi: 80, mr: 70 };
  function readTime(book, lang) {
    var words = book.story[lang].join(" ").split(/\s+/).length;
    var r = book.recap[lang];
    var qs = r.fill.items.length + r.sort.length + r.tf.length + r.think.length;
    var s = Math.max(1, Math.ceil((words / WPM[lang] * 60 + book.story[lang].length * 15) / 60));
    var q = Math.max(1, Math.ceil(qs * 20 / 60));
    return { story: s, quiz: q, total: s + q };
  }


  /* Main menu: Books, Play and win, and (only when online features are on) the account chip. */
  function navHtml(lang) {
    var u2 = (window.UI2 && window.UI2[lang]) || null;
    if (!u2) return "";
    var page = (location.pathname.split("/").pop() || "index.html").replace(/\.html$/, "");
    function link(href, label, id, extra) {
      return '<a href="' + href + ".html?lang=" + lang + '"' + (page === id ? ' aria-current="page"' : "") + (extra || "") + ">" + label + "</a>";
    }
    var h = link("index", esc(u2.navBooks), "index") + link("play", "🎮 " + esc(u2.navPlay), "play");
    if (window.Acct && window.Acct.enabled) h += '<a class="me" id="mechip" href="account.html?lang=' + lang + '"' + (page === "account" ? ' aria-current="page"' : "") + ">" + esc(u2.signIn) + "</a>";
    return '<nav class="mainnav" aria-label="' + esc((window.UI2 && window.UI2[lang] && window.UI2[lang].navMain) || "Main menu") + '"><div class="wrap">' + h + "</div></nav>";
  }
  function wireChip(lang) {
    var u2 = window.UI2 && window.UI2[lang];
    if (!u2 || !window.Acct || !window.Acct.enabled) return;
    window.Acct.onChange(function (u) {
      var c = document.getElementById("mechip"); if (!c) return;
      c.innerHTML = u ? esc(window.Acct.avatar(u.avatar)) + " " + esc(u.username) + ' <span class="tok">🪙 ' + esc(u.tokens) + "</span>" : esc(u2.signIn);
    });
    if (window.Acct.hasStored()) window.Acct.init();
  }

  /* All-time view count: a grey eye and the real number from the database. Nothing is shown unless the online features are switched on and the count has loaded. */
  /* Everything for the top right corner lives in this one file, so it works even if books.js and style.css are older.
     Values in books.js (SITE.by, SITE.reach, SITE.reachNote, SITE.viewsLabel) win when they exist. */
  var DEFAULTS = {
    by: { en: "By Shreyas Shinde", hi: "बनाने वाले: श्रेयस शिंदे", mr: "निर्मिती: श्रेयस शिंदे" },
    reach: { en: "1 lakh+ people reached", hi: "1 लाख+ लोगों तक पहुँचा", mr: "1 लाख+ लोकांपर्यंत पोहोचले" },
    reachNote: { en: "Total people reached through our Sikka Stories reels on Instagram", hi: "Instagram पर हमारी सिक्का स्टोरीज़ रील्स के ज़रिए कुल लोगों तक पहुँच", mr: "Instagram वरील आमच्या सिक्का स्टोरीज रील्सद्वारे एकूण लोकांपर्यंत पोहोच" },
    viewsLabel: { en: "All-time views", hi: "कुल बार देखा गया", mr: "एकूण वेळा पाहिले" }
  };
  function sget(k, lang) {
    var o = (window.SITE && window.SITE[k]) || DEFAULTS[k];
    return (o && o[lang]) || "";
  }
  function topRightCss() {
    if (document.getElementById("ss-topright-css")) return;
    var s = document.createElement("style");
    s.id = "ss-topright-css";
    s.textContent =
      ".topright{display:flex;flex-direction:column;align-items:flex-end;gap:6px}" +
      ".tr1{display:flex;align-items:center;gap:14px;flex-wrap:wrap;justify-content:flex-end}" +
      ".topby{font-size:15px;font-weight:600;color:#6b7080;text-decoration:none;border-bottom:2px dotted #6b7080}" +
      "#byline{border-bottom:0}" +
      ".topby:hover,.topby:focus-visible{color:#2b2d42;border-bottom-color:#2b2d42}" +
      ".views,.reach{display:inline-flex;align-items:center;gap:6px;color:#8d99ae;font-size:15px;font-weight:600}" +
      ".views[hidden]{display:none}.views b{font-weight:700}" +
      "@media (max-width:560px){.topright{align-items:flex-start}.tr1{justify-content:flex-start}.reach{flex-basis:100%}}" +
      "@media print{.tr1{display:none!important}}";
    document.head.appendChild(s);
  }
  var EYE = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>';
  var PLAY = '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';
  function reachHtml(lang) {
    var r = sget("reach", lang);
    if (!r) return "";
    var n = sget("reachNote", lang) || r;
    return '<span class="reach" title="' + esc(n) + '">' + PLAY + "<span>" + esc(r) + "</span></span>";
  }
  function viewsHtml(lang) {
    var lab = sget("viewsLabel", lang) || "All-time views";
    return '<span class="views" id="views" hidden title="' + esc(lab) + '" aria-label="' + esc(lab) + '">' + EYE + "<b></b></span>";
  }
  function showViews() {
    var C = window.SS_CONFIG || {}, el = document.getElementById("views");
    if (!el || !/^https:\/\/[a-z0-9-]+\.supabase\.co$/.test(C.url || "") || !/^[A-Za-z0-9._-]{20,}$/.test(C.key || "")) return;
    var first = true;
    try { first = !sessionStorage.getItem("ss-viewed"); } catch (e) {}
    fetch(C.url + "/rest/v1/rpc/" + (first ? "ss_view" : "ss_views"), {
      method: "POST",
      headers: { apikey: C.key, Authorization: "Bearer " + C.key, "Content-Type": "application/json" },
      body: "{}"
    }).then(function (r) { return r.ok ? r.json() : Promise.reject(); }).then(function (n) {
      if (typeof n !== "number" || n < 0) return;
      try { sessionStorage.setItem("ss-viewed", "1"); } catch (e) {}
      if (n < ((window.SITE.minViews | 0) || 0)) return;
      el.querySelector("b").textContent = n.toLocaleString("en-IN");
      el.hidden = false;
    }).catch(function () {});
  }

  function chrome(lang) {
    topRightCss();
    var t = window.UI[lang];
    document.documentElement.lang = lang;
    var btns = LANGS.map(function (x) {
      return '<button type="button" data-l="' + x[0] + '" aria-pressed="' + (x[0] === lang) + '">' + x[1] + "</button>";
    }).join("");
    document.getElementById("top").innerHTML =
      '<div class="wrap"><a class="brand" href="index.html?lang=' + lang + '">' + esc(window.SITE.name[lang]) +
      '</a><div class="topright"><div class="tr1">' + reachHtml(lang) + viewsHtml(lang) + (sget("by", lang) ? '<a class="topby" href="about.html?lang=' + lang + '">' + esc(sget("by", lang)) + "</a>" : "") + '</div><div class="langs"><span>' + esc(t.lang) + "</span>" + btns + "</div></div></div>" + navHtml(lang);
    wireChip(lang);
    showViews();
    document.querySelectorAll(".langs button").forEach(function (b) {
      b.addEventListener("click", function () { setLang(b.getAttribute("data-l")); });
    });
    var credit = (window.SITE.credit && window.SITE.credit[lang]) || "";
    var links = '<a href="about.html?lang=' + lang + '">' + esc(t.aboutLink) + "</a>";
    var fb = window.SITE.feedback || "";
    if (/^https?:\/\//.test(fb)) links += ' · <a href="' + esc(fb) + '" target="_blank" rel="noopener">' + esc(t.feedbackLink) + "</a>";
    document.getElementById("foot").innerHTML = '<div class="wrap">' + esc(t.disclaimer) + "<br>" + links + (credit ? "<br>" + esc(credit) : "") + "</div>";
    if (!document.getElementById("skiplink")) {
      var sk = document.createElement("a");
      sk.id = "skiplink"; sk.className = "skip"; sk.href = "#main"; sk.textContent = t.skip;
      document.body.insertBefore(sk, document.body.firstChild);
      var m = document.querySelector("main"); if (m) { m.id = "main"; m.setAttribute("tabindex", "-1"); }
    }
  }

  /* ---------- Stamps: one per book, earned by getting every quiz answer right.
     Kept on this phone only, in the same way as the hero. ---------- */
  var SKEY = "pp-stamps";
  function getStamps() {
    var a = [];
    try { a = JSON.parse(localStorage.getItem(SKEY) || "[]"); } catch (e) {}
    return Array.isArray(a) ? a : [];
  }
  function addStamp(slug) {
    var a = getStamps();
    if (a.indexOf(slug) >= 0) return false;
    a.push(slug);
    try { localStorage.setItem(SKEY, JSON.stringify(a)); } catch (e) {}
    return true;
  }

  /* ---------- The reader's hero ----------
     Asked for once, kept on this phone only, and used by every book.
     If the reader skips, the name is a friendly word in the current language. */
  var KEY = "pp-hero", memory = null;

  function readHero(lang) {
    var h = null;
    try { h = JSON.parse(localStorage.getItem(KEY) || "null"); } catch (e) {}
    if (!h) h = memory;
    if (!h || (h.g !== "b" && h.g !== "g")) return null;
    var t = window.UI[lang];
    var name = h.auto ? (h.g === "g" ? t.autoG : t.autoB) : String(h.name || "");
    if (!name) return null;
    return { name: name, g: h.g, auto: !!h.auto };
  }

  function saveHero(h) {
    memory = h;
    try { localStorage.setItem(KEY, JSON.stringify(h)); } catch (e) {}
  }

  /* Fill a text template: {name}, and [[boy|girl]] endings for Hindi and Marathi. */
  function tpl(s, hero) {
    var g = hero && hero.g === "g" ? 1 : 0, n = hero ? hero.name : "";
    return String(s).replace(/\{name\}/g, function () { return n; })
      .replace(/\[\[([^|\]]*)\|([^\]]*)\]\]/g, function (m, a, b) { return g ? b : a; });
  }

  /* The name-and-look form, used inline on a first visit and inside the pop-up later. */
  function heroForm(host, lang, current, onSave) {
    var t = window.UI[lang];
    var g = (current && current.g) || "g";
    var startName = current && !current.auto ? current.name : "";
    host.innerHTML =
      '<label>' + esc(t.nameLabel) + '<input type="text" maxlength="20" autocomplete="off" class="hf-name" value="' + esc(startName) + '"></label>' +
      '<div class="pick"></div>' +
      '<button type="button" class="btn primary big hf-go">' + esc(t.heroSave) + "</button>" +
      '<p class="hint hf-hint" role="alert"></p>' +
      '<button type="button" class="linkbtn hf-skip">' + esc(t.heroSkip) + "</button>" +
      '<p class="fine">' + esc(t.heroNote) + "</p>";
    var input = host.querySelector(".hf-name");
    function drawPick() {
      host.querySelector(".pick").innerHTML = ["g", "b"].map(function (k) {
        return '<button type="button" class="avatar" data-g="' + k + '" aria-pressed="' + (k === g) + '">' + window.Art.avatar(k) + "<span>" + esc(k === "g" ? t.girl : t.boy) + "</span></button>";
      }).join("");
      host.querySelectorAll(".avatar").forEach(function (b) {
        b.addEventListener("click", function () { g = b.getAttribute("data-g"); drawPick(); });
      });
    }
    drawPick();
    host.querySelector(".hf-go").addEventListener("click", function () {
      var n = input.value.trim();
      if (!n) { host.querySelector(".hf-hint").textContent = t.needName; input.focus(); return; }
      saveHero({ name: n, g: g });
      onSave(readHero(lang));
    });
    host.querySelector(".hf-skip").addEventListener("click", function () {
      saveHero({ g: g, auto: true });
      onSave(readHero(lang));
    });
    input.addEventListener("keydown", function (e) { if (e.key === "Enter") host.querySelector(".hf-go").click(); });
    return input;
  }

  /* Pop-up to change the hero without leaving the page. */
  function openHeroModal(lang, onSave) {
    var t = window.UI[lang];
    var before = document.activeElement;
    var ov = document.createElement("div");
    ov.className = "overlay";
    ov.innerHTML = '<div class="modal" role="dialog" aria-modal="true" aria-labelledby="m-t"><button type="button" class="x" aria-label="' + esc(t.close) + '">×</button><h2 id="m-t">' + esc(t.heroTitle) + '</h2><div class="mform"></div></div>';
    document.body.appendChild(ov);
    document.body.classList.add("noscroll");
    function close() {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("noscroll");
      ov.remove();
      if (before && before.focus) before.focus();
    }
    function onKey(e) { if (e.key === "Escape") close(); }
    document.addEventListener("keydown", onKey);
    ov.addEventListener("click", function (e) { if (e.target === ov) close(); });
    ov.querySelector(".x").addEventListener("click", close);
    var input = heroForm(ov.querySelector(".mform"), lang, readHero(lang), function (h) { close(); if (onSave) onSave(h); });
    input.focus();
  }

  /* The little "Your hero: Aarav, change" button. */
  function heroChip(host, lang, onChange) {
    var t = window.UI[lang], h = readHero(lang);
    host.innerHTML = h
      ? '<button type="button" class="herochip" aria-label="' + esc(t.heroBar + ": " + h.name + ". " + t.change) + '"><span class="face">' + window.Art.headshot(h.g, 40) + '</span><span class="who"><small>' + esc(t.heroBar) + "</small><b>" + esc(h.name) + '</b></span><span class="edit">' + esc(t.change) + "</span></button>"
      : '<button type="button" class="herochip empty"><span class="face">' + window.Art.headshot("g", 40) + '</span><span class="who"><b>' + esc(t.heroPick) + "</b></span></button>";
    host.querySelector("button").addEventListener("click", function () { openHeroModal(lang, onChange); });
  }

  /* Works offline after the first visit (network first, saved copy as backup) */
  if ("serviceWorker" in navigator && location.protocol === "https:") {
    window.addEventListener("load", function () { navigator.serviceWorker.register("sw.js").catch(function () {}); });
  }

  window.App = { readTime: readTime, getStamps: getStamps, addStamp: addStamp, getLang: getLang, chrome: chrome, esc: esc, readHero: readHero, tpl: tpl, heroForm: heroForm, heroChip: heroChip, openHeroModal: openHeroModal };
})();
