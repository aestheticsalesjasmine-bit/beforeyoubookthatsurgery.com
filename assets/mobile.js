/* BYBTS mobile menu · 2026-09-29. Delegated so it survives re-renders. */
(function () {
  var root = document.documentElement;
  var mq = window.matchMedia('(max-width: 900px)');
  var FOCUSABLE = 'a[href],button:not([disabled]),select,input,textarea,[tabindex]:not([tabindex="-1"])';
  function current() {
    var id = root.getAttribute('data-nav-open');
    return id ? document.querySelector('[data-nav-toggle][aria-controls="' + id + '"]') : null;
  }
  function panelOf(btn) { return document.getElementById(btn.getAttribute('aria-controls')); }
  function open(btn) {
    root.setAttribute('data-nav-open', btn.getAttribute('aria-controls'));
    btn.setAttribute('aria-expanded', 'true');
    var p = panelOf(btn), f = p && p.querySelector(FOCUSABLE);
    if (f) setTimeout(function () { f.focus(); }, 0);
  }
  function close(btn, refocus) {
    root.removeAttribute('data-nav-open');
    if (!btn) return;
    btn.setAttribute('aria-expanded', 'false');
    if (refocus) btn.focus();
  }
  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('[data-nav-toggle]');
    if (t) { e.preventDefault(); current() ? close(t, true) : open(t); return; }
    var b = current();
    if (b && e.target.closest('#' + b.getAttribute('aria-controls') + ' a')) close(b, false);
  });
  document.addEventListener('keydown', function (e) {
    var b = current();
    if (!b) return;
    if (e.key === 'Escape') { e.preventDefault(); close(b, true); return; }
    if (e.key !== 'Tab') return;
    var p = panelOf(b);
    var items = [b].concat(Array.prototype.slice.call(p ? p.querySelectorAll(FOCUSABLE) : []));
    var first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    else if (items.indexOf(document.activeElement) < 0) { e.preventDefault(); first.focus(); }
  });
  var onChange = function () { if (!mq.matches) close(current(), false); };
  mq.addEventListener ? mq.addEventListener('change', onChange) : mq.addListener(onChange);
})();
