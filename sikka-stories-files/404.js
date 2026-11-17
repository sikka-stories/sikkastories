/* If a shared link such as /s/money-swap.html is not found, send the visitor to that book instead of an error page. */
(function () {
  var p = location.pathname, q = new URLSearchParams(location.search), l = q.get("lang");
  var lang = l && /^[a-z]{2}$/.test(l) ? l : "";
  var m = p.match(/^(.*\/)s\/([a-z0-9-]+)\.html$/);
  if (m) {
    if (m[2] === "index") location.replace(m[1] + "index.html" + (lang ? "?lang=" + lang : ""));
    else location.replace(m[1] + "book.html?b=" + encodeURIComponent(m[2]) + (lang ? "&lang=" + lang : ""));
    return;
  }
  var d = p.match(/^(.*\/)s\/?$/);
  if (d) location.replace(d[1] + "index.html");
})();
