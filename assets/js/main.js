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
})();
