/* Owner dashboard. Only accounts listed in the database "admins" table get any data back.
   English only. Not linked from the menu, and every call is checked again on the server. */
(function () {
  App.chrome("en");
  var esc = App.esc, root = document.getElementById("admin");
  document.title = "Admin | " + SITE.name.en;
  var students = [], filterText = "", sortKey = "last_seen", open = null;

  function fmt(x) { return x ? new Date(x).toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "medium", timeStyle: "short" }) : "never"; }
  function title(slug) { var b = BOOKS.filter(function (k) { return k.slug === slug; })[0]; return b ? ((b.cardTitle && b.cardTitle.en) || slug) + " (" + slug + ")" : slug; }
  function call(name, args) { return Acct.rpc(name, args || {}); }

  function loginView(msg) {
    root.innerHTML = "<h1>Admin</h1><p class=\"note\">Log in with your own account (the one you made admin in the database).</p>" +
      '<label class="lbl">Nickname<input type="text" id="an" autocomplete="username" autocapitalize="none" spellcheck="false"></label>' +
      '<label class="lbl">Password<input type="password" id="ap" autocomplete="current-password"></label>' +
      '<p><button type="button" class="btn primary" id="ago">Log in</button></p><p class="formerr" id="aerr" role="alert">' + esc(msg || "") + "</p>";
    document.getElementById("ago").addEventListener("click", function () {
      Acct.logIn(document.getElementById("an").value.trim(), document.getElementById("ap").value).then(load, function (e) {
        document.getElementById("aerr").textContent = e && e.code === "locked" ? "Locked for 10 minutes." : "Wrong nickname or password.";
      });
    });
  }

  function load() {
    root.innerHTML = '<p class="note">Loading...</p>';
    call("ss_admin_students").then(function (r) {
      if (!r || !r.ok) return notAdmin();
      students = r.students || []; draw(r.totals);
    }, function () { root.innerHTML = '<p class="formerr">Could not reach the database.</p>'; });
  }
  function notAdmin() {
    root.innerHTML = '<h1>Admin</h1><p class="formerr">This account is not an admin.</p><p><button type="button" class="btn" id="lo">Log out</button></p>';
    document.getElementById("lo").addEventListener("click", function () { Acct.logOut().then(function () { loginView(); }); });
  }

  function draw(tot) {
    var rows = students.filter(function (s) { return !filterText || s.username.toLowerCase().indexOf(filterText) >= 0; });
    rows.sort(function (a, b) {
      if (sortKey === "username") return a.username < b.username ? -1 : 1;
      if (sortKey === "last_seen") return (b.last_seen || "") < (a.last_seen || "") ? -1 : 1;
      return (b[sortKey] || 0) - (a[sortKey] || 0);
    });
    var cols = [["username", "Nickname"], ["last_seen", "Last seen"], ["opens", "Book opens"], ["reads", "Read to end"], ["perfect", "Perfect quizzes"], ["answer_changes", "Answer changes"], ["plays", "Game plays"], ["tokens_earned", "Tokens"]];
    root.innerHTML = "<h1>Admin dashboard</h1>" +
      '<div class="tiles"><div><b>' + esc((tot && tot.students) || 0) + "</b><span>students</span></div><div><b>" + esc((tot && tot.active_7d) || 0) + "</b><span>active, last 7 days</span></div><div><b>" +
      esc((tot && tot.opens) || 0) + "</b><span>book opens</span></div><div><b>" + esc((tot && tot.plays) || 0) + "</b><span>game plays</span></div></div>" +
      '<p><input type="search" id="afilter" placeholder="Search nickname" value="' + esc(filterText) + '"> <button type="button" class="btn" id="acsv">Download CSV</button> <button type="button" class="btn" id="aflag">Flagged scores</button> <button type="button" class="btn" id="alo">Log out</button></p>' +
      '<div class="tablewrap"><table class="adm"><thead><tr>' + cols.map(function (c) { return '<th><button type="button" class="sortb" data-k="' + c[0] + '"' + (sortKey === c[0] ? ' aria-pressed="true"' : "") + ">" + esc(c[1]) + "</button></th>"; }).join("") + "<th>Status</th></tr></thead><tbody>" +
      (rows.length ? rows.map(function (s) {
        return '<tr data-u="' + esc(s.username) + '" tabindex="0"><td>' + esc(s.avatar ? Acct.avatar(s.avatar) : "") + " <b>" + esc(s.username) + "</b></td><td>" + esc(fmt(s.last_seen)) + "</td><td>" + esc(s.opens) + "</td><td>" + esc(s.reads) + "</td><td>" + esc(s.perfect) + "</td><td>" + esc(s.answer_changes) + "</td><td>" + esc(s.plays) + "</td><td>" + esc(s.tokens_earned) + "</td><td>" + (s.banned ? "banned" : "ok") + "</td></tr>";
      }).join("") : '<tr><td colspan="9">No students yet.</td></tr>') + '</tbody></table></div><div id="adetail"></div><div id="aflagged"></div>';
    document.getElementById("afilter").addEventListener("input", function () { filterText = this.value.trim().toLowerCase(); var pos = this.selectionStart; draw(tot); var f = document.getElementById("afilter"); f.focus(); f.setSelectionRange(pos, pos); });
    root.querySelectorAll(".sortb").forEach(function (b) { b.addEventListener("click", function () { sortKey = b.getAttribute("data-k"); draw(tot); }); });
    root.querySelectorAll("tbody tr[data-u]").forEach(function (tr) {
      function go() { detail(tr.getAttribute("data-u")); }
      tr.addEventListener("click", go); tr.addEventListener("keydown", function (e) { if (e.key === "Enter") go(); });
    });
    document.getElementById("alo").addEventListener("click", function () { Acct.logOut().then(function () { loginView(); }); });
    document.getElementById("aflag").addEventListener("click", flagged);
    document.getElementById("acsv").addEventListener("click", function () {
      function cell(v) { var s = String(v == null ? "" : v); if (/^[=+\-@]/.test(s)) s = "'" + s; return '"' + s.replace(/"/g, '""') + '"'; }
      var head = ["nickname", "created", "last_seen", "consent_by", "book_opens", "read_to_end", "perfect_quizzes", "answer_changes", "game_plays", "tokens", "crowns", "banned"];
      var lines = [head.join(",")].concat(students.map(function (s) { return [s.username, s.created_at, s.last_seen, s.consent_by, s.opens, s.reads, s.perfect, s.answer_changes, s.plays, s.tokens_earned, s.crowns, s.banned].map(cell).join(","); }));
      var a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([lines.join("\n")], { type: "text/csv" })); a.download = "sikka-students.csv"; a.click();
    });
    if (open) detail(open, true);
  }

  function detail(name, quiet) {
    open = name;
    call("ss_admin_student", { p_username: name }).then(function (r) {
      var box = document.getElementById("adetail"); if (!box) return;
      if (!r || !r.ok) { box.innerHTML = '<p class="formerr">Could not load.</p>'; return; }
      var a = r.account;
      box.innerHTML = '<section class="adm-detail"><h2>' + esc(Acct.avatar(a.avatar)) + " " + esc(a.username) + (a.banned ? " (banned)" : "") + "</h2>" +
        "<p>Joined " + esc(fmt(a.created_at)) + " · last seen " + esc(fmt(a.last_seen)) + " · consent given by " + esc(a.consent_by) + " on " + esc(fmt(a.consent_at)) + " · tokens " + esc(a.tokens_earned) + " · crowns " + esc(a.crowns) + "</p>" +
        '<p class="actions"><input type="text" id="np" placeholder="New password (6+)" autocomplete="off"> <button type="button" class="btn" id="rp">Reset password</button> <button type="button" class="btn" id="bn">' + (a.banned ? "Unban" : "Ban") + '</button> ' +
        '<input type="text" id="dn" placeholder="Type nickname to delete" autocomplete="off"> <button type="button" class="btn" id="dl">Delete account</button></p><p class="formerr" id="amsg" role="status"></p>' +
        "<h3>Books</h3>" + table(["Book", "Opened", "Read to end", "Answers", "Answer changes", "Quiz perfect", "First", "Last"], r.books.map(function (b) { return [title(b.slug), b.opens, b.reads, b.answers, b.answer_changes, b.perfect ? "yes" : "no", fmt(b.first_at), fmt(b.last_at)]; })) +
        "<h3>Game scores</h3>" + table(["Game", "Score", "When", "Flag", ""], r.scores.map(function (s) { return [s.game, s.score, fmt(s.at), s.void ? "voided" : s.flagged ? "flagged" : "", s.void ? "" : '<button type="button" class="btn small" data-void="' + esc(s.id) + '">Void</button>']; }), [4]) +
        "<h3>Latest activity (100)</h3>" + table(["When", "Event", "Book", "Detail"], r.events.map(function (e) { return [fmt(e.at), e.event, e.slug || "", e.data ? JSON.stringify(e.data) : ""]; })) + "</section>";
      if (!quiet) box.scrollIntoView({ behavior: "smooth" });
      function msg(t) { document.getElementById("amsg").textContent = t; }
      document.getElementById("rp").addEventListener("click", function () {
        call("ss_admin_reset_password", { p_username: name, p_new: document.getElementById("np").value }).then(function (x) { msg(x.ok ? "Password changed. The student is logged out everywhere." : "Password must be 6 to 72 characters."); });
      });
      document.getElementById("bn").addEventListener("click", function () { call("ss_admin_set_banned", { p_username: name, p_flag: !a.banned }).then(function () { load(); }); });
      document.getElementById("dl").addEventListener("click", function () {
        if (document.getElementById("dn").value.trim() !== name) return msg("Type the exact nickname to confirm.");
        call("ss_admin_delete", { p_username: name }).then(function () { open = null; load(); });
      });
      box.querySelectorAll("[data-void]").forEach(function (b) { b.addEventListener("click", function () { call("ss_admin_void_score", { p_id: +b.getAttribute("data-void") }).then(function () { detail(name, true); }); }); });
    });
  }
  function table(head, rows, rawCols) {
    rawCols = rawCols || [];
    return '<div class="tablewrap"><table class="adm"><thead><tr>' + head.map(function (h) { return "<th>" + esc(h) + "</th>"; }).join("") + "</tr></thead><tbody>" +
      (rows.length ? rows.map(function (r) { return "<tr>" + r.map(function (c, i) { return "<td>" + (rawCols.indexOf(i) >= 0 ? c : esc(c)) + "</td>"; }).join("") + "</tr>"; }).join("") : '<tr><td colspan="' + head.length + '">Nothing yet.</td></tr>') + "</tbody></table></div>";
  }
  function flagged() {
    call("ss_admin_flagged").then(function (r) {
      var box = document.getElementById("aflagged"); if (!box) return;
      box.innerHTML = "<h2>Flagged scores (85% of the maximum or more, last 14 days)</h2>" + table(["Student", "Game", "Score", "Seconds", "When", ""], (r.rows || []).map(function (s) { return [s.username, s.game, s.score, Math.round(s.duration_ms / 1000), fmt(s.at), '<button type="button" class="btn small" data-v="' + esc(s.id) + '">Void</button>']; }), [5]);
      box.querySelectorAll("[data-v]").forEach(function (b) { b.addEventListener("click", function () { call("ss_admin_void_score", { p_id: +b.getAttribute("data-v") }).then(flagged); }); });
      box.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (!Acct.enabled) { root.innerHTML = "<h1>Admin</h1><p class=\"note warn\">Online features are not switched on. Fill in config.js first.</p>"; return; }
  root.innerHTML = '<p class="note">Loading...</p>';
  Acct.init().then(function () { Acct.user ? load() : loginView(); });
})();
