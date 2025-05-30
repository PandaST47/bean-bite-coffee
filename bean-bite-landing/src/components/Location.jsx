import { useEffect, useCallback } from 'react';
import { MapPin, Clock, Phone, Mail, ChevronRight } from 'lucide-react';

const Location = () => {
  const initMap = useCallback(() => {
    if (window.ymaps) {
      window.ymaps.ready(() => {
        const map = new window.ymaps.Map('yandex-map', {
          center: [56.836341, 60.608956],
          zoom: 16,
          controls: ['zoomControl'],
          behaviors: ['drag', 'scrollZoom']
        }, {
          suppressMapOpenBlock: true
        });

        const placemark = new window.ymaps.Placemark(
          [56.836341, 60.608956],
          {
            hintContent: 'Bean & Bite',
            balloonContent: '<div class="balloon-content"><h3>Bean & Bite</h3><p>Кофейня премиум-класса</p></div>'
          },
          {
            iconLayout: 'default#image',
            iconImageHref: '/images/map-marker.png',
            iconImageSize: [48, 48],
            iconImageOffset: [-24, -48]
          }
        );

        map.geoObjects.add(placemark);
      });
    }
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?apikey=your-api-key&lang=ru_RU';
    script.async = true;
    script.onload = initMap;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [initMap]);

  return (
    <section id="location" className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-100/30 via-orange-100/20 to-yellow-100/30"></div>
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-conic from-amber-400 via-orange-500 to-yellow-400 rounded-full blur-3xl opacity-20 animate-spin-slow"></div>
        <div className="absolute bottom-32 right-16 w-64 h-64 bg-gradient-conic from-pink-400 via-red-500 to-orange-400 rounded-full blur-3xl opacity-15 animate-reverse-spin"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-radial from-yellow-400/30 to-transparent rounded-full animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="mb-8 animate-float-gentle">
            <span className="relative inline-flex items-center gap-3 text-amber-800 text-lg sm:text-xl font-bold tracking-wider px-10 py-5 border-3 border-amber-400/50 rounded-full backdrop-blur-2xl bg-gradient-to-r from-white/80 to-amber-100/80 shadow-2xl shadow-amber-500/30 hover:scale-110 transition-all duration-700 group">
              <MapPin className="w-6 h-6 text-amber-600 group-hover:rotate-12 transition-transform duration-500" />
              ГДЕ НАС НАЙТИ
              <ChevronRight className="w-6 h-6 text-amber-600 group-hover:translate-x-2 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-orange-400/20 to-yellow-400/20 rounded-full blur-xl group-hover:animate-pulse"></div>
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-none">
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-amber-800 via-orange-700 to-yellow-700 bg-clip-text text-transparent drop-shadow-2xl">Присоединяйтесь к нам</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
            </span>
          </h2>
          <div className="flex justify-center mb-8">
            <div className="relative w-32 h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
            </div>
          </div>
          <p className="text-xl sm:text-2xl lg:text-3xl text-amber-900/80 max-w-3xl mx-auto leading-relaxed font-light">
            Посетите нашу кофейню премиум-класса и окунитесь в атмосферу уюта и вкуса
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="lg:w-1/3">
            <div className="relative bg-white/80 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border-2 border-white/50 hover:shadow-3xl hover:border-amber-200/50 transition-all duration-700 group">
              <div className="absolute inset-0 bg-gradient-conic from-amber-400/10 via-orange-400/10 to-yellow-400/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <h3 className="text-2xl font-bold text-amber-900 mb-8 relative z-10">Контактная информация</h3>
              <div className="space-y-8 relative z-10">
                <div className="flex items-start group/item">
                  <MapPin className="w-6 h-6 text-amber-600 mr-4 mt-1 group-hover/item:scale-125 transition-transform duration-300" />
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-2">Адрес</h4>
                    <p className="text-amber-800/80 leading-relaxed">
                      Площадь 1905 года, 1А<br />Екатеринбург, Россия
                    </p>
                  </div>
                </div>
                <div className="flex items-start group/item">
                  <Clock className="w-6 h-6 text-amber-600 mr-4 mt-1 group-hover/item:scale-125 transition-transform duration-300" />
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-2">Время работы</h4>
                    <p className="text-amber-800/80 leading-relaxed">
                      Пн–Пт: 7:00–22:00<br />Сб–Вс: 8:00–23:00
                    </p>
                  </div>
                </div>
                <div className="flex items-start group/item">
                  <Phone className="w-6 h-6 text-amber-600 mr-4 mt-1 group-hover/item:scale-125 transition-transform duration-300" />
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-2">Телефон</h4>
                    <p className="text-amber-800/80">
                      <a href="tel:+73431234567" className="hover:text-amber-600 transition-colors duration-300">+7 (343) 123-45-67</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start group/item">
                  <Mail className="w-6 h-6 text-amber-600 mr-4 mt-1 group-hover/item:scale-125 transition-transform duration-300" />
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-2">Email</h4>
                    <p className="text-amber-800/80">
                      <a href="mailto:info@beanandbite.ru" className="hover:text-amber-600 transition-colors duration-300">info@beanandbite.ru</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="relative h-96 sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/50 group">
              <div className="absolute inset-0 bg-gradient-conic from-amber-400/10 via-orange-400/10 to-yellow-400/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div id="yandex-map" className="w-full h-full relative z-10"></div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-2xl rounded-full px-4 py-2 shadow-lg border-2 border-white/50 group-hover:border-amber-200/50 transition-all duration-300">
                <span className="text-amber-800 font-semibold text-sm">Bean & Bite</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-reverse-spin { animation: reverse-spin 12s linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
        .animate-float-gentle { animation: float-gentle 8s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 2s linear infinite; }
      `}</style>
    </section>
  );
};

export default Location;
