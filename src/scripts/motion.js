/**
 * Reusable Motion Engine — Teknoppy
 * Zero dependencies, ultra-lightweight, supports Astro transitions.
 */

(function initTeknoppyMotion() {
  if (typeof window === 'undefined') return;

  function setupMotion() {
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var fine = window.matchMedia('(pointer: fine)').matches;

    // Helper query
    function $$(sel, ctx) {
      return Array.prototype.slice.call((ctx || document).querySelectorAll(sel));
    }

    if (reduce) {
      $$('[data-reveal], [data-stagger], [data-words], [data-chars]').forEach(function(el) {
        el.classList.add('is-revealed');
      });
      return;
    }

    if (fine) {
      // 1. SPLIT WORDS (Fine pointer only — preserves mobile DOM & CPU)
      $$('[data-words]:not(.motion-processed)').forEach(function(el) {
        el.classList.add('motion-processed');
        var words = el.textContent.trim().split(/\s+/);
        el.innerHTML = words.map(function(w, i) {
          return '<span class="motion-word" style="--word-index: ' + i + '">' + w + '</span>';
        }).join(' ');
      });

      // 2. SPLIT CHARACTERS (Fine pointer only)
      $$('[data-chars]:not(.motion-processed)').forEach(function(el) {
        el.classList.add('motion-processed');
        var k = 0;
        el.innerHTML = el.innerHTML.replace(/(<span[^>]*>)?([^<]+)(<\/span>)?/g, function(m, openTag, text, closeTag) {
          return (openTag || '') + text.split(' ').map(function(word) {
            return word ? '<span style="white-space:nowrap;display:inline-block">' + word.split('').map(function(c) {
              return '<span class="motion-char" style="--char-index: ' + (k++) + '">' + c + '</span>';
            }).join('') + '</span>' : '';
          }).join(' ') + (closeTag || '');
        });
      });
    }

    // 3. SET STAGGER INDICES
    $$('[data-stagger]').forEach(function(parent) {
      var children = Array.prototype.slice.call(parent.children);
      children.forEach(function(child, idx) {
        child.style.setProperty('--stagger-index', idx);
      });
    });

    // 4. SET REVEAL DELAYS / DURATIONS
    $$('[data-reveal]').forEach(function(el) {
      if (el.dataset.delay) {
        el.style.setProperty('--motion-delay', el.dataset.delay);
      }
      if (el.dataset.duration) {
        el.style.setProperty('--motion-duration', el.dataset.duration);
      }
    });

    // 5. OBSERVE REVEALS & NUMBER COUNTERS (Pure IntersectionObserver — Zero forced reflows)
    if ('IntersectionObserver' in window) {
      var revealObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      $$('[data-reveal], [data-stagger], [data-words], [data-chars]').forEach(function(el) {
        revealObserver.observe(el);
      });

      // Number counter observer
      var countObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          var to = Number(el.dataset.to || el.textContent);
          var from = Number(el.dataset.from || 0);
          var duration = Number(el.dataset.duration || 1600);
          var startTime = null;

          function animateCount(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / duration, 1);
            var current = Math.round(from + (to - from) * (1 - Math.pow(1 - progress, 3)));
            el.textContent = current;
            if (progress < 1) {
              requestAnimationFrame(animateCount);
            }
          }

          requestAnimationFrame(animateCount);
          countObserver.unobserve(el);
        });
      }, { threshold: 0.4 });

      $$('[data-count]').forEach(function(el) {
        countObserver.observe(el);
      });
    }

    // 6. DESKTOP-ONLY MOTION HOOKS (fine pointer)
    if (fine) {
      // Tilt (data-tilt)
      $$('[data-tilt]').forEach(function(el) {
        var intensity = Number(el.dataset.tilt || 10);
        el.addEventListener('mousemove', function(e) {
          var rect = el.getBoundingClientRect();
          var x = ((e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)) * intensity;
          var y = -((e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)) * intensity;
          el.style.transform = 'perspective(1000px) rotateX(' + y.toFixed(2) + 'deg) rotateY(' + x.toFixed(2) + 'deg)';
        });
        el.addEventListener('mouseleave', function() {
          el.style.transform = '';
        });
      });

      // Magnetic (data-magnetic)
      $$('[data-magnetic]').forEach(function(btn) {
        var power = Number(btn.dataset.magnetic || 0.22);
        btn.addEventListener('mousemove', function(e) {
          var rect = btn.getBoundingClientRect();
          var x = (e.clientX - (rect.left + rect.width / 2)) * power;
          var y = (e.clientY - (rect.top + rect.height / 2)) * power;
          btn.style.transform = 'translate(' + x.toFixed(2) + 'px, ' + y.toFixed(2) + 'px)';
        });
        btn.addEventListener('mouseleave', function() {
          btn.style.transform = '';
        });
      });

      // Spotlight (data-spotlight)
      $$('[data-spotlight]').forEach(function(card) {
        card.addEventListener('mousemove', function(e) {
          var rect = card.getBoundingClientRect();
          card.style.setProperty('--spotlight-x', (e.clientX - rect.left) + 'px');
          card.style.setProperty('--spotlight-y', (e.clientY - rect.top) + 'px');
        });
      });
    }

    // 7. PARALLAX DRIVER (data-parallax)
    var parallaxElements = $$('[data-parallax]');
    if (parallaxElements.length > 0) {
      function onParallaxScroll() {
        var scrollY = window.pageYOffset || document.documentElement.scrollTop;
        parallaxElements.forEach(function(el) {
          var speed = Number(el.dataset.parallax || 0.15);
          var offset = (scrollY - (el.offsetTop || 0)) * speed;
          el.style.transform = 'translate3d(0, ' + offset.toFixed(1) + 'px, 0)';
        });
      }
      window.addEventListener('scroll', onParallaxScroll, { passive: true });
    }

    // 8. DUPLICATE CONTENT FOR MARQUEE (data-marquee)
    $$('[data-marquee]').forEach(function(wrapper) {
      if (wrapper.classList.contains('marquee-initialized')) return;
      wrapper.classList.add('marquee-initialized', 'motion-marquee-wrapper');
      var content = wrapper.innerHTML;
      wrapper.innerHTML = '<div class="motion-marquee-track">' + content + content + '</div>';
    });

    // 9. PAUSE IDLE ANIMATIONS WHEN TAB IS HIDDEN
    document.addEventListener('visibilitychange', function() {
      var isHidden = document.visibilityState === 'hidden';
      $$('.motion-marquee-track, .motion-glow-blob, .spin, .film::before, .film::after').forEach(function(el) {
        el.style.animationPlayState = isHidden ? 'paused' : 'running';
      });
    });
  }

  function scheduleSetup() {
    var fine = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(pointer: fine)').matches;
    if (fine) {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(setupMotion);
      } else {
        setTimeout(setupMotion, 100);
      }
    } else {
      var initDone = false;
      function runOnce() {
        if (initDone) return;
        initDone = true;
        setupMotion();
      }
      ['scroll', 'touchstart'].forEach(function(evt) {
        window.addEventListener(evt, runOnce, { passive: true, once: true });
      });
      setTimeout(runOnce, 3500);
    }
  }

  // Bind to lifecycle events
  if (document.readyState === 'complete') {
    scheduleSetup();
  } else {
    window.addEventListener('load', scheduleSetup);
  }

  // Support Astro view transitions
  document.addEventListener('astro:page-load', scheduleSetup);
  document.addEventListener('astro:after-swap', scheduleSetup);
})();
