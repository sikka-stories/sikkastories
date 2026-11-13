/* Sends a visitor from a share page to the book. The book is named by this file's own name. */
(function () {
  var slug = location.pathname.split("/").pop().replace(/\.html$/, "");
  var l = new URLSearchParams(location.search).get("lang");
  var u = "../book.html?b=" + encodeURIComponent(slug) + (l ? "&lang=" + encodeURIComponent(l) : "");
  var a = document.getElementById("go");
  if (a) a.href = u;
  location.replace(u);
})();
