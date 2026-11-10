// Beyzâlem — bölüm 5: zorluk etiketleri, yeni tablolar ve v1.1 oyun motoru
// (d2.js tarafından yüklenir; motor sayfa yüklendikten sonra devreye girer)
window.RAW = window.RAW || {};

// K = kolay, Z = zor sıra numaraları (diğerleri orta)
RAW.zorluk = {
  anlam: { K: [0,8,9,13,20,21,24,25,27,35,36,41,50,57,58,60,63,70,72,76,78,79,84,86,88,90,99,101,102,104,105,106,114,115], Z: [2,7,16,17,19,22,26,31,38,39,40,42,43,47,49,53,54,55,66,67,68,69,71,80,82,93,96,103,109,111,112,113] },
  tanim: { K: [1,2,4,5,7,10,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,34,35,38,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,69,72,73,74,75,76,85,88,89,90,91,92,94,95,104], Z: [6,9,39,40,61,62,67,68,80,81,93,96,97,99,109,110,112,114] },
  deyim: { K: [0,1,2,3,9,13,14,17,23,25,26,28,34,38,43,45,48,53,57,60,61,64,69,74,76,78,79,84,88,91,101,106,107,110], Z: [15,19,24,31,39,40,41,42,44,49,50,54,55,58,67,68,72,80,86,89,90,93,94,97,99,102,103,104,105,109,111,112] },
  esanlam: { K: [0,1,2,5,6,7,8,9,10,11,13,14,16,18,19,20,21,22,23,24,25,26,38,39,45,46,52,54,55,56,58,59,64,66,71,73,100,109,110,112,119,131,133], Z: [4,12,34,35,37,41,44,60,62,72,75,79,84,85,86,91,92,93,94,96,102,106,107,116,117,120,123,127,138,140,141] },
  zit: { K: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,148], Z: [71,78,96,98,99,100,101,102,103,104,111,112,113,114,115,116,117,119,130,136,145,146] },
  atasozu: { K: [0,1,2,3,4,5,11,12,13,14,15,17,19,28,33,35,36,37,40,41,49,52,54,58,73,79,80,85,86], Z: [9,16,21,22,23,25,29,30,34,38,39,43,45,46,53,56,59,62,65,69,70,71,74,76,81,82,87,88,90,92] },
  genel: { K: [2,3,4,6,9,11,15,17,18,20,31,32,33,34,40,41,50,54,55,56,57,58,75,76,77,79,80,82,83,84,85,86,87,88,89,90,91,93,94,95,96,98,99,102,103,105,106,126,127,128,131,133,151,154,156,158,160,161,162,163,164,169,170,174,175,176,177,178,179,180,181,184,187,190,191,193], Z: [0,8,21,22,23,24,25,27,28,29,30,35,46,47,51,59,60,61,63,65,66,70,73,81,100,101,104,107,108,110,111,112,113,118,119,120,123,134,135,136,138,140,141,144,147,150,153,157,166,171,172,173,183,192,194,195] },
  bilmece: { K: [0,1,4,7,10,11,13,17,20,24,27,28], Z: [9,14,15,16,29,30,31,32,33,40] },
  emoji: { K: [0,1,2,7,8,9,19,20,21,22,23,24,25,26,27,28,30,31,32,33,34,35,37,38,39,40,41,42,46,47,48,49,50,51,52,53,54,56,59,60,61,62,63], Z: [4,5,6,10,11,12,13,14,15,16,17,18,44,55,57] },
  ortak: { K: [0,1,2,4,5,6,9,10,15,21,22,25,28,35,36], Z: [3,7,8,12,14,16,24,31,32,33] },
  ipucu: { K: [0,1,3,5,6,9,10,13,14,15,20,21,22,23,24,25,26,28,30,31,35], Z: [17,18,19,37,38,42,43,44,45,46] },
};

RAW.bolge = `
Marmara:Edirne,Kırklareli,Tekirdağ,İstanbul,Kocaeli,Yalova,Sakarya,Bilecik,Bursa,Balıkesir,Çanakkale
Ege:İzmir,Manisa,Aydın,Denizli,Muğla,Afyonkarahisar,Kütahya,Uşak
Akdeniz:Antalya,Isparta,Burdur,Mersin,Adana,Hatay,Osmaniye,Kahramanmaraş
İç Anadolu:Ankara,Konya,Kayseri,Eskişehir,Sivas,Kırıkkale,Aksaray,Karaman,Kırşehir,Niğde,Nevşehir,Yozgat,Çankırı
Karadeniz:Rize,Trabzon,Artvin,Giresun,Ordu,Samsun,Sinop,Kastamonu,Bartın,Karabük,Zonguldak,Düzce,Bolu,Amasya,Tokat,Çorum,Gümüşhane,Bayburt
Doğu Anadolu:Erzurum,Erzincan,Kars,Ağrı,Iğdır,Ardahan,Van,Muş,Bitlis,Bingöl,Tunceli,Elazığ,Malatya,Hakkari
Güneydoğu Anadolu:Gaziantep,Şanlıurfa,Diyarbakır,Mardin,Batman,Siirt,Şırnak,Adıyaman,Kilis
`;

