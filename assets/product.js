(() => {
  const $ = (id) => document.getElementById(id);
  $('year').textContent = new Date().getFullYear();

  const burger = $('burger'), nav = $('nav');
  burger.addEventListener('click', () => {
    const open = !nav.classList.contains('open');
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
  });

  const list = window.PRODUCTS || [];
  const id = new URLSearchParams(location.search).get('id');
  const p = list.find((x) => x.id === id) || list[0];
  if (!p) return;

  const img = (name) => `assets/img/${name}.webp`;
  const li = (items, el) => items.forEach((t) => { const n = document.createElement('li'); n.textContent = t; el.append(n); });

  document.title = `${p.name}. SOUL LIGHT`;
  $('crumb').textContent = p.name;
  $('pdName').textContent = p.name;
  $('pdText').textContent = p.text;
  $('pdPrice').textContent = p.price || 'Цена по запросу';
  if (p.badge) { $('pdBadge').textContent = p.badge; $('pdBadge').hidden = false; }

  // gallery
  const main = $('pdMain'), thumbs = $('pdThumbs');
  const pick = (i) => {
    main.src = img(p.images[i]);
    main.alt = p.name;
    [...thumbs.children].forEach((b, k) => b.classList.toggle('on', k === i));
  };
  p.images.forEach((name, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', `Фото ${i + 1}`);
    b.innerHTML = `<img src="${img(name)}" alt="" loading="lazy">`;
    b.addEventListener('click', () => pick(i));
    thumbs.append(b);
  });
  pick(0);
  if (p.images.length < 2) thumbs.hidden = true;

  // optional blocks
  if (p.features?.length) li(p.features, $('pdFeatures')); else $('pdFeaturesBox').hidden = true;
  if (p.kit?.length) li(p.kit, $('pdKit')); else $('pdKitBox').hidden = true;
  if (p.specs?.length) {
    p.specs.forEach(([k, v]) => {
      const dt = document.createElement('dt'), dd = document.createElement('dd');
      dt.textContent = k; dd.textContent = v;
      $('pdSpecs').append(dt, dd);
    });
    $('pdSpecsBox').hidden = false;
  }
  if (p.options?.length) {
    p.options.forEach((t) => { const s = document.createElement('span'); s.textContent = t; $('pdOptions').append(s); });
    $('pdOptions').hidden = false;
  }
  if (p.video) { $('pdVideo').src = p.video; $('pdVideoBox').hidden = false; }

  // other products
  list.filter((x) => x.id !== p.id).forEach((x) => {
    const a = document.createElement('a');
    a.className = 'card';
    a.href = `product.html?id=${x.id}`;
    a.innerHTML = `<img loading="lazy" src="${img(x.images[0])}" alt=""><h3></h3><p></p><span class="link"></span>`;
    a.querySelector('h3').textContent = x.name;
    a.querySelector('p').textContent = x.short;
    a.querySelector('.link').textContent = x.price || 'Цена по запросу';
    $('pdMore').append(a);
  });
})();
