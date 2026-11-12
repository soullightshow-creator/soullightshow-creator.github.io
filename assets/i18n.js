// Переключатель языка. Русский текст живёт в HTML и products.js, здесь только перевод.
// Чтобы перевести новую фразу, добавьте строку: 'русский текст': 'English text'.
// Фразы без перевода остаются на русском.
(() => {
  const EN = {
    // меню и общее
    'Шоу': 'Show', 'Реквизит': 'Props', 'Разработка': 'Engineering', 'Технологии': 'Technology',
    'Галерея': 'Gallery', 'Как заказать': 'How to order', 'Контакты': 'Contact', 'Заказать': 'Order',
    'Меню': 'Menu', 'Наверх': 'Back to top', 'На главную': 'Home', 'Главная': 'Home',
    'Закрыть': 'Close', 'Назад': 'Previous', 'Вперёд': 'Next',
    'SOUL LIGHT. Световое шоу и светодиодный реквизит': 'SOUL LIGHT. LED light show and props',
    'SOUL LIGHT. Световое пиксельное шоу, светодиодные костюмы, кубы и веера собственной разработки.': 'SOUL LIGHT. LED pixel show, LED suits, cubes and fans designed and built in-house.',
    'Реквизит SOUL LIGHT': 'SOUL LIGHT props',

    // первый экран
    'Световое пиксельное шоу': 'LED pixel show',
    'Свет, который': 'Light that', 'танцует': 'dances',
    'Шоу в светодиодных костюмах и реквизит собственной разработки. Каждый пиксель управляется и попадает в музыку.': 'Shows in LED suits and props we design ourselves. Every pixel is controlled and lands on the beat.',
    'Заказать шоу': 'Book a show', 'Смотреть реквизит': 'See the props',
    'Четыре артиста в пиксельных костюмах со светодиодными веерами': 'Four performers in pixel suits with LED fans',

    'Геометрия': 'Geometry', 'из света': 'made of light',
    'Объёмные кубы со светодиодными рёбрами для вращений и построений.': 'Three-dimensional cubes with LED edges for spins and formations.',
    'Костюм': 'A suit', 'как экран': 'that is a screen',
    'Шлем, жилет и накладки из светодиодных панелей. Цвет и анимация задаются для каждого пикселя.': 'Helmet, vest and panels made of LED matrices. Colour and animation are set for every pixel.',
    'Шоу целиком за две минуты': 'The whole show in two minutes', 'Фрагменты светового шоу SOUL LIGHT': 'Highlights of the SOUL LIGHT show',
    'К товару': 'View product', 'О шоу': 'About the show', 'Слайды': 'Slides',
    'Отзывы': 'Reviews', 'Что говорят о нас': 'What people say',

    // преимущества
    'Преимущества': 'Advantages',
    'Своя разработка': 'In-house engineering', 'Электронику, корпуса и программы делаем сами.': 'We build the electronics, housings and software ourselves.',
    'Проверено сценой': 'Stage-proven', 'Продаём тот же реквизит, с которым выступаем.': 'We sell the same props we perform with.',
    'Управляемый пиксель': 'Addressable pixels', 'Цвет и анимация задаются для каждого светодиода.': 'Colour and animation are set for every single LED.',
    'Под заказ': 'Made to order', 'Соберём комплект под ваш номер и состав группы.': 'We put together a set for your act and your crew.',

    // шоу
    'Три номера, которые собираются в одну программу': 'Three acts that combine into one programme',
    'Пиксельные костюмы': 'Pixel suits',
    'Костюм работает как экран. По артистам бегут цвета, узоры и анимация, синхронно с музыкой и друг с другом.': 'The suit works like a screen. Colours, patterns and animation run across the performers, in sync with the music and with each other.',
    'Световые кубы': 'Light cubes',
    'Объёмные светодиодные кубы в руках артистов. Геометрия, вращения и построения, которые читаются с любого места в зале.': "Three-dimensional LED cubes in the performers' hands. Geometry, spins and formations that read from any seat in the hall.",
    'Веера': 'Fans',
    'Светодиодные веера складываются в общие фигуры. Сердце, крылья, солнце. Самый фотогеничный номер программы.': 'LED fans come together into shared shapes. A heart, wings, a sun. The most photogenic act of the programme.',
    'Четыре артиста в бирюзовых пиксельных костюмах': 'Four performers in turquoise pixel suits',
    'Артисты со светящимися кубами': 'Performers with glowing cubes',
    'Артисты со светодиодными веерами': 'Performers with LED fans',

    // реквизит
    'Делаем сами и продаём то, с чем выступаем': 'We build it ourselves and sell what we perform with',
    'Откройте карточку, чтобы посмотреть фото, состав комплекта и особенности.': "Open a card to see photos, what's included and key features.",
    'Подробнее': 'Details', 'Цена по запросу': 'Price on request',
    'Пиксельный костюм': 'Pixel suit', 'Шлем': 'Helmet', 'Световой куб': 'Light cube', 'Веер': 'Fan',
    'Шлем, жилет, пояс, накладки на руки и ноги. Каждый светодиод управляется отдельно.': 'Helmet, vest, belt, arm and leg panels. Every LED is individually controlled.',
    'Изогнутая светодиодная матрица с прорезями для глаз. Можно заказать отдельно от костюма.': 'A curved LED matrix with eye openings. Can be ordered separately from the suit.',
    'Лёгкий каркас со светодиодными рёбрами. Держит вращения и броски.': 'A lightweight frame with LED edges. Handles spins and tosses.',
    'Светодиодные лучи на складной основе. Работает в паре и в общих фигурах.': 'LED rays on a folding base. Works in pairs and in group shapes.',
    'Пиксельные костюмы трёх цветов': 'Pixel suits in three colours',
    'Светодиодные шлемы крупным планом': 'LED helmets up close',
    'Светодиодные кубы над головой артистов': "LED cubes above the performers' heads",
    'Светодиодные веера': 'LED fans',

    // разработка
    'От платы до программы шоу': 'From circuit board to show programme',
    'Электроника': 'Electronics', 'Светодиодные матрицы, контроллеры и питание под нагрузки сцены.': 'LED matrices, controllers and power built for stage loads.',
    'Конструкция': 'Construction', 'Корпуса и крепления, в которых удобно двигаться и которые переживают гастроли.': 'Housings and mounts that are comfortable to move in and survive touring.',
    'Программа': 'Programming', 'Эффекты под музыку в собственном софте, на собственной прошивке.': 'Effects set to music in our own software, running on our own firmware.',
    'На заказ': 'Custom work', 'Соберём реквизит под вашу идею, номер или бренд.': 'We build props for your idea, act or brand.',
    'Обсудить разработку': 'Discuss a project',
    'Светодиодные матрицы шлемов вблизи': 'Helmet LED matrices up close',

    // технологии
    'Свой софт, своя прошивка, свои платы': 'Our own software, firmware and boards',
    'Весь путь от эффекта на экране до светодиода на костюме проходит через наши собственные разработки.': 'The whole path from an effect on screen to an LED on a suit runs through our own technology.',
    'Софт': 'Software', 'Программа для эффектов': 'Effects editor',
    'Собственное программное обеспечение, в котором пишутся эффекты для костюмов и реквизита.': 'Our own software for creating effects for suits and props.',
    'Эффекты для костюмов': 'Effects for suits', 'Эффекты для реквизита': 'Effects for props',
    'Сборка программы номера под музыку': "Building an act's programme to music",
    'Прошивка': 'Firmware', 'Своя прошивка': 'Our own firmware',
    'Прошивка управляет светодиодами и проигрывает эффекты. Её можно использовать и на ваших платах.': 'The firmware drives the LEDs and plays the effects. You can run it on your own boards too.',
    'Работает на наших платах': 'Runs on our boards',
    'Работает на популярных платах из списка ниже': 'Runs on the popular boards listed below',
    'Железо': 'Hardware', 'Свои платы': 'Our own boards',
    'Платы управления собственной разработки, рассчитанные на работу в костюме и в реквизите.': 'Control boards of our own design, made to work inside suits and props.',
    'Платы для костюмов': 'Boards for suits', 'Платы для реквизита': 'Boards for props',
    'Прошивка работает и на готовых платах': 'The firmware also runs on off-the-shelf boards',
    'Собираете реквизит сами? Возьмите нашу прошивку и поставьте её на одну из поддерживаемых плат.': 'Building props yourself? Take our firmware and flash it onto one of the supported boards.',

    // галерея
    'Кадры с выступлений': 'Shots from our shows',
    'Сердце из светодиодных вееров': 'A heart made of LED fans', 'Веера и пиксельные костюмы': 'Fans and pixel suits',
    'Четыре артиста в красных костюмах': 'Four performers in red suits', 'Акробатический элемент в костюмах': 'An acrobatic move in suits',
    'Золотые световые кубы': 'Golden light cubes', 'Бирюзовые костюмы': 'Turquoise suits', 'Артисты с кубами': 'Performers with cubes',
    'Фиолетовые костюмы с веерами': 'Purple suits with fans', 'Кубы над головой': 'Cubes overhead', 'Дуэт с веерами': 'A duo with fans',

    // как заказать
    'От заявки до первого выступления': 'From request to first performance',
    'Заявка': 'Request', 'Напишите, что нужно: реквизит, количество, сроки.': 'Tell us what you need: props, quantity, timing.',
    'Расчёт': 'Quote', 'Согласуем комплектацию, стоимость и срок изготовления.': 'We agree on the set, the price and the lead time.',
    'Изготовление': 'Production', 'Собираем и проверяем реквизит перед отправкой.': 'We assemble and test the props before shipping.',
    'Получение': 'Handover', 'Передаём заказ и помогаем с запуском.': 'We hand over the order and help you get started.',
    'Доставка': 'Shipping', 'Способ и стоимость доставки считаем под ваш заказ.': 'Shipping method and cost are calculated for your order.',
    'Оплата': 'Payment', 'Условия оплаты согласуем при оформлении заказа.': 'Payment terms are agreed when you place the order.',
    'Гарантия': 'Warranty', 'Условия гарантии и обслуживания пришлём вместе с расчётом.': 'Warranty and service terms come with your quote.',

    // контакты
    'Расскажите о вашем событии': 'Tell us about your event',
    'Дата, город и формат. Ответим с программой и стоимостью.': "Date, city and format. We'll reply with a programme and a price.",
    'Позвонить': 'Call', 'Контакты скоро появятся.': 'Contact details are coming soon.', 'ВКонтакте': 'VK',
    'Новинка': 'New', 'Хит': 'Bestseller',

    // страница товара
    'Узнать цену и сроки': 'Get price and lead time',
    'Свои платы, прошивка и софт для эффектов': 'Our own boards, firmware and effects software',
    'Выступаем с этим реквизитом сами': 'We perform with these props ourselves',
    'Подберём комплект под ваш номер': "We'll match a set to your act",
    'Особенности': 'Features', 'Что входит': "What's included", 'Характеристики': 'Specifications', 'Видео': 'Video', 'Ещё реквизит': 'More props',
    'Костюм из светодиодных панелей, который работает как экран на артисте. Цвета, узоры и анимация меняются по программе номера, одинаково на всей группе или у каждого по своему.': "A suit of LED panels that works like a screen on the performer. Colours, patterns and animation follow the act's programme, identical across the crew or different for each performer.",
    'Шлем с изогнутой светодиодной матрицей по всей лицевой части. Работает вместе с костюмом или сам по себе, как яркий акцент образа.': 'A helmet with a curved LED matrix across the whole face. Works with the suit or on its own as a bright accent.',
    'Объёмный куб со светодиодными рёбрами для манипуляций и построений. Читается с любого места в зале и хорошо смотрится в группе.': 'A three-dimensional cube with LED edges for manipulation and formations. Reads from any seat in the hall and looks great in a group.',
    'Веер со светодиодными лучами. В паре и в группе складывается в крупные фигуры, от крыльев до сердца.': 'A fan with LED rays. In pairs and groups it forms large shapes, from wings to a heart.',
    'Шлем с матрицей': 'Helmet with LED matrix', 'Жилет': 'Vest', 'Пояс': 'Belt',
    'Накладки на плечи и предплечья': 'Upper arm and forearm panels', 'Накладки на бёдра и голени': 'Thigh and shin panels',
    'Пара вееров': 'A pair of fans',
    'Каждый светодиод управляется отдельно': 'Every LED is individually controlled',
    'Любые цвета и анимация под музыку': 'Any colours and animation set to music',
    'Группа костюмов работает как единая картинка': 'A group of suits works as one picture',
    'Матрица по всей лицевой части': 'Matrix across the whole face', 'Прорези для обзора': 'Openings for visibility',
    'Анимация и смена цвета по программе': 'Programmed animation and colour changes',
    'Светятся все рёбра': 'All edges light up', 'Подходит для вращений и построений': 'Suited to spins and formations',
    'Работает вместе с костюмами': 'Works together with the suits',
    'Каждый луч светится по всей длине': 'Each ray lights along its full length',
    'Смена цвета по программе': 'Programmed colour changes', 'Складываются в общие фигуры группы': 'Combine into group shapes',
  };

  const ATTRS = ['alt', 'aria-label', 'content', 'title'];
  const norm = (t) => t.replace(/\s+/g, ' ').trim();
  const tr = (ru, lang) => {
    if (lang === 'ru') return ru;
    const key = norm(ru);
    if (EN[key]) return EN[key];
    const m = key.match(/^(Фото|Слайд) (\d+)$/);
    return m ? `${m[1] === 'Фото' ? 'Photo' : 'Slide'} ${m[2]}` : null;
  };

  // remember the Russian originals so switching back needs no reload
  const textOrig = new WeakMap();
  const attrOrig = new WeakMap();
  let titleRu = document.title;

  const apply = (lang) => {
    const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => (n.parentElement && /^(SCRIPT|STYLE)$/.test(n.parentElement.tagName)) || !norm(n.nodeValue)
        ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT,
    });
    for (let n; (n = walker.nextNode());) {
      if (!textOrig.has(n)) textOrig.set(n, n.nodeValue);
      const ru = textOrig.get(n);
      const out = tr(ru, lang);
      if (out == null) { n.nodeValue = ru; continue; }
      n.nodeValue = lang === 'ru' ? ru : ru.match(/^\s*/)[0] + out + ru.match(/\s*$/)[0];
    }
    document.querySelectorAll('[alt],[aria-label],[title],meta[name="description"]').forEach((el) => {
      if (!attrOrig.has(el)) attrOrig.set(el, Object.fromEntries(ATTRS.filter((a) => el.hasAttribute(a)).map((a) => [a, el.getAttribute(a)])));
      for (const [a, ru] of Object.entries(attrOrig.get(el))) {
        if (!ru || (a === 'content' && el.tagName !== 'META')) continue;
        el.setAttribute(a, tr(ru, lang) ?? ru);
      }
    });
    document.title = lang === 'ru' ? titleRu : EN[titleRu] ?? titleRu.split('. ').map((part) => tr(part, lang) ?? part).join('. ');
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang button').forEach((b) => b.setAttribute('aria-pressed', b.dataset.lang === lang));
  };

  const store = {
    get: () => { try { return localStorage.getItem('lang'); } catch { return null; } },
    set: (v) => { try { localStorage.setItem('lang', v); } catch { /* private mode */ } },
  };
  const fromUrl = new URLSearchParams(location.search).get('lang');
  const browserRu = (navigator.language || 'ru').toLowerCase().startsWith('ru');
  let lang = ['ru', 'en'].includes(fromUrl) ? fromUrl : store.get() || (browserRu ? 'ru' : 'en');
  if (fromUrl) store.set(lang);

  document.querySelectorAll('.lang button').forEach((b) => b.addEventListener('click', () => {
    lang = b.dataset.lang;
    store.set(lang);
    apply(lang);
  }));

  // для содержимого, которое подгружается из папки content
  window.I18N = {
    add: (ru, en) => { EN[norm(ru)] = en; },
    setTitle: (ru, en) => { titleRu = ru; if (en) EN[ru] = en; apply(lang); },
    apply: () => apply(lang),
  };

  apply(lang);
})();
