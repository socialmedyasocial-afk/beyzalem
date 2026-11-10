# Beyzâlem: assets/icon.jpg dosyasından Android ikonlarını ve açılış ekranını üretir
import glob
from PIL import Image, ImageDraw

src = Image.open('assets/icon.jpg').convert('RGB')
res = 'android/app/src/main/res'
bg = (201, 181, 245)  # lavanta zemin

legacy = {'mdpi': 48, 'hdpi': 72, 'xhdpi': 96, 'xxhdpi': 144, 'xxxhdpi': 192}
fore = {'mdpi': 108, 'hdpi': 162, 'xhdpi': 216, 'xxhdpi': 324, 'xxxhdpi': 432}


def masked(size, shape):
    im = src.resize((size, size), Image.LANCZOS)
    m = Image.new('L', (size, size), 0)
    d = ImageDraw.Draw(m)
    if shape == 'round':
        d.ellipse([0, 0, size - 1, size - 1], fill=255)
    else:
        d.rounded_rectangle([0, 0, size - 1, size - 1], radius=int(size * 0.18), fill=255)
    out = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    out.paste(im, (0, 0), m)
    return out


for k, s in legacy.items():
    masked(s, 'square').save(f'{res}/mipmap-{k}/ic_launcher.png')
    masked(s, 'round').save(f'{res}/mipmap-{k}/ic_launcher_round.png')

for k, s in fore.items():
    c = Image.new('RGBA', (s, s), bg + (255,))
    t = int(s * 0.80)
    c.paste(src.resize((t, t), Image.LANCZOS), ((s - t) // 2, (s - t) // 2))
    c.save(f'{res}/mipmap-{k}/ic_launcher_foreground.png')

with open(f'{res}/values/ic_launcher_background.xml', 'w') as f:
    f.write('<?xml version="1.0" encoding="utf-8"?>\n<resources>\n'
            '    <color name="ic_launcher_background">#C9B5F5</color>\n</resources>\n')

for p in glob.glob(f'{res}/drawable*/splash.png'):
    w, h = Image.open(p).size
    c = Image.new('RGB', (w, h), bg)
    t = int(min(w, h) * 0.38)
    ic = masked(t, 'square')
    c.paste(ic, ((w - t) // 2, (h - t) // 2), ic)
    c.save(p)

print('ikonlar hazır')
