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

  // Smooth scroll for buttons with data-scroll - updated for full-screen sections
  document.addEventListener('click', (e) => {
    const target = e.target;
    if (target instanceof HTMLElement && target.dataset.scroll) {
      const el = document.querySelector(target.dataset.scroll);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      }
    }
  });

  // Full-screen section navigation with keyboard support
  let currentSectionIndex = 0;
  const sections = Array.from(document.querySelectorAll('.section, .hero'));
  
  // Keyboard navigation for sections
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      e.preventDefault();
      navigateToSection(currentSectionIndex + 1);
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault();
      navigateToSection(currentSectionIndex - 1);
    }
  });

  function navigateToSection(index) {
    if (index >= 0 && index < sections.length) {
      currentSectionIndex = index;
      sections[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Track current section for keyboard navigation
  const main = document.querySelector('main');
  if (main) {
    main.addEventListener('scroll', () => {
      const windowHeight = window.innerHeight;
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
          currentSectionIndex = index;
        }
      });
    });
  }

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

  // Active navigation link highlighting and section indicators
  const sectionEls = Array.from(document.querySelectorAll('[data-section], .hero'));
  const navLinks = Array.from(document.querySelectorAll('.nav__list a[href^="#"]'));
  const indicatorDots = Array.from(document.querySelectorAll('.section-indicator__dot'));
  
  if ('IntersectionObserver' in window && sectionEls.length) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section = entry.target.getAttribute('data-section') || (entry.target.classList.contains('hero') ? 'hero' : '');
          if (!section) return;
          
          // Update navigation links
          navLinks.forEach(l => {
            const href = l.getAttribute('href');
            const targetId = href === '#' ? 'hero' : href.substring(1);
            l.classList.toggle('active', targetId === section);
          });
          
          // Update section indicator dots
          indicatorDots.forEach(dot => {
            dot.classList.toggle('active', dot.getAttribute('data-section') === section);
          });
        }
      });
    }, { root: main, rootMargin: '-20% 0px -20% 0px', threshold: [0, 0.5, 1] });
    sectionEls.forEach(sec => sectionObserver.observe(sec));
  }
  
  // Section indicator click handlers
  indicatorDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const targetSection = dot.getAttribute('data-section');
      let target;
      
      if (targetSection === 'hero') {
        target = document.querySelector('.hero');
      } else {
        target = document.getElementById(targetSection);
      }
      
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

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
  // Add scroll hint for first-time users
  const scrollHint = document.createElement('div');
  scrollHint.className = 'scroll-hint';
  scrollHint.innerHTML = '<span>Scroll or use ↓↑ keys</span>';
  scrollHint.style.cssText = `
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    background: var(--color-glass-bg);
    backdrop-filter: blur(20px);
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    opacity: 0.8;
    z-index: 50;
    pointer-events: none;
    animation: fadeInOut 4s ease-in-out;
  `;
  
  // Add CSS for fade animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInOut {
      0%, 100% { opacity: 0; transform: translateX(-50%) translateY(1rem); }
      20%, 80% { opacity: 0.8; transform: translateX(-50%) translateY(0); }
    }
    @media (max-width: 768px) {
      .scroll-hint { display: none !important; }
    }
  `;
  document.head.appendChild(style);
  document.body.appendChild(scrollHint);
  
  // Remove scroll hint after animation
  setTimeout(() => {
    if (scrollHint.parentNode) {
      scrollHint.parentNode.removeChild(scrollHint);
    }
  }, 4500);

})();
