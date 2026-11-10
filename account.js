/* Account page: make an account, log in, see my progress, delete my account. */
(function () {
  var lang = App.getLang(), t = UI[lang], u = UI2[lang];
  App.chrome(lang);
  var esc = App.esc, root = document.getElementById("acct");
  document.title = u.accTitle + " | " + SITE.name[lang];

  var by = "", pickedAvatar = "a01", nick = Acct.randomName(), mode = "new";

  function errText(e) {
    var c = e && e.code;
    var map = { bad_login: u.errBadLogin, locked: u.errLocked, name_taken: u.errTaken, weak_password: u.errWeak, too_many: u.errTooMany,
      net: u.errNet, off: u.offNote, no_session: u.errNoSession, no_consent: u.errConsent, bad_name: u.errGeneric, bad_avatar: u.errGeneric };
    return map[c] || u.errGeneric;
  }

  function shell(inner) {
    root.innerHTML = '<h1>' + esc(u.accTitle) + "</h1>" + inner;
  }

  function guestView() {
    shell('<p class="lead">' + esc(u.accIntro) + '</p><p class="note">' + esc(u.guestNote) + "</p>" +
      (Acct.enabled ? '<div id="panel"></div>' : '<p class="note warn">' + esc(u.offNote) + "</p>"));
    if (Acct.enabled) drawForms();
  }

  function nickString() { return nick.adj + nick.noun + nick.num; }

  function drawForms() {
    var p = document.getElementById("panel");
    var tabs = '<div class="tabs" role="tablist">' +
      ["new", "login"].map(function (m) {
        return '<button type="button" role="tab" data-m="' + m + '" aria-selected="' + (mode === m) + '">' + esc(m === "new" ? u.tabNew : u.tabLogin) + "</button>";
      }).join("") + "</div>";
    p.innerHTML = tabs + '<div id="form"></div><p class="formerr" id="err" role="alert"></p>';
    p.querySelectorAll(".tabs button").forEach(function (b) {
      b.addEventListener("click", function () { mode = b.getAttribute("data-m"); drawForms(); });
    });
    mode === "new" ? newForm() : loginForm();
  }

  /* The grown-up detail line (for example a server code) helps the site owner find a setup problem fast. */
  function setErr(msg, detail) {
    var el = document.getElementById("err");
    el.textContent = msg || "";
    if (msg && detail) { var s = document.createElement("small"); s.className = "tech"; s.textContent = " (" + String(detail).slice(0, 120) + ")"; el.appendChild(s); }
    if (msg && el.scrollIntoView) el.scrollIntoView({ block: "center", behavior: "smooth" });
  }

  function newForm() {
    var f = document.getElementById("form");
    var avs = Acct.AVATARS.map(function (a, i) {
      var k = "a" + (i < 9 ? "0" : "") + (i + 1);
      return '<button type="button" class="av" data-a="' + k + '" aria-pressed="' + (k === pickedAvatar) + '" aria-label="' + esc(a) + '">' + a + "</button>";
    }).join("");
    f.innerHTML =
      '<h2>' + esc(u.pickName) + "</h2>" +
      '<div class="nickrow"><label>' + esc(u.adjective) + '<select id="adj">' + Acct.ADJ.map(function (w) { return '<option' + (w === nick.adj ? " selected" : "") + ">" + w + "</option>"; }).join("") + "</select></label>" +
      '<label>' + esc(u.animal) + '<select id="noun">' + Acct.NOUN.map(function (w) { return '<option' + (w === nick.noun ? " selected" : "") + ">" + w + "</option>"; }).join("") + "</select></label>" +
      '<button type="button" class="btn" id="rnd">🎲 ' + esc(u.randomName) + "</button></div>" +
      '<p class="nickbig" id="nickbig"></p><p class="note">' + esc(u.nickNote) + "</p>" +
      "<h2>" + esc(u.pickAvatar) + '</h2><div class="avs">' + avs + "</div>" +
      '<h2>' + esc(u.password) + '</h2><input type="password" id="pw" autocomplete="new-password" minlength="6" maxlength="72"><p class="note">' + esc(u.passwordHint) + "</p>" +
      '<div class="consent"><h2>' + esc(u.consentTitle) + "</h2><p>" + esc(u.consentText) + '</p>' +
      '<div class="radios"><label><input type="radio" name="by" value="parent"' + (by === "parent" ? " checked" : "") + "> " + esc(u.consentParent) + "</label>" +
      '<label><input type="radio" name="by" value="teacher"' + (by === "teacher" ? " checked" : "") + "> " + esc(u.consentTeacher) + "</label></div>" +
      '<label class="chk"><input type="checkbox" id="ok"> ' + esc(u.consentBox) + "</label></div>" +
      '<p><button type="button" class="btn primary big" id="go">' + esc(u.create) + "</button></p>";
    function showNick() { document.getElementById("nickbig").textContent = Acct.avatar(pickedAvatar) + " " + nickString(); }
    showNick();
    document.getElementById("adj").addEventListener("change", function () { nick.adj = this.value; showNick(); });
    document.getElementById("noun").addEventListener("change", function () { nick.noun = this.value; showNick(); });
    document.getElementById("rnd").addEventListener("click", function () { nick = Acct.randomName(); newForm(); });
    f.querySelectorAll(".av").forEach(function (b) {
      b.addEventListener("click", function () {
        pickedAvatar = b.getAttribute("data-a");
        f.querySelectorAll(".av").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
        showNick();
      });
    });
    f.querySelectorAll('input[name="by"]').forEach(function (r) { r.addEventListener("change", function () { by = r.value; }); });
    document.getElementById("go").addEventListener("click", function () {
      var pw = document.getElementById("pw").value;
      setErr("");
      if (!by || !document.getElementById("ok").checked) return setErr(u.errConsent);
      if (pw.length < 6 || pw.toLowerCase() === nickString().toLowerCase()) return setErr(u.errWeak);
      var b = this; b.disabled = true; b.textContent = u.working;
      Acct.signUp(nickString(), pw, pickedAvatar, by).then(function () { profileView(); }, function (e) {
        b.disabled = false; b.textContent = u.create;
        if (e && e.code === "name_taken") { nick = Acct.randomName(); newForm(); }
        setErr(errText(e), e && e.detail);
      });
    });
  }

  function loginForm() {
    var f = document.getElementById("form");
    f.innerHTML =
      '<label class="lbl">' + esc(u.nick) + '<input type="text" id="ln" autocomplete="username" autocapitalize="none" spellcheck="false" maxlength="24"></label>' +
      '<label class="lbl">' + esc(u.password) + '<input type="password" id="lp" autocomplete="current-password" maxlength="72"></label>' +
      '<p><button type="button" class="btn primary big" id="go">' + esc(u.login) + "</button></p>";
    document.getElementById("go").addEventListener("click", function () {
      var n = document.getElementById("ln").value.trim(), p = document.getElementById("lp").value;
      setErr(""); if (!n || !p) return setErr(u.errBadLogin);
      var b = this; b.disabled = true; b.textContent = u.working;
      Acct.logIn(n, p).then(function () { profileView(); }, function (e) { b.disabled = false; b.textContent = u.login; setErr(errText(e), e && e.detail); });
    });
  }

  function profileView() {
    var me = Acct.user;
    if (!me) return guestView();
    var r = Acct.rankInfo(me.tokens_earned || 0, u.ranks);
    shell(
      '<div class="profile"><div class="bigav" aria-hidden="true">' + esc(Acct.avatar(me.avatar)) + '</div><div><p class="nickbig">' + esc(me.username) + "</p>" +
      '<p class="stats"><span>🪙 ' + esc(u.tokens) + ": <b>" + esc(me.tokens) + "</b></span><span>🏅 " + esc(u.rank) + ": <b>" + esc(r.name) + "</b></span><span>👑 " + esc(u.crowns) + ": <b>" + esc(me.crowns || 0) + "</b></span></p></div></div>" +
      '<div class="meter" role="img" aria-label="' + esc(r.next ? u.nextRank.replace("{n}", r.need).replace("{r}", r.next) : u.topRank) + '"><i style="width:' + r.pct + '%"></i></div>' +
      '<p class="note">' + esc(r.next ? u.nextRank.replace("{n}", r.need).replace("{r}", r.next) : u.topRank) + "</p>" +
      '<p><a class="btn primary" href="play.html?lang=' + lang + '">🎮 ' + esc(u.navPlay) + '</a> <button type="button" class="btn" id="out">' + esc(u.logout) + "</button></p>" +
      "<h2>" + esc(u.myReading) + '</h2><div id="reading" class="reading"></div>' +
      '<details class="danger"><summary>' + esc(u.delTitle) + "</summary><p>" + esc(u.delText) + '</p><label class="lbl">' + esc(u.delPw) + '<input type="password" id="dp" autocomplete="current-password" maxlength="72"></label>' +
      '<p><button type="button" class="btn" id="del">' + esc(u.delBtn) + '</button></p><p class="formerr" id="err" role="alert"></p></details>');
    document.getElementById("out").addEventListener("click", function () { Acct.logOut().then(guestView); });
    document.getElementById("del").addEventListener("click", function () {
      var p = document.getElementById("dp").value; if (!p) return;
      Acct.deleteMe(p).then(function () { guestView(); document.getElementById("panel").insertAdjacentHTML("beforebegin", '<p class="note good">' + esc(u.deleted) + "</p>"); },
        function (e) { document.getElementById("err").textContent = errText(e); });
    });
    Acct.progress().then(function (rows) {
      var host = document.getElementById("reading"); if (!host) return;
      rows = (rows || []).filter(function (x) { return x.opens > 0 || x.perfect; });
      if (!rows.length) { host.innerHTML = '<p class="note">' + esc(u.noReading) + "</p>"; return; }
      host.innerHTML = rows.map(function (x) {
        var b = BOOKS.filter(function (k) { return k.slug === x.slug; })[0]; if (!b) return "";
        var title = (b.cardTitle && b.cardTitle[lang]) || b.slug;
        return '<a class="rrow" href="book.html?b=' + esc(x.slug) + "&lang=" + lang + '"><b>' + esc(title) + "</b><span>" + esc(x.opens) + " " + esc(u.opened) + " · " + esc(x.reads) + " " + esc(u.readEnd) + (x.perfect ? " · ✓ " + esc(u.perfect) : "") + "</span></a>";
      }).join("");
    });
  }

  if (!Acct.enabled) { guestView(); return; }
  root.innerHTML = '<p class="note">' + esc(u.working) + "</p>";
  Acct.init().then(function () { Acct.user ? profileView() : guestView(); });
})();
