/* Custom cursor (fine pointers only): ring + dot, grows on links, shows a label over [data-cursor-label]. */
(function () {
  var ST = window.ST;

  ST.setupCursor = function () {
    if (ST.curOff) ST.curOff();
    var gsap = window.gsap;
    var ring = document.querySelector('[data-cur-ring]'), dot = document.querySelector('[data-cur-dot]'), lab = document.querySelector('[data-cur-label]');
    if (!ring || !dot || !ST.state.fine || ST.state.reduced) return;
    document.documentElement.classList.add('has-cursor');
    ring.style.display = 'flex'; dot.style.display = 'block';
    var rx = gsap.quickTo(ring, 'x', { duration: 0.55, ease: 'power3.out' }), ry = gsap.quickTo(ring, 'y', { duration: 0.55, ease: 'power3.out' });
    var mode = '', shown = false;
    var setMode = function (m, text) {
      if (m === mode && (m !== 'label' || lab.textContent === text)) return;
      mode = m;
      var size = m === 'label' ? 84 : m === 'link' ? 60 : 36;
      // GSAP needs literal colours here: #A0603A = var(--rust), #F7F5F1 = var(--cream)
      gsap.to(ring, { width: size, height: size, margin: '-' + size / 2 + 'px 0 0 -' + size / 2 + 'px', backgroundColor: m === 'label' ? '#A0603A' : 'rgba(0,0,0,0)', borderColor: m === 'label' ? '#A0603A' : '#F7F5F1', opacity: m === 'field' ? 0 : 1, duration: 0.45, ease: 'expo.out', overwrite: 'auto' });
      ring.style.mixBlendMode = m === 'label' ? 'normal' : 'difference';
      gsap.to(dot, { opacity: m === 'field' || m === 'label' ? 0 : 1, duration: 0.2 });
      if (m === 'label') lab.textContent = text;
      gsap.to(lab, { opacity: m === 'label' ? 1 : 0, duration: 0.25 });
    };
    var move = function (e) {
      gsap.set(dot, { x: e.clientX, y: e.clientY }); rx(e.clientX); ry(e.clientY);
      if (!shown) { shown = true; gsap.set(ring, { x: e.clientX, y: e.clientY }); gsap.to([ring, dot], { opacity: 1, duration: 0.3 }); }
      var t = e.target.closest ? e.target : document.body;
      if (t.closest('input,textarea,select')) return setMode('field');
      var a = t.closest('a,button,label,[role=button]');
      var l = t.closest('[data-cursor-label]');
      if (l) return setMode('label', l.getAttribute('data-cursor-label'));
      if (a) return setMode('link');
      setMode('');
    };
    var down = function () { gsap.to(ring, { scale: 0.75, duration: 0.25, ease: 'power3.out' }); };
    var up = function () { gsap.to(ring, { scale: 1, duration: 0.4, ease: 'expo.out' }); };
    var leave = function () { shown = false; gsap.to([ring, dot], { opacity: 0, duration: 0.3 }); };
    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mousedown', down); window.addEventListener('mouseup', up);
    document.documentElement.addEventListener('mouseleave', leave);
    ST.curOff = function () {
      window.removeEventListener('mousemove', move); window.removeEventListener('mousedown', down); window.removeEventListener('mouseup', up);
      document.documentElement.removeEventListener('mouseleave', leave);
      document.documentElement.classList.remove('has-cursor'); ring.style.display = 'none'; dot.style.display = 'none';
    };
  };
})();
