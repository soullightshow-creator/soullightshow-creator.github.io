"""Ставит свежий номер версии на стили и скрипты, чтобы браузеры посетителей не показывали старые файлы."""
import io, re, sys, time
root = sys.argv[1]
v = time.strftime('%Y%m%d%H%M')
for f in ('index.html', 'product.html'):
    p = root + '/' + f
    s = io.open(p, encoding='utf-8').read()
    s = re.sub(r'(assets/[\w.-]+\.(?:css|js))(\?v=\d+)?"', lambda m: '%s?v=%s"' % (m.group(1), v), s)
    io.open(p, 'w', encoding='utf-8', newline='\n').write(s)
print('version', v)
