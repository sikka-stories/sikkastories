(function () {
  var lang = App.getLang(), t = UI[lang];
  App.chrome(lang);
  var a = { title: t.about.title, items: t.about.items.slice() };
  /* The accounts paragraph is shown only when online features are switched on, so the page always tells the truth. */
  if (window.Acct && Acct.enabled && t.aboutAcct) a.items.splice(3, 0, t.aboutAcct);
  document.title = a.title + " | " + SITE.name[lang];
  document.getElementById("about").innerHTML = "<h1>" + App.esc(a.title) + "</h1>" + a.items.map(function (it) {
    return "<h2>" + App.esc(it[0]) + "</h2><p>" + App.esc(it[1]) + "</p>";
  }).join("");
  var fb = SITE.feedback || "";
  if (/^https?:\/\//.test(fb)) {
    var last = document.querySelector("#about p:last-child");
    last.innerHTML += ' <a href="' + App.esc(fb) + '" target="_blank" rel="noopener">' + App.esc(t.feedbackLink) + "</a>";
  }
  var fp = document.createElement("p");
  fp.innerHTML = '<a class="btn" href="flyer.html?lang=' + lang + '">' + App.esc(UI2[lang].flyerLink) + "</a>";
  document.getElementById("about").appendChild(fp);
  document.getElementById("back").textContent = "← " + t.back;
  document.getElementById("back").href = "index.html?lang=" + lang;
})();
