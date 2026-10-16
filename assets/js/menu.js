/* Menu overlay, scroll locking, in-page navigation and language buttons. */
(function () {
  var ST = window.ST;
  var menu = document.querySelector('[data-menu]');

  /* Scroll lock shared by the menu and both popups */
  ST.locks = {};
  ST.lock = function (key, on) {
    ST.locks[key] = on;
    var any = Object.keys(ST.locks).some(function (k) { return ST.locks[k]; });
    if (ST.lenis) { if (any) ST.lenis.stop(); else ST.lenis.start(); }
    document.documentElement.style.overflow = any ? 'hidden' : '';
  };

  ST.scrollToId = function (id) {
    var el = id === 'top' ? null : document.getElementById(id);
    if (ST.lenis) ST.lenis.scrollTo(el || 0, { duration: 1.4 });
    else window.scrollTo({ top: el ? el.getBoundingClientRect().top + window.scrollY : 0, behavior: ST.state.reduced ? 'auto' : 'smooth' });
  };

  ST.setMenu = function (open) {
    menu.hidden = !open;
    document.querySelector('.menu-btn').setAttribute('aria-expanded', String(open));
    ST.lock('menu', open);
  };
  ST.menuOpen = function () { return !menu.hidden; };

  ST.go = function (id) {
    ST.setMenu(false);
    setTimeout(function () { ST.scrollToId(id); }, 30);
  };

  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-menu-toggle]');
    if (t) { ST.setMenu(menu.hidden); return; }
    var g = e.target.closest('[data-go]');
    if (g) { e.preventDefault(); ST.go(g.getAttribute('data-go')); return; }
    var l = e.target.closest('[data-set-lang]');
    if (l) ST.setLang(l.getAttribute('data-set-lang'));
  });
})();
