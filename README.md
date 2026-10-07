# Küçük Bir Sürpriz

Sevdiğin kişi için hazırlanmış, beş aşamalı ve etkileşimli bir romantik mikro site. El çizimi doodle görünümü; sıcak kâğıt tonları, Caveat yazı tipi, organik çerçeveler ve süzülen kalplerle korunur. Uygulama vanilla HTML, CSS ve JavaScript kullanır; derleme adımı veya JavaScript kütüphanesi gerektirmez.

## Dosyalar

- `index.html`: Türkçe sayfa yapısı, beş aşamalı akış, aşama göstergesi ve fotoğraf penceresi.
- `style.css`: Renk paleti, doodle bileşenleri, animasyonlar, katman düzeni ve mobil uyarlamalar.
- `script.js`: Aşama geçişleri, zamanlayıcıların yönetimi, yüzen kalpler, fotoğraf penceresi ve akışı yeniden başlatma.
- `img/`: Galeride gösterilen dört fotoğraf.

Siteyi `index.html` dosyasını açarak veya GitHub Pages gibi statik bir sunucuda yayınlayarak çalıştırabilirsin. Caveat yazı tipini yüklemek için internet bağlantısı gerekir; bağlantı olmadığında sistemin el yazısı yazı tipi kullanılır.

## Sürpriz akışı

1. **Hoş geldin:** Sayfa açıldığında başlangıç düğmesi görünür.
2. **İlk mesaj:** Düğmeye tıklandıktan 1,2 saniye sonra sevgi mesajı belirir.
3. **Devam et:** Mesajdan 3 saniye sonra ikinci düğme görünür.
4. **Anılar:** İkinci düğmeye tıklandıktan 1,2 saniye sonra dört fotoğraflı galeri açılır.
5. **Final:** Galeri açıldıktan 1,5 saniye sonra beşinci aşama başlar ve galeri başlığı ekranda kalır. Yaklaşık 5,5 saniye sonra galeri başlığı yerini final mesajına ve “Baştan yaşa” düğmesine bırakır. Fotoğraf kartlarına tıklayarak görselleri büyütebilir veya final düğmesiyle sürprizi baştan yaşayabilirsin. Üstteki başlığa tıklamak da akışı sıfırlar.

Üstteki beş noktalı gösterge geçerli aşamayı belirtir. Geçiş zamanlayıcıları yeniden başlatma sırasında temizlenir; böylece eski bir zamanlayıcı yeni akışa karışmaz.

## Fotoğrafları değiştirme

Galerideki dosya yolları, proje alt klasörlerinde de çalışması için göreli tanımlanmıştır:

- `img/image1.jpg`
- `img/image2.jpg`
- `img/image3.png`
- `img/image4.png`

Kendi fotoğraflarını aynı adlarla değiştir veya yeni dosya yollarını `index.html` içindeki fotoğraf kartlarına ekle. Görseller otomatik olarak kırpılıp çerçeveye sığdırılır; yüklenemeyen görsellerde kırık resim simgesi yerine kalp yer tutucusu görünür.

## Erişilebilirlik ve destek

- Düğmeler klavyeyle kullanılabilir; fotoğraf büyütme penceresi Escape tuşuyla kapatılabilir.
- Azaltılmış hareket tercihi etkinleştirildiğinde animasyonlar azaltılır.
- Mobil ekranlarda arka plan kalp animasyonları azaltılır; görsellerin çözülmesi ana çizimi engellemez.
- Küçük ekranlar için ayrı galeri ve tipografi düzenleri bulunur.
- Google Fonts ve tarayıcının yerel `<dialog>` desteği dışında harici bağımlılık yoktur.