RAW.kita = `
Avrupa:Almanya,Fransa,İtalya,İspanya,Portekiz,Hollanda,Belçika,İsviçre,Avusturya,Polonya,Çekya,Macaristan,Romanya,Bulgaristan,Yunanistan,Sırbistan,Hırvatistan,Arnavutluk,Norveç,İsveç,Finlandiya,Danimarka,İrlanda,Ukrayna,Belarus,Litvanya,Letonya,Estonya,Slovakya,Moldova
Asya:Japonya,Çin,Hindistan,Pakistan,İran,Irak,Suriye,Suudi Arabistan,Afganistan,Özbekistan,Kırgızistan,Türkmenistan,Tacikistan,Moğolistan,Güney Kore,Malezya,Tayland,Vietnam,Filipinler,Bangladeş,Nepal,Katar,Ürdün,Lübnan
Afrika:Mısır,Fas,Libya,Sudan,Etiyopya,Kenya,Nijerya,Cezayir,Tunus,Gana,Senegal,Somali,Tanzanya,Uganda,Angola,Kamerun,Mali,Nijer,Çad,Zambiya
Kuzey Amerika:Kanada,Meksika,Amerika Birleşik Devletleri,Küba,Guatemala,Panama,Jamaika,Kosta Rika,Honduras
Güney Amerika:Brezilya,Arjantin,Şili,Peru,Kolombiya,Venezuela,Ekvador,Bolivya,Paraguay,Uruguay
Okyanusya:Avustralya,Yeni Zelanda,Papua Yeni Gine,Fiji
`;

RAW.baskent2 = `
Mısır|Kahire
Japonya|Tokyo
Fransa|Paris
Almanya|Berlin
İtalya|Roma
İspanya|Madrid
Rusya|Moskova
Kanada|Ottawa
Avustralya|Canberra
Brezilya|Brasilia
Azerbaycan|Bakü
Kazakistan|Astana
Özbekistan|Taşkent
Kırgızistan|Bişkek
Türkmenistan|Aşkabat
Yunanistan|Atina
Bulgaristan|Sofya
Macaristan|Budapeşte
Bosna-Hersek|Saraybosna
Çin|Pekin
Hindistan|Yeni Delhi
Pakistan|İslamabad
Suudi Arabistan|Riyad
İngiltere|Londra
`;

RAW.element = `
Oksijen|O
Hidrojen|H
Karbon|C
Azot|N
Demir|Fe
Altın|Au
Gümüş|Ag
Bakır|Cu
Sodyum|Na
Kalsiyum|Ca
Potasyum|K
Kükürt|S
Helyum|He
Kurşun|Pb
Çinko|Zn
Alüminyum|Al
Magnezyum|Mg
Klor|Cl
Fosfor|P
Cıva|Hg
Neon|Ne
Uranyum|U
Silisyum|Si
Kalay|Sn
Flor|F
İyot|I
Lityum|Li
Nikel|Ni
Platin|Pt
Argon|Ar
`;

