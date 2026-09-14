/* ══════════ Mobile nav ══════════ */
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(open));
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

window.matchMedia('(min-width: 1000px)').addEventListener('change', e => {
  if (!e.matches) return;
  nav.classList.remove('is-open');
  navToggle.setAttribute('aria-expanded', 'false');
});

/* ══════════ Carousels (testimonials + reviews) ══════════ */
document.querySelectorAll('[data-carousel]').forEach(root => {
  const track = root.querySelector('[data-track]');
  const dotsBox = root.querySelector('[data-dots]');
  const prev = root.querySelector('[data-prev]');
  const next = root.querySelector('[data-next]');
  const slides = [...track.children];
  if (!slides.length) return;

  const step = () => slides[0].offsetWidth + 14; // slide + gap
  const perView = () => Math.max(1, Math.round(track.clientWidth / slides[0].offsetWidth));
  const pageCount = () => Math.max(1, slides.length - perView() + 1);

  let dots = [];
  const syncDots = () => {
    const i = Math.min(Math.round(track.scrollLeft / step()), dots.length - 1);
    dots.forEach((d, n) => d.setAttribute('aria-current', String(n === i)));
  };
  const buildDots = () => {
    if (!dotsBox) return;
    dotsBox.innerHTML = '';
    dots = Array.from({ length: pageCount() }, (_, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', `Go to slide ${i + 1}`);
      b.addEventListener('click', () => track.scrollTo({ left: i * step(), behavior: 'smooth' }));
      dotsBox.appendChild(b);
      return b;
    });
    syncDots();
  };

  prev?.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
  next?.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));

  let raf;
  track.addEventListener('scroll', () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(syncDots);
  }, { passive: true });

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(buildDots, 150);
  });

  buildDots();
});

/* ══════════ FAQ — one open at a time ══════════ */
const faqItems = document.querySelectorAll('.faq .qa');
faqItems.forEach(item => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    faqItems.forEach(other => { if (other !== item) other.open = false; });
  });
});

/* ══════════ Reveal on scroll ══════════ */
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const targets = document.querySelectorAll(
    '.stat, .logo-card, .why__list li, .step, .plan, .problem, ' +
    '.case__box, .inc-grid li, .trust__list li, .band__inner, .results__card, .expert__card, .work'
  );
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  // only hide what is still below the fold — nothing already on screen flashes
  targets.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    el.classList.add('reveal');
    io.observe(el);
  });
}

/* ══════════ Testimonial videos — click to load the YouTube player ══════════ */
document.querySelectorAll('.vcard[data-yt]').forEach(card => {
  const play = () => {
    if (card.classList.contains('is-playing')) return;
    const frame = document.createElement('iframe');
    frame.src = `https://www.youtube-nocookie.com/embed/${card.dataset.yt}?autoplay=1&rel=0&playsinline=1`;
    frame.title = card.dataset.title || 'Client testimonial';
    frame.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share';
    frame.allowFullscreen = true;
    card.classList.add('is-playing');
    card.appendChild(frame);
  };
  card.addEventListener('click', play);
  card.querySelector('.vcard__play')?.addEventListener('click', e => { e.stopPropagation(); play(); });
});

/* ══════════ Google Ads conversions ══════════ */
const ads = document.body.dataset;
const convert = label => {
  if (!ads.adsId || !label || typeof window.gtag !== 'function') return;
  window.gtag('event', 'conversion', { send_to: `${ads.adsId}/${label}` });
};
document.addEventListener('click', e => {
  const a = e.target.closest?.('a[href]');
  if (!a) return;
  if (a.href.startsWith('https://wa.me/')) convert(ads.adsWa);
  else if (a.href.startsWith('tel:')) convert(ads.adsCall);
});

// Remember where the visitor came from, so the enquiry email names the campaign.
const attribution = (() => {
  const keys = ['gclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  const qs = new URLSearchParams(location.search);
  let found = keys.filter(k => qs.get(k)).map(k => `${k}=${qs.get(k)}`).join(' · ');
  try {
    if (found) sessionStorage.setItem('tk-attribution', found);
    else found = sessionStorage.getItem('tk-attribution') || '';
  } catch (_) { /* storage blocked — attribution from this URL only */ }
  return found;
})();

/* ══════════ Lead form → /api/contact ══════════ */
(() => {
  const form = document.getElementById('leadForm');
  if (!form) return;
  const done = document.getElementById('formDone');
  const fail = document.getElementById('formFail');
  const btn = document.getElementById('lfSubmit');
  const label = btn.querySelector('span');
  const idleLabel = label.textContent;

  const rules = {
    'lf-name': v => v.trim().length >= 2 || 'Please enter your name',
    'lf-email': v => /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v.trim()) || 'Enter a valid email address',
    'lf-phone': v => v.replace(/\D/g, '').length >= 8 || 'Enter a valid phone number'
  };

  const validate = id => {
    const input = document.getElementById(id);
    const res = rules[id](input.value);
    const msg = res === true ? '' : res;
    const field = input.closest('.field');
    field.classList.toggle('is-bad', !!msg);
    field.querySelector('.field__err').textContent = msg;
    input.setAttribute('aria-invalid', msg ? 'true' : 'false');
    return !msg;
  };

  Object.keys(rules).forEach(id => {
    const input = document.getElementById(id);
    input.addEventListener('blur', () => validate(id));
    input.addEventListener('input', () => {
      if (input.closest('.field').classList.contains('is-bad')) validate(id);
    });
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (!Object.keys(rules).map(validate).every(Boolean)) {
      form.querySelector('.field.is-bad input')?.focus();
      return;
    }

    const d = Object.fromEntries(new FormData(form).entries());
    if (d.company_website) return; // honeypot

    const payload = {
      name: d.name.trim(),
      email: d.email.trim(),
      phone: d.phone.trim(),
      service: form.dataset.service || 'Website',
      source: attribution ? `${form.dataset.source} — ${attribution}` : form.dataset.source,
      // /api/contact requires a message; the field is optional here
      message: [
        d.message.trim() || '(No message left)',
        d.company.trim() && `Company / website: ${d.company.trim()}`
      ].filter(Boolean).join('\n\n')
    };

    fail.hidden = true;
    btn.disabled = true;
    label.textContent = 'Sending…';

    try {
      const res = await fetch(form.dataset.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error(String(res.status));
      convert(ads.adsLead);
      form.hidden = true;
      done.hidden = false;
      done.scrollIntoView({ block: 'center', behavior: 'smooth' });
    } catch (_) {
      fail.hidden = false;
      btn.disabled = false;
      label.textContent = idleLabel;
    }
  });
})();
