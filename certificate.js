(function () {
  var lang = App.getLang(), t = UI[lang], u = UI2[lang], esc = App.esc;
  App.chrome(lang);
  document.title = u.certTitle + " | " + SITE.name[lang];
  var n = App.getStamps().filter(function (s) { return BOOKS.some(function (b) { return b.slug === s; }); }).length;
  var host = document.getElementById("cert");
  document.getElementById("cprint").textContent = u.certBtn;
  document.getElementById("cprint").addEventListener("click", function () { window.print(); });
  document.getElementById("cback").textContent = "← " + u.certBack;
  document.getElementById("cback").href = "index.html?lang=" + lang;
  if (n < 5) {
    host.innerHTML = "<p>" + esc(u.certNone) + "</p>";
    document.getElementById("cprint").hidden = true;
    return;
  }
  var tier = n >= 30 ? 3 : n >= 20 ? 2 : n >= 10 ? 1 : 0;
  var hero = App.readHero(lang);
  var d = new Date();
  var date = d.toLocaleDateString(lang === "en" ? "en-IN" : lang + "-IN", { day: "numeric", month: "long", year: "numeric" });
  host.innerHTML = '<section class="certificate" aria-label="' + esc(u.certTitle) + '"><div class="cin">' +
    '<div class="cseal" aria-hidden="true">&#9733;</div>' +
    "<h1>" + esc(u.certTitle) + "</h1>" +
    '<p class="ctier">' + esc(u.certTiers[tier]) + "</p>" +
    '<p class="cthis">' + esc(u.certThis) + "</p>" +
    '<p class="cname">' + esc(hero ? hero.name : u.friend) + "</p>" +
    '<p class="ctext">' + esc(u.certText.replace("{n}", n)) + "</p>" +
    '<p class="cdate">' + esc(u.certDate) + ": " + esc(date) + "</p>" +
    '<p class="cby">' + esc(SITE.name[lang]) + " &middot; " + esc(SITE.credit[lang] || "") + "</p>" +
    "</div></section>";
})();
