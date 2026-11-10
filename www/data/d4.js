// Beyzâlem soru verisi — bölüm 4: Ortak Kelime, Emojiden Bul, İpuçlarından Bul, Kelime listesi
// ortak / emoji: soru|doğru|yanlış1|yanlış2|yanlış3
// ipucu: cevap|ipucu1;ipucu2;ipucu3;ipucu4|yanlış1|yanlış2|yanlış3
window.RAW = window.RAW || {};
RAW.ortak = `
Diş · Saç · Boya|Fırça|Tarak|Macun|Kalem
Kapı · Araba · Ev|Anahtar|Pencere|Teker|Çatı
Kol · Duvar · Cep|Saat|Kemer|Raf|Çanta
Kutup · Boz · Oyuncak|Ayı|Tilki|Kurt|Kedi
Futbol · Basketbol · Voleybol|Topu|Kalemi|Masası|Bahçesi
Çay · Yemek · Tatlı|Kaşığı|Bardağı|Bıçağı|Fincanı
Ay · Güneş · Yıldız|Işığı|Suyu|Taşı|Yolu
Sabah · Öğle · Akşam|Yemeği|Taşı|Kalemi|Treni
Kar · Yağmur · Dolu|Tanesi|Bardağı|Kalemi|Kapısı
Deniz · Göl · Nehir|Kıyısı|Bulutu|Ormanı|Dağı
Elma · Portakal · Vişne|Suyu|Taşı|Kalemi|Defteri
Okul · Sırt · El|Çantası|Kapısı|Saati|Kalemi
Yaz · Kış · Sömestr|Tatili|Kalemi|Treni|Suyu
Ders · Not · Hesap|Defteri|Masası|Saati|Treni
Kuş · Arı · Karınca|Yuvası|Taşı|Kalemi|Saati
Gece · Masa · Sokak|Lambası|Kalemi|Taşı|Suyu
Doğum · Anneler · Bayram|Günü|Taşı|Suyu|Yolu
Güneş · Okuma · Kayak|Gözlüğü|Kalemi|Saati|Masası
Kara · Hava · Deniz|Yolu|Kalemi|Saati|Defteri
Diş · Göz · Kulak|Doktoru|Fırçası|Kalemi|Masası
Çocuk · Oyun · Bilim|Parkı|Taşı|Suyu|Kalemi
Yatak · Oturma · Çalışma|Odası|Kalemi|Taşı|Suyu
Kırmızı · Yeşil · Sarı|Işık|Taş|Su|Yol
Ekmek · Meyve · Peynir|Bıçağı|Treni|Saati|Defteri
Altın · Gümüş · Bronz|Madalya|Kalem|Defter|Saat
Ayakkabı · Elbise · Kitap|Mağazası|Suyu|Taşı|Treni
Yolcu · Yük · Savaş|Gemisi|Kalemi|Saati|Defteri
Tavuk · Mercimek · Domates|Çorbası|Kalemi|Saati|Taşı
Kurşun · Boya · Dolma|Kalem|Defter|Silgi|Cetvel
Duvar · Kum · Masa|Saati|Kalemi|Defteri|Suyu
El · Yüz · Banyo|Havlusu|Kalemi|Saati|Taşı
Kulak · Burun · Boğaz|Hastalıkları|Kalemleri|Saatleri|Defterleri
Fare · Ayı · Kurt|Kapanı|Kalemi|Saati|Suyu
Hayvanat · Gül · Sebze|Bahçesi|Kalemi|Saati|Suyu
Su · Elektrik · Doğalgaz|Faturası|Kalemi|Taşı|Saati
Çam · Meşe · Kavak|Ağacı|Taşı|Suyu|Kalemi
Pazar · Cumartesi · Pazartesi|Günü|Taşı|Suyu|Kalemi
`;

