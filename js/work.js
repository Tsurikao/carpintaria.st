/* Selection of our work: hover overlay, horizontal scroll with parallax, and the project popup with photo gallery. */
(function () {
  var ST = window.ST, D = ST.data;
  var modal = document.querySelector('[data-proj]');
  ST.state.proj = null;
  ST.state.gi = 0;

  function gallery(i) {
    return D.work[i].gallery.map(function (g) { var im = D.images[g.img]; return { src: im.src, alt: im.alt, pos: g.pos, z: g.zoom }; });
  }

  /* ---------- Popup ---------- */
  function renderProj() {
    var i = ST.state.proj;
    if (i === null) return;
    var w = ST.t('work.' + i), G = gallery(i), gi = ST.state.gi;
    var slides = modal.querySelector('[data-proj-slides]'), thumbs = modal.querySelector('[data-proj-thumbs]');
    modal.setAttribute('aria-label', w.title);
    if (slides.getAttribute('data-for') !== String(i)) {
      slides.innerHTML = G.map(function (im) { return '<img class="proj-slide" src="' + im.src + '" alt="" style="object-position:' + im.pos + ';transform-origin:' + im.pos + '">'; }).join('');
      thumbs.innerHTML = G.map(function (im, k) { return '<button type="button" class="gal-thumb" data-thumb="' + k + '"><img src="' + im.src + '" alt="" style="object-position:' + im.pos + '"></button>'; }).join('');
      slides.setAttribute('data-for', String(i));
    }
    slides.querySelectorAll('img').forEach(function (el, k) {
      var on = k === gi;
      el.classList.toggle('is-on', on);
      el.alt = on ? G[k].alt : '';
      if (on) el.removeAttribute('aria-hidden'); else el.setAttribute('aria-hidden', 'true');
      el.style.transform = 'scale(' + G[k].z * (on ? 1 : 1.06) + ')';
    });
    thumbs.querySelectorAll('button').forEach(function (b, k) {
      b.setAttribute('aria-pressed', String(k === gi));
      b.setAttribute('aria-label', ST.t('ui.photo') + ' ' + (k + 1));
    });
    modal.querySelector('[data-proj-count]').textContent = (gi + 1) + ' / ' + G.length;
    modal.querySelector('[data-proj-meta]').textContent = w.meta;
    modal.querySelector('[data-proj-title]').textContent = w.title;
    modal.querySelector('[data-proj-desc]').textContent = w.desc;
    modal.querySelector('[data-proj-time]').textContent = w.time;
    [['[data-proj-materials]', w.materials], ['[data-proj-scope]', w.scope]].forEach(function (pair) {
      var ul = modal.querySelector(pair[0]); ul.textContent = '';
      pair[1].forEach(function (s) { var li = document.createElement('li'); li.textContent = s; ul.appendChild(li); });
    });
  }

  ST.openProj = function (i) {
    ST.state.proj = i; ST.state.gi = 0;
    renderProj();
    modal.hidden = false;
    ST.lock('proj', true);
  };
  ST.closeProj = function () {
    if (ST.state.proj === null) return;
    ST.state.proj = null;
    modal.hidden = true;
    ST.lock('proj', false);
  };
  ST.stepImg = function (d) {
    if (ST.state.proj === null) return;
    var n = gallery(ST.state.proj).length || 1;
    ST.state.gi = (ST.state.gi + d + n) % n;
    renderProj();
  };

  modal.addEventListener('click', function (e) {
    if (e.target === modal) return ST.closeProj();
    var g = e.target.closest('[data-gal]');
    if (g) return ST.stepImg(+g.getAttribute('data-gal'));
    var th = e.target.closest('[data-thumb]');
    if (th) { ST.state.gi = +th.getAttribute('data-thumb'); return renderProj(); }
    if (e.target.closest('[data-proj-close]')) return ST.closeProj();
    if (e.target.closest('[data-proj-quote]')) {
      e.preventDefault(); ST.closeProj();
      setTimeout(function () { ST.scrollToId('quote'); }, 40);
    }
  });
  document.addEventListener('st:lang', renderProj);

  /* ---------- Cards: click, keyboard, hover overlay ---------- */
  function wOn(e) {
    if (!window.gsap) return;
    var c = e.currentTarget, ov = c.querySelector('[data-ov]'), im = c.querySelector('[data-wimg]');
    if (ov) gsap.to(ov, { y: 0, duration: 0.6, ease: 'expo.out', overwrite: true });
    if (im) gsap.to(im, { scale: 1.06, duration: 1.2, ease: 'expo.out', overwrite: 'auto' });
  }
  function wOff(e) {
    if (!window.gsap) return;
    var c = e.currentTarget, ov = c.querySelector('[data-ov]'), im = c.querySelector('[data-wimg]');
    if (ov) gsap.to(ov, { y: ov.offsetHeight + 2, duration: 0.5, ease: 'power3.inOut', overwrite: true });
    if (im) gsap.to(im, { scale: 1, duration: 0.9, ease: 'expo.out', overwrite: 'auto' });
  }
  document.querySelectorAll('[data-wcard]').forEach(function (c) {
    var i = +c.getAttribute('data-index');
    c.addEventListener('click', function () { ST.openProj(i); });
    c.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); ST.openProj(i); } });
    c.addEventListener('mouseenter', wOn); c.addEventListener('mouseleave', wOff);
    c.addEventListener('focus', wOn); c.addEventListener('blur', wOff);
  });

  /* ---------- Horizontal scroll (pinned on wide screens, native swipe on narrow / reduced motion) ---------- */
  ST.setupWork = function () {
    (ST.workTw || []).forEach(function (t) { if (t.scrollTrigger) t.scrollTrigger.kill(); t.kill(); });
    ST.workTw = [];
    var sec = document.querySelector('[data-work]'); if (!sec) return;
    var st = sec.querySelector('[data-work-sticky]'), tr = sec.querySelector('[data-work-track]'), bar = sec.querySelector('[data-work-bar]'), bw = sec.querySelector('[data-work-bar-wrap]');
    if (!st || !tr) return;
    if (ST.state.narrow || ST.state.reduced || !window.gsap || !window.ScrollTrigger) {
      sec.style.height = ''; tr.style.transform = '';
      Object.assign(st.style, { position: 'relative', height: 'auto', minHeight: '0', overflowX: 'auto', paddingBottom: '48px' });
      if (bw) bw.style.display = 'none';
      if (window.ScrollTrigger) ScrollTrigger.refresh();
      return;
    }
    Object.assign(st.style, { position: 'sticky', height: '100vh', minHeight: '640px', overflowX: 'hidden', paddingBottom: '', perspective: '1400px' });
    if (bw) bw.style.display = '';
    var dist = function () { return Math.max(0, tr.scrollWidth - st.clientWidth); };
    var size = function () { sec.style.height = (dist() + Math.max(window.innerHeight, 640)) + 'px'; };
    size();
    var pars = gsap.utils.toArray(tr.querySelectorAll('[data-wpar]'));
    var back;
    var tl = gsap.timeline({ scrollTrigger: { trigger: sec, start: 'top top', end: 'bottom bottom', scrub: 0.8, invalidateOnRefresh: true, onRefreshInit: size,
      onUpdate: function (self) {
        // Cards lean slightly with scroll speed, then settle
        var sk = gsap.utils.clamp(-7, 7, self.getVelocity() / -260);
        gsap.to(pars, { skewX: sk * 0.35, rotateY: -sk * 1.8, duration: 0.4, ease: 'power3.out', overwrite: 'auto' });
        if (back) back.kill();
        back = gsap.delayedCall(0.12, function () { gsap.to(pars, { skewX: 0, rotateY: 0, duration: 1.1, ease: 'expo.out', overwrite: 'auto' }); });
      } } });
    tl.fromTo(tr, { x: 0 }, { x: function () { return -dist(); }, ease: 'none', duration: 1 }, 0);
    if (bar) tl.fromTo(bar, { scaleX: 0 }, { scaleX: 1, ease: 'none', duration: 1 }, 0);
    var Dd = dist() || 1, vw = st.clientWidth;
    tr.querySelectorAll('[data-wcard]').forEach(function (c) {
      var box = c.querySelector('[data-wbox]'), sc = c.querySelector('[data-wscale]'), cap = c.querySelector('figcaption');
      var at = (c.offsetLeft - vw) / Dd;
      if (at <= 0 || !box) return;
      var len = Math.min(0.6 * vw / Dd, 1 - at);
      tl.fromTo(box, { clipPath: 'inset(0% 0% 0% 100%)' }, { clipPath: 'inset(0% 0% 0% 0%)', ease: 'power2.out', duration: len }, at);
      if (sc) tl.fromTo(sc, { scale: 1.35 }, { scale: 1, ease: 'power2.out', duration: len }, at);
      if (cap) tl.fromTo(cap, { opacity: 0, x: 60 }, { opacity: 1, x: 0, ease: 'power2.out', duration: len * 0.8 }, at + len * 0.25);
    });
    tr.querySelectorAll('[data-wcard]').forEach(function (c) {
      var s = parseFloat(c.getAttribute('data-speed')) || 1, p = c.querySelector('[data-wpar]'), im = c.querySelector('[data-wimg]');
      if (p) tl.fromTo(p, { y: 46 * s }, { y: -46 * s, ease: 'none', duration: 1 }, 0);
      if (im) tl.fromTo(im, { xPercent: -7 }, { xPercent: 7, ease: 'none', duration: 1 }, 0);
    });
    ST.workTw.push(tl);
    ScrollTrigger.refresh();
  };
})();