RAW.atasozu2 = `
Ağlarsa … ağlar, gerisi yalan ağlar.|anam|babam|dostum|komşum
Akıllı düşman, akılsız dosttan …|iyidir|kötüdür|uzaktır|yakındır
At ölür meydan kalır, yiğit ölür … kalır.|şan|ad|iz|söz
Az olsun, … olsun.|öz|çok|tatlı|temiz
Bal tutan … yalar.|parmağını|kaşığını|elini|dilini
Besle kargayı, oysun …|gözünü|elini|yüzünü|kalbini
Bir fincan kahvenin … yıl hatırı vardır.|kırk|on|yüz|elli
Borç yiğidin …|kamçısıdır|yüküdür|derdidir|kalkanıdır
Çalma elin kapısını, çalarlar …|kapını|evini|camını|yolunu
Dağ ne kadar yüksek olsa … onun üstünden aşar.|yol|kuş|bulut|rüzgâr
Deliye her gün …|bayram|pazar|tatil|düğün
Denize düşen … sarılır.|yılana|ipe|dala|tahtaya
Dervişin fikri ne ise … de odur.|zikri|sözü|işi|yolu
Dost … söyler.|acı|tatlı|yalan|az
Eden …|bulur|unutur|kazanır|kaybeder
El elin eşeğini … çağırarak arar.|türkü|bağıra|ıslık|şarkı
Erken kalkan … alır.|yol|ekmek|para|süt
Gönül kimi severse … odur.|güzel|dost|iyi|akıllı
Gülü seven … katlanır.|dikenine|kokusuna|rengine|dalına
Güvenme varlığa, düşersin …|darlığa|yokluğa|dertlere|çukura
Hatasız … olmaz.|kul|insan|iş|söz
Her güzelin bir … vardır.|kusuru|derdi|sırrı|adı
Her horoz kendi … öter.|çöplüğünde|kümesinde|bahçesinde|damında
İt ürür, … yürür.|kervan|deve|yolcu|araba
Kedi uzanamadığı … mundar der.|ciğere|ete|süte|balığa
Kırk yıllık Kani olur mu …|Yani|Hani|Cani|Sani
Körle yatan … kalkar.|şaşı|kör|topal|sağır
Kul sıkışmayınca … yetişmez.|Hızır|imdat|yardım|dost
Ne doğrarsan aşına, o çıkar …|kaşığına|tabağına|önüne|sofrana
Ne verirsen elinle, o gelir …|seninle|yolunla|dilinle|gönlünle
Parayı veren … çalar.|düdüğü|davulu|zili|sazı
Perşembenin gelişi … bellidir.|çarşambadan|salıdan|cumadan|pazardan
Sabreden derviş … ermiş.|muradına|evine|yoluna|sonuna
Sakınılan göze … batar.|çöp|diken|iğne|taş
Sükût … gelir.|ikrardan|korkudan|sevgiden|sabırdan
Ucuz etin … yavan olur.|yahnisi|çorbası|suyu|kebabı
Vakit …|nakittir|altındır|ömürdür|candır
Yalnız taş … olmaz.|duvar|bina|yol|köprü
Yazın gölge hoş, kışın … hoş.|çuha|soba|ateş|yorgan
Yiğit düştüğü yerden …|kalkar|ağlamaz|döner|başlar
Zenginin malı züğürdün … yorar.|çenesini|kafasını|kalbini|elini
Ak koyunun kara … da olur.|kuzusu|yünü|keçisi|kurdu
Akacak kan … durmaz.|damarda|yerde|tende|kapta
Alet işler, el …|övünür|yorulur|dinlenir|kazanır
Aslan … yerden belli olur.|yattığı|kükrediği|yürüdüğü|avlandığı
Bağ dua değil … ister.|çapa|su|güneş|emek
Bin bilsen de bir bilene …|danış|sor|anlat|dinle
Cana gelecek … gelsin.|mala|başa|yola|eve
Çocuktan al …|haberi|sözü|selamı|dersi
Gelen ağam, giden …|paşam|beyim|efendim|dostum
İşten artmaz, … artar.|dişten|cepten|evden|aştan
Kaçan balık … olur.|büyük|küçük|tatlı|güzel
Kendi düşen …|ağlamaz|kalkmaz|unutmaz|bağırmaz
Kızını dövmeyen … döver.|dizini|başını|elini|kapısını
Söz ola kese …|savaşı|yolu|sözü|derdi
Tereciye … satılmaz.|tere|maydanoz|nane|marul
Yuvarlanan taş … tutmaz.|yosun|toprak|kum|su
Yumuşak huylu atın … pek olur.|çiftesi|nalı|yelesi|eyeri
Ateş olmayan yerden … çıkmaz.|duman|alev|kıvılcım|ses
Bir koyundan iki … çıkmaz.|post|kuzu|süt|yün
Eşek ölür semeri kalır, insan ölür … kalır.|adı|evi|malı|izi
`;

