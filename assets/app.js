(() => {
  const { getJSON, src, t, el, translate, productCard, menu } = window.SL;
  menu();

  // header background after scroll
  const header = document.getElementById('top');
  const onScroll = () => header.classList.toggle('solid', scrollY > 40);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // reveal on scroll
  const io = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }, { rootMargin: '0px 0px -8% 0px' }) : null;
  const reveal = (els) => { if (io) els.forEach((n) => { n.classList.add('rv'); io.observe(n); }); };
  reveal(document.querySelectorAll('.head, .show, .tech-card, .boards, .order li, .terms div, .lab-img, .lab-text, .contact > *'));

  // товары
  getJSON('content/products.json').then((list) => {
    const cards = list.map(productCard);
    document.getElementById('cards').replaceChildren(...cards);
    reveal(cards);
    translate();
  }).catch(console.error);

  // галерея с просмотром
  const lb = document.getElementById('lightbox');
  const lbImg = lb.querySelector('img');
  let items = [], idx = 0;
  const show = (i) => {
    idx = (i + items.length) % items.length;
    lbImg.src = items[idx].href;
    lbImg.alt = items[idx].querySelector('img').alt;
    lb.hidden = false;
  };
  const close = () => { lb.hidden = true; lbImg.removeAttribute('src'); };
  lb.addEventListener('click', (e) => {
    if (e.target.classList.contains('lb-prev')) show(idx - 1);
    else if (e.target.classList.contains('lb-next')) show(idx + 1);
    else if (e.target !== lbImg) close();
  });
  addEventListener('keydown', (e) => {
    if (lb.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(idx - 1);
    if (e.key === 'ArrowRight') show(idx + 1);
  });
  getJSON('content/gallery.json').then((list) => {
    items = list.filter((g) => g.image).map((g, i) => {
      const a = el('a', 'g' + (g.wide ? ' wide' : '') + (g.tall ? ' tall' : ''));
      a.href = src(g.image);
      const img = el('img');
      img.loading = 'lazy';
      img.src = src(g.image);
      img.alt = t(g.caption, g.caption_en);
      a.append(img);
      a.addEventListener('click', (e) => { e.preventDefault(); show(i); });
      return a;
    });
    document.getElementById('grid').replaceChildren(...items);
    reveal(items);
    translate();
  }).catch(console.error);

  // контакты и список плат
  getJSON('content/site.json').then((s) => {
    const tg = (s.telegram || '').trim(), wa = (s.whatsapp || '').replace(/\D/g, ''), ph = (s.phone || '').trim();
    const links = [
      tg && ['Telegram', /^https?:/.test(tg) ? tg : 'https://t.me/' + tg.replace(/^@/, '')],
      wa && ['WhatsApp', 'https://wa.me/' + wa],
      s.vk && ['ВКонтакте', s.vk],
      ph && [ph, 'tel:' + ph.replace(/[^\d+]/g, '')],
      s.email && [s.email, 'mailto:' + s.email],
    ].filter(Boolean);
    if (links.length) {
      document.getElementById('contactBtns').replaceChildren(...links.map(([label, href], i) => {
        const a = el('a', 'btn' + (i ? ' btn-ghost' : ''), label);
        a.href = href;
        if (/^https?:/.test(href)) { a.target = '_blank'; a.rel = 'noopener'; }
        return a;
      }));
    }
    if (Array.isArray(s.boards) && s.boards.length) {
      document.getElementById('boards').replaceChildren(...s.boards.map((b) => el('li', '', b)));
    }
    translate();
  }).catch(console.error);
})();
