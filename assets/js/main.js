/* Entry point: reads device preferences, wires keyboard shortcuts and starts the motion layer. */
(function () {
  var ST = window.ST;
  ST.state.reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  ST.state.fine = window.matchMedia('(pointer: fine)').matches && window.matchMedia('(hover: hover)').matches;

  var mq = window.matchMedia('(max-width: 1023px)');
  ST.state.narrow = mq.matches;
  mq.addEventListener('change', function () {
    ST.state.narrow = mq.matches;
    if (window.ScrollTrigger) setTimeout(function () { ST.setupEye(); ST.setupWork(); ScrollTrigger.refresh(); }, 60);
  });

  ST.syncPanels();

  window.addEventListener('keydown', function (e) {
    if (ST.state.proj !== null && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) { ST.stepImg(e.key === 'ArrowRight' ? 1 : -1); return; }
    if (e.key !== 'Escape') return;
    if (ST.state.proj !== null) ST.closeProj();
    else if (ST.jobsOpen()) ST.closeJobs();
    else if (ST.menuOpen()) ST.setMenu(false);
    else if (ST.state.openPanel !== null) ST.setPanel(null);
  });

  if (window.gsap && window.ScrollTrigger) {
    try { ST.initAnimations(); } catch (err) { ST.fallback(err); }
  } else {
    ST.fallback(new Error('GSAP/ScrollTrigger did not load'));
  }
})();
