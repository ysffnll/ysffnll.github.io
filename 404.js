// Picks the language of the 404 page: the language entry in the path (/en/…), the studio's saved choice, then the browser's language.
// Without this script all three languages show.
(function () {
  var root = document.documentElement, pick = null;
  var fromPath = /^\/(tr|en|es)(?:\/|$)/.exec(location.pathname);
  if (fromPath) pick = fromPath[1];
  if (!pick) { try { var saved = localStorage.getItem('moryuna.locale.v1'); if (saved === 'tr' || saved === 'en' || saved === 'es') pick = saved; } catch (error) { /* no storage */ } }
  if (!pick) {
    var langs = navigator.languages || [navigator.language];
    for (var i = 0; i < langs.length && !pick; i++) { var code = String(langs[i] || '').slice(0, 2).toLowerCase(); if (code === 'tr' || code === 'en' || code === 'es') pick = code; }
  }
  pick = pick || 'tr';
  root.setAttribute('lang', pick);
  root.setAttribute('data-pick', pick);
})();