RAW.words2 = `
ABAJUR ADRES AFİŞ AKVARYUM ALBÜM ALTIN AMBALAJ ANAOKULU ANTEN ARMAĞAN ARŞİV ATLAS AVLU AYDINLIK AYRAN BAĞIRSAK BAHÇIVAN BAKIR BANYO BARAJ BARINAK BATTANİYE BAYRAK BEŞİK BEYAZ BİLET BİNA BOYA BUĞDAY BUHAR BULMACA BURUN CADDE CAMİ CEVAP CİLT CÜZDAN ÇADIR ÇAKIL ÇAMAŞIR ÇAMUR ÇAPA ÇATAL ÇAYDANLIK ÇEKİÇ ÇELİK ÇENGEL ÇEŞME ÇİFTLİK ÇİVİ ÇIRA ÇOCUK ÇÖMLEK ÇUVAL DAĞCI DALGA DAMLA DEMET DEMLİK DERE DEVE DİKİŞ DİREK DOLMUŞ DONDURMA DUDAK DÜDÜK DÜĞME DÜMEN EBRU EKİN ELBİSE ELEK EMLAK ENGEL ERZAK ESKİZ EVRAK FENER FIRÇA FİNCAN FİLİZ FİYAT FOTOĞRAF GÖKYÜZÜ GÖLGE GÖZLÜK GÜNLÜK GÜNEBAKAN GÜVERTE HALAT HAMAK HAMUR HANÇER HASIR HAVUZ HAYVAN HEYBE HIRKA HOROZ HURMA IHLAMUR IŞIK İBRİK İĞNE İPLİK İSKELE İSTASYON KABUK KADEH KAĞIT KAHVE KAKAO KALKAN KAMIŞ KANAT KANYON KAPAK KARAVAN KARINCA KARTPOSTAL KASA KASKET KAŞAĞI KATIR KAVANOZ KAYAK KAZAN KEKLİK KEMAN KEMER KEPÇE KERPİÇ KESE KEVGİR KILIÇ KİLİM KİLİT KIRLANGIÇ KİREMİT KOVA KOVAN KÖMÜR KÖPÜK KÖŞK KUMBARA KUMSAL KUNDURA KURDELE KURŞUN KUYU KUZU LAVANTA LEYLEK LİMAN LOKANTA MAKAS MANDAL MANGAL MARTI MASAL MAŞA MEKİK MENDİL MERCAN MEŞALE MEYDAN MIKNATIS MİNARE MİNDER MISIR MİKROP MUSLUK MÜREKKEP NALBANT OCAK ODUN OKLAVA OLTA ONUR ORAK ORMANCI ÖKSÜZ ÖRGÜ ÖRTÜ PAMUK PANCAR PAPAĞAN PARŞÖMEN PATİKA PEKMEZ PELİKAN PENGUEN PERGEL PIRASA PİKNİK PİRİNÇ POSTA PUSULA RADYO RAF REÇEL RENDE RESSAM SAAT SABAN SAÇAK SAHİL SAKAL SALATA SALÇA SANDAL SARAY SATIR SAZ SEBZE SEPET SERGİ SİMİTÇİ SİRKE SOBA SOFRA SOKAK SUNUCU SÜPÜRGE SÜRAHİ SÜNGER ŞAHİN ŞAL ŞALGAM ŞAMDAN ŞEKER ŞERBET ŞİLTE ŞİŞE TABELA TAKVİM TARLA TAVA TEKNE TELESİYEJ TENCERE TEPSİ TERAZİ TESPİH TİLKİ TOPUZ TORBA TRAMVAY TÜLBENT TÜNEL UÇURUM UMUTLU URGAN USTALIK UYKU ÜNİFORMA VAGON VALİZ VAPUR YAPRAK YASTIK YELKEN YELPAZE YEMEK YILAN YOĞURT YORGAN YUMAK YUMURTA YÜZÜK ZEMBİL ZEYTİNYAĞI ZİL ZİNCİR ZÜMRÜT
AĞAÇ ARI AKŞAMÜSTÜ ALIŞVERİŞ ANLAŞMA ARAŞTIRMA AYAKKABICI BAĞIŞ BAKKAL BARINMA BAŞKENT BİLGİN BİRLİK BÖLGE BUZDOLABI CETVEL ÇALIŞMA ÇİZGİ DÜŞÜNCE DÜZEN EĞİTİM EMEKÇİ GELENEK GÖREV GÜZELLİK HAKLILIK HATIRA HAYAL HEDEF HİKMET İHTİYAÇ İLERLEME İNANÇ İSTEK KARAR KAZANÇ KONUŞMA MERHABA MİRAS MUTLULUK NEZAKET ÖĞÜT ÖZGÜRLÜK PAYLAŞIM SAĞDUYU SELAM SEVİNÇ SOHBET SORU TEŞEKKÜR UMUTLU YARDIM YAŞAM YETENEK ZAMAN
`;

/* ===================== v1.1 OYUN MOTORU ===================== */
window.addEventListener('DOMContentLoaded', function () {
  try { beyzalemV11(); } catch (e) { console.error('v1.1', e); }
});

