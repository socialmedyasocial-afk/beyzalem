// Beyzâlem soru verisi — bölüm 1: Anlamını Bul, Tanımdan Kelimeye, Deyimin Anlamı
// Biçim: soru|doğru|yanlış1|yanlış2|yanlış3
window.RAW = window.RAW || {};
RAW.anlam = `
Mütevazı|Alçak gönüllü|Kibirli|Cömert|Çekingen
Müsamaha|Hoşgörü|Saygı|Sabır|İzin
Mütehassıs|Uzman|Duygulu|Öğrenci|Yönetici
İstikrar|Kararlılık, süreklilik|Değişim|Hız|Barış
Feragat|Bir haktan vazgeçme|Hak isteme|Kazanma|Bekleme
Muğlak|Belirsiz, anlaşılması güç|Açık, net|Kısa|Kesin
Lakayt|İlgisiz, umursamaz|Dikkatli|Neşeli|Öfkeli
Teenni|Acele etmeme|Telaş|Öfke|Sevinç
İhtimam|Özen|İhmal|Merak|Korku
Vefa|Dostlukta sadakat|Unutkanlık|Kıskançlık|Cesaret
Haşin|Sert, kaba|Yumuşak|Tatlı|Uysal
Meşakkat|Zahmet, sıkıntı|Kolaylık|Mutluluk|Hız
Nadide|Az bulunur, değerli|Sıradan|Eski|Kırık
Gaye|Amaç|Yol|Engel|Sonuç
Muhakeme|Akıl yürütme, yargılama|Unutma|Tahmin|Hayal kurma
Aşikâr|Açık, belli|Gizli|Karışık|Uzak
Bedbin|Kötümser|İyimser|Neşeli|Sakin
Nikbin|İyimser|Kötümser|Kızgın|Yorgun
Beyhude|Boşuna, yararsız|Faydalı|Gerekli|Önemli
Elzem|Çok gerekli|Gereksiz|Seyrek|Pahalı
Fevkalade|Olağanüstü|Sıradan|Kötü|Yavaş
Gayret|Çaba|Tembellik|Korku|Şans
Hasbihal|Sohbet, dertleşme|Kavga|Yolculuk|Uyku
İhtiyat|Tedbir, sakınma|Cesaret|Acele|Öfke
İsraf|Gereksiz harcama|Tasarruf|Kazanç|Yatırım
Kanaat|Elindekiyle yetinme|Açgözlülük|Kıskançlık|Merak
Kadirşinas|İyiliği bilen|Nankör|Unutkan|Kaba
Nankör|İyilik bilmeyen|Vefalı|Cömert|Çalışkan
Mahzun|Üzgün, boynu bükük|Neşeli|Öfkeli|Şaşkın
Metanet|Dayanıklılık, sağlamlık|Zayıflık|Korku|Telaş
Müphem|Belirsiz|Açık|Kesin|Kolay
Münzevi|Toplumdan uzak yaşayan|Sosyal|Gezgin|Konuşkan
Nüans|İnce fark|Büyük benzerlik|Renk|Ses
Rehavet|Gevşeklik, tembellik|Çalışkanlık|Hız|Dikkat
Sebat|Kararlılıkla sürdürme|Vazgeçme|Unutma|Erteleme
Tahammül|Katlanma, dayanma|Öfkelenme|Kaçma|Bağırma
Tedirgin|Huzursuz, kaygılı|Rahat|Mutlu|Uykulu
Tevekkül|Allah’a dayanma, kabullenme|İsyan|Telaş|Kibir
Ülfet|Alışkanlık, yakınlık|Yabancılık|Düşmanlık|Korku
Vakur|Ağırbaşlı|Hoppa|Korkak|Gürültücü
Yeis|Umutsuzluk|Sevinç|Umut|Heyecan
Zarif|İnce, kibar|Kaba|Ağır|Yavaş
Zahir|Görünen, dış yüz|Gizli olan|Gelecek|Geçmiş
Batın|İç yüz, gizli olan|Görünen|Dış|Yüzey
Âşina|Tanıdık, bilen|Yabancı|Düşman|Unutkan
Bihaber|Habersiz|Bilgili|Haberci|Meraklı
Cüretkâr|Gözü pek, atak|Korkak|Çekingen|Utangaç
Dirayet|Akıllıca iş görme yeteneği|Beceriksizlik|Saflık|Unutkanlık
Ebedî|Sonsuz, ölümsüz|Geçici|Kısa|Eski
Ezelî|Başlangıcı olmayan|Yeni|Geçici|Sonlu
Fedakâr|Özveriyle davranan|Bencil|Cimri|Tembel
Gafil|Dalgın, habersiz|Uyanık|Dikkatli|Zeki
Harikulade|Olağanüstü güzel|Sıradan|Çirkin|Küçük
İnzibat|Disiplin, düzen|Karışıklık|Tatil|Oyun
İtidal|Ölçülü davranma|Aşırılık|Öfke|Telaş
Kifayet|Yeterlilik|Eksiklik|Bolluk|Fazlalık
Lütuf|İyilik, bağış|Ceza|Kötülük|Borç
Merhamet|Acıma, şefkat|Zulüm|Kibir|Öfke
Muvaffak|Başarılı|Başarısız|Yorgun|Kızgın
Müteessir|Üzgün, etkilenmiş|Sevinçli|Umursamaz|Öfkeli
Nezaket|İncelik, kibarlık|Kabalık|Sertlik|Tembellik
Ruhsat|İzin|Yasak|Ceza|Borç
Sükûnet|Durgunluk, sessizlik|Gürültü|Telaş|Kavga
Şefkat|Sevgi dolu acıma|Sertlik|Kıskançlık|Nefret
Tasavvur|Zihinde canlandırma|Unutma|Görmek|Duymak
Teşebbüs|Girişim|Vazgeçiş|Bekleyiş|Sonuç
Vaveyla|Feryat, çığlık|Fısıltı|Şarkı|Gülüş
Yekûn|Toplam|Fark|Bölüm|Kalan
Zevahir|Dış görünüş|İç dünya|Gerçek|Öz
Afaki|Boş, temelsiz|Bilimsel|Somut|Kanıtlı
Bahşiş|Hizmet için verilen fazladan para|Vergi|Borç|Ceza
Celal|Büyüklük, heybet|Küçüklük|Zayıflık|Korku
Deha|Üstün zekâ|Cehalet|Yorgunluk|Şans
Emsal|Benzer, örnek|Zıt|Eksik|Eski
Fazilet|Erdem|Kusur|Zenginlik|Güç
Hayâ|Utanma duygusu|Cesaret|Öfke|Merak
İlim|Bilim, bilgi|Cehalet|Servet|Oyun
Kaide|Kural|İstisna|Hata|Sonuç
Mahcup|Utanmış|Gururlu|Neşeli|Öfkeli
Malumat|Bilgi|Cehalet|Para|Eşya
Meziyet|Üstün nitelik|Kusur|Hastalık|Borç
Muhatap|Kendisine söz yöneltilen kişi|Yabancı|Dinleyici olmayan|Yazar
Müstesna|İstisna olan, seçkin|Sıradan|Kalabalık|Eski
Rağbet|İlgi, istek|İlgisizlik|Nefret|Korku
Sadakat|Bağlılık|İhanet|Unutkanlık|Kıskançlık
Tahayyül|Hayal etme|Gerçek|Unutma|Görme
Tecrübe|Deneyim|Bilgisizlik|Tahmin|Hayal
Tezat|Karşıtlık|Benzerlik|Uyum|Eşitlik
Umumi|Genel|Özel|Gizli|Kişisel
Vasat|Orta derecede|Mükemmel|Çok kötü|Çok iyi
Zafer|Yengi, kazanç|Yenilgi|Barış|Kaçış
Akıbet|Son, sonuç|Başlangıç|Yol|Sebep
Bertaraf|Ortadan kaldırma|Ekleme|Saklama|Bekleme
Cehd|Çaba|Tembellik|Uyku|Şans
Ehemmiyet|Önem|Önemsizlik|Hız|Kolaylık
Gıpta|İmrenme|Nefret|Kıskanıp zarar dileme|Korku
Hamiyet|Yurt ve millet sevgisi, gayret|Bencillik|Tembellik|Korkaklık
İcraat|Yapılan işler|Sözler|Hayaller|Planlar
Kat’i|Kesin|Belirsiz|Geçici|Yavaş
Mazi|Geçmiş|Gelecek|Şimdi|Yarın
Müstakbel|Gelecekteki|Geçmişteki|Şimdiki|Eski
Nazik|Kibar, ince|Kaba|Sert|Gürültülü
Rakip|Yarışılan kişi|Dost|Akraba|Öğretmen
Sarih|Açık, net|Kapalı|Belirsiz|Gizli
Tasarruf|Biriktirme, idareli harcama|İsraf|Borçlanma|Kayıp
Ümit|Umut|Korku|Keder|Öfke
Vazife|Görev|Tatil|Hak|Oyun
Yâd|Anma, hatırlama|Unutma|Kızma|Bekleme
Zaruri|Zorunlu|Gereksiz|İsteğe bağlı|Ender
Âlicenap|Yüce gönüllü|Bencil|Kaba|Cimri
Mesuliyet|Sorumluluk|Özgürlük|Tatil|Şans
Muhayyile|Hayal gücü|Hafıza|Görme|İşitme
Kemiyet|Nicelik|Nitelik|Renk|Biçim
Keyfiyet|Nitelik|Nicelik|Sayı|Miktar
Tereddüt|Kararsızlık|Kararlılık|Hız|Cesaret
Tevazu|Alçak gönüllülük|Kibir|Gösteriş|Öfke
`;