RAW.emoji = `
🌧️ ☀️ 🌈|Gökkuşağı|Kar|Bulut|Şimşek
🐝 🍯|Bal|Süt|Peynir|Reçel
🔥 🚒|İtfaiye|Ambulans|Polis|Taksi
👂 🧳|Kulak misafiri olmak|Göz atmak|Ayak uydurmak|El vermek
💧 💧 💧 ➡️ 🏞️|Damlaya damlaya göl olur|Ağaç yaş iken eğilir|Ateş düştüğü yeri yakar|Su testisi su yolunda kırılır
🌱 🌳 ↪️|Ağaç yaş iken eğilir|Damlaya damlaya göl olur|Mum dibine ışık vermez|Armut dibine düşer
🕯️ ⬇️ 🌑|Mum dibine ışık vermez|Ateş düştüğü yeri yakar|Damlaya damlaya göl olur|Gülme komşuna gelir başına
🦷 🪥|Diş fırçası|Tarak|Sabun|Havlu
⏰ 🔔|Çalar saat|Telefon|Zil|Radyo
🌙 ⭐ 🌃|Gece|Sabah|Öğle|İkindi
🍐 🌳 ⬇️|Armut dibine düşer|Ağaç yaş iken eğilir|Üzüm üzüme baka baka kararır|Damlaya damlaya göl olur
🐦 🐦 🪨|Bir taşla iki kuş vurmak|Kuş beyinli olmak|Taş kesilmek|Kanat germek
✋ ✋ 👏|Bir elin nesi var, iki elin sesi var|El ele vermek|Eli açık olmak|El üstünde tutmak
🐟 👃 ⬆️|Balık baştan kokar|Balık kavağa çıkınca|Burnu havada olmak|Burun kıvırmak
🐪 🕳️ ⬆️|Deveye hendek atlatmak|Deve kuşu|Çukura düşmek|Yol almak
🍇 👀 🍇|Üzüm üzüme baka baka kararır|Göz atmak|Gözü tok olmak|Damlaya damlaya göl olur
🧂 🍞|Tuz ekmek hakkı|Ekmek kavgası|Tuzu kuru|Ekmek arası
🐝 ⏳ 💼|Arı gibi çalışmak|Zaman öldürmek|Bal tutan parmağını yalar|Saat gibi işlemek
👁️ 👂|Göz kulak olmak|El ele vermek|Göz atmak|Gözden düşmek
🫖 ☕ 🍞 🧀|Kahvaltı|Akşam yemeği|Öğle yemeği|Ara öğün
🌊 🏄|Sörf|Yüzme|Kürek|Dalış
⚽ 🥅|Gol|Faul|Taç|Korner
🏫 🎒 📚|Okul|Hastane|Market|Banka
🎂 🎈 🎁|Doğum günü|Düğün|Bayram|Mezuniyet
🌨️ ⛄|Kardan adam|Kar topu|Kayak|Buz pateni
🍂 🍁 🌬️|Sonbahar|İlkbahar|Yaz|Kış
🌸 🐝 🌷|İlkbahar|Sonbahar|Kış|Yaz
☀️ 🏖️ 🍉|Yaz|Kış|Sonbahar|İlkbahar
🚗 ⛽|Benzin istasyonu|Otopark|Otoban|Oto yıkama
✈️ 🧳 🌍|Seyahat|Okul|İş|Spor
📖 🌙 💤|Uyku öncesi okuma|Sabah sporu|Öğle yemeği|Akşam haberleri
👨‍🍳 🍳|Aşçı|Doktor|Öğretmen|Pilot
👨‍⚕️ 💉|Doktor|Aşçı|Marangoz|Pilot
👨‍🚒 🔥|İtfaiyeci|Polis|Aşçı|Çiftçi
👨‍🌾 🚜|Çiftçi|Marangoz|Pilot|Aşçı
👨‍✈️ ✈️|Pilot|Kaptan|Şoför|Makinist
🧵 🪡 👗|Terzi|Berber|Aşçı|Bahçıvan
✂️ 💇|Berber|Terzi|Bahçıvan|Fırıncı
🍞 🔥 🥖|Fırıncı|Kasap|Manav|Terzi
🐄 🥛|Süt|Bal|Yumurta|Yün
🐔 🥚|Yumurta|Süt|Bal|İpek
🐑 🧶|Yün|İpek|Pamuk|Deri
🐛 🦋|Kelebek|Arı|Sinek|Uğur böceği
🌍 🔄 ☀️|Dünya Güneş’in etrafında döner|Ay Dünya’nın etrafında döner|Güneş batar|Gece olur
🌑 ➡️ 🌕|Dolunay|Güneş tutulması|Yıldız kayması|Gökkuşağı
⚡ 🌩️ 🔊|Gök gürültüsü|Rüzgâr|Kar|Sis
🌋 🔥|Yanardağ|Deprem|Sel|Çığ
❄️ 🏔️ ⬇️|Çığ|Sel|Deprem|Heyelan
📮 ✉️|Mektup|Telefon|Gazete|Kitap
📚 🤫|Kütüphane|Sinema|Pazar|Stadyum
🎭 🎟️|Tiyatro|Hastane|Banka|Okul
🍿 🎬|Sinema|Kütüphane|Müze|Park
🏛️ 🏺|Müze|Market|Sinema|Hastane
🧭 🗺️|Yön bulmak|Yemek yapmak|Şarkı söylemek|Resim yapmak
🦉 🌙|Baykuş|Kartal|Serçe|Martı
🐢 🏁 🐇|Yavaş ama emin adımlarla|Hızlı olan kazanır|Tavşan dağa küsmüş|Kaplumbağa terbiyecisi
🗣️ 🥈 🤐 🥇|Söz gümüşse sükût altındır|Dil kılıçtan keskindir|Bin işit bir söyle|Az söyle çok dinle
🍳 🥚 🔨|Yumurtayı kırmadan omlet yapılmaz|Tavuk mu yumurtadan|Çivi çiviyi söker|Balık baştan kokar
🐟 🌊 🎣|Balık tutmak|Yüzmek|Dalış yapmak|Gemi yapmak
🌳 🍎 🧺|Elma toplamak|Ağaç dikmek|Odun kesmek|Çiçek sulamak
🧹 🏠|Ev temizliği|Ev taşıma|Ev boyama|Ev alma
🛏️ 😴 ⏰|Uyku|Kahvaltı|Spor|Ders
🚿 🧼|Duş|Yemek|Uyku|Ders
💰 🐷|Kumbara|Cüzdan|Banka kartı|Kasa
`;

