/**
 * OTO Website Main App - Modular Version
 * Initializes module loader and sets up event delegation for dynamically loaded content
 */

(async function() {
  // Load module configuration
  const configResponse = await fetch('config/modules.json');
  const config = await configResponse.json();

  // Initialize module loader
  const loader = new ModuleLoader(config);
  const result = await loader.initialize();

  console.log('Modules loaded:', result);

  // Initialize features after modules are loaded
  initializeCriticalFeatures();

  // Wait a moment for DOM to settle, then initialize all features
  setTimeout(() => {
    initializeAllFeatures();
  }, 100);

  // Initialize features that need to work immediately
  function initializeCriticalFeatures() {
    // Navigation toggle (using event delegation)
    document.addEventListener('click', (e) => {
      const navToggle = e.target.closest('.nav__toggle');
      if (navToggle) {
        const navList = document.getElementById('navMenu');
        if (navList) {
          const open = navList.getAttribute('data-open') === 'true';
          navList.setAttribute('data-open', String(!open));
          navToggle.setAttribute('aria-expanded', String(!open));
        }
      }
    });

    // Smooth scroll for buttons with data-scroll
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

    // Update year
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear().toString();
  }

  // Initialize all features after all modules are loaded
  function initializeAllFeatures() {
    // Full-screen section navigation with keyboard support
    let currentSectionIndex = 0;
    const sections = Array.from(document.querySelectorAll('.section, .hero'));
    const sectionEls = Array.from(document.querySelectorAll('[data-section], .hero'));
    const navLinks = Array.from(document.querySelectorAll('.nav__list a[href^="#"]'));

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
        let newIndex = currentSectionIndex;

        sections.forEach((section, index) => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= windowHeight * 0.4 && rect.bottom >= windowHeight * 0.6) {
            newIndex = index;
          }
        });

        if (newIndex !== currentSectionIndex) {
          currentSectionIndex = newIndex;
        }

        // Sticky buy bar visibility
        const sticky = document.getElementById('stickyBuy');
        if (sticky) {
          const hero = document.querySelector('.hero');
          const pricing = document.getElementById('pricing');
          const footer = document.querySelector('footer.site-footer');
          let show = false;
          if (hero && pricing && footer) {
            const heroRect = hero.getBoundingClientRect();
            const pricingRect = pricing.getBoundingClientRect();
            const footerRect = footer.getBoundingClientRect();
            const pastHero = heroRect.bottom < windowHeight * 0.75;
            const beforePricing = pricingRect.top > windowHeight * 0.5;
            const beforeFooter = footerRect.top > windowHeight * 0.6;
            show = pastHero && beforePricing && beforeFooter;
          }
          sticky.classList.toggle('is-visible', show);
        }
      });
    }

    // Download buttons (using event delegation)
    document.addEventListener('mouseenter', (e) => {
      const link = e.target.closest('#downloadBtnTop, #downloadBtnBottom, #downloadBtnSticky');
      if (link && !link.dataset.prefetched) {
        link.dataset.prefetched = 'true';
      }
    }, true);

    document.addEventListener('click', (e) => {
      const link = e.target.closest('#downloadBtnTop, #downloadBtnBottom, #downloadBtnSticky');
      if (link) {
        try {
          window.dispatchEvent(new CustomEvent('oto:cta_click', {
            detail: { id: link.id || 'cta', ts: Date.now() }
          }));
        } catch {}
      }
    });

    // FAQ accordion (using event delegation)
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.faq-toggle');
      if (btn) {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        const panel = document.getElementById(btn.getAttribute('aria-controls'));
        btn.setAttribute('aria-expanded', String(!expanded));
        if (panel) {
          if (expanded) panel.setAttribute('hidden', '');
          else panel.removeAttribute('hidden');
        }
      }
    });

    // Policy accordion (using event delegation)
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.policy-toggle');
      if (btn) {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        const panel = document.getElementById(btn.getAttribute('aria-controls'));
        btn.setAttribute('aria-expanded', String(!expanded));
        if (panel) {
          if (expanded) panel.setAttribute('hidden', '');
          else panel.removeAttribute('hidden');
        }
      }
    });

    // Language list toggle (using event delegation)
    document.addEventListener('click', (e) => {
      const languageToggle = e.target.closest('.language-list-toggle');
      if (languageToggle) {
        const languageList = document.getElementById('languageList');
        const languageSearchInput = document.querySelector('.language-search-input');

        if (languageList) {
          const expanded = languageToggle.getAttribute('aria-expanded') === 'true';
          languageToggle.setAttribute('aria-expanded', String(!expanded));

          if (expanded) {
            languageList.setAttribute('hidden', '');
            languageToggle.querySelector('.toggle-text').textContent = '📋 View complete list of 100 languages';
          } else {
            languageList.removeAttribute('hidden');
            languageToggle.querySelector('.toggle-text').textContent = '📋 Hide language list';
            if (languageSearchInput) {
              setTimeout(() => languageSearchInput.focus(), 100);
            }
          }
        }
      }
    });

    // Language feature link (using event delegation)
    document.addEventListener('click', (e) => {
      const languageFeatureLink = e.target.closest('.language-feature-link[data-expand-language]');
      if (languageFeatureLink) {
        e.preventDefault();

        const languageFaqBtn = document.getElementById('faqBtn4');
        const languageFaqPanel = document.getElementById('faq4');

        if (languageFaqBtn && languageFaqPanel) {
          languageFaqBtn.setAttribute('aria-expanded', 'true');
          languageFaqPanel.removeAttribute('hidden');

          const languageToggle = document.querySelector('.language-list-toggle');
          const languageList = document.getElementById('languageList');
          if (languageToggle && languageList) {
            languageToggle.setAttribute('aria-expanded', 'true');
            languageList.removeAttribute('hidden');
            languageToggle.querySelector('.toggle-text').textContent = '📋 Hide language list';
          }

          const faqSection = document.getElementById('faq');
          if (faqSection) {
            setTimeout(() => {
              faqSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
          }
        }
      }
    });

    // Language search functionality (using event delegation)
    document.addEventListener('input', (e) => {
      const languageSearchInput = e.target.closest('.language-search-input');
      if (languageSearchInput) {
        const searchTerm = languageSearchInput.value.toLowerCase().trim();
        const languageItems = document.querySelectorAll('.language-item');

        languageItems.forEach(item => {
          const langName = item.getAttribute('data-lang').toLowerCase();
          if (searchTerm === '' || langName.includes(searchTerm)) {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
          }
        });
      }
    });

    document.addEventListener('keydown', (e) => {
      const languageSearchInput = e.target.closest('.language-search-input');
      if (languageSearchInput && e.key === 'Escape') {
        languageSearchInput.value = '';
        const languageItems = document.querySelectorAll('.language-item');
        languageItems.forEach(item => item.classList.remove('hidden'));
      }
    });

    // Dynamic waveform state cycling
    const wf = document.getElementById('waveformDynamic');
    if (wf) {
      const states = ['idle', 'listening', 'processing', 'complete'];
      let idx = 1;
      setInterval(() => {
        idx = (idx + 1) % states.length;
        wf.dataset.state = states[idx];
      }, 5000);
    }

    // Demo slideshow behavior
    initSlideshow();

    // Enhanced lazy image loading
    const lazyImgs = Array.from(document.querySelectorAll('img.lazy-image'));
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img instanceof HTMLImageElement) {
              const picture = img.parentElement;
              if (picture?.tagName === 'PICTURE') {
                const webpSource = picture.querySelector('source[type="image/webp"]');
                if (webpSource) {
                  const srcset = webpSource.getAttribute('srcset');
                  if (srcset?.includes('2x')) {
                    const highResSrc = srcset.split(',').find(s => s.includes('2x'))?.trim().split(' ')[0];
                    if (highResSrc) {
                      const preloadImg = new Image();
                      preloadImg.src = highResSrc;
                    }
                  }
                }
              }

              if (img.complete) {
                img.classList.add('loaded');
              } else {
                img.addEventListener('load', () => img.classList.add('loaded'), { once: true });
              }
            }
            io.unobserve(entry.target);
          }
        });
      }, { rootMargin: '150px 0px 150px' });
      lazyImgs.forEach(img => io.observe(img));
    } else {
      lazyImgs.forEach(img => {
        if (img.complete) img.classList.add('loaded');
        else img.addEventListener('load', () => img.classList.add('loaded'), { once: true });
      });
    }

    // Active navigation link highlighting
    if ('IntersectionObserver' in window && sectionEls.length) {
      const sectionObserver = new IntersectionObserver(entries => {
        let mostVisibleSection = null;
        let maxVisibility = 0;

        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const visibility = entry.intersectionRatio;
            if (visibility > maxVisibility) {
              maxVisibility = visibility;
              mostVisibleSection = entry.target;
            }
          }
        });

        if (mostVisibleSection) {
          const section = mostVisibleSection.getAttribute('data-section') ||
            (mostVisibleSection.classList.contains('hero') ? 'hero' : '');
          if (!section) return;

          navLinks.forEach(l => {
            const href = l.getAttribute('href');
            const targetId = href === '#' ? 'hero' : href.substring(1);
            l.classList.toggle('active', targetId === section);
          });
        }
      }, {
        root: main,
        rootMargin: '-10% 0px -10% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]
      });
      sectionEls.forEach(sec => sectionObserver.observe(sec));
    }

    // Initialize scroll animations
    initScrollAnimations();

    // Initialize lightbox
    initLightbox();

    // Performance monitoring
    if (typeof window.performance !== 'undefined' && window.performance.mark) {
      window.addEventListener('load', () => {
        performance.mark('oto-app-showcase-loaded');

        const images = document.querySelectorAll('img.lazy-image');
        let loadedCount = 0;

        images.forEach(img => {
          if (img.complete) {
            loadedCount++;
          } else {
            img.addEventListener('load', () => {
              loadedCount++;
              if (loadedCount === images.length) {
                performance.mark('oto-all-images-loaded');
              }
            }, { once: true });
          }
        });

        if (loadedCount === images.length) {
          performance.mark('oto-all-images-loaded');
        }
      });
    }

    // Neural Engine visual indicator
    const neuralBadges = document.querySelectorAll('.neural-engine-badge');
    neuralBadges.forEach(badge => {
      badge.style.animationDelay = `${Math.random() * 2}s`;
    });
  }

  // Slideshow initialization
  async function initSlideshow() {
    const slideshow = document.getElementById('otoDemoSlideshow');
    const slidePrevBtn = document.getElementById('slidePrev');
    const slideNextBtn = document.getElementById('slideNext');

    if (!slideshow) return false;

    const tutorialBase = 'assets/img/demo';
    const tutorialFrames = Array.from({ length: 10 }, (_, i) => `${tutorialBase}/${i + 1}.png`);
    let slideTimer = null;
    let slideIndex = 0;
    let slideshowActive = false;

    function preload(src) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = reject;
        img.src = src;
      });
    }

    try {
      await preload(tutorialFrames[0]);
      const layerA = document.createElement('img');
      const layerB = document.createElement('img');
      layerA.className = 'slide-layer visible';
      layerB.className = 'slide-layer';
      layerA.alt = 'oto tutorial step 1';
      layerB.alt = 'oto tutorial';
      layerA.decoding = 'async';
      layerB.decoding = 'async';
      layerA.fetchPriority = 'high';
      layerA.src = tutorialFrames[0];
      slideshow.appendChild(layerA);
      slideshow.appendChild(layerB);
      slideshow.classList.add('ready');
      slideshowActive = true;

      tutorialFrames.slice(1).forEach(src => {
        const i = new Image();
        i.src = src;
      });

      const showIndex = (index) => {
        const [front, back] = slideshow.querySelectorAll('img.slide-layer');
        if (!front || !back) return;
        back.src = tutorialFrames[index];
        back.alt = `oto tutorial step ${index + 1}`;
        front.classList.remove('visible');
        back.classList.add('visible');
        slideshow.appendChild(front);
        slideIndex = index;
      };

      const advance = () => {
        if (!slideshowActive) return;
        const nextIndex = (slideIndex + 1) % tutorialFrames.length;
        showIndex(nextIndex);
      };

      const start = () => {
        if (slideTimer) return;
        slideTimer = setInterval(advance, 3800);
      };

      const stop = () => {
        if (slideTimer) {
          clearInterval(slideTimer);
          slideTimer = null;
        }
      };

      const restartTimer = () => {
        const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        stop();
        if (!prefersReduced) start();
      };

      const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!prefersReduced) {
        start();
      }

      if (slidePrevBtn) {
        slidePrevBtn.addEventListener('click', () => {
          if (!slideshowActive) return;
          const prevIndex = (slideIndex - 1 + tutorialFrames.length) % tutorialFrames.length;
          showIndex(prevIndex);
          restartTimer();
        });
      }

      if (slideNextBtn) {
        slideNextBtn.addEventListener('click', () => {
          if (!slideshowActive) return;
          const nextIndex = (slideIndex + 1) % tutorialFrames.length;
          showIndex(nextIndex);
          restartTimer();
        });
      }

      const wrapper = slideshow.closest('.video-wrapper');
      if (wrapper) {
        wrapper.setAttribute('tabindex', '0');
        wrapper.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowLeft') {
            e.preventDefault();
            const prevIndex = (slideIndex - 1 + tutorialFrames.length) % tutorialFrames.length;
            showIndex(prevIndex);
            restartTimer();
          } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            const nextIndex = (slideIndex + 1) % tutorialFrames.length;
            showIndex(nextIndex);
            restartTimer();
          }
        });
      }
      return true;
    } catch (e) {
      slideshowActive = false;
      if (slideshow) slideshow.style.display = 'none';
      return false;
    }
  }

  // Scroll animations
  function initScrollAnimations() {
    // 1. PARALLAX ON HERO SECTION
    const hero = document.querySelector('.hero');
    const heroContent = hero?.querySelector('.hero__content');
    const heroVisual = hero?.querySelector('.hero__visual');

    if (hero && heroContent && heroVisual) {
      window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroRect = hero.getBoundingClientRect();

        if (heroRect.bottom > 0 && heroRect.top < window.innerHeight) {
          const speed = scrolled * 0.3;
          const visualSpeed = scrolled * 0.15;

          heroContent.style.transform = `translateY(${speed}px)`;
          heroVisual.style.transform = `translateY(${visualSpeed}px)`;
        }
      });
    }

    // 2. SCROLL PROGRESS INDICATOR
    const scrollProgress = document.createElement('div');
    scrollProgress.className = 'scroll-progress';
    scrollProgress.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 0%;
      height: 3px;
      background: linear-gradient(90deg, var(--color-blue), var(--color-coral), var(--color-mint));
      z-index: 100;
      transition: width 0.1s ease-out;
    `;
    document.body.appendChild(scrollProgress);

    window.addEventListener('scroll', () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (window.pageYOffset / docHeight) * 100;
      scrollProgress.style.width = `${scrollPercent}%`;
    });

    // 3. STAGGERED CARD REVEALS WITH SCALE BOUNCE
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

      revealNodes.forEach((node, i) => {
        const isCard = node.classList.contains('feature-card') ||
          node.classList.contains('value-card') ||
          node.classList.contains('screenshot-card');

        if (isCard) {
          node.style.transitionDelay = `${Math.min(i * 80, 480)}ms`;
        } else {
          node.style.transitionDelay = `${Math.min(i * 60, 360)}ms`;
        }
        revealObserver.observe(node);
      });

      // Manually check elements already in viewport
      setTimeout(() => {
        revealNodes.forEach(node => {
          const rect = node.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            node.classList.add('is-visible');
          }
        });
      }, 100);
    } else {
      revealNodes.forEach(n => n.classList.add('is-visible'));
    }

    // 4. SECTION HEADERS WITH SPECIAL TREATMENT
    const sectionHeaders = document.querySelectorAll('.section__header');
    if ('IntersectionObserver' in window && sectionHeaders.length) {
      const headerObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('header-visible');
            headerObserver.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -15% 0px', threshold: 0.2 });

      sectionHeaders.forEach(header => {
        header.classList.add('header-animate');
        headerObserver.observe(header);
      });
    }

    // 5. BUTTONS/CTAS WITH SCALE BOUNCE
    const ctaButtons = document.querySelectorAll('.warm-button, .app-store-badge-link');
    if ('IntersectionObserver' in window && ctaButtons.length) {
      const buttonObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('button-visible');
            buttonObserver.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -10% 0px', threshold: 0.5 });

      ctaButtons.forEach(button => {
        button.classList.add('button-animate');
        buttonObserver.observe(button);
      });
    }

    // 6. BACKGROUND COLOR TRANSITIONS BETWEEN SECTIONS
    const allSections = document.querySelectorAll('.section, .hero');
    if ('IntersectionObserver' in window && allSections.length) {
      const bgColors = {
        'hero': 'var(--color-bg)',
        'features': 'var(--color-bg)',
        'why': 'var(--color-surface-alt)',
        'pricing': 'var(--color-bg)',
        'guarantee': 'var(--color-surface-alt)',
        'faq': 'var(--color-bg)',
        'policy': 'var(--color-surface-alt)'
      };

      const sectionBgObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            const sectionId = entry.target.getAttribute('data-section') ||
              (entry.target.classList.contains('hero') ? 'hero' : '');

            if (sectionId && bgColors[sectionId]) {
              document.body.style.transition = 'background-color 0.6s ease';
              document.body.style.backgroundColor = bgColors[sectionId];
            }
          }
        });
      }, { threshold: [0.3, 0.5, 0.7] });

      allSections.forEach(section => sectionBgObserver.observe(section));
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

    setTimeout(() => {
      if (scrollHint.parentNode) {
        scrollHint.parentNode.removeChild(scrollHint);
      }
    }, 4500);
  }

  // Lightbox initialization
  function initLightbox() {
    function createLightbox() {
      const lightbox = document.createElement('div');
      lightbox.className = 'lightbox';
      lightbox.innerHTML = `
        <div class="lightbox-content">
          <img src="" alt="" />
        </div>
      `;
      document.body.appendChild(lightbox);

      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
          closeLightbox();
        }
      });

      function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }

      return { lightbox, closeLightbox };
    }

    const { lightbox, closeLightbox } = createLightbox();
    const screenshotCards = document.querySelectorAll('.screenshot-card');

    screenshotCards.forEach(card => {
      card.addEventListener('click', () => {
        const img = card.querySelector('img');
        const lightboxImg = lightbox.querySelector('img');

        if (img && lightboxImg) {
          const picture = img.parentElement;
          let srcToUse = img.src;

          if (picture?.tagName === 'PICTURE') {
            const webpSource = picture.querySelector('source[type="image/webp"]');
            if (webpSource) {
              const srcset = webpSource.getAttribute('srcset');
              if (srcset?.includes('2x')) {
                const highResSrc = srcset.split(',').find(s => s.includes('2x'))?.trim().split(' ')[0];
                if (highResSrc) srcToUse = highResSrc;
              }
            }
          }

          lightboxImg.src = srcToUse;
          lightboxImg.alt = img.alt;
          lightbox.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });
  }
})();