RAW.tanim = `
Bir işi yapabilme gücü, yeterlilik.|Yetenek|Merak|Sabır|Emek
Güneşin doğduğu yön.|Doğu|Batı|Kuzey|Güney
Kitapların düzenli saklandığı ve okunduğu yer.|Kütüphane|Müze|Galeri|Matbaa
Yağışın uzun süre yağmaması durumu.|Kuraklık|Sel|Çığ|Fırtına
Dünya’nın doğal uydusu.|Ay|Güneş|Venüs|Kutup Yıldızı
Ağaçları çok olan geniş alan.|Orman|Bozkır|Çöl|Bahçe
Bir şeyi önceden sezme, hissetme.|Sezgi|Hafıza|Rüya|Hayal
Suyun donarak katılaşmış hâli.|Buz|Buhar|Çiğ|Sis
İnsanlara yol gösteren kimse.|Rehber|Yolcu|Seyyah|Misafir
Bir şeyin olması için duyulan güçlü istek.|Arzu|Korku|Şüphe|Yorgunluk
Yardım etmekten hoşlanan, eli açık.|Cömert|Cimri|Tembel|Bencil
Denizin karaya sokulmuş küçük parçası.|Koy|Burun|Ada|Yarımada
Karanın denize doğru uzanmış sivri ucu.|Burun|Koy|Körfez|Boğaz
Dört tarafı suyla çevrili kara parçası.|Ada|Yarımada|Koy|Kıta
Üç tarafı suyla çevrili kara parçası.|Yarımada|Ada|Göl|Delta
Hastaları muayene edip tedavi eden kişi.|Doktor|Eczacı|Hemşire|Veteriner
Hayvanları tedavi eden hekim.|Veteriner|Diş hekimi|Eczacı|Çoban
Ekmek yapıp satan kişi.|Fırıncı|Kasap|Manav|Bakkal
Meyve ve sebze satan kişi.|Manav|Kasap|Fırıncı|Terzi
Elbise diken kişi.|Terzi|Berber|Marangoz|Kasap
Ahşaptan eşya yapan usta.|Marangoz|Demirci|Terzi|Çömlekçi
Saç kesen kişi.|Berber|Terzi|Bahçıvan|Aşçı
Bahçe işleriyle uğraşan kişi.|Bahçıvan|Çoban|Balıkçı|Kaptan
Gemiyi yöneten kişi.|Kaptan|Pilot|Makinist|Şoför
Uçağı kullanan kişi.|Pilot|Kaptan|Şoför|Makinist
Haberleri toplayıp yazan kişi.|Gazeteci|Yazar|Şair|Ressam
Şiir yazan kişi.|Şair|Ressam|Heykeltıraş|Besteci
Resim yapan sanatçı.|Ressam|Şair|Besteci|Mimar
Bina tasarlayan kişi.|Mimar|Mühendis|Marangoz|Ressam
Müzik eseri yazan kişi.|Besteci|Şair|Ressam|Yönetmen
Yılın en soğuk mevsimi.|Kış|Yaz|İlkbahar|Sonbahar
Yaprakların döküldüğü mevsim.|Sonbahar|İlkbahar|Yaz|Kış
Suyun ısınarak gaz hâline geçmesi.|Buharlaşma|Donma|Erime|Yoğuşma
Katı maddenin ısınarak sıvı hâline geçmesi.|Erime|Donma|Buharlaşma|Yoğuşma
Gökyüzünde görülen renkli yay.|Gökkuşağı|Şimşek|Bulut|Sis
Yerin sarsılması olayı.|Deprem|Heyelan|Sel|Çığ
Dağdan kopup kayan büyük kar kütlesi.|Çığ|Heyelan|Dolu|Sel
Büyük bir alanı kaplayan durgun su.|Göl|Nehir|Dere|Şelale
Yüksekten dökülen su.|Şelale|Göl|Kaynak|Baraj
Akarsuyun denize döküldüğü yer.|Ağız|Kaynak|Yatak|Vadi
İki dağ arasındaki çukur alan.|Vadi|Tepe|Ova|Plato
Geniş ve düz alan.|Ova|Vadi|Dağ|Yamaç
Okulda ders veren kişi.|Öğretmen|Müdür|Öğrenci|Hizmetli
Bir ülkenin yönetim merkezi olan şehir.|Başkent|Liman|Kasaba|Köy
Gemilerin yanaştığı yer.|Liman|Havaalanı|İstasyon|Otogar
Trenlerin durduğu yer.|İstasyon|Liman|Otogar|Havaalanı
Otobüslerin kalkıp vardığı yer.|Otogar|İstasyon|Liman|Durak
Uçakların inip kalktığı yer.|Havalimanı|Liman|Otogar|İstasyon
Eski eserlerin sergilendiği yer.|Müze|Kütüphane|Arşiv|Depo
Hastaların tedavi edildiği yer.|Hastane|Eczane|Okul|Otel
İlaç satılan yer.|Eczane|Hastane|Market|Fırın
Para yatırılıp çekilen kurum.|Banka|Postane|Belediye|Okul
Mektup ve paketlerin gönderildiği yer.|Postane|Banka|Kargo deposu|Belediye
Yolcuların geceleyin kaldığı yer.|Otel|Lokanta|Kafe|Hastane
Yemek yenen ticari yer.|Lokanta|Otel|Fırın|Market
Zamanı ölçen araç.|Saat|Pusula|Termometre|Barometre
Yön bulmaya yarayan araç.|Pusula|Saat|Termometre|Dürbün
Sıcaklığı ölçen araç.|Termometre|Barometre|Pusula|Terazi
Ağırlık ölçen araç.|Terazi|Cetvel|Termometre|Pusula
Uzaktaki şeyleri yakın gösteren araç.|Dürbün|Mikroskop|Ayna|Pusula
Çok küçük canlıları büyüterek gösteren araç.|Mikroskop|Dürbün|Teleskop|Büyüteç
Gök cisimlerini incelemeye yarayan araç.|Teleskop|Mikroskop|Periskop|Pusula
Bir şeyi kaybetmekten duyulan endişe.|Kaygı|Sevinç|Merak|Gurur
Geçmişte olanları anlatan bilim.|Tarih|Coğrafya|Biyoloji|Fizik
Canlıları inceleyen bilim.|Biyoloji|Kimya|Fizik|Jeoloji
Yeryüzünü inceleyen bilim.|Coğrafya|Tarih|Kimya|Astronomi
Gök cisimlerini inceleyen bilim.|Astronomi|Astroloji|Jeoloji|Biyoloji
Kayaları ve yer kabuğunu inceleyen bilim.|Jeoloji|Biyoloji|Astronomi|Kimya
Maddenin yapısını ve değişimini inceleyen bilim.|Kimya|Fizik|Tarih|Coğrafya
Aynı anne babadan doğan kişiler.|Kardeş|Kuzen|Komşu|Arkadaş
Amca, dayı, hala ya da teyzenin çocuğu.|Kuzen|Kardeş|Yeğen|Torun
Kardeşin çocuğu.|Yeğen|Kuzen|Torun|Kardeş
Çocuğun çocuğu.|Torun|Yeğen|Kuzen|Kardeş
Annenin erkek kardeşi.|Dayı|Amca|Enişte|Kayın
Babanın erkek kardeşi.|Amca|Dayı|Enişte|Dede
Annenin kız kardeşi.|Teyze|Hala|Yenge|Abla
Babanın kız kardeşi.|Hala|Teyze|Yenge|Abla
Yazılı kurallar bütünü; yasa.|Kanun|Gelenek|Görenek|Masal
Halk arasında anlatılan olağanüstü hikâye.|Masal|Makale|Haber|Biyografi
Bir kişinin hayatını anlatan yazı.|Biyografi|Masal|Roman|Şiir
Kişinin kendi hayatını anlattığı yazı.|Otobiyografi|Biyografi|Anı|Deneme
Gezilip görülen yerleri anlatan yazı.|Gezi yazısı|Masal|Fıkra|Makale
Kısa ve güldürücü hikâye.|Fıkra|Destan|Roman|Makale
Bir kimsenin güvenini kötüye kullanma.|İhanet|Vefa|Sadakat|Dostluk
Yorgunluk sonrası dinlenmek için verilen ara.|Mola|Mesai|Tatil|Nöbet
Kalabalık bir insan topluluğu.|Kalabalık|Yalnızlık|Sessizlik|Boşluk
Aynı dili konuşan, aynı kültürü paylaşan topluluk.|Millet|Aile|Sınıf|Kulüp
Okulda bir yıl boyunca okunan derslerin bütünü.|Öğretim yılı|Tatil|Sınav|Karne
Öğrencinin başarısını gösteren belge.|Karne|Diploma|Kimlik|Pasaport
Okulu bitirene verilen belge.|Diploma|Karne|Ehliyet|Pasaport
Yurt dışına çıkmak için gereken belge.|Pasaport|Ehliyet|Diploma|Karne
Araç kullanma belgesi.|Ehliyet|Pasaport|Ruhsat|Karne
Güneşin battığı yön.|Batı|Doğu|Kuzey|Güney
Gece ile gündüzün eşit olduğu zamanlardan biri.|Ekinoks|Gün dönümü|Tutulma|Dolunay
Ay’ın tamamen aydınlık göründüğü evre.|Dolunay|Yeni ay|Hilal|İlk dördün
Ay’ın ince yay biçiminde göründüğü evre.|Hilal|Dolunay|Son dördün|Tutulma
Hava durumunu önceden tahmin etme.|Hava tahmini|Deprem ölçümü|Gök gözlemi|Takvim
Bir yerin uzun yıllar boyunca görülen ortalama hava durumu.|İklim|Hava durumu|Mevsim|Sıcaklık
Toprağı sürmeye yarayan tarım aracı.|Pulluk|Orak|Tırmık|Kürek
Ekin biçmeye yarayan eğri bıçak.|Orak|Pulluk|Kazma|Balta
Ağaç kesmeye yarayan alet.|Balta|Orak|Kürek|Tırmık
Toprak kazmaya yarayan alet.|Kazma|Balta|Orak|Makas
İp, iplik gibi şeyleri kesmeye yarayan iki ağızlı alet.|Makas|Bıçak|Testere|Balta
Tahta kesmeye yarayan dişli alet.|Testere|Makas|Çekiç|Pense
Çivi çakmaya yarayan alet.|Çekiç|Pense|Tornavida|Testere
Vida sıkmaya yarayan alet.|Tornavida|Çekiç|Pense|Anahtar
Arıların bal yaptığı yuva.|Kovan|Yuva|Kümes|Ahır
Tavukların barındığı yer.|Kümes|Ahır|Ağıl|Kovan
Büyükbaş hayvanların barındığı yer.|Ahır|Kümes|Kovan|Yuva
Koyunların gece barındığı çevrili yer.|Ağıl|Kümes|Kovan|Ahır
Yazın hayvanların otlatıldığı yüksek yer.|Yayla|Ova|Vadi|Delta
Dağların en yüksek noktası.|Zirve|Etek|Yamaç|Vadi
Bir sorunun çözülmesi için yapılan toplantı.|Görüşme|Tören|Kutlama|Şenlik
Bir zaferi ya da önemli olayı kutlamak için yapılan tören.|Kutlama|Cenaze|Toplantı|Sınav
Bir yerde bulunanların tümünün katıldığı oylama sonucu.|Oy birliği|Oy çokluğu|Seçim|Kura
Belirli aralıklarla yayımlanan basılı eser.|Dergi|Roman|Ansiklopedi|Sözlük
Kelimelerin anlamlarını sıralayan kitap.|Sözlük|Atlas|Roman|Dergi
Haritaların bir araya getirildiği kitap.|Atlas|Sözlük|Ansiklopedi|Albüm
Her konuda bilgi veren kapsamlı eser.|Ansiklopedi|Sözlük|Roman|Dergi
`;