RAW.ipucu = `
Zürafa|Afrika’da yaşarım.;Otla beslenirim.;En uzun boylu hayvanlardanım.;Boynum çok uzundur.|Fil|Zebra|Deve
Kalem|Okulda sık kullanılırım.;Bir ucum vardır.;Silgiyle birlikte anılırım.;Kâğıda yazı yazarım.|Defter|Silgi|Cetvel
Ankara|Bir şehirim.;İç Anadolu’dayım.;Tiftik keçimle bilinirim.;Türkiye’nin başkentiyim.|Konya|Eskişehir|Kayseri
Güneş|Gökyüzündeyim.;Çok sıcağım.;Gündüzleri görünürüm.;Bitkiler bana muhtaçtır, ben bir yıldızım.|Ay|Mars|Bulut
Penguen|Bir kuşum.;Uçamam.;Çok iyi yüzerim.;Siyah beyazım, buzullarda yaşarım.|Martı|Pelikan|Kartal
Saat|Duvarda ya da bilekte olurum.;Hiç durmam.;Akrebim ve yelkovanım var.;Zamanı gösteririm.|Takvim|Pusula|Ayna
Simit|Bir yiyeceğim.;Fırında pişerim.;Üstüm susamlıdır.;Halka biçimindeyim, çayla iyi giderim.|Poğaça|Pide|Börek
Kütüphane|Bir mekânım.;Bende sessiz olunur.;Raflarım doludur.;Bende kitap ödünç alınır.|Müze|Sinema|Market
Şemsiye|Bir eşyayım.;Açılıp kapanırım.;Genelde kapıda beklerim.;Yağmurda seni ıslanmaktan korurum.|Çanta|Şapka|Mont
Fil|Bir hayvanım.;Çok ağırım.;Kulaklarım kocamandır.;Hortumum var.|Gergedan|Su aygırı|Zürafa
Arı|Küçük bir canlıyım.;Çiçek çiçek gezerim.;Sokabilirim.;Bal yaparım.|Kelebek|Sinek|Karınca
Kartal|Bir kuşum.;Çok yükseklerde uçarım.;Keskin gözlerim var.;Yırtıcı kuşların en bilinenlerindenim.|Güvercin|Serçe|Martı
Kaplumbağa|Bir sürüngenim.;Çok uzun yaşayabilirim.;Yavaş yürürüm.;Sırtımda sert bir kabuk taşırım.|Kertenkele|Timsah|Yılan
Karpuz|Bir meyveyim.;Yazın yenirim.;İçim kırmızı, çekirdeklerim siyahtır.;Dışım yeşil ve kocamandır.|Kavun|Kabak|Elma
Muz|Bir meyveyim.;Sıcak iklimde yetişirim.;Sarı bir kabuğum vardır.;Uzun ve kavisliyim, maymunlar beni sever.|Ananas|Limon|Mango
Limon|Bir meyveyim.;Sarıyım.;Çok ekşiyim.;Salataya ve çaya sıkılırım.|Portakal|Greyfurt|Muz
Çay|Bir içeceğim.;Karadeniz’de yetişirim.;İnce belli bardakta sunulurum.;Demlenerek hazırlanırım.|Kahve|Ayran|Süt
Ayran|Bir içeceğim.;Beyazım.;Yoğurt ve sudan yapılırım.;Köfteyle iyi giderim.|Süt|Limonata|Şalgam
Baklava|Bir tatlıyım.;Kat kat açılmış yufkadan yapılırım.;İçimde ceviz ya da fıstık olur.;Gaziantep’le özdeşleşirim.|Lokum|Künefe|Helva
Lokum|Bir tatlıyım.;Küp şeklindeyim.;Üstüm pudra şekerlidir.;Kahvenin yanında ikram edilirim.|Baklava|Helva|Şeker
Kitap|Bir eşyayım.;Sayfalarım vardır.;Kapağım vardır.;Okunurum.|Defter|Gazete|Dergi
Bisiklet|Bir taşıtım.;Motorum yoktur.;İki tekerleğim vardır.;Pedal çevirerek ilerlerim.|Motosiklet|Kaykay|Araba
Uçak|Bir taşıtım.;Kanatlarım vardır.;Havalimanında beklerim.;Gökyüzünde yolcu taşırım.|Helikopter|Roket|Balon
Gemi|Bir taşıtım.;Limana yanaşırım.;Kaptanım beni yönetir.;Denizde yolcu ve yük taşırım.|Tren|Uçak|Otobüs
Tren|Bir taşıtım.;Raylar üzerinde giderim.;Vagonlarım vardır.;İstasyonlarda dururum.|Otobüs|Tramvay|Gemi
Doktor|Bir meslek sahibiyim.;Beyaz önlük giyerim.;Hastanede çalışırım.;Hastaları muayene edip tedavi ederim.|Öğretmen|Eczacı|Aşçı
Öğretmen|Bir meslek sahibiyim.;Tahtayı sık kullanırım.;Ödev veririm.;Okulda ders anlatırım.|Doktor|Müdür|Yazar
Aşçı|Bir meslek sahibiyim.;Beyaz bir şapka takarım.;Mutfakta çalışırım.;Lezzetli yemekler pişiririm.|Garson|Fırıncı|Kasap
Pilot|Bir meslek sahibiyim.;Üniforma giyerim.;Kokpitte otururum.;Uçak kullanırım.|Kaptan|Makinist|Şoför
İtfaiyeci|Bir meslek sahibiyim.;Kırmızı bir araçla gelirim.;Hortum kullanırım.;Yangın söndürürüm.|Polis|Doktor|Pilot
Kar|Gökten yağarım.;Kışın gelirim.;Beyazım.;Benden adam yapılır.|Yağmur|Dolu|Sis
Gökkuşağı|Gökyüzünde görünürüm.;Yağmurdan sonra çıkarım.;Yay biçimindeyim.;Yedi rengim vardır.|Bulut|Şimşek|Güneş
Deprem|Bir doğa olayıyım.;Haber vermeden gelirim.;Yer kabuğundaki hareketlerden oluşurum.;Yeri sallarım.|Sel|Çığ|Fırtına
Ay|Gökyüzündeyim.;Kendi ışığım yoktur.;Evrelerim vardır: hilal, dolunay…;Dünya’nın uydusuyum.|Güneş|Mars|Yıldız
Mars|Bir gök cismiyim.;Güneş Sistemi’ndeyim.;Dünya’nın komşusuyum.;Kızıl gezegen diye bilinirim.|Venüs|Jüpiter|Ay
İstanbul|Bir şehirim.;İki kıtaya yayılırım.;Boğazım ünlüdür.;Türkiye’nin en kalabalık şehriyim.|İzmir|Ankara|Bursa
Kapadokya|Bir bölgeyim.;İç Anadolu’dayım.;Sıcak hava balonlarıyla ünlüyüm.;Peribacalarım vardır.|Pamukkale|Efes|Nemrut
Karagöz|Bir oyun kahramanıyım.;Perdede oynarım.;Arkadaşım Hacivat’tır.;Gölge oyunuyla tanınırım.|Nasreddin Hoca|Keloğlan|İbiş
Nasreddin Hoca|Bir halk kahramanıyım.;Fıkralarım çok ünlüdür.;Eşeğimle anılırım.;Akşehir’le özdeşleşmişimdir.|Keloğlan|Karagöz|Dede Korkut
Satranç|Bir oyunum.;İki kişiyle oynanırım.;64 karem vardır.;Şah ve vezirim vardır.|Dama|Tavla|Okey
Tavla|Bir oyunum.;Zar atılarak oynanırım.;Pullarım vardır.;Kahvehanelerde çok oynanırım.|Satranç|Dama|Okey
Futbol|Bir sporum.;Çok sevilirim.;İki kale ve bir topum vardır.;Her takımda 11 oyuncu olur.|Basketbol|Voleybol|Hentbol
Bağlama|Bir çalgıyım.;Uzun bir sapım vardır.;Telliyim.;Türk halk müziğinin vazgeçilmeziyim.|Ney|Kanun|Davul
Ney|Bir çalgıyım.;Kamıştan yapılırım.;Üflenerek çalınırım.;Mevlevi müziğiyle anılırım.|Bağlama|Ud|Zurna
Pusula|Bir aracım.;Yanımda taşınırım.;İbrem vardır.;Hep kuzeyi gösteririm.|Saat|Termometre|Dürbün
Termometre|Bir aracım.;Ateşini ölçerim.;Derece cinsinden sonuç veririm.;Sıcaklık ölçerim.|Barometre|Pusula|Terazi
Buzdolabı|Bir ev aletiyim.;Mutfakta dururum.;İçim aydınlıktır.;Yiyecekleri soğuk tutarım.|Fırın|Çamaşır makinesi|Bulaşık makinesi
Ayna|Bir eşyayım.;Duvarda asılı olabilirim.;Camdan yapılırım.;Bana bakınca kendini görürsün.|Pencere|Tablo|Saat
Anahtar|Bir eşyayım.;Cebinde taşınırım.;Dişlerim vardır ama ısırmam.;Kilitleri açarım.|Tarak|Kalem|Çatal
`;

