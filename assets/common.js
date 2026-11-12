// Общие помощники для страниц. Содержимое сайта лежит в папке content и редактируется через панель управления.
window.SL = (() => {
  const getJSON = (path) => fetch(path, { cache: 'no-cache' }).then((r) => (r.ok ? r.json() : Promise.reject(new Error(path + ' ' + r.status))));
  // пути из панели начинаются с "/", делаем их относительными
  const src = (p) => String(p || '').replace(/^\/+/, '');
  // запоминает перевод и возвращает русский текст
  const t = (ru, en) => { if (ru && en && window.I18N) window.I18N.add(ru, en); return ru || ''; };
  const el = (tag, cls, text) => { const n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; };
  const translate = () => window.I18N && window.I18N.apply();

  const productCard = (p, i) => {
    const a = el('a', 'card');
    a.href = 'product.html?id=' + encodeURIComponent(p.id || i);
    const img = el('img');
    img.loading = 'lazy';
    img.src = src((p.images || [])[0]);
    img.alt = t(p.name, p.name_en);
    a.append(img, el('h3', '', t(p.name, p.name_en)), el('p', '', t(p.short, p.short_en)), el('span', 'link', p.price || 'Подробнее'));
    return a;
  };

  const ICONS = {
    youtube: ['YouTube', '<path d="M23 7.200a3 3 0 0 0-2.100-2.100C19 4.600 12 4.600 12 4.600s-7 0-8.900.500A3 3 0 0 0 1 7.200 31 31 0 0 0 .500 12 31 31 0 0 0 1 16.800a3 3 0 0 0 2.100 2.100c1.900.500 8.900.500 8.900.500s7 0 8.900-.500a3 3 0 0 0 2.100-2.100A31 31 0 0 0 23.500 12 31 31 0 0 0 23 7.200ZM9.700 15.500v-7l6.100 3.500Z"/>'],
    instagram: ['Instagram', '<rect x="3" y="3" width="18" height="18" rx="5.200" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4.100" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.400" cy="6.600" r="1.250"/>'],
    tiktok: ['TikTok', '<path d="M16.600 2.500c.300 2.300 1.600 3.900 4 4.200v3.200c-1.400.100-2.700-.300-4-1.100v6.500c0 3.400-2.600 6.200-6 6.200a6 6 0 0 1-6-6c0-3.600 3.100-6.400 6.800-5.900v3.300c-1.700-.400-3.500.700-3.500 2.600 0 1.500 1.200 2.700 2.700 2.700 1.600 0 2.800-1.200 2.800-2.900V2.500h3.200Z"/>'],
  };
  // значки соцсетей во всех блоках с data-socials
  const socials = () => getJSON('content/site.json').then((s) => {
    const links = Object.keys(ICONS).filter((k) => (s[k] || '').trim());
    document.querySelectorAll('[data-socials]').forEach((box) => {
      box.replaceChildren(...links.map((k) => {
        const a = el('a');
        a.href = s[k].trim();
        a.target = '_blank';
        a.rel = 'noopener';
        a.setAttribute('aria-label', ICONS[k][0]);
        a.title = ICONS[k][0];
        a.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">' + ICONS[k][1] + '</svg>';
        return a;
      }));
    });
    const stub = document.querySelector('#contactBtns > .sub');
    if (stub && links.length) stub.remove();
  }).catch(console.error);

  const menu = () => {
    socials();
    const burger = document.getElementById('burger'), nav = document.getElementById('nav');
    const set = (open) => { nav.classList.toggle('open', open); burger.setAttribute('aria-expanded', open); };
    burger.addEventListener('click', () => set(!nav.classList.contains('open')));
    nav.addEventListener('click', (e) => { if (e.target.tagName === 'A') set(false); });
    document.getElementById('year').textContent = new Date().getFullYear();
  };

  return { getJSON, src, t, el, translate, productCard, menu };
})();
