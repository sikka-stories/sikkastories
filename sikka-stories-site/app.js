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

  function chrome(lang) {
    var t = window.UI[lang];
    document.documentElement.lang = lang;
    var btns = LANGS.map(function (x) {
      return '<button type="button" data-l="' + x[0] + '" aria-pressed="' + (x[0] === lang) + '">' + x[1] + "</button>";
    }).join("");
    document.getElementById("top").innerHTML =
      '<div class="wrap"><a class="brand" href="index.html?lang=' + lang + '">' + esc(window.SITE.name[lang]) +
      '</a><div class="langs"><span>' + esc(t.lang) + "</span>" + btns + "</div></div>" + navHtml(lang);
    wireChip(lang);
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