RAW.deyim = `
Göz atmak|Kısaca bakmak|Uyumak|Kızmak|Ağlamak
Kulak asmamak|Önemsememek|Dikkatle dinlemek|İyi duymak|Fısıldamak
Etekleri zil çalmak|Çok sevinmek|Korkmak|Üşümek|Utanmak
Burnu havada olmak|Kibirli olmak|Üşütmek|Şaşırmak|Yorulmak
Pireyi deve yapmak|Küçük şeyi abartmak|Hayvan beslemek|Güçlenmek|Yalan söylemek
Dili tutulmak|Şaşkınlıktan konuşamamak|Çok konuşmak|Hastalanmak|Şarkı söylemek
Gözden düşmek|İtibarını yitirmek|Uyuyakalmak|Kaybolmak|Düşüp yaralanmak
Kılı kırk yarmak|Çok titiz davranmak|Saç kestirmek|Acele etmek|Vazgeçmek
Ayağını denk almak|Dikkatli davranmak|Dans etmek|Koşmak|Ayakkabı almak
Eli açık olmak|Cömert olmak|Elini yıkamak|Çalışkan olmak|Unutkan olmak
Göze girmek|Beğeni ve güven kazanmak|Gözü acımak|Saklanmak|Kaybolmak
Kafa tutmak|Karşı gelmek|Başı ağrımak|Düşünmek|Uyumak
Nabzına göre şerbet vermek|Hoşuna gidecek gibi davranmak|Doktora gitmek|İçecek ikram etmek|Tartışmak
İçi içine sığmamak|Çok heyecanlanmak|Çok yemek|Sıkılmak|Üzülmek
Ağzı kulaklarına varmak|Çok sevinmek|Çok yemek|Bağırmak|Esnemek
Ağzında bakla ıslanmamak|Sır tutamamak|Az konuşmak|Yemek seçmek|Diş ağrısı çekmek
Ağzını bıçak açmamak|Üzüntüden konuşamamak|Çok gülmek|Aç kalmak|Şarkı söylemek
Ateş pahası|Çok pahalı|Çok sıcak|Ucuz|Bedava
Ayağına çabuk|İşini hızlı yapan|Yavaş|Topal|Tembel
Baltayı taşa vurmak|Yersiz söz söyleyip gücendirmek|Odun kırmak|Çok çalışmak|Kazanmak
Başı göğe ermek|Çok sevinip onurlanmak|Boyu uzamak|Uçmak|Hastalanmak
Bel bağlamak|Güvenmek|Kemer takmak|Sırtı ağrımak|Kaçmak
Burnundan solumak|Çok öfkeli olmak|Nezle olmak|Koşmak|Uyumak
Can kulağıyla dinlemek|Çok dikkatle dinlemek|Hiç dinlememek|Kulak tıkamak|Uyuklamak
Çam devirmek|Yersiz söz ya da davranışla gücendirmek|Ağaç kesmek|Orman gezmek|Yarışmak
Çenesi düşük|Çok konuşan|Az konuşan|Hasta|Yaşlı
Dalga geçmek|Alay etmek|Yüzmek|Balık tutmak|Gemiye binmek
Dikkat kesilmek|Bütün dikkatini vermek|Dalgın olmak|Uyumak|Vazgeçmek
Dört gözle beklemek|Sabırsızlıkla beklemek|Gözlük takmak|Hiç beklememek|Unutmak
Dut yemiş bülbül gibi|Susmuş, konuşamaz hâlde|Neşeli|Şarkı söyleyen|Uçan
Eli kulağında|Olmak üzere|Uzakta|Çok geç|İmkânsız
Eteğindeki taşları dökmek|İçindekileri açıkça söylemek|Temizlik yapmak|Taşımak|Saklamak
Gönlünü almak|Kırılan birini hoşnut etmek|Kalbini kırmak|Hediye çalmak|Kızdırmak
Göz boyamak|Aldatıcı görünüş sergilemek|Makyaj yapmak|Resim yapmak|Uyumak
Göz yummak|Görmezden gelmek|Uyumak|Ağlamak|Dikkat etmek
Gözü dönmek|Aşırı öfkelenmek|Şaşı olmak|Uyumak|Sevinmek
Gözü kara|Hiçbir şeyden çekinmeyen|Korkak|Uykusuz|Hasta
Gözü tok|Açgözlü olmayan|Doymuş|Aç|Cimri
Gözden kaçırmak|Fark etmemek|Saklamak|İzlemek|Bulmak
Hapı yutmak|Kötü bir duruma düşmek|İlaç içmek|Kazanmak|Sevinmek
İki ayağını bir pabuca sokmak|Acele ettirip sıkıştırmak|Ayakkabı giymek|Dans etmek|Yavaşlamak
İğneyle kuyu kazmak|Zor bir işi sabırla yapmak|Dikiş dikmek|Su aramak|Kolay iş yapmak
İpe un sermek|Bahane uydurmak|Ekmek yapmak|Çamaşır asmak|Yardım etmek
Kalbi kırılmak|Gücenmek|Kalp hastası olmak|Sevinmek|Şaşırmak
Kaş yapayım derken göz çıkarmak|Düzelteyim derken bozmak|Makyaj yapmak|Göz doktoruna gitmek|Başarmak
Kendine gelmek|Ayılmak, aklı başına gelmek|Bayılmak|Kaybolmak|Evden çıkmak
Kulak kabartmak|Gizlice dinlemeye çalışmak|Kulak ağrımak|Duymamak|Bağırmak
Kulağına küpe olmak|Ders almak|Takı takmak|Duymamak|Unutmak
Küplere binmek|Çok öfkelenmek|Çömlek yapmak|Sevinmek|Saklanmak
Ne şiş yansın ne kebap|İki tarafı da gücendirmeden|Yemek pişirmek|Kavga etmek|Taraf tutmak
Pabucu dama atılmak|Değerini yitirmek|Ayakkabı kaybetmek|Çatıya çıkmak|Yükselmek
Parmak ısırmak|Çok şaşırmak|Acıkmak|Yaralanmak|Kızmak
Pot kırmak|Yersiz söz söylemek|Tencere kırmak|Yemek yapmak|Başarmak
Sözünü tutmak|Verdiği sözü yerine getirmek|Susmak|Bağırmak|Unutmak
Su koyuvermek|Gevşeyip bırakmak|Bardak doldurmak|Ağlamak|Yüzmek
Şapa oturmak|Zor durumda kalmak|Oturmak|Dinlenmek|Kazanmak
Taş kesilmek|Şaşkınlıktan donup kalmak|Taş toplamak|Güçlenmek|Koşmak
Tepesi atmak|Birden öfkelenmek|Saçı dökülmek|Zıplamak|Sevinmek
Tozu dumana katmak|Hızla gitmek|Temizlik yapmak|Ateş yakmak|Uyumak
Üstüne alınmak|Bir sözü kendisi için söylenmiş saymak|Giyinmek|Sorumluluk almak|Ödünç almak
Yüreği ağzına gelmek|Çok korkmak|Çok sevinmek|Hastalanmak|Çok yemek
Yüzü kızarmak|Utanmak|Güneşte yanmak|Öfkelenmek|Hastalanmak
Yüz vermek|Şımartmak|Yüzünü yıkamak|Küsmek|Uzaklaşmak
Zılgıt yemek|Azarlanmak|Yemek yemek|Ödül almak|Kutlanmak
Ağzı açık kalmak|Çok şaşırmak|Esnemek|Acıkmak|Bağırmak
Aklı karışmak|Ne yapacağını bilememek|Zeki olmak|Çok bilmek|Unutmak
Aklına esmek|Birden istemek|Rüzgârda kalmak|Üşümek|Plan yapmak
Akla karayı seçmek|Çok güçlük çekmek|Renk ayırmak|Boyamak|Kolayca başarmak
Alnının akıyla çıkmak|Başarıyla, yüz akıyla bitirmek|Yıkanmak|Kaçmak|Kaybetmek
Arı gibi çalışmak|Çok çalışkan olmak|Bal yapmak|Sokmak|Tembellik etmek
Ayak uydurmak|Uyum sağlamak|Dans etmek|Yürümek|Karşı çıkmak
Bağrına basmak|Sevgiyle benimsemek|Göğsü ağrımak|İtmek|Kovmak
Başı bağlı|Evli, sorumluluğu olan|Yaralı|Şapkalı|Bağımsız
Başı derde girmek|Sıkıntıya düşmek|Başı ağrımak|Sevinmek|Kazanmak
Başını dinlemek|Dinlenmek|Müzik dinlemek|Kafa sallamak|Çalışmak
Bir çırpıda|Hemen, çabucak|Yavaşça|Zorla|Hiçbir zaman
Boş vermek|Önem vermemek|Bardağı boşaltmak|Para vermek|Önemsemek
Boynu bükük kalmak|Çaresiz ve üzgün kalmak|Boynu ağrımak|Sevinmek|Gururlanmak
Canı sıkılmak|Bunalmak|Hastalanmak|Eğlenmek|Acıkmak
Cin gibi|Çok zeki ve çevik|Korkunç|Tembel|Saf
Çantada keklik|Elde edilmesi kesin|Çantada kuş|Kayıp|Zor
Dişini sıkmak|Güçlüğe katlanmak|Diş ağrımak|Gülmek|Bağırmak
Doludizgin|Hızla, ara vermeden|Yavaşça|Sessizce|Zorla
Dünyaya gözlerini açmak|Doğmak|Uyanmak|Görmek|Yolculuğa çıkmak
El ele vermek|Birlikte çalışmak|Tokalaşmak|Ayrılmak|Kavga etmek
Eli boş dönmek|Bir şey elde edemeden dönmek|Hediye vermek|Zengin dönmek|Yorgun dönmek
Eline su dökememek|Onun kadar becerikli olamamak|Su vermek|Bulaşık yıkamak|Onu geçmek
Gönül koymak|Kırılıp küsmek|Sevmek|Hediye vermek|Barışmak
Göz göre göre|Bile bile|Göremeden|Yanlışlıkla|Uyurken
Gözünü budaktan sakınmamak|Hiçbir tehlikeden çekinmemek|Ağaçtan korkmak|Gözlük takmak|Çekingen olmak
Harman olmak|Birbirine karışmak|Buğday biçmek|Ayrılmak|Kurumak
Hava almak|Biraz dolaşıp dinlenmek|Nefes tutmak|Uçmak|Rüzgâr ölçmek
İçi rahat etmek|Kaygısı kalmamak|Karnı doymak|Uyumak|Endişelenmek
İçinden pazarlık etmek|Kafasında hesap yapmak|Alışveriş yapmak|Satış yapmak|Konuşmak
Kanı kaynamak|Kısa sürede sempati duymak|Ateşlenmek|Öfkelenmek|Hastalanmak
Kapı kapı dolaşmak|Birçok yere başvurmak|Kapı tamir etmek|Evde oturmak|Saklanmak
Kara kara düşünmek|Kaygıyla düşünmek|Neşeyle düşünmek|Uyumak|Hayal kurmak
Kılını kıpırdatmamak|Hiçbir şey yapmamak|Saç kesmek|Çok çalışmak|Kıpırdanmak
Kolları sıvamak|Bir işe girişmek|Kolu yaralanmak|Gömlek giymek|Vazgeçmek
Laf ebesi|Çok ve yerinde konuşan|Sessiz|Ebe|Utangaç
Mum gibi|Düzgün, uslu|Yanan|Eriyen|Yaramaz
Ödü kopmak|Çok korkmak|Hastalanmak|Gülmek|Sevinmek
Örümcek kafalı|Yeniliklere kapalı|Zeki|Hızlı|Yaratıcı
Paçayı kurtarmak|Zor durumdan sıyrılmak|Pantolon dikmek|Yakalanmak|Kaybetmek
Saman altından su yürütmek|Gizlice iş çevirmek|Tarla sulamak|Ahır temizlemek|Açık davranmak
Sırtını yere getirmek|Yenmek|Uyumak|Düşmek|Yenilmek
Su gibi|Akıcı ve kolay|Islak|Zor|Kısa
Söz vermek|Bir işi yapmayı üstlenmek|Konuşmak|Ödünç vermek|Reddetmek
Tabanları yağlamak|Kaçmak|Ayakkabı boyamak|Dans etmek|Beklemek
Tuzu kuru|Durumu iyi, sıkıntısı olmayan|Tuzsuz|Susuz|Yoksul
Uykusu kaçmak|Uyuyamamak|Uyuyakalmak|Esnemek|Rüya görmek
Yaka silkmek|Bıkıp usanmak|Gömlek silkelemek|Sevinmek|Giyinmek
Yerin kulağı var|Gizli söz bir gün duyulur|Yer altı|Deprem olur|Toprak dinler
Yüzüne gözüne bulaştırmak|Bir işi berbat etmek|Yemek yemek|Boyamak|Başarmak
Zaman öldürmek|Boş vakit geçirmek|Saat kırmak|Acele etmek|Çalışmak
`;
