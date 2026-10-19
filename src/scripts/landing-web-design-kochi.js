/* =========================================================
   INTERACTION SCRIPTS: VIDEO CONTROLS, WHATSAPP, REVEALS
   ========================================================= */

/* Hero Video Controls */
(function(){
  var video = document.getElementById('heroVideo');
  var soundBtn = document.getElementById('soundBtn');
  var soundIcon = document.getElementById('soundIcon');
  var soundText = document.getElementById('soundText');
  var playBtn = document.getElementById('playBtn');
  var playIcon = document.getElementById('playIcon');
  var playText = document.getElementById('playText');

  if (!video) return;

  if (soundBtn) {
    soundBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      if (video.muted) {
        video.muted = false;
        soundIcon.textContent = '🔊';
        soundText.textContent = 'Mute';
        soundBtn.setAttribute('aria-label', 'Mute audio');
      } else {
        video.muted = true;
        soundIcon.textContent = '🔇';
        soundText.textContent = 'Sound';
        soundBtn.setAttribute('aria-label', 'Unmute audio');
      }
    });
  }

  if (playBtn) {
    playBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      if (video.paused) {
        video.play();
        playIcon.textContent = '⏸';
        playText.textContent = 'Pause';
        playBtn.setAttribute('aria-label', 'Pause video');
      } else {
        video.pause();
        playIcon.textContent = '▶';
        playText.textContent = 'Play';
        playBtn.setAttribute('aria-label', 'Play video');
      }
    });
  }

  video.addEventListener('play', function() {
    if (playIcon) playIcon.textContent = '⏸';
    if (playText) playText.textContent = 'Pause';
  });
  video.addEventListener('pause', function() {
    if (playIcon) playIcon.textContent = '▶';
    if (playText) playText.textContent = 'Play';
  });

  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    video.pause();
  }
})();

/* Scroll reveal & Neumorphic Card Entrance Observer */
(function(){
  var cards = document.querySelectorAll('.reveal, .neu-card, .work, .sol, .svc, .why, .pcard, .step, .pain > div, .testi-card');
  if (!('IntersectionObserver' in window)) {
    cards.forEach(function(c){ c.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  cards.forEach(function(c){ io.observe(c); });
})();

/* Continuous Testimonial Marquee Interaction */
(function(){
  var track = document.getElementById('testiTrack');
  var prevBtn = document.getElementById('testiPrev');
  var nextBtn = document.getElementById('testiNext');
  var toggleBtn = document.getElementById('testiToggle');
  var mask = document.getElementById('testiMask');
  if (!track) return;

  var isPaused = false;
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function(){
      isPaused = !isPaused;
      if (isPaused) {
        track.classList.add('paused');
        toggleBtn.innerHTML = '▶';
        toggleBtn.setAttribute('aria-label', 'Play testimonials animation');
      } else {
        track.classList.remove('paused');
        toggleBtn.innerHTML = '⏸';
        toggleBtn.setAttribute('aria-label', 'Pause testimonials animation');
      }
    });
  }

  if (prevBtn && nextBtn && mask) {
    var getStep = function(){
      var card = mask.querySelector('.testi-card');
      return card ? card.offsetWidth + 26 : 380;
    };
    prevBtn.addEventListener('click', function(){
      mask.scrollBy({ left: -getStep(), behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', function(){
      mask.scrollBy({ left: getStep(), behavior: 'smooth' });
    });
  }
})();

/* Animated 5 Steps Process Progress Indicator */
(function(){
  var steps = document.querySelectorAll('.step');
  var lineFill = document.getElementById('stepsLineFill');
  if (!steps.length) return;

  if (!('IntersectionObserver' in window)) {
    steps.forEach(function(s){ s.classList.add('active'); });
    if (lineFill) lineFill.style.width = '100%';
    return;
  }

  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting) {
        var stepNum = parseInt(entry.target.getAttribute('data-step') || '1', 10);
        entry.target.classList.add('active');
        if (lineFill) {
          var pct = Math.min(100, (stepNum / 5) * 100);
          lineFill.style.width = pct + '%';
        }
      }
    });
  }, { threshold: 0.35 });

  steps.forEach(function(s){ io.observe(s); });
})();

