/* Smooth scroll (Lenis) and all GSAP / ScrollTrigger motion. If a library fails to load, ST.fallback() shows the page without motion. */
(function () {
  var ST = window.ST;

  ST.fallback = function (err) {
    console.warn('[site] animations disabled, showing static page:', err);
    try { if (ST.lenis) { gsap.ticker.remove(ST.tick); ST.lenis.destroy(); ST.lenis = null; } } catch (e) {}
    try { if (ST.ctx) ST.ctx.revert(); } catch (e) {}
    document.documentElement.classList.remove('has-cursor');
    document.documentElement.style.overflow = '';
    document.querySelectorAll('[data-reveal],[data-hero-line],[data-hero-fade],[data-tcard],[data-eye-item],[data-hero-img],[data-fl]').forEach(function (el) { el.style.opacity = ''; el.style.transform = ''; el.style.clipPath = ''; el.style.visibility = ''; });
    document.querySelectorAll('[data-fl]').forEach(function (el) { el.style.transform = 'none'; });
    document.querySelectorAll('[data-step-desc]').forEach(function (el, i) { el.style.gridArea = 'auto'; el.style.opacity = '1'; el.style.transform = 'none'; el.style.marginTop = i ? '12px' : '0'; });
    document.querySelectorAll('[data-step]').forEach(function (el) { el.style.opacity = '1'; });
    var proc = document.querySelector('[data-process]'); if (proc) proc.style.height = 'auto';
    var bar = document.querySelector('[data-step-bar]'); if (bar) bar.style.transform = 'scaleY(1)';
    if (ST.setupWork) ST.setupWork(); // native horizontal swipe so every project stays reachable
  };

  /* Builder's eye: items move at different speeds and wipe in */
  ST.setupEye = function () {
    (ST.eyeTweens || []).forEach(function (t) { if (t.scrollTrigger) t.scrollTrigger.kill(); t.kill(); });
    ST.eyeTweens = [];
    if (ST.state.reduced || !window.gsap) return;
    var sec = document.getElementById('eye');
    var box = document.querySelector(ST.state.narrow ? '[data-eye-narrow]' : '[data-eye-wide]');
    var k = ST.state.narrow ? 0.35 : 1;
    gsap.utils.toArray(box.querySelectorAll('[data-eye-item]')).forEach(function (el) {
      var s = parseFloat(el.getAttribute('data-speed')) || 1;
      var im = el.querySelector('[data-eye-img]');
      ST.eyeTweens.push(gsap.fromTo(el, { y: 180 * s * k }, { y: -180 * s * k, ease: 'none', scrollTrigger: { trigger: sec, start: 'top bottom', end: 'bottom top', scrub: 0.6 } }));
      ST.eyeTweens.push(gsap.fromTo(el, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 105%', end: 'top 55%', scrub: 0.6 } }));
      if (im) ST.eyeTweens.push(gsap.fromTo(im, { yPercent: -7, scale: 1.12 }, { yPercent: 7, scale: 1, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 0.6 } }));
    });
  };

  function build() {
    var STg = window.ScrollTrigger;
    var qa = function (s) { return gsap.utils.toArray(s); };
    if (!ST.state.reduced && window.Lenis) {
      ST.lenis = new window.Lenis({ duration: 1.15, easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); } });
      ST.lenis.on('scroll', STg.update);
      ST.tick = function (t) { ST.lenis.raf(t * 1000); };
      gsap.ticker.add(ST.tick); gsap.ticker.lagSmoothing(0);
    }

    /* How we work: active step follows scroll */
    var steps = qa('[data-step]'), descs = qa('[data-step-desc]'), bar = document.querySelector('[data-step-bar]');
    var cur = -1;
    var setStep = function (i) {
      if (i === cur) return; cur = i;
      steps.forEach(function (s, j) { gsap.to(s, { opacity: j === i ? 1 : 0.4, x: j === i ? 8 : 0, duration: ST.state.reduced ? 0 : 0.5, overwrite: true }); });
      descs.forEach(function (d, j) { gsap.to(d, { opacity: j === i ? 1 : 0, y: j === i ? 0 : (j < i ? -12 : 12), duration: ST.state.reduced ? 0 : 0.5, overwrite: true }); });
    };
    setStep(0);
    var n = steps.length;
    STg.create({ trigger: '[data-process]', start: 'top top', end: 'bottom bottom', onUpdate: function (s) { setStep(Math.min(n - 1, Math.floor(s.progress * n))); if (bar) bar.style.transform = 'scaleY(' + s.progress + ')'; } });

    if (ST.state.reduced) return;

    /* Hero entrance + scroll parallax */
    gsap.timeline({ defaults: { ease: 'expo.out' } })
      .fromTo('[data-hero-img]', { scale: 1.12 }, { scale: 1, duration: 2.4 }, 0)
      .fromTo('[data-hero-line]', { yPercent: 105 }, { yPercent: 0, duration: 1.3, stagger: 0.1 }, 0.2)
      .fromTo('[data-hero-fade]', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 1, stagger: 0.08 }, 0.6);
    gsap.to('[data-hero-scroll]', { yPercent: 12, ease: 'none', scrollTrigger: { trigger: '#top', start: 'top top', end: 'bottom top', scrub: true } });

    /* Slow drift on hero and kitchen photos */
    qa('[data-drift="1"]').forEach(function (el, i) {
      gsap.fromTo(el, { scale: 1.03, xPercent: -1, yPercent: 0.6 }, { scale: 1.08, xPercent: 1, yPercent: -0.6, duration: 13 + (i % 4) * 1.6, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: -(i * 2.3) });
    });

    /* Hero mouse parallax (fine pointers only) */
    var hero = document.querySelector('[data-hero]'), mv = document.querySelector('[data-hero-move]'), tx = document.querySelector('[data-hero-text]');
    if (ST.state.fine && hero && mv && tx) {
      var mx = gsap.quickTo(mv, 'x', { duration: 1.4, ease: 'power3.out' }), my = gsap.quickTo(mv, 'y', { duration: 1.4, ease: 'power3.out' }), ms = gsap.quickTo(mv, 'scale', { duration: 1.6, ease: 'power3.out' });
      var tX = gsap.quickTo(tx, 'x', { duration: 1.1, ease: 'power3.out' }), tY = gsap.quickTo(tx, 'y', { duration: 1.1, ease: 'power3.out' });
      hero.addEventListener('mousemove', function (e) {
        var r = hero.getBoundingClientRect(), nx = (e.clientX - r.left) / r.width - 0.5, ny = (e.clientY - r.top) / r.height - 0.5;
        mx(-nx * 36); my(-ny * 24); ms(1.05 + Math.min(0.03, Math.hypot(nx, ny) * 0.05)); tX(nx * 10); tY(ny * 7);
      });
      hero.addEventListener('mouseleave', function () { mx(0); my(0); ms(1.05); tX(0); tY(0); });
    }

    /* Panels: photo settles and + rotates as each panel arrives */
    qa('[data-panel]').forEach(function (p) {
      var im = p.querySelector('[data-panel-img]'), plus = p.querySelector('[data-plus]');
      if (im) gsap.fromTo(im, { scale: 1.18 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: p, start: 'top bottom', end: 'top top', scrub: true } });
      if (plus) gsap.fromTo(plus, { rotate: -90 }, { rotate: 0, ease: 'none', scrollTrigger: { trigger: p, start: 'top bottom', end: 'top top', scrub: true } });
    });
    var pi = document.querySelector('[data-process-img]');
    if (pi) gsap.fromTo(pi, { scale: 1.15 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: '[data-process]', start: 'top top', end: 'bottom bottom', scrub: true } });

    /* Reveal on scroll (only for content below the first screen) */
    qa('[data-reveal]').forEach(function (el) {
      if (el.getBoundingClientRect().top < window.innerHeight) return;
      gsap.set(el, { y: 40, opacity: 0 });
      STg.create({ trigger: el, start: 'top 92%', once: true, onEnter: function () { gsap.to(el, { y: 0, opacity: 1, duration: 1.1, ease: 'expo.out' }); } });
    });
    var cards = qa('[data-tcard]');
    if (cards.length) {
      gsap.set(cards, ST.state.narrow ? { y: 40, opacity: 0 } : { x: 90, opacity: 0 });
      STg.create({ trigger: '#reviews', start: 'top 70%', once: true, onEnter: function () { gsap.to(ST.state.narrow ? cards : cards.slice().reverse(), { x: 0, y: 0, opacity: 1, duration: 1.2, ease: 'expo.out', stagger: 0.14 }); } });
    }

    /* Quote panel frame draws itself */
    var fl = qa('[data-fl]');
    if (fl.length) STg.create({ trigger: '[data-qpanel]', start: 'top 80%', once: true, onEnter: function () { gsap.to(fl, { scaleX: 1, scaleY: 1, duration: 0.9, ease: 'power3.inOut', stagger: 0.22, delay: 0.3 }); } });

    /* Latest updates: floating preview follows the pointer */
    var float = document.querySelector('[data-float]'), fimg = document.querySelector('[data-float-img]'), upd = document.querySelector('[data-updates]');
    if (float && ST.state.fine) {
      var fx = gsap.quickTo(float, 'x', { duration: 0.5, ease: 'power3.out' }), fy = gsap.quickTo(float, 'y', { duration: 0.5, ease: 'power3.out' });
      upd.addEventListener('mousemove', function (e) { fx(e.clientX + 24); fy(e.clientY - 120); });
      upd.querySelectorAll('[data-urow]').forEach(function (row) {
        row.addEventListener('mouseenter', function () {
          var u = ST.data.updates[+row.getAttribute('data-index')];
          fimg.src = ST.data.images[u.img].src; fimg.style.objectPosition = u.pos;
          gsap.to(float, { opacity: 1, duration: 0.3 });
        });
      });
    }
    if (float) upd.addEventListener('mouseleave', function () { gsap.to(float, { opacity: 0, duration: 0.3 }); });

    var refresh = function () { STg.refresh(); };
    if (document.fonts) document.fonts.ready.then(refresh);
    window.addEventListener('load', refresh);
  }

  ST.initAnimations = function () {
    gsap.registerPlugin(window.ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true }); // address-bar show/hide no longer re-lays out pinned sections
    // Safety net: if GSAP's ticker is not running (e.g. a frozen tab), make hidden content visible
    setTimeout(function () { if (gsap.ticker.frame < 20) gsap.set('[data-reveal],[data-hero-line],[data-hero-fade],[data-tcard],[data-eye-item]', { clearProps: 'all' }); }, 2500);
    ST.ctx = gsap.context(build);
    ST.setupEye();
    ST.setupWork();
    ST.setupCursor();
  };
})();
