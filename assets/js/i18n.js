/* Language switching (PT / EN).
 * Elements declare what they show:
 *   data-t="ui.menu"                  -> textContent
 *   data-t-attr="placeholder:ui.phName;aria-label:ui.lang" -> attributes
 *   data-t-list="panels.0.materials"  -> <li> per array item
 *   data-t-join="work.0.materials"    -> first three items joined with " · "
 * Paths resolve against ST.data.i18n[current language].
 */
(function () {
  var ST = window.ST;
  ST.state = ST.state || {};

  function get(obj, path) {
    return path.split('.').reduce(function (o, k) { return o == null ? undefined : o[k]; }, obj);
  }
  ST.t = function (path) { return get(ST.data.i18n[ST.state.lang], path); };

  function initialLang() {
    try { var l = localStorage.getItem('st-lang'); if (l === 'pt' || l === 'en') return l; } catch (e) {}
    return 'pt';
  }
  ST.state.lang = initialLang();

  ST.applyLang = function () {
    document.querySelectorAll('[data-t]').forEach(function (el) {
      var v = ST.t(el.getAttribute('data-t'));
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll('[data-t-attr]').forEach(function (el) {
      el.getAttribute('data-t-attr').split(';').forEach(function (pair) {
        var i = pair.indexOf(':'), v = ST.t(pair.slice(i + 1).trim());
        if (v != null) el.setAttribute(pair.slice(0, i).trim(), v);
      });
    });
    document.querySelectorAll('[data-t-list]').forEach(function (el) {
      var arr = ST.t(el.getAttribute('data-t-list')) || [];
      el.textContent = '';
      arr.forEach(function (s) { var li = document.createElement('li'); li.textContent = s; el.appendChild(li); });
    });
    document.querySelectorAll('[data-t-join]').forEach(function (el) {
      el.textContent = (ST.t(el.getAttribute('data-t-join')) || []).slice(0, 3).join(' · ');
    });
    document.documentElement.lang = ST.state.lang;
    document.querySelectorAll('[data-set-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-set-lang') === ST.state.lang));
    });
    document.dispatchEvent(new CustomEvent('st:lang'));
  };

  ST.setLang = function (l) {
    ST.state.lang = l;
    try { localStorage.setItem('st-lang', l); } catch (e) {}
    ST.applyLang();
    if (window.ScrollTrigger) setTimeout(function () { window.ScrollTrigger.refresh(); }, 80);
  };
})();
