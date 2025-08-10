// OTO Website JS - minimal, performance-focused
(function() {
  const navToggle = document.querySelector('.nav__toggle');
  const navList = document.getElementById('navMenu');
  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      const open = navList.getAttribute('data-open') === 'true';
      navList.setAttribute('data-open', String(!open));
      navToggle.setAttribute('aria-expanded', String(!open));
    });
  }

  // Smooth scroll for buttons with data-scroll
  document.addEventListener('click', (e) => {
    const target = e.target;
    if (target instanceof HTMLElement && target.dataset.scroll) {
      const el = document.querySelector(target.dataset.scroll);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });

  // Update year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear().toString();

  // Prefetch App Store link on hover for slight perceived speed (if same origin would apply)
  const dlTop = document.getElementById('downloadBtnTop');
  const dlBottom = document.getElementById('downloadBtnBottom');
  [dlTop, dlBottom].forEach(link => {
    if (link) {
      link.addEventListener('mouseenter', () => {
        if (!link.dataset.prefetched) {
          link.dataset.prefetched = 'true';
          // Placeholder for potential warm-up logic (cannot preconnect cross-origin restrictions sometimes)
        }
      });
    }
  });

  // (Removed dark mode toggle per design decision)

  // FAQ accordion (ARIA compliant)
  document.querySelectorAll('.faq-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      const panel = document.getElementById(btn.getAttribute('aria-controls'));
      btn.setAttribute('aria-expanded', String(!expanded));
      if (panel) {
        if (expanded) panel.setAttribute('hidden', ''); else panel.removeAttribute('hidden');
      }
    });
  });

  // Dynamic waveform state cycling
  const wf = document.getElementById('waveformDynamic');
  if (wf) {
    const states = ['idle','listening','processing','complete'];
    let idx = 1; // start at listening
    setInterval(() => {
      idx = (idx + 1) % states.length;
      wf.dataset.state = states[idx];
    }, 5000);
  }

  // Demo video behavior
  const demoVideo = document.getElementById('otoDemoVideo');
  const videoBtn = document.getElementById('videoPlayBtn');
  if (demoVideo) {
    demoVideo.addEventListener('loadeddata', () => demoVideo.classList.add('loaded'));
    videoBtn && videoBtn.addEventListener('click', () => {
      if (demoVideo.paused) {
        demoVideo.play();
        videoBtn.textContent = 'Pause';
      } else {
        demoVideo.pause();
        videoBtn.textContent = 'Play';
      }
    });
  }

  // Lazy image blur-up enhancement
  const lazyImgs = Array.from(document.querySelectorAll('img.lazy-image'));
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img instanceof HTMLImageElement) {
            if (img.complete) {
              img.classList.add('is-loaded');
            } else {
              img.addEventListener('load', () => img.classList.add('is-loaded'), { once:true });
            }
          }
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '120px 0px 120px' });
    lazyImgs.forEach(img => io.observe(img));
  } else {
    lazyImgs.forEach(img => {
      if (img.complete) img.classList.add('is-loaded'); else img.addEventListener('load', () => img.classList.add('is-loaded'), { once:true });
    });
  }

  // Active navigation link highlighting
  const sectionEls = Array.from(document.querySelectorAll('[data-section]'));
  const navLinks = Array.from(document.querySelectorAll('.nav__list a[href^="#"]'));
  if ('IntersectionObserver' in window && sectionEls.length && navLinks.length) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (!id) return;
          navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] });
    sectionEls.forEach(sec => sectionObserver.observe(sec));
  }

  // Section & element reveal animations
  const revealNodes = Array.from(document.querySelectorAll('.reveal'));
  if ('IntersectionObserver' in window && revealNodes.length) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.15 });
    // Slight stagger via transition-delay
    revealNodes.forEach((node, i) => {
      (node).style.transitionDelay = (Math.min(i * 60, 360)) + 'ms';
      revealObserver.observe(node);
    });
  } else {
    // Fallback: make them visible immediately
    revealNodes.forEach(n => n.classList.add('is-visible'));
  }
})();
