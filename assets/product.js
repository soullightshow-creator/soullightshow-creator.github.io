(() => {
  const { getJSON, src, t, el, translate, productCard, menu } = window.SL;
  const $ = (id) => document.getElementById(id);
  menu();

  getJSON('content/products.json').then((list) => {
    const id = new URLSearchParams(location.search).get('id');
    const p = list.find((x, i) => String(x.id || i) === id) || list[0];
    if (!p) return;

    const name = t(p.name, p.name_en);
    if (window.I18N) window.I18N.setTitle(name + '. SOUL LIGHT', (p.name_en || name) + '. SOUL LIGHT');
    else document.title = name + '. SOUL LIGHT';
    $('crumb').textContent = name;
    $('pdName').textContent = name;
    $('pdText').textContent = t(p.text, p.text_en) || t(p.short, p.short_en);
    $('pdPrice').textContent = p.price || 'Цена по запросу';
    if (p.badge) { $('pdBadge').textContent = p.badge; $('pdBadge').hidden = false; }

    // галерея
    const images = (p.images || []).map(src);
    const main = $('pdMain'), thumbs = $('pdThumbs');
    const pick = (i) => {
      main.src = images[i];
      main.alt = name;
      [...thumbs.children].forEach((b, k) => b.classList.toggle('on', k === i));
    };
    images.forEach((path, i) => {
      const b = el('button');
      b.type = 'button';
      b.setAttribute('aria-label', 'Фото ' + (i + 1));
      const img = el('img');
      img.src = path; img.alt = ''; img.loading = 'lazy';
      b.append(img);
      b.addEventListener('click', () => pick(i));
      thumbs.append(b);
    });
    if (images.length) pick(0);
    if (images.length < 2) thumbs.hidden = true;

    // блоки показываются только если заполнены
    const pairs = (arr) => (arr || []).filter((x) => x && x.ru);
    const fill = (arr, listId, boxId) => {
      const rows = pairs(arr);
      if (!rows.length) { $(boxId).hidden = true; return; }
      rows.forEach((x) => $(listId).append(el('li', '', t(x.ru, x.en))));
    };
    fill(p.features, 'pdFeatures', 'pdFeaturesBox');
    fill(p.kit, 'pdKit', 'pdKitBox');
    const specs = (p.specs || []).filter((x) => x && x.name);
    if (specs.length) {
      specs.forEach((x) => $('pdSpecs').append(el('dt', '', t(x.name, x.name_en)), el('dd', '', t(x.value, x.value_en))));
      $('pdSpecsBox').hidden = false;
    }
    if (p.video) { $('pdVideo').src = p.video; $('pdVideoBox').hidden = false; }

    // остальные товары
    const others = list.filter((x) => x !== p);
    if (others.length) $('pdMore').replaceChildren(...others.map((x) => productCard(x, list.indexOf(x))));
    else $('pdMore').closest('section').hidden = true;

    translate();
  }).catch(console.error);
})();