function beyzalemV11() {
  const tok = s => low(s).split(/[^a-zçğıöşüâîû]+/).filter(w => w.length > 2 && !['olmak', 'etmek', 'bir', 've', 'ile', 'olan', 'çok'].includes(w));
  const overlap = (a, b) => { const A = new Set(tok(a)); return tok(b).some(w => A.has(w)); };

  /* ---- 1-100 seviye ---- */
  TITLES.length = 0;
  [[1, 'Acemi'], [5, 'Çırak'], [10, 'Kalfa'], [20, 'Usta'], [30, 'Üstat'], [40, 'Bilgin'], [50, 'Âlim'], [60, 'Allâme'], [75, 'Bilge'], [90, 'Efsane'], [100, 'Beyzâlem Ustası']].forEach(t => TITLES.push(t));
  const need2 = lv => 60 + lv * 15;
  levelInfo = function (xp) {
    let lv = 1, rest = xp;
    while (lv < 100 && rest >= need2(lv)) { rest -= need2(lv); lv++; }
    if (lv >= 100) return { lv: 100, rest: need2(100), need: need2(100) };
    return { lv, rest, need: need2(lv) };
  };
  BADGES.push(
    { id: 'lv25', e: '🌟', n: 'Çeyrek Yol', d: '25. seviyeye ulaş', ok: s => levelInfo(s.xp).lv >= 25 },
    { id: 'lv50', e: '🏅', n: 'Yarı Yol', d: '50. seviyeye ulaş', ok: s => levelInfo(s.xp).lv >= 50 },
    { id: 'lv100', e: '🏆', n: 'Beyzâlem Ustası', d: '100. seviyeye ulaş', ok: s => levelInfo(s.xp).lv >= 100 },
  );

  /* ---- seviyeye göre zorluk seçimi ---- */
  const wantDiff = () => {
    const lv = levelInfo(S.xp).lv, r = Math.random();
    const p = lv <= 10 ? [.7, .95] : lv <= 30 ? [.35, .85] : lv <= 60 ? [.15, .6] : [.05, .4];
    return r < p[0] ? 1 : r < p[1] ? 2 : 3;
  };

  /* ---- mevcut sorulara zorluk etiketi ---- */
  const Z = RAW.zorluk;
  Object.keys(Z).forEach(k => (BANK[k] || []).forEach((q, i) => { q.d = Z[k].Z.includes(i) ? 3 : Z[k].K.includes(i) ? 1 : 2; }));
  const popPlaka = ['01', '06', '07', '16', '27', '34', '35', '41', '42', '55', '61'];
  BANK.genel.forEach(q => {
    if (q.d) return;
    const m = q.q.match(/Plaka kodu (\d\d)/);
    if (m) q.d = popPlaka.includes(m[1]) ? 1 : 3;
    else if (/plaka kodu kaçtır/.test(q.q)) q.d = popPlaka.includes(q.answer) ? 2 : 3;
    else q.d = ['Ulan Batur', 'Podgorica', 'Kişinev', 'Abuja', 'Maskat', 'Duşanbe', 'Vilnius', 'Riga', 'Tallinn', 'Bratislava', 'Priştine', 'Tiran', 'Hartum', 'Addis Ababa', 'Dakka', 'Katmandu', 'Bogota', 'Trablus'].includes(q.answer) ? 3 : 2;
  });
  const add = (k, q, d) => { q.d = d; BANK[k].push(q); };

  /* ---- Genel kültür: yeni tablolar ---- */
  const reg = lines(RAW.bolge).map(l => l.split(':')).map(([b, s]) => [b, s.split(',')]);
  const regNames = reg.map(r => r[0]);
  const kolayIl = ['İstanbul', 'Ankara', 'İzmir', 'Antalya', 'Trabzon', 'Erzurum', 'Diyarbakır', 'Bursa', 'Konya', 'Adana', 'Samsun', 'Gaziantep', 'Rize', 'Van'];
  const zorIl = ['Bilecik', 'Afyonkarahisar', 'Kahramanmaraş', 'Malatya', 'Adıyaman', 'Kilis', 'Bolu', 'Düzce', 'Karabük', 'Kırıkkale', 'Elazığ', 'Gümüşhane', 'Bayburt', 'Osmaniye', 'Kütahya', 'Çankırı'];
  reg.forEach(([b, iller]) => iller.forEach(il => add('genel', mc(`${il} ili hangi coğrafi bölgededir?`, b, shuffle(regNames.filter(x => x !== b)).slice(0, 3)), kolayIl.includes(il) ? 1 : zorIl.includes(il) ? 3 : 2)));

  const kit = lines(RAW.kita).map(l => l.split(':')).map(([k, s]) => [k, s.split(',')]);
  const kitNames = kit.map(r => r[0]);
  kit.forEach(([k, ulkeler]) => ulkeler.forEach((u, i) => add('genel', mc(`${u} hangi kıtadadır?`, k, shuffle(kitNames.filter(x => x !== k)).slice(0, 3)), i < 6 ? 1 : i < 15 ? 2 : 3)));

  const caps = [...lines(RAW.baskent), ...lines(RAW.baskent2)].map(l => l.split('|'));
  caps.forEach(([u, b]) => add('genel', mc(`${b} hangi ülkenin başkentidir?`, u, shuffle(caps.filter(x => x[0] !== u).map(x => x[0])).slice(0, 3)), ['Paris', 'Berlin', 'Roma', 'Londra', 'Madrid', 'Tokyo', 'Moskova', 'Bakü', 'Atina', 'Kahire', 'Pekin'].includes(b) ? 1 : 2));
  // 2. listedeki ülkeler için ileri yönlü soru (ilk listede zaten var olanlar hariç)
  const elm = lines(RAW.element).map(l => l.split('|'));
  const kolayEl = ['Oksijen', 'Hidrojen', 'Karbon', 'Demir', 'Altın', 'Gümüş', 'Bakır', 'Sodyum', 'Helyum', 'Azot'];
  elm.forEach(([n, s]) => {
    add('genel', mc(`Kimyasal sembolü “${s}” olan element hangisidir?`, n, shuffle(elm.filter(x => x[0] !== n).map(x => x[0])).slice(0, 3)), kolayEl.includes(n) ? 2 : 3);
    add('genel', mc(`${n} elementinin kimyasal sembolü nedir?`, s, shuffle(elm.filter(x => x[1] !== s).map(x => x[1])).slice(0, 3)), kolayEl.includes(n) ? 2 : 3);
  });
  const gez = ['Merkür', 'Venüs', 'Dünya', 'Mars', 'Jüpiter', 'Satürn', 'Uranüs', 'Neptün'];
  gez.forEach((g, i) => add('genel', mc(`Güneş’e uzaklık sırasına göre ${i + 1}. gezegen hangisidir?`, g, shuffle(gez.filter(x => x !== g)).slice(0, 3)), i < 4 ? 2 : 3));

  /* ---- Anlam ↔ Tanım ↔ Deyim çift yönlü ---- */
  const AN = lines(RAW.anlam).map(l => l.split('|'));
  const TA = lines(RAW.tanim).map(l => l.split('|'));
  const DE = lines(RAW.deyim).map(l => l.split('|'));
  const dOf = (k, i) => (BANK[k][i] && BANK[k][i].d) || 2;
  const seenW = new Set();
  TA.forEach((r, i) => {
    if (seenW.has(r[1])) return; seenW.add(r[1]);
    const others = shuffle(TA.filter(x => x[1] !== r[1] && !overlap(x[0], r[0])).map(x => x[0])).slice(0, 3);
    add('anlam', mc(`“${r[1]}” ne demek?`, r[0], others), dOf('tanim', i));
  });
  AN.forEach((r, i) => {
    const others = shuffle(AN.filter(x => x[0] !== r[0] && !overlap(x[1], r[1])).map(x => x[0])).slice(0, 3);
    add('tanim', mc(`“${r[1]}”`, r[0], others, { sub: 'Bu tanım hangi kelimeye ait?' }), dOf('anlam', i));
  });
  const seenM = new Set();
  DE.forEach((r, i) => {
    if (seenM.has(r[1])) return; seenM.add(r[1]);
    const others = shuffle(DE.filter(x => x[0] !== r[0] && !overlap(x[1], r[1])).map(x => x[0])).slice(0, 3);
    add('deyim', mc(`“${r[1]}” anlamına gelen deyim hangisidir?`, r[0], others), dOf('deyim', i));
  });

  /* ---- Eş / zıt anlam ters yön ---- */
  ['esanlam', 'zit'].forEach(k => {
    const pairs = lines(RAW[k]).map(l => l.split('|'));
    const prompts = new Set(pairs.map(p => low(p[0])));
    const label = k === 'esanlam' ? 'eş anlamlısı' : 'zıt anlamlısı';
    pairs.forEach(([p, a], i) => {
      if (a.includes(' ') || prompts.has(low(a))) return; prompts.add(low(a));
      const pool = [...new Set(pairs.filter(x => !x.some(w => related(w, p) || related(w, a))).flat())].filter(w => !w.includes(' '));
      add(k, mc(`“${a}” kelimesinin ${label} hangisi?`, p, shuffle(pool).slice(0, 3)), dOf(k, i));
    });
  });

  /* ---- Atasözleri: yeni sözler + farklı kelime boşlukları ---- */
  lines(RAW.atasozu2).map(l => l.split('|')).forEach(r => add('atasozu', mc(r[0], r[1], r.slice(2, 5), { sub: 'Boşluğa hangisi gelmeli?' }), 2));
  const ATA = [...lines(RAW.atasozu), ...lines(RAW.atasozu2)].map(l => l.split('|'));
  const clean = w => w.replace(/[.,;:!?…]/g, '');
  const wordPool = [...new Set(ATA.flatMap(r => r[0].replace('…', r[1]).split(' ').slice(1).map(clean)).filter(w => w.length >= 3 && !/^[A-ZÇĞİÖŞÜ]/.test(w)))];
  const existing = new Set(BANK.atasozu.map(q => q.q));
  ATA.forEach(r => {
    const full = r[0].replace('…', r[1]).split(' ');
    full.forEach((w, j) => {
      const c = clean(w);
      if (j === 0 || c.length < 4 || low(c) === low(r[1]) || /^[A-ZÇĞİÖŞÜ]/.test(c) || full.filter(x => clean(x) === c).length > 1) return;
      const text = full.map((x, k) => k === j ? x.replace(c, '…') : x).join(' ');
      if (existing.has(text)) return; existing.add(text);
      const same = wordPool.filter(x => low(x) !== low(c) && low(x).slice(-2) === low(c).slice(-2));
      const pool = shuffle(same.length >= 3 ? same : wordPool.filter(x => low(x) !== low(c)));
      const cap = x => x[0].toLocaleUpperCase('tr-TR') + low(x).slice(1);
      const wr = [...new Set(pool.map(x => j === 0 ? cap(x) : low(x)))].filter(x => x !== (j === 0 ? cap(c) : low(c))).slice(0, 3);
      if (wr.length < 3) return;
      add('atasozu', mc(text, j === 0 ? cap(c) : low(c), wr, { sub: 'Boşluğa hangisi gelmeli?' }), same.length >= 3 ? 2 : 1);
    });
  });

  /* ---- Kelime listesi birleştirme ---- */
  const extra = (RAW.words2 || '').split(/\s+/).filter(w => w.length >= 4 && w.length <= 11 && !w.includes(' '));
  extra.forEach(w => { if (!WORDS.includes(w)) WORDS.push(w); });
  const wordSet = new Set(WORDS.map(low));
  const byLen = d => WORDS.filter(w => d === 1 ? w.length <= 5 : d === 2 ? w.length >= 6 && w.length <= 7 : w.length >= 8);

  /* ---- Yazım: her soruda 4 şık ---- */
  const SW = { ı: 'i', i: 'ı', e: 'a', a: 'e', o: 'u', u: 'o', ö: 'ü', ü: 'ö', ğ: 'y', ş: 's', ç: 'c', c: 'ç', s: 'ş', k: 'g', g: 'k', t: 'd', d: 't', p: 'b', b: 'p' };
  const V = 'aeıioöuü';
  function typos(w) {
    const A = new Set(), B = new Set(), C = new Set(), L = [...w];
    for (let i = 0; i < L.length; i++) {
      const c = L[i];
      if (SW[c]) { const m = L.slice(); m[i] = SW[c]; A.add(m.join('')); }
      if (!V.includes(c) && c !== ' ' && i > 0 && i < L.length - 1 && L[i + 1] !== c && L[i - 1] !== c) { const m = L.slice(); m.splice(i, 0, c); B.add(m.join('')); }
      if (i > 0 && L[i] === L[i - 1]) { const m = L.slice(); m.splice(i, 1); A.add(m.join('')); }
      if (V.includes(c) && i > 0 && i < L.length - 1 && !V.includes(L[i - 1]) && !V.includes(L[i + 1]) && L.length > 5) { const m = L.slice(); m.splice(i, 1); C.add(m.join('')); }
    }
    const ok = x => x !== w && !wordSet.has(x) && x.replace(/ /g, '').length >= 3;
    return [...new Set([...shuffle([...A]), ...shuffle([...B]), ...shuffle([...C])])].filter(ok);
  }
  const YZ = lines(RAW.yazim).map(l => l.split('|'));
  BANK.yazim = YZ.map(([a, w]) => {
    const ws = [w, ...typos(a).filter(x => x !== w)].slice(0, 3);
    const q = mc('Hangisinin yazımı doğru?', a, ws, { sub: 'Doğru yazımı seç' }); q.d = 3; return q;
  });
  const yzSet = new Set(YZ.map(r => r[0]));
  WORDS.forEach(W => {
    const a = low(W); if (yzSet.has(a)) return;
    const ws = typos(a).slice(0, 3); if (ws.length < 3) return;
    const q = mc('Hangisinin yazımı doğru?', a, ws, { sub: 'Doğru yazımı seç' });
    q.d = a.length <= 5 ? 1 : a.length <= 8 ? 2 : 3; BANK.yazim.push(q);
  });

  /* ---- Doğru Bilgiyi Bul: 4 şıklı ---- */
  const DYL = lines(RAW.dy).map(l => l.split('|'));
  const TRUE = DYL.filter(r => r[1] === 'D').map(r => r[0]);
  const FALSE = DYL.filter(r => r[1] === 'Y').map(r => r[0]);
  function genDY() {
    const d = wantDiff();
    const askFalse = Math.random() < (d === 1 ? .2 : d === 2 ? .4 : .55);
    const q = askFalse
      ? mc('Aşağıdakilerden hangisi yanlıştır?', pick(FALSE), shuffle(TRUE).slice(0, 3), { sub: 'Yanlış bilgiyi bul' })
      : mc('Aşağıdakilerden hangisi doğrudur?', pick(TRUE), shuffle(FALSE).slice(0, 3), { sub: 'Doğru bilgiyi bul' });
    q.long = true; q.d = d; return prepare(q, 'dy');
  }
  const dyCat = CATS.find(c => c.id === 'dy');
  if (dyCat) { dyCat.n = 'Doğru Bilgiyi Bul'; dyCat.d = 'Dört ifadeden doğruyu ya da yanlışı seç.'; }

  /* ---- Hızlı hesap (genel kültür içinde) ---- */
  function genMath() {
    const d = wantDiff(), R = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
    let q, ans;
    if (d === 1) { const a = R(11, 60), b = R(5, 39); if (Math.random() < .5) { q = `${a} + ${b} kaçtır?`; ans = a + b; } else { q = `${a + b} − ${b} kaçtır?`; ans = a; } }
    else if (d === 2) { const a = R(3, 12), b = R(4, 15); q = `${a} × ${b} kaçtır?`; ans = a * b; }
    else { const a = R(6, 15), b = R(6, 15), c = R(10, 90); if (Math.random() < .5) { q = `${a} × ${b} + ${c} kaçtır?`; ans = a * b + c; } else { const p = [10, 20, 25, 50][R(0, 3)], n = R(2, 9) * 40; q = `${n} sayısının %${p}’i kaçtır?`; ans = n * p / 100; } }
    const opts = new Set([ans]);
    while (opts.size < 4) { const off = [1, 2, 3, 5, 10][R(0, 4)] * (Math.random() < .5 ? -1 : 1); if (ans + off >= 0) opts.add(ans + off); }
    return prepare({ kind: 'mc', q, answer: String(ans), wrongs: [...opts].filter(x => x !== ans).map(String), sub: 'Hızlı hesap', d }, 'genel');
  }

  /* ---- Harf oyunları: zorluğa göre ---- */
  genScramble = function () {
    const d = wantDiff(); const pool = byLen(d).length ? byLen(d) : WORDS;
    const w = pick(pool); const L = [...w]; let s;
    do { s = shuffle(L); } while (s.join('') === w && new Set(L).size > 1);
    return { kind: 'tiles', cat: 'karisik', answer: w, letters: s, mode: 'scramble', d };
  };
  genMissing = function () {
    const d = wantDiff(); const pool = byLen(d).length ? byLen(d) : WORDS;
    const w = pick(pool); const L = [...w];
    const hideN = Math.max(1, Math.round(L.length * [0, .3, .4, .5][d]));
    const idx = shuffle(L.map((_, i) => i)).slice(0, hideN).sort((a, b) => a - b);
    const decoys = shuffle(LETTERS.filter(c => !L.includes(c))).slice(0, d + 1);
    return { kind: 'tiles', cat: 'eksik', answer: w, mask: L.map((c, i) => idx.includes(i) ? null : c), letters: shuffle([...idx.map(i => L[i]), ...decoys]), mode: 'missing', d };
  };

  /* ---- Soru seçimi: seviyeye göre zorluk + tekrar önleme ---- */
  nextFromBank = function (catId) {
    const pool = BANK[catId], want = wantDiff(), key = q => q.q + '|' + q.answer;
    S.seen[catId] = S.seen[catId] || [];
    const seen = new Set(S.seen[catId]);
    let cand = pool.filter(q => (q.d || 2) === want && !seen.has(key(q)));
    if (!cand.length) cand = pool.filter(q => !seen.has(key(q)));
    if (!cand.length) { S.seen[catId] = []; cand = pool.filter(q => (q.d || 2) === want); if (!cand.length) cand = pool; }
    const q = pick(cand);
    S.seen[catId].push(key(q));
    if (S.seen[catId].length > 4000) S.seen[catId] = S.seen[catId].slice(-4000);
    return prepare(q, catId);
  };
  makeQuestion = function (catId) {
    if (catId === 'karisik') return genScramble();
    if (catId === 'eksik') return genMissing();
    if (catId === 'dy') return genDY();
    if (catId === 'zaman') { const c = pick(MC_POOL_CATS); return c === 'dy' ? genDY() : nextFromBank(c); }
    if (catId === 'genel' && Math.random() < .12) return genMath();
    return nextFromBank(catId);
  };

  /* ---- İkon ve görünüm ---- */
  const st = document.createElement('style');
  st.textContent = '.hicon{width:40px;height:40px;border-radius:12px;object-fit:cover;margin-right:10px;border:2px solid rgba(255,255,255,.5)}.brand>div:first-child{display:flex;align-items:center}.splash img{width:140px;height:140px;border-radius:34px;margin-bottom:16px;box-shadow:0 10px 30px rgba(0,0,0,.25)}.opts.long .opt{font-size:14.5px;line-height:1.35}';
  document.head.appendChild(st);
  const oldHeader = header;
  header = function () {
    return oldHeader().replace('<div class="brand"><div class="logo">', '<div class="brand"><div><img class="hicon" src="icon.jpg" onerror="this.remove()"><div class="logo">').replace('</span>lem</div>', '</span>lem</div></div>');
  };
  const sp = document.querySelector('.splash');
  if (sp) sp.insertAdjacentHTML('afterbegin', '<img src="icon.jpg" onerror="this.remove()">');
  const oldRG = renderGame;
  renderGame = function () { oldRG(); if (G && G.q && G.q.long) { const o = document.querySelector('.opts'); if (o) o.classList.add('long'); } };

  /* ---- Hakkında ---- */
  const cnt = k => (BANK[k] || []).length;
  INFO.hakkinda[1] = `<p><b>Beyzâlem</b> · sürüm 1.1</p><p>Kelime, dil ve genel kültür oyunu. Sorular özgün olarak hazırlanmıştır; atasözleri ve deyimler halkın ortak kültür mirasıdır.</p><p>Seviye 1’den 100’e kadar ilerlersin; seviyen yükseldikçe sorular zorlaşır.</p><p>Hazır soru havuzu: genel kültür ${cnt('genel')}, yazım ${cnt('yazim')}, atasözü ${cnt('atasozu')}, anlam ${cnt('anlam')}, tanım ${cnt('tanim')}, deyim ${cnt('deyim')}, eş anlam ${cnt('esanlam')}, zıt anlam ${cnt('zit')}, emoji ${cnt('emoji')}, ipucu ${cnt('ipucu')}, bilmece ${cnt('bilmece')}, ortak kelime ${cnt('ortak')}. Harf oyunları (${WORDS.length} kelime), Doğru Bilgiyi Bul ve hızlı hesap soruları her seferinde yeniden üretilir.</p>`;
  INFO.nasil[1] = INFO.nasil[1].replace('Her 3 yıldızlı tur 1 joker kazandırır.</p>', 'Her 3 yıldızlı tur 1 joker kazandırır.</p><p>Seviyeler 1’den 100’e kadar gider; seviyen arttıkça zor soruların oranı da artar.</p>');

  if (!G) render();
}
