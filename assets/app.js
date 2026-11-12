document.getElementById('year').textContent = new Date().getFullYear();

// header background after scroll
const header = document.getElementById('top');
const onScroll = () => header.classList.toggle('solid', scrollY > 40);
addEventListener('scroll', onScroll, { passive: true });
onScroll();

// mobile menu
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const setMenu = (open) => {
  nav.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
};
burger.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
nav.addEventListener('click', (e) => { if (e.target.tagName === 'A') setMenu(false); });

// reveal on scroll
const targets = document.querySelectorAll('.head, .show, .card, .tech-card, .boards, .order li, .terms div, .lab-img, .lab-text, .g, .contact > *');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }, { rootMargin: '0px 0px -8% 0px' });
  targets.forEach((el) => { el.classList.add('rv'); io.observe(el); });
}

// gallery lightbox
const box = document.getElementById('lightbox');
const boxImg = box.querySelector('img');
const items = [...document.querySelectorAll('#grid .g')];
let idx = 0;
const show = (i) => {
  idx = (i + items.length) % items.length;
  boxImg.src = items[idx].href;
  boxImg.alt = items[idx].querySelector('img').alt;
  box.hidden = false;
};
const close = () => { box.hidden = true; boxImg.removeAttribute('src'); };
items.forEach((a, i) => a.addEventListener('click', (e) => { e.preventDefault(); show(i); }));
box.addEventListener('click', (e) => {
  if (e.target.classList.contains('lb-prev')) show(idx - 1);
  else if (e.target.classList.contains('lb-next')) show(idx + 1);
  else if (e.target !== boxImg) close();
});
addEventListener('keydown', (e) => {
  if (box.hidden) return;
  if (e.key === 'Escape') close();
  if (e.key === 'ArrowLeft') show(idx - 1);
  if (e.key === 'ArrowRight') show(idx + 1);
});

// contact buttons are placeholders until real links are provided
document.querySelectorAll('[data-todo]').forEach((a) => a.addEventListener('click', (e) => e.preventDefault()));
