/* Shared interactions — header state, scroll reveal, smooth anchor scroll */
(function () {
  // Header border on scroll
  var header = document.querySelector('.site-header');
  function onScroll() {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 12);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Reveal on scroll
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var el = e.target;
          var delay = el.getAttribute('data-delay') || 0;
          setTimeout(function () { el.classList.add('in'); }, delay);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  // Smooth scroll for same-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (ev) {
      var id = a.getAttribute('href');
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (target) {
        ev.preventDefault();
        var top = target.getBoundingClientRect().top + window.scrollY - 64;
        window.scrollTo({ top: top, behavior: 'smooth' });
        history.replaceState(null, '', id);
      }
    });
  });

  // Lightbox — click a work image to enlarge
  var lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML =
    '<button class="lb-close" aria-label="Close">\u00d7</button>' +
    '<figure class="lb-stage"><img alt=""><figcaption></figcaption></figure>';
  document.body.appendChild(lb);
  var lbImg = lb.querySelector('img');
  var lbCap = lb.querySelector('figcaption');
  var lastFocus = null;

  function openLightbox(img) {
    lbImg.src = img.currentSrc || img.src;
    lbImg.alt = img.alt || '';
    var cap = img.alt || '';
    var fc = img.closest('figure') && img.closest('figure').querySelector('figcaption');
    if (fc) cap = fc.textContent.trim();
    lbCap.textContent = cap;
    lbCap.style.display = cap ? '' : 'none';
    lb.classList.add('open');
    document.body.classList.add('lb-lock');
  }
  function closeLightbox() {
    lb.classList.remove('open');
    document.body.classList.remove('lb-lock');
  }

  document.querySelectorAll('.media img, .logo-img').forEach(function (img) {
    var box = img.closest('.media, .logo-stage, .logo-chip');
    if (box) box.classList.add('zoomable');
    img.addEventListener('click', function (ev) {
      ev.preventDefault();
      openLightbox(img);
    });
  });

  lb.addEventListener('click', function (ev) {
    if (ev.target === lbImg) return;
    closeLightbox();
  });
  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape' && lb.classList.contains('open')) closeLightbox();
  });
})();