/* Count-up stats */
(function(){
  var nums = document.querySelectorAll('[data-count]');
  var run = function(el) {
    var t = +el.dataset.count, s = el.querySelector('span').outerHTML, c = 0, step = Math.max(1, Math.ceil(t / 40));
    var iv = setInterval(function(){
      c += step;
      if (c >= t) { c = t; clearInterval(iv); }
      el.innerHTML = c + s;
    }, 30);
  };
  if (!('IntersectionObserver' in window)) {
    nums.forEach(run);
    return;
  }
  var io = new IntersectionObserver(function(es){
    es.forEach(function(e){
      if (e.isIntersecting) {
        run(e.target);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  nums.forEach(function(n){ io.observe(n); });
})();

/* WhatsApp Action Handler */
var WA_NUMBER = '916282249224';
function openWA(msg, label) {
  var text = 'Hi Teknoppy 👋 ' + msg + '\n(From: Web Design Kochi page)';
  if (window.gtag) gtag('event', 'whatsapp_click', { event_label: label || msg });
  window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(text), '_blank');
}

function msgFor(a) {
  if (a.dataset.msg) return a.dataset.msg;
  var h = a.querySelector('h3');
  if (a.classList.contains('svc') && h) return 'I\'m interested in ' + h.textContent.trim() + '. Please share details and a quote.';
  if (a.classList.contains('ind')) return 'I need a website for my ' + a.textContent.replace(/^[^A-Za-z]+/, '').trim() + ' business.';
  if (a.classList.contains('work') && h) return 'I saw your work for ' + h.textContent.trim() + '. I\'d like a similar website.';
  var t = a.textContent.replace(/[→📞💬📝]/g, '').trim();
  return 'I\'d like a free website quote. (' + t + ')';
}

document.querySelectorAll('a[href="#enquiry"]').forEach(function(a){
  if (a.dataset.msg || a.classList.contains('wa') || /WhatsApp/i.test(a.textContent)) {
    a.addEventListener('click', function(e){
      e.preventDefault();
      openWA(msgFor(a), a.textContent.trim().slice(0, 40));
    });
  } else {
    a.addEventListener('click', function(e){
      var target = document.getElementById('enquiry');
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});

/* Scroll Progress Bar */
(function(){
  var b = document.getElementById('prog');
  if (!b) return;
  window.addEventListener('scroll', function(){
    var h = document.documentElement;
    var total = h.scrollHeight - h.clientHeight;
    b.style.width = total > 0 ? (h.scrollTop / total * 100) + '%' : '0%';
  }, { passive: true });
})();

/* Rotating Headline Word */
(function(){
  var el = document.getElementById('rot');
  if (!el) return;
  var words = ['Lead Machine', 'Sales Engine', '24/7 Salesperson', 'Lead Magnet'], i = 0;
  setInterval(function(){
    i = (i + 1) % words.length;
    el.innerHTML = '<span class="w">' + words[i] + '</span>';
  }, 2600);
})();

/* Animated WhatsApp Chat Demo */
(function(){
  var box = document.getElementById('msgs');
  if (!box) return;
  var script = [
    ['me', 'Hi Teknoppy 👋 I need a website for my business'],
    ['tk', 'Hi! Happy to help 😊 What kind of business do you run?'],
    ['me', 'A dental clinic in Kochi 🦷'],
    ['tk', 'Great! We\'ll send a free website plan and fixed quote within 24 hours ✅'],
    ['me', 'Perfect, thank you! 🙌']
  ];
  function time(){
    var d = new Date();
    return d.getHours() + ':' + ('0' + d.getMinutes()).slice(-2);
  }
  function play(){
    box.innerHTML = '';
    var k = 0;
    (function next(){
      if (k >= script.length) { setTimeout(play, 3500); return; }
      var m = script[k++];
      var add = function(){
        var b = document.createElement('div');
        b.className = 'bub ' + m[0];
        b.innerHTML = m[1] + '<span class="t">' + time() + (m[0] === 'me' ? ' ✓✓' : '') + '</span>';
        box.appendChild(b);
        setTimeout(next, m[0] === 'me' ? 900 : 1300);
      };
      if (m[0] === 'tk') {
        var t = document.createElement('div');
        t.className = 'typing';
        t.innerHTML = '<i></i><i></i><i></i>';
        box.appendChild(t);
        setTimeout(function(){ t.remove(); add(); }, 1300);
      } else {
        add();
      }
    })();
  }
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(es){
      if (es[0].isIntersecting) { play(); io.disconnect(); }
    }, { threshold: 0.3 });
    io.observe(box);
  } else {
    play();
  }
})();

/* WhatsApp Floating Tooltip */
(function(){
  var tip = document.getElementById('waTip'), x = document.getElementById('waX');
  if (!tip) return;
  setTimeout(function(){ tip.classList.add('show'); }, 4000);
  tip.addEventListener('click', function(e){
    if (e.target === x) { tip.classList.remove('show'); return; }
    openWA('I\'d like a free website quote.', 'tooltip');
  });
})();

/* Enquiry Form Submission */
(function(){
  var leadForm = document.getElementById('leadForm');
  if (!leadForm) return;
  leadForm.addEventListener('submit', async function(e){
    e.preventDefault();
    var f = this, name = f.name.value.trim(), phone = f.phone.value.trim(), svc = f.service.value, bud = f.budget.value;
    var errEl = document.getElementById('formErr');
    if (errEl) { errEl.style.display = 'none'; errEl.textContent = ''; }

    if (!name) { f.name.focus(); f.name.style.borderColor = '#E0440E'; return; }
    if (phone.replace(/\D/g, '').length < 8) { f.phone.focus(); f.phone.style.borderColor = '#E0440E'; return; }

    var btn = f.querySelector('button[type="submit"]');
    var origBtnText = btn ? btn.innerHTML : '';
    if (btn) {
      btn.disabled = true;
      btn.style.opacity = '0.7';
    }

    var payload = {
      name: name,
      phone: phone,
      email: 'lead@teknoppy.com', // Default placeholder for lead forms where email is not in the short form
      service: svc,
      message: 'Service: ' + svc + '\nBudget: ' + bud + '\nSource: Web Design Kochi Landing Page',
      source: 'Web Design Landing Page'
    };

    try {
      var res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      });

      var data = null;
      try {
        data = await res.json();
      } catch (parseErr) {
        data = null;
      }

      if (!res.ok || !data || data.ok !== true) {
        var errorMsg = (data && data.error) ? data.error : 'Could not submit your request. Please try again.';
        throw new Error(errorMsg);
      }

      // Confirmed success: redirect to thank-you page (NO WhatsApp popup)
      window.location.href = '/web-design-company-landingpage/thank-you/';
    } catch (err) {
      if (errEl) {
        errEl.textContent = err.message || 'Could not submit your request. Please call +91 62822 49224 or reach out via WhatsApp.';
        errEl.style.display = 'block';
      }
      if (btn) {
        btn.disabled = false;
        btn.style.opacity = '1';
        if (origBtnText) btn.innerHTML = origBtnText;
      }
    }
  });
})();