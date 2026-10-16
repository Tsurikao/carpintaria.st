/* "Everything in wood" panels: the + button and "Materials, timing…" link open the details layer. */
(function () {
  var ST = window.ST;
  ST.state.openPanel = null;

  ST.syncPanels = function () {
    document.querySelectorAll('[data-panel]').forEach(function (p, i) {
      var open = ST.state.openPanel === i;
      p.classList.toggle('is-open', open);
      p.querySelector('.panel-details').setAttribute('aria-hidden', String(!open));
      var plus = p.querySelector('[data-plus]');
      plus.setAttribute('aria-expanded', String(open));
      plus.setAttribute('aria-label', (open ? 'Close ' : 'Open ') + ST.t('panels.' + i + '.title') + ' details');
    });
  };

  ST.setPanel = function (i) { ST.state.openPanel = i; ST.syncPanels(); };

  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-panel-toggle]');
    if (!b) return;
    var i = +b.closest('[data-panel]').getAttribute('data-index');
    ST.setPanel(ST.state.openPanel === i ? null : i);
  });
  document.addEventListener('st:lang', ST.syncPanels);
})();
