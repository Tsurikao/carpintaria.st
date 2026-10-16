/* Quote form and careers popup. Set ST.data.formEndpoint (data.js) to deliver submissions. */
(function () {
  var ST = window.ST;

  ST.send = function (data) {
    if (!ST.data.formEndpoint) return Promise.resolve();
    return fetch(ST.data.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) }).catch(function () {});
  };

  /* ---------- Quote form ---------- */
  var qForm = document.querySelector('[data-quote-form]'), qSent = document.querySelector('[data-quote-sent]');
  qForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!qForm.checkValidity()) return qForm.reportValidity();
    var data = Object.fromEntries(new FormData(qForm));
    ST.send(data).then(function () { qForm.reset(); qForm.hidden = true; qSent.hidden = false; });
  });
  document.querySelector('[data-quote-reset]').addEventListener('click', function () { qSent.hidden = true; qForm.hidden = false; });

  // Animated underline on hover / focus
  function fieldOn(e) { var u = e.currentTarget.nextElementSibling; if (u && window.gsap) gsap.to(u, { scaleX: 1, duration: 0.6, ease: 'expo.out', overwrite: true }); }
  function fieldOff(e) {
    var el = e.currentTarget, u = el.nextElementSibling;
    if (e.type === 'mouseleave' && document.activeElement === el) return;
    if (u && window.gsap) gsap.to(u, { scaleX: 0, duration: 0.5, ease: 'power3.inOut', overwrite: true });
  }
  qForm.querySelectorAll('.input').forEach(function (el) {
    el.addEventListener('focus', fieldOn); el.addEventListener('mouseenter', fieldOn);
    el.addEventListener('blur', fieldOff); el.addEventListener('mouseleave', fieldOff);
  });

  // Frame brightens while the pointer is over the form panel
  var qp = document.querySelector('[data-qpanel]');
  qp.addEventListener('mouseenter', function () { var f = qp.querySelector('[data-frame]'); if (f && window.gsap) gsap.to(f, { opacity: 1, duration: 0.6, ease: 'power2.out', overwrite: true }); });
  qp.addEventListener('mouseleave', function () { var f = qp.querySelector('[data-frame]'); if (f && window.gsap) gsap.to(f, { opacity: 0.55, duration: 0.8, ease: 'power2.out', overwrite: true }); });

  /* ---------- Careers popup ---------- */
  var jobs = document.querySelector('[data-jobs]'), jForm = jobs.querySelector('[data-jobs-form]'), jSent = jobs.querySelector('[data-jobs-sent]');
  ST.openJobs = function () { jSent.hidden = true; jForm.hidden = false; jobs.hidden = false; ST.lock('jobs', true); };
  ST.closeJobs = function () { if (jobs.hidden) return; jobs.hidden = true; ST.lock('jobs', false); };
  ST.jobsOpen = function () { return !jobs.hidden; };

  document.querySelector('[data-jobs-open]').addEventListener('click', function (e) { e.preventDefault(); ST.openJobs(); });
  jobs.addEventListener('click', function (e) {
    if (e.target === jobs || e.target.closest('[data-jobs-close]')) ST.closeJobs();
  });
  jForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!jForm.checkValidity()) return jForm.reportValidity();
    var data = Object.assign({ kind: 'application' }, Object.fromEntries(new FormData(jForm)));
    ST.send(data).then(function () { jForm.reset(); jForm.hidden = true; jSent.hidden = false; });
  });
})();
