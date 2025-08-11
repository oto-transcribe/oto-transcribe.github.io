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
  const sectionEls = Array.from(document.querySelectorAll('[data-section], .hero'));
  const navLinks = Array.from(document.querySelectorAll('.nav__list a[href^="#"]'));
  const indicatorDots = Array.from(document.querySelectorAll('.section-indicator__dot'));
  
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

  // Track current section for keyboard navigation and sync with indicators
  const main = document.querySelector('main');
  if (main) {
    main.addEventListener('scroll', () => {
      const windowHeight = window.innerHeight;
      let newIndex = currentSectionIndex;
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        // Check if section is in the center of viewport
        if (rect.top <= windowHeight * 0.4 && rect.bottom >= windowHeight * 0.6) {
          newIndex = index;
        }
      });
      
      if (newIndex !== currentSectionIndex) {
        currentSectionIndex = newIndex;
        
        // Update indicators based on scroll position
        if (indicatorDots.length > 0) {
          indicatorDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSectionIndex);
          });
        }
      }
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

  // Enhanced lazy image loading with Apple editorial optimizations
  const lazyImgs = Array.from(document.querySelectorAll('img.lazy-image'));
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img instanceof HTMLImageElement) {
            // Preload high-res version for better UX
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
              img.addEventListener('load', () => img.classList.add('loaded'), { once:true });
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
      else img.addEventListener('load', () => img.classList.add('loaded'), { once:true });
    });
  }

  // Active navigation link highlighting and section indicators
  
  if ('IntersectionObserver' in window && sectionEls.length) {
    const sectionObserver = new IntersectionObserver(entries => {
      // Find the section that's most in view
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
    }, { 
      root: main, 
      rootMargin: '-10% 0px -10% 0px', 
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] 
    });
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

  // Apple Editorial Lightbox for Screenshots
  function createLightbox() {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
      <div class="lightbox-content">
        <img src="" alt="" />
      </div>
    `;
    document.body.appendChild(lightbox);
    
    // Close on click outside or escape key
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

  // Initialize lightbox for screenshot cards
  const { lightbox, closeLightbox } = createLightbox();
  const screenshotCards = document.querySelectorAll('.screenshot-card');
  
  screenshotCards.forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      const lightboxImg = lightbox.querySelector('img');
      
      if (img && lightboxImg) {
        // Use high-res version if available
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

  // Apple Intelligence performance monitoring
  if (typeof window.performance !== 'undefined' && window.performance.mark) {
    // Mark key performance milestones
    window.addEventListener('load', () => {
      performance.mark('oto-app-showcase-loaded');
      
      // Measure image loading performance
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

})();