RAW.words = `
KALEM KİTAP DEFTER BAHÇE ÇİÇEK GÜNEŞ YILDIZ DENİZ ORMAN KÖPRÜ PENCERE MASA SANDALYE BARDAK TABAK KAŞIK ÇATAL BIÇAK ELMA ARMUT KİRAZ ÇİLEK KARPUZ KAVUN ÜZÜM LİMON PORTAKAL DOMATES BİBER PATATES SOĞAN HAVUÇ ISPANAK EKMEK PEYNİR ZEYTİN SİMİT ÇORBA PİLAV BULUT YAĞMUR TOPRAK NEHİR IRMAK ŞELALE VADİ KARTAL SERÇE GÜVERCİN TAVŞAN KAPLAN ASLAN ZÜRAFA ZEBRA KAPLUMBAĞA YUNUS BALİNA KELEBEK KARINCA ÖRDEK HOROZ TAVUK İNEK KOYUN KEÇİ OKUL ÖĞRETMEN ÖĞRENCİ SINIF ÖDEV SINAV TAHTA SİLGİ CETVEL ÇANTA HARİTA DÜNYA GEZEGEN ROKET UÇAK GEMİ TREN OTOBÜS BİSİKLET ARABA KAMYON DOKTOR HEMŞİRE MÜHENDİS AVUKAT ÇİFTÇİ FIRINCI TERZİ BERBER MÜZİK RESİM ŞARKI TİYATRO SİNEMA FUTBOL VOLEYBOL BASKETBOL YÜZME SAĞLIK MUTLULUK SEVGİ SAYGI DOSTLUK UMUT SABIR CESARET HUZUR BAYRAM DÜĞÜN TATİL YOLCULUK HEDİYE MEKTUP GAZETE DERGİ TELEFON BİLGİSAYAR EKRAN KLAVYE LAMBA PERDE HALI YASTIK YORGAN BATTANİYE AYNA TARAK SABUN HAVLU ŞEMSİYE ELDİVEN ATKI CEKET PANTOLON GÖMLEK AYAKKABI ÇORAP ŞAPKA BALKON MUTFAK SALON BAHAR SONBAHAR YAYLA ÇARŞI PAZAR DÜKKAN KASABA ŞEHİR ÜLKE
ANAHTAR KAPI DUVAR ÇATI BACA MERDİVEN ASANSÖR KORİDOR BODRUM TAVAN ZEMİN DOLAP ÇEKMECE RAFLAR KOLTUK KANEPE SEHPA TABLO VAZO SAKSI FİDAN TOHUM YAPRAK DALLAR KÖKLER GÖVDE ÇİMEN PAPATYA LALE MENEKŞE GÜLLER SÜMBÜL NERGİS KARANFİL ORKİDE KAKTÜS MANTAR YOSUN ÇAM MEŞE KAVAK SÖĞÜT ÇINAR ARDIÇ ZEYTİNLİK FINDIK CEVİZ BADEM KESTANE FISTIK LEBLEBİ İNCİR DUT ERİK ŞEFTALİ KAYISI AYVA NAR MANDALİNA GREYFURT ANANAS HURMA MUZLAR MERCİMEK NOHUT FASULYE BEZELYE BAMYA KABAK PATLICAN BROKOLİ LAHANA MARUL TERE MAYDANOZ DEREOTU NANE FESLEĞEN SARIMSAK ZENCEFİL TARÇIN KARABİBER KİMYON TUZLUK ŞEKERLİK BAL REÇEL TEREYAĞI YOĞURT AYRAN KEFİR SÜTLAÇ AŞURE BAKLAVA KÜNEFE LOKUM HELVA KURABİYE PASTA KEK BÖREK POĞAÇA PİDE LAHMACUN KEBAP KÖFTE DOLMA SARMA MANTI TARHANA BULGUR MAKARNA ERİŞTE GÖZLEME KAHVALTI AKŞAM SABAH ÖĞLE İKİNDİ GECE GÜNDÜZ HAFTA YILDIZLAR GALAKSİ UZAY ASTRONOT TELESKOP METEOR GÜNEŞLİ BULUTLU KARLI FIRTINA ŞİMŞEK YILDIRIM GÖKKUŞAĞI SİS DOLU ÇİSELEME KIRAĞI BUZUL BUZDAĞI OKYANUS KÖRFEZ BOĞAZ YARIMADA ADA KITA ÇÖL VAHA SAVANA TUNDRA ORMANLIK BATAKLIK KANYON MAĞARA YANARDAĞ DEPREM ÇIĞ HEYELAN SELLER
AKRABA AİLE ANNE BABA KARDEŞ ABLA AĞABEY DEDE NİNE TORUN YEĞEN KUZEN TEYZE HALA AMCA DAYI ENİŞTE YENGE KOMŞU ARKADAŞ MİSAFİR KONUK ÖĞRENCİLER SINIFLAR MÜDÜR KAPICI POSTACI ŞOFÖR KAPTAN PİLOT ASKER POLİS İTFAİYECİ HAKİM SAVCI MİMAR RESSAM HEYKELTIRAŞ ŞAİR YAZAR GAZETECİ FOTOĞRAFÇI AŞÇI GARSON KASAP MANAV BAKKAL ECZACI VETERİNER DİŞÇİ MARANGOZ DEMİRCİ ÇÖMLEKÇİ KUYUMCU SAATÇİ TERCÜMAN KÜTÜPHANECİ BAHÇIVAN ÇOBAN BALIKÇI ARICI MADENCİ ELEKTRİKÇİ TESİSATÇI BOYACI
SEVİNÇ ÜZÜNTÜ ÖFKE KORKU MERAK HEYECAN GURUR UTANÇ ŞAŞKINLIK ÖZLEM HASRET VEFA SADAKAT DÜRÜSTLÜK CÖMERTLİK ADALET MERHAMET ŞEFKAT HOŞGÖRÜ NEZAKET TEVAZU SORUMLULUK DİSİPLİN ÇALIŞKANLIK AZİM KARARLILIK GAYRET EMEK BAŞARI ZAFER BARIŞ KARDEŞLİK BİRLİK DAYANIŞMA YARDIMLAŞMA PAYLAŞMA İYİLİK GÜZELLİK DOĞRULUK BİLGİ BİLİM SANAT KÜLTÜR TARİH COĞRAFYA MATEMATİK FİZİK KİMYA BİYOLOJİ EDEBİYAT FELSEFE GEOMETRİ ALFABE HECE CÜMLE PARAGRAF MASAL ŞİİR ROMAN DESTAN BİLMECE FIKRA ATASÖZÜ DEYİM SÖZLÜK ANSİKLOPEDİ KÜTÜPHANE MÜZE GALERİ SERGİ KONSER FESTİVAL ŞENLİK TÖREN YARIŞMA OLİMPİYAT MADALYA KUPA ŞAMPİYON TAKIM OYUNCU HAKEM KALECİ FORVET ANTRENÖR STADYUM SAHA KALE FİLE RAKET TENİS GÜREŞ OKÇULUK BİNİCİLİK YELKEN KÜREK DALIŞ KAYAK PATEN SATRANÇ TAVLA DAMA BULMACA YAPBOZ OYUNCAK UÇURTMA SALINCAK KAYDIRAK TAHTEREVALLİ BİLYE TOPAÇ
`;

