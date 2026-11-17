/* Optional accounts, activity tracking and leaderboards.
   Everything goes through the database functions in the setup script, which check who is asking.
   If config.js is empty this file does nothing and the site stays fully offline-friendly. */
(function () {
  var C = window.SS_CONFIG || {};
  var enabled = /^https:\/\/[a-z0-9-]+\.supabase\.co$/.test(C.url || "") && typeof C.key === "string" && /^[A-Za-z0-9._-]{20,}$/.test(C.key);

  var AVATARS = ["🐯", "🐼", "🦊", "🐸", "🦉", "🐬", "🦁", "🐘", "🦜", "🐢", "🦄", "🐙"];
  function avatar(k) { var n = parseInt(String(k || "a01").slice(1), 10); return AVATARS[(n >= 1 && n <= 12 ? n : 1) - 1]; }
  var ADJ = ["Brave", "Smart", "Happy", "Swift", "Calm", "Bold", "Wise", "Lucky", "Kind", "Clever", "Sunny", "Mighty", "Gentle", "Bright", "Quick", "Proud"];
  var NOUN = ["Tiger", "Panda", "Eagle", "Dolphin", "Falcon", "Lion", "Otter", "Koala", "Rhino", "Peacock", "Parrot", "Rabbit", "Turtle", "Monkey", "Zebra", "Elephant"];
  function rnd(n) { var a = new Uint32Array(1); (window.crypto || {}).getRandomValues ? crypto.getRandomValues(a) : (a[0] = Math.floor(Math.random() * 4294967296)); return a[0] % n; }
  function num2() { var n = rnd(90) + 10; return String(n); }
  function randomName() { return { adj: ADJ[rnd(ADJ.length)], noun: NOUN[rnd(NOUN.length)], num: num2() }; }

  var LEVELS = [0, 50, 150, 350, 700, 1200, 2000];
  function rankInfo(earned, names) {
    var i = 0; while (i + 1 < LEVELS.length && earned >= LEVELS[i + 1]) i++;
    return { idx: i, name: names[i], next: i + 1 < LEVELS.length ? names[i + 1] : null, need: i + 1 < LEVELS.length ? LEVELS[i + 1] - earned : 0, pct: i + 1 < LEVELS.length ? Math.round((earned - LEVELS[i]) / (LEVELS[i + 1] - LEVELS[i]) * 100) : 100 };
  }

  var user = null, sb = null, initP = null, listeners = [];
  function notify() { listeners.slice().forEach(function (f) { try { f(user); } catch (e) {} }); }
  function onChange(f) { listeners.push(f); try { f(user); } catch (e) {} }
  function hasStored() { try { return !!localStorage.getItem("ss-auth"); } catch (e) { return false; } }

  function loadLib() {
    return new Promise(function (res, rej) {
      if (window.supabase && window.supabase.createClient) return res();
      var s = document.createElement("script");
      s.src = "supabase-lib.js"; s.onload = function () { res(); }; s.onerror = function () { rej({ code: "net", detail: "supabase-lib.js is missing on the website" }); };
      document.head.appendChild(s);
    });
  }
  function ensure() {
    if (!enabled) return Promise.reject({ code: "off" });
    if (sb) return Promise.resolve(sb);
    if (!initP) {
      initP = loadLib().then(function () {
        sb = window.supabase.createClient(C.url, C.key, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false, storageKey: "ss-auth" } });
        return sb.auth.getSession().then(function (r) { return r && r.data && r.data.session ? refreshMe() : null; }).then(function () { return sb; });
      }).catch(function (e) { initP = null; throw e; });
    }
    return initP;
  }
  function rpc(name, args) {
    return ensure().then(function () { return sb.rpc(name, args || {}); }).then(function (r) {
      if (r.error) throw { code: "net", detail: r.error.message };
      return r.data;
    });
  }
  function setUser(me) { user = me || null; notify(); return user; }
  function refreshMe() { return rpc("ss_me").then(function (me) { setUser(me); if (me) pullProgress(); return me; }); }

  function needSession() {
    return sb.auth.getSession().then(function (r) {
      if (r && r.data && r.data.session) return;
      return sb.auth.signInAnonymously().then(function (x) { if (x.error) throw { code: "no_session", detail: x.error.code || x.error.message || "auth" }; }, function (e) { throw { code: "no_session", detail: String((e && e.message) || e) }; });
    });
  }
  function authCall(fn, args) {
    return ensure().then(needSession).then(function () { return rpc(fn, args); }).then(function (r) {
      if (r && r.ok) { setUser(r.me); pullProgress(); return r.me; }
      throw { code: (r && r.error) || "generic" };
    });
  }
  function signUp(nick, pw, av, by) { return authCall("ss_signup", { p_username: nick, p_password: pw, p_avatar: av, p_consent_by: by }); }
  function logIn(nick, pw) { return authCall("ss_login", { p_username: nick, p_password: pw }); }
  function logOut() {
    return rpc("ss_logout").catch(function () {}).then(function () { return sb && sb.auth.signOut(); }).catch(function () {}).then(function () { setUser(null); });
  }
  function deleteMe(pw) {
    return rpc("ss_delete_me", { p_password: pw }).then(function (r) {
      if (!r || !r.ok) throw { code: (r && r.error) || "generic" };
      return sb.auth.signOut().catch(function () {}).then(function () { setUser(null); });
    });
  }

  /* Reading progress: perfect quizzes become stamps on this device too. */
  function pullProgress() {
    return rpc("ss_progress").then(function (rows) {
      (rows || []).forEach(function (p) { if (p.perfect && window.App) App.addStamp(p.slug); });
      return rows;
    }).catch(function () { return []; });
  }
  function progress() { return rpc("ss_progress").catch(function () { return []; }); }

  /* Fire and forget: tracking must never slow down or break reading. */
  function log(ev, slug, data) {
    if (!enabled || !user || !sb) return;
    rpc("ss_log", { p_event: ev, p_slug: slug, p_data: data || null }).then(function (r) {
      if (r && r.ok && r.gained > 0 && user) { user.tokens = (user.tokens || 0) + r.gained; user.tokens_earned = (user.tokens_earned || 0) + r.gained; notify(); }
    }).catch(function () {});
  }
  function submitScore(game, score, ms) {
    return rpc("ss_submit_score", { p_game: game, p_score: score, p_ms: ms }).then(function (r) {
      if (r && r.ok && r.gained > 0 && user) { user.tokens = (user.tokens || 0) + r.gained; user.tokens_earned = (user.tokens_earned || 0) + r.gained; notify(); }
      return r;
    });
  }
  function leaderboard(game, period) { return rpc("ss_leaderboard", { p_game: game, p_period: period }); }
  function hall() { return rpc("ss_hall"); }

  window.Acct = {
    enabled: enabled, AVATARS: AVATARS, ADJ: ADJ, NOUN: NOUN, avatar: avatar, randomName: randomName, rankInfo: rankInfo,
    get user() { return user; }, hasStored: hasStored, init: function () { return enabled ? ensure().catch(function () {}) : Promise.resolve(); },
    onChange: onChange, signUp: signUp, logIn: logIn, logOut: logOut, deleteMe: deleteMe, refreshMe: refreshMe,
    log: log, submitScore: submitScore, leaderboard: leaderboard, hall: hall, progress: progress, rpc: rpc
  };
})();
