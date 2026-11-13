(function () {
  var lang = App.getLang(), esc = App.esc;
  App.chrome(lang);
  var L = ["en", "hi", "mr"];
  document.title = UI2[lang].flyerLink + " | " + SITE.name[lang];
  var url = "https://sikka-stories.github.io/sikkastories/";
  document.getElementById("flyer").innerHTML =
    '<div class="fbrand">' + L.map(function (l) { return esc(SITE.name[l]); }).join(" &middot; ") + "</div>" +
    L.map(function (l) { return '<div class="fblock" lang="' + l + '"><h1>' + esc(UI2[l].flyerHead) + "</h1><p>" + esc(UI2[l].flyerSub) + "</p></div>"; }).join("") +
    '<img class="fqr" src="' + QRSRC("home") + '" width="220" height="220" alt="QR code for ' + esc(url) + '">' +
    '<p class="fscan">' + L.map(function (l) { return esc(UI2[l].flyerScan); }).join(" &middot; ") + "</p>" +
    '<p class="furl">' + esc(url.replace("https://", "")) + "</p>" +
    '<p class="fby">' + esc(SITE.credit.en) + "</p>";
  document.getElementById("fprint").textContent = UI2[lang].flyerPrint;
  document.getElementById("fprint").addEventListener("click", function () { window.print(); });
  document.getElementById("fback").textContent = "← " + UI[lang].back;
  document.getElementById("fback").href = "index.html?lang=" + lang;
})();