// Plaka kodları (81 il) ve ülke başkentleri — genel kültüre otomatik soru üretir
RAW.plaka = `Adana,Adıyaman,Afyonkarahisar,Ağrı,Amasya,Ankara,Antalya,Artvin,Aydın,Balıkesir,Bilecik,Bingöl,Bitlis,Bolu,Burdur,Bursa,Çanakkale,Çankırı,Çorum,Denizli,Diyarbakır,Edirne,Elazığ,Erzincan,Erzurum,Eskişehir,Gaziantep,Giresun,Gümüşhane,Hakkari,Hatay,Isparta,Mersin,İstanbul,İzmir,Kars,Kastamonu,Kayseri,Kırklareli,Kırşehir,Kocaeli,Konya,Kütahya,Malatya,Manisa,Kahramanmaraş,Mardin,Muğla,Muş,Nevşehir,Niğde,Ordu,Rize,Sakarya,Samsun,Siirt,Sinop,Sivas,Tekirdağ,Tokat,Trabzon,Tunceli,Şanlıurfa,Uşak,Van,Yozgat,Zonguldak,Aksaray,Bayburt,Karaman,Kırıkkale,Batman,Şırnak,Bartın,Ardahan,Iğdır,Yalova,Karabük,Kilis,Osmaniye,Düzce`;
RAW.baskent = `
Portekiz|Lizbon
Hollanda|Amsterdam
Belçika|Brüksel
İsviçre|Bern
Avusturya|Viyana
Polonya|Varşova
Çekya|Prag
Romanya|Bükreş
Sırbistan|Belgrad
Hırvatistan|Zagreb
Arnavutluk|Tiran
Kuzey Makedonya|Üsküp
Kosova|Priştine
Gürcistan|Tiflis
Ermenistan|Erivan
İran|Tahran
Irak|Bağdat
Suriye|Şam
Ürdün|Amman
Lübnan|Beyrut
Katar|Doha
Birleşik Arap Emirlikleri|Abu Dabi
Umman|Maskat
Afganistan|Kabil
Tacikistan|Duşanbe
Moğolistan|Ulan Batur
Güney Kore|Seul
Endonezya|Cakarta
Malezya|Kuala Lumpur
Tayland|Bangkok
Vietnam|Hanoi
Filipinler|Manila
Bangladeş|Dakka
Nepal|Katmandu
Fas|Rabat
Libya|Trablus
Sudan|Hartum
Etiyopya|Addis Ababa
Kenya|Nairobi
Nijerya|Abuja
Arjantin|Buenos Aires
Şili|Santiago
Peru|Lima
Kolombiya|Bogota
Meksika|Meksiko
Amerika Birleşik Devletleri|Washington
Küba|Havana
Norveç|Oslo
İsveç|Stockholm
Finlandiya|Helsinki
Danimarka|Kopenhag
İrlanda|Dublin
Ukrayna|Kiev
Belarus|Minsk
Litvanya|Vilnius
Letonya|Riga
Estonya|Tallinn
Slovakya|Bratislava
Karadağ|Podgorica
Moldova|Kişinev
Kuzey Kıbrıs Türk Cumhuriyeti|Lefkoşa
`;
