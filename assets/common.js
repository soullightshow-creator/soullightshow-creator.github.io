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

  const menu = () => {
    const burger = document.getElementById('burger'), nav = document.getElementById('nav');
    const set = (open) => { nav.classList.toggle('open', open); burger.setAttribute('aria-expanded', open); };
    burger.addEventListener('click', () => set(!nav.classList.contains('open')));
    nav.addEventListener('click', (e) => { if (e.target.tagName === 'A') set(false); });
    document.getElementById('year').textContent = new Date().getFullYear();
  };

  return { getJSON, src, t, el, translate, productCard, menu };
})();
