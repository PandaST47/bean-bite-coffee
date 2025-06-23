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
          behaviors: ['drag', window.innerWidth > 768 ? 'scrollZoom' : ''], // Disable scrollZoom on mobile
        }, {
          suppressMapOpenBlock: true,
        });

        const placemark = new window.ymaps.Placemark(
          [56.836341, 60.608956],
          {
            hintContent: 'Bean & Bite',
            balloonContent: '<div class="balloon-content"><h3>Bean & Bite</h3><p>Кофейня премиум-класса</p></div>',
          },
          {
            iconLayout: 'default#image',
            iconImageHref: '/images/map-marker.png',
            iconImageSize: [48, 48],
            iconImageOffset: [-24, -48],
          }
        );

        map.geoObjects.add(placemark);

        // Adjust map zoom for smaller screens
        if (window.innerWidth < 640) {
          map.setZoom(15);
        }
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
    <section
      id="location"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-100/30 via-orange-100/20 to-yellow-100/30"></div>
        <div className="hidden md:block absolute top-10 left-5 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-gradient-conic from-amber-400 via-orange-500 to-yellow-400 rounded-full blur-3xl opacity-20 animate-spin-slow"></div>
        <div className="hidden lg:block absolute bottom-16 right-8 w-40 h-40 lg:w-64 lg:h-64 bg-gradient-conic from-pink-400 via-red-500 to-orange-400 rounded-full blur-3xl opacity-15 animate-reverse-spin"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-gradient-radial from-yellow-400/30 to-transparent rounded-full animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="mb-6 sm:mb-8 animate-float-gentle">
            <span className="relative inline-flex items-center gap-2 sm:gap-3 text-amber-800 text-base sm:text-lg md:text-xl font-bold tracking-wider px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 border-2 sm:border-3 border-amber-400/50 rounded-full backdrop-blur-2xl bg-gradient-to-r from-white/80 to-amber-100/80 shadow-2xl shadow-amber-500/30 hover:scale-105 transition-all duration-500 group">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 group-hover:rotate-12 transition-transform duration-500" />
              ГДЕ НАС НАЙТИ
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-orange-400/20 to-yellow-400/20 rounded-full blur-xl group-hover:animate-pulse"></div>
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-none">
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-amber-800 via-orange-700 to-yellow-700 bg-clip-text text-transparent drop-shadow-2xl">
                Присоединяйтесь к нам
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
            </span>
          </h2>
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="relative w-24 sm:w-28 md:w-32 h-1.5 sm:h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
            </div>
          </div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-amber-900/80 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-light">
            Посетите нашу кофейню премиум-класса и окунитесь в атмосферу уюта и вкуса
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="lg:w-1/3">
            <div className="relative bg-white/80 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-white/50 hover:shadow-3xl hover:border-amber-200/50 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-conic from-amber-400/10 via-orange-400/10 to-yellow-400/10 rounded-2xl sm:rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-xl sm:text-2xl font-bold text-amber-900 mb-6 sm:mb-8 relative z-10">Контактная информация</h3>
              <div className="space-y-6 sm:space-y-8 relative z-10">
                <div className="flex items-start group/item">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 mr-3 sm:mr-4 mt-0.5 sm:mt-1 group-hover/item:scale-125 transition-transform duration-300" />
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1 sm:mb-2 text-base sm:text-lg">Адрес</h4>
                    <p className="text-amber-800/80 leading-relaxed text-sm sm:text-base">
                      Площадь 1905 года, 1А<br />Екатеринбург, Россия
                    </p>
                  </div>
                </div>
                <div className="flex items-start group/item">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 mr-3 sm:mr-4 mt-0.5 sm:mt-1 group-hover/item:scale-125 transition-transform duration-300" />
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1 sm:mb-2 text-base sm:text-lg">Время работы</h4>
                    <p className="text-amber-800/80 leading-relaxed text-sm sm:text-base">
                      Пн–Пт: 7:00–22:00<br />Сб–Вс: 8:00–23:00
                    </p>
                  </div>
                </div>
                <div className="flex items-start group/item">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 mr-3 sm:mr-4 mt-0.5 sm:mt-1 group-hover/item:scale-125 transition-transform duration-300" />
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1 sm:mb-2 text-base sm:text-lg">Телефон</h4>
                    <p className="text-amber-800/80 text-sm sm:text-base">
                      <a href="tel:+73431234567" className="hover:text-amber-600 transition-colors duration-300">
                        +7 (343) 123-45-67
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start group/item">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 mr-3 sm:mr-4 mt-0.5 sm:mt-1 group-hover/item:scale-125 transition-transform duration-300" />
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1 sm:mb-2 text-base sm:text-lg">Email</h4>
                    <p className="text-amber-800/80 text-sm sm:text-base">
                      <a href="mailto:info@beanandbite.ru" className="hover:text-amber-600 transition-colors duration-300">
                        info@beanandbite.ru
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:w-2/3">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-white/50 group">
              <div className="absolute inset-0 bg-gradient-conic from-amber-400/10 via-orange-400/10 to-yellow-400/10 rounded-2xl sm:rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div id="yandex-map" className="w-full h-full relative z-10"></div>
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/90 backdrop-blur-2xl rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg border-2 border-white/50 group-hover:border-amber-200/50 transition-all duration-300">
                <span className="text-amber-800 font-semibold text-xs sm:text-sm">Bean & Bite</span>
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
          50% { transform: translateY(-8px) rotate(1deg); }
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

        /* Disable heavy animations on small screens */
        @media (max-width: 640px) {
          .animate-spin-slow, .animate-reverse-spin, .animate-pulse-slow {
            animation: none;
          }
        }

        /* Ensure map is touch-friendly */
        #yandex-map {
          touch-action: pan-x pan-y;
        }
      `}</style>
    </section>
  );
};

export default Location;