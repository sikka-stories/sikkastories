/* The games. Each one gives a function that returns the next question:
   { html: the prompt, opts: [{ label, ok }], wide: true for long answers, svg: optional picture }.
   Everything shown is built from fixed lists or from the books, so nothing comes from other players. */
(function () {
  function mulberry(seed) {
    return function () {
      seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
      var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function hash(str) { var h = 2166136261; for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function pick(a, r) { return a[Math.floor(r() * a.length)]; }
  function shuffle(a, r) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(r() * (i + 1)); var x = a[i]; a[i] = a[j]; a[j] = x; } return a; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function today() { return new Date(Date.now() + 5.5 * 3600 * 1000).toISOString().slice(0, 10); }

  /* ---------- Need or want ---------- */
  var NW = [
    ["Rice and dal", "चावल और दाल", "भात आणि वरण", "need"], ["Clean drinking water", "साफ़ पीने का पानी", "स्वच्छ पिण्याचं पाणी", "need"],
    ["School uniform", "स्कूल की यूनिफ़ॉर्म", "शाळेचा गणवेश", "need"], ["Medicine when sick", "बीमारी में दवा", "आजारपणात औषध", "need"],
    ["Notebooks for school", "स्कूल की कॉपियाँ", "शाळेच्या वह्या", "need"], ["A warm blanket in winter", "सर्दी में गरम कंबल", "थंडीत उबदार ब्लँकेट", "need"],
    ["Soap to wash hands", "हाथ धोने का साबुन", "हात धुण्याचा साबण", "need"], ["Electricity bill", "बिजली का बिल", "वीज बिल", "need"],
    ["Bus fare to school", "स्कूल जाने का बस किराया", "शाळेत जाण्यासाठी बसचं भाडं", "need"], ["Fresh vegetables", "ताज़ी सब्ज़ियाँ", "ताज्या भाज्या", "need"],
    ["Spectacles for weak eyes", "कमज़ोर आँखों के लिए चश्मा", "कमजोर डोळ्यांसाठी चष्मा", "need"],
    ["Video game", "वीडियो गेम", "व्हिडिओ गेम", "want"], ["Ice cream", "आइसक्रीम", "आइस्क्रीम", "want"],
    ["Fancy sneakers", "महंगे स्पोर्ट्स जूते", "महागडे स्पोर्ट्स शूज", "want"], ["Movie ticket", "फ़िल्म का टिकट", "चित्रपटाचं तिकीट", "want"],
    ["Cold drink", "कोल्ड ड्रिंक", "कोल्ड ड्रिंक", "want"], ["Remote-control car", "रिमोट वाली कार", "रिमोटवरची गाडी", "want"],
    ["Birthday party decorations", "जन्मदिन की सजावट", "वाढदिवसाची सजावट", "want"], ["Stickers and gel pens", "स्टिकर और जेल पेन", "स्टिकर्स आणि जेल पेन", "want"],
    ["A new phone cover", "फ़ोन का नया कवर", "फोनचं नवं कव्हर", "want"], ["Chocolate", "चॉकलेट", "चॉकलेट", "want"],
    ["One more toy", "एक और खिलौना", "आणखी एक खेळणं", "want"], ["Buying a gaming skin", "गेम की स्किन ख़रीदना", "गेममधली स्किन विकत घेणं", "want"]
  ];
  /* ---------- Scam or safe ---------- */
  var SS = [
    ["You won a lottery! Send ₹500 to get your prize.", "आपने लॉटरी जीती है! इनाम पाने के लिए ₹500 भेजें।", "तुम्ही लॉटरी जिंकली आहे! बक्षीस मिळवण्यासाठी ₹500 पाठवा.", "scam"],
    ["Your bank account will close today. Tell us your OTP now.", "आपका बैंक खाता आज बंद हो जाएगा। अभी अपना OTP बताइए।", "तुमचं बँक खातं आज बंद होईल. आत्ताच तुमचा OTP सांगा.", "scam"],
    ["Click this link to get a free phone. Only today!", "मुफ़्त फ़ोन पाने के लिए इस लिंक पर क्लिक करें। सिर्फ़ आज!", "मोफत फोन मिळवण्यासाठी या लिंकवर क्लिक करा. फक्त आजच!", "scam"],
    ["I am from the bank. Share your ATM PIN to fix a problem.", "मैं बैंक से बोल रहा हूँ। समस्या ठीक करने के लिए अपना ATM पिन बताइए।", "मी बँकेतून बोलतोय. समस्या सोडवण्यासाठी तुमचा ATM पिन सांगा.", "scam"],
    ["Send ₹1 to a stranger to get ₹100 back.", "अजनबी को ₹1 भेजिए और ₹100 वापस पाइए।", "अनोळखी व्यक्तीला ₹1 पाठवा आणि ₹100 परत मिळवा.", "scam"],
    ["Scan this QR code to RECEIVE money.", "पैसे पाने के लिए यह QR कोड स्कैन करें।", "पैसे मिळवण्यासाठी हा QR कोड स्कॅन करा.", "scam"],
    ["Your parcel is stuck. Pay ₹30 at this link to release it.", "आपका पार्सल अटका है। छुड़ाने के लिए इस लिंक पर ₹30 दीजिए।", "तुमचं पार्सल अडकलं आहे. सोडवण्यासाठी या लिंकवर ₹30 भरा.", "scam"],
    ["Install this app so I can see your screen and help you.", "यह ऐप डाउनलोड करें ताकि मैं आपकी स्क्रीन देखकर मदद कर सकूँ।", "हे अ‍ॅप डाउनलोड करा, म्हणजे मी तुमची स्क्रीन पाहून मदत करू शकेन.", "scam"],
    ["Mom: Please buy 1 kg of rice on your way home.", "मम्मी: घर आते समय 1 किलो चावल ले आना।", "आई: घरी येताना 1 किलो तांदूळ आण.", "safe"],
    ["Bank: ₹200 was spent at the canteen with your card. If it was you, nothing to do.", "बैंक: कैंटीन में आपके कार्ड से ₹200 ख़र्च हुए। अगर आपने किए हैं, तो कुछ करने की ज़रूरत नहीं।", "बँक: कँटीनमध्ये तुमच्या कार्डवरून ₹200 खर्च झाले. तुम्ही केले असतील तर काही करण्याची गरज नाही.", "safe"],
    ["Teacher: The trip fee is ₹300. Please give it to me in school.", "टीचर: ट्रिप की फ़ीस ₹300 है। कृपया स्कूल में मुझे दे दीजिए।", "शिक्षक: सहलीची फी ₹300 आहे. कृपया शाळेत मला द्या.", "safe"],
    ["Your OTP is 4821. Do not share it with anyone.", "आपका OTP 4821 है। इसे किसी को न बताएँ।", "तुमचा OTP 4821 आहे. तो कोणालाही सांगू नका.", "safe"],
    ["Friend: Let's study maths together after school.", "दोस्त: स्कूल के बाद साथ में गणित पढ़ते हैं।", "मित्र: शाळेनंतर एकत्र गणित शिकूया.", "safe"],
    ["Shop bill: ₹120 paid in cash. Thank you!", "दुकान का बिल: ₹120 नकद चुकाए। धन्यवाद!", "दुकानाचं बिल: ₹120 रोख दिले. धन्यवाद!", "safe"],
    ["Dad: I will pay the shopkeeper myself when we reach.", "पापा: पहुँचकर मैं ख़ुद दुकानदार को पैसे दे दूँगा।", "बाबा: पोहोचल्यावर मी स्वतः दुकानदाराला पैसे देईन.", "safe"],
    ["Library: Your book is due on Friday.", "लाइब्रेरी: आपकी किताब शुक्रवार तक लौटानी है।", "ग्रंथालय: तुमचं पुस्तक शुक्रवारपर्यंत परत करायचं आहे.", "safe"]
  ];
  var LI = { en: 0, hi: 1, mr: 2 };

  /* ---------- Quiz pool, taken from the books themselves ---------- */
  function quizPool(lang, tpl) {
    var out = [];
    window.BOOKS.forEach(function (b) {
      if (b.status !== "live" || !b.recap || !b.recap[lang]) return;
      var r = b.recap[lang];
      (r.tf || []).forEach(function (it) { out.push({ q: tpl(it.q), opts: [window.UI[lang].tru, window.UI[lang].fls], ok: it.a ? 0 : 1 }); });
      (r.think || []).forEach(function (it) { out.push({ q: tpl(it.q), opts: it.opts.map(tpl), ok: it.a }); });
    });
    return out;
  }
  function quizQ(item, r) {
    var idx = item.opts.map(function (o, i) { return { label: o, ok: i === item.ok }; });
    return { html: esc(item.q), opts: item.opts.length > 2 ? shuffle(idx, r) : idx, wide: item.opts.some(function (o) { return o.length > 18; }) };
  }

  /* ---------- Coins and notes picture ---------- */
  var COINS = [1, 2, 5, 10], NOTES = [10, 20, 50], NOTECOL = { 10: "#c9a66b", 20: "#f2a65a", 50: "#7fb8e6" };
  function moneySvg(items) {
    var x = 8, y = 10, parts = [], rowh = 0, W = 320;
    items.forEach(function (it) {
      var w = it.note ? 70 : 46, h = it.note ? 42 : 46;
      if (x + w > W - 4) { x = 8; y += rowh + 8; rowh = 0; }
      rowh = Math.max(rowh, h);
      if (it.note) parts.push('<rect x="' + x + '" y="' + y + '" width="70" height="42" rx="5" fill="' + NOTECOL[it.v] + '" stroke="#2b2d42" stroke-width="3"/><text x="' + (x + 35) + '" y="' + (y + 28) + '" text-anchor="middle" font-size="20" font-weight="700" fill="#2b2d42">₹' + it.v + "</text>");
      else parts.push('<circle cx="' + (x + 23) + '" cy="' + (y + 23) + '" r="21" fill="#f4c542" stroke="#2b2d42" stroke-width="3"/><text x="' + (x + 23) + '" y="' + (y + 30) + '" text-anchor="middle" font-size="20" font-weight="700" fill="#2b2d42">' + it.v + "</text>");
      x += w + 8;
    });
    var H = y + rowh + 10;
    return '<svg viewBox="0 0 ' + W + " " + H + '" class="moneysvg" role="img" aria-label="' + esc(items.map(function (i) { return "₹" + i.v + (i.note ? " note" : " coin"); }).join(", ")) + '">' + parts.join("") + "</svg>";
  }
  function distract(correct, r, deltas) {
    var out = [correct], tries = 0;
    var pool = shuffle(deltas, r);
    for (var i = 0; i < pool.length && out.length < 4; i++) { var v = correct + pool[i]; if (v > 0 && out.indexOf(v) < 0) out.push(v); }
    while (out.length < 4 && tries++ < 20) { var w = correct + 1 + Math.floor(r() * 12); if (out.indexOf(w) < 0) out.push(w); }
    return shuffle(out, r);
  }

  /* make(id, ctx) returns next(); ctx = { lang, t, u, tpl, rand } */
  function make(id, ctx) {
    var r = ctx.rand || Math.random, u = ctx.u, t = ctx.t, L = LI[ctx.lang], last = -1;
    function fresh(n) { var k; do { k = Math.floor(r() * n); } while (k === last && n > 1); last = k; return k; }
    if (id === "quiz-sprint") {
      var pool = quizPool(ctx.lang, ctx.tpl);
      return function () { return quizQ(pool[fresh(pool.length)], r); };
    }
    if (id === "need-or-want") {
      return function () {
        var it = NW[fresh(NW.length)];
        return { html: '<span class="big">' + esc(it[L]) + "</span>", opts: [{ label: t.need, ok: it[3] === "need" }, { label: t.want, ok: it[3] === "want" }] };
      };
    }
    if (id === "scam-or-safe") {
      return function () {
        var it = SS[fresh(SS.length)];
        return { html: '<span class="bubble">' + esc(it[L]) + "</span>", opts: [{ label: u.scam, ok: it[3] === "scam" }, { label: u.safe, ok: it[3] === "safe" }] };
      };
    }
    if (id === "right-change") {
      return function () {
        var price = 6 + Math.floor(r() * 93), pays = [50, 100, 200, 500].filter(function (p) { return p > price; });
        var pay = pick(pays.slice(0, 2), r), ch = pay - price;
        var vals = distract(ch, r, [-10, 10, -5, 5, -1, 1, -20, 20]);
        return { html: esc(u.q_change.replace("{pay}", "₹" + pay).replace("{price}", "₹" + price)), opts: vals.map(function (v) { return { label: "₹" + v, ok: v === ch }; }) };
      };
    }
    if (id === "coin-count") {
      return function () {
        var items, total;
        do {
          var n = 2 + Math.floor(r() * 4); items = []; total = 0;
          for (var i = 0; i < n; i++) { var note = r() < 0.3, v = note ? pick(NOTES, r) : pick(COINS, r); items.push({ v: v, note: note }); total += v; }
        } while (total > 100);
        var vals = distract(total, r, [-1, 1, -2, 2, -5, 5, -10, 10]);
        return { html: esc(u.q_coin), svg: moneySvg(items), opts: vals.map(function (v) { return { label: "₹" + v, ok: v === total }; }) };
      };
    }
    if (id === "best-buy") {
      return function () {
        var qs = [100, 200, 250, 500, 1000], us = [0.08, 0.1, 0.12, 0.15, 0.2, 0.25, 0.3, 0.4], fs = [0.8, 0.88, 1.12, 1.2, 1.3], unit = r() < 0.5 ? "g" : "ml", a, b, tries = 0;
        do {
          var base = pick(us, r), qa = pick(qs, r), qb = pick(qs, r);
          a = { q: qa, p: Math.max(2, Math.round(qa * base)) }; b = { q: qb, p: Math.max(2, Math.round(qb * base * pick(fs, r))) };
        } while ((a.q === b.q || Math.abs((a.p / a.q) / (b.p / b.q) - 1) < 0.08) && tries++ < 50);
        var aBetter = a.p / a.q < b.p / b.q;
        function lab(x, name) { return u.pack + " " + name + ": " + x.q + " " + unit + " · ₹" + x.p; }
        return { html: esc(u.q_best), wide: true, opts: [{ label: lab(a, "A"), ok: aBetter }, { label: lab(b, "B"), ok: !aBetter }] };
      };
    }
    return null;
  }

  /* Five fixed questions for the whole day, the same for every player. */
  function daily(lang, tpl) {
    var pool = quizPool(lang, tpl), r = mulberry(hash("sikka-" + today())), chosen = [], used = {};
    while (chosen.length < 5 && chosen.length < pool.length) { var i = Math.floor(r() * pool.length); if (!used[i]) { used[i] = 1; chosen.push(quizQ(pool[i], r)); } }
    return chosen;
  }

  window.Games = { make: make, daily: daily, today: today, order: ["quiz-sprint", "daily-quiz", "need-or-want", "right-change", "best-buy", "scam-or-safe", "coin-count"] };
})();
