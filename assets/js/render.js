/* Builds the repeated parts of the page (menus, panels, project cards, steps, collage,
 * testimonials, updates, select options) from ST.data, then applies the current language. */
(function () {
  var ST = window.ST, D = ST.data;
  var $ = function (s) { return document.querySelector(s); };

  ST.pad = function (n) { return String(n).padStart(2, '0'); };
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function img(key, pos, cls, attrs) {
    var i = D.images[key];
    return '<img class="' + cls + '" src="' + i.src + '" alt="' + esc(i.alt) + '" style="object-position:' + pos + '"' + (attrs || '') + '>';
  }

  /* Single images (hero, process background, quote background) */
  var SINGLE = { hero: D.hero, processBg: D.processBg, quoteBg: D.quoteBg };
  document.querySelectorAll('[data-image]').forEach(function (el) {
    var ref = SINGLE[el.getAttribute('data-image')], i = D.images[ref.img];
    el.src = i.src; el.alt = i.alt; el.style.objectPosition = ref.pos;
  });

  /* Contact links */
  var C = D.contact;
  var CONTACT = {
    phone: ['tel:' + C.phoneHref, C.phone],
    email: ['mailto:' + C.email, C.email],
    whatsapp: [C.whatsapp, 'WhatsApp ' + C.whatsappNum],
    instagram: [C.instagram, C.instagramHandle],
    facebook: [C.facebook, 'Facebook'],
    map: [C.map, '']
  };
  document.querySelectorAll('[data-contact]').forEach(function (el) {
    var c = CONTACT[el.getAttribute('data-contact')];
    el.href = c[0];
    if (!el.textContent.trim() && !el.hasAttribute('data-t')) el.textContent = c[1];
  });

  /* Navigation (menu overlay + footer) */
  var navLinks = D.nav.map(function (id, i) { return '<a href="#' + id + '" data-go="' + id + '" data-t="nav.' + i + '"></a>'; }).join('');
  $('[data-nav-menu]').innerHTML = navLinks;
  $('[data-nav-footer]').insertAdjacentHTML('afterbegin', navLinks);

  /* Everything in wood: sticky panels */
  var total = ST.pad(D.panels.length);
  $('[data-panels]').innerHTML = D.panels.map(function (p, i) {
    var line = p.fg === '#242424' ? 'rgba(36,36,36,0.25)' : 'rgba(247,245,241,0.3)';
    var k = 'panels.' + i;
    return '<article class="panel" data-panel data-index="' + i + '" style="--bg:' + p.bg + ';--fg:' + p.fg + ';--line:' + line + '">' +
      '<div class="panel-copy">' +
        '<div class="panel-inner">' +
          '<div class="panel-top"><span class="panel-count">' + ST.pad(i + 1) + ' / ' + total + '</span></div>' +
          '<div class="panel-body">' +
            '<p class="panel-tag" data-t="' + k + '.tag"></p>' +
            '<p class="panel-about" data-t="' + k + '.about"></p>' +
            '<button type="button" class="panel-more" data-panel-toggle data-t="ui.detailsBtn"></button>' +
          '</div>' +
        '</div>' +
        '<div class="panel-details" aria-hidden="true" data-lenis-prevent>' +
          '<div class="panel-details-inner">' +
            '<span class="caps-13"><span data-t="' + k + '.title"></span> · <span data-t="ui.detailsTag"></span></span>' +
            '<p class="panel-long" data-t="' + k + '.long"></p>' +
            '<div class="panel-specs">' +
              '<div class="stack-10"><span class="caps-12" data-t="ui.mat"></span><ul class="list" data-t-list="' + k + '.materials"></ul></div>' +
              '<div class="stack-22">' +
                '<div class="stack-8"><span class="caps-12" data-t="ui.time"></span><span class="panel-time" data-t="' + k + '.timeline"></span></div>' +
                '<div class="stack-8"><span class="caps-12" data-t="ui.incl"></span><ul class="list" data-t-list="' + k + '.included"></ul></div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<button type="button" class="plus" data-plus data-panel-toggle aria-expanded="false"><span class="plus-icon"><span></span><span></span></span></button>' +
      '</div>' +
      '<div class="panel-media" data-cursor-label="Scroll">' +
        '<div class="fill" data-drift="' + (p.drift ? '1' : '0') + '">' + img(p.img, p.pos, 'cover', ' data-panel-img loading="lazy" decoding="async"') + '</div>' +
        '<div class="fill panel-shade" aria-hidden="true"></div>' +
        '<div class="panel-title"><h3 data-t="' + k + '.title"></h3></div>' +
      '</div>' +
    '</article>';
  }).join('');

  /* Selection of our work: horizontal cards */
  $('[data-work-track]').innerHTML = D.work.map(function (w, i) {
    var L = w.layout, k = 'work.' + i;
    return '<figure class="wcard" data-wcard data-index="' + i + '" data-speed="' + L.speed + '" role="button" tabindex="0" data-t-attr="data-cursor-label:ui.view;aria-label:' + k + '.title" style="margin-top:' + L.lvl + ';width:' + L.w + '">' +
      '<div class="wpar" data-wpar>' +
        '<div class="wbox" data-wbox style="height:' + L.h + '">' +
          '<div class="fill" data-wscale>' + img(w.img, w.pos, 'wimg', ' data-wimg loading="lazy" decoding="async"') + '</div>' +
          '<div class="wov" data-ov>' +
            '<p data-t="' + k + '.desc"></p>' +
            '<div class="wov-mat"><span class="wov-mat-label" data-t="ui.mat"></span><span class="c-sand" data-t-join="' + k + '.materials"></span></div>' +
            '<div class="wov-foot"><span><span class="c-sand"><span data-t="ui.dur"></span>:</span> <span data-t="' + k + '.time"></span></span><span class="wov-link"><span data-t="ui.view"></span> →</span></div>' +
          '</div>' +
        '</div>' +
        '<figcaption class="wcap"><span class="wcap-title" data-t="' + k + '.title"></span><span class="wcap-meta" data-t="' + k + '.meta"></span></figcaption>' +
      '</div>' +
    '</figure>';
  }).join('');

  /* How we work: step texts and list */
  var steps = D.i18n.pt.process;
  $('[data-step-descs]').innerHTML = steps.map(function (_, i) { return '<p class="step-desc" data-step-desc data-t="process.' + i + '.text"></p>'; }).join('');
  $('[data-steps]').insertAdjacentHTML('beforeend', steps.map(function (_, i) {
    return '<li class="step" data-step><span class="step-num">' + ST.pad(i + 1) + '</span><span class="step-title" data-t="process.' + i + '.title"></span></li>';
  }).join(''));

  /* Builder's eye collage (wide) and grid (narrow) */
  $('[data-eye-wide]').insertAdjacentHTML('afterbegin', D.eye.map(function (e) {
    return '<div class="eye-item" data-eye-item data-speed="' + e.speed + '" data-cursor-label="View" style="left:' + e.left + ';right:' + e.right + ';top:' + e.top + ';width:' + e.w + ';aspect-ratio:' + e.ar + ';z-index:' + e.z + '">' +
      img(e.img, e.pos, 'eye-img', ' data-eye-img loading="lazy"') + '</div>';
  }).join(''));
  $('[data-eye-grid]').innerHTML = D.eye.map(function (e) {
    return '<div class="eye-item" data-eye-item data-speed="' + e.speed + '">' + img(e.img, e.pos, 'eye-img', ' data-eye-img loading="lazy"') + '</div>';
  }).join('');

  /* Testimonials */
  $('[data-testimonials]').innerHTML = D.testimonials.map(function (t, i) {
    return '<figure class="tcard" data-tcard>' +
      '<blockquote>“<span data-t="testimonials.' + i + '.quote"></span>”</blockquote>' +
      '<figcaption>' +
        '<img src="' + t.photo + '" alt="' + esc(t.name) + '" loading="lazy" decoding="async" width="64" height="64" style="background:' + t.tone + '">' +
        '<div class="tmeta"><span class="tmeta-name">' + esc(t.name) + '</span><span class="tmeta-proj"><span data-t="testimonials.' + i + '.project"></span> · ' + esc(t.place) + '</span></div>' +
      '</figcaption>' +
    '</figure>';
  }).join('');

  /* Latest updates */
  $('[data-updates-list]').innerHTML = D.updates.map(function (u, i) {
    return '<a class="urow" href="#" data-urow data-index="' + i + '" data-cursor-label="View">' +
      '<span class="urow-title" data-t="updates.' + i + '.title"></span>' +
      '<span class="urow-text" data-t="updates.' + i + '.text"></span>' +
      '<span class="urow-date">' + u.date + '<span class="urow-arrow" aria-hidden="true">→</span></span>' +
    '</a>';
  }).join('');
  var f0 = D.updates[0], fi = $('[data-float-img]');
  fi.src = D.images[f0.img].src; fi.style.objectPosition = f0.pos;

  /* Select options */
  $('[data-type-select]').insertAdjacentHTML('beforeend', D.panels.map(function (_, i) {
    return '<option data-t="panels.' + i + '.title" data-t-attr="value:panels.' + i + '.title"></option>';
  }).join('') + '<option value="Other" data-t="ui.other"></option>');
  $('[data-vacancy-select]').insertAdjacentHTML('beforeend', D.i18n.pt.ui.vacancies.map(function (_, i) {
    return '<option data-t="ui.vacancies.' + i + '" data-t-attr="value:ui.vacancies.' + i + '"></option>';
  }).join(''));

  ST.applyLang();
})();
