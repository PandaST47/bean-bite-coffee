import { Coffee, Instagram, Facebook, Twitter, MapPin, Phone, Mail, Clock, Sparkles } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 text-amber-900 pt-16 pb-8 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-100/30 via-orange-100/20 to-yellow-100/30"></div>
        <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-conic from-amber-400 via-orange-500 to-yellow-400 rounded-full blur-3xl opacity-20 animate-spin-slow"></div>
        <div className="absolute bottom-20 right-12 w-64 h-64 bg-gradient-conic from-pink-400 via-red-500 to-orange-400 rounded-full blur-3xl opacity-15 animate-reverse-spin"></div>
        <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-amber-400/60 rounded-full animate-float-1"></div>
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-orange-500/50 rounded-full animate-float-2"></div>
        <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-yellow-400/70 rounded-full animate-float-3"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="relative bg-white/80 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border-2 border-white/50 hover:shadow-3xl hover:border-amber-200/50 transition-all duration-700 transform hover:-translate-y-2 group">
            <div className="absolute inset-0 bg-gradient-conic from-amber-400/10 via-orange-400/10 to-yellow-400/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="flex items-center mb-6 relative z-10">
              <div className="relative mr-3">
                <Coffee className="h-8 w-8 text-amber-600" />
                <div className="absolute inset-0 bg-amber-400/30 rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold text-amber-800 bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">Bean & Bite</span>
            </div>
            <p className="mb-6 text-amber-700 leading-relaxed font-medium">
              Крафтовое зерно, уютная атмосфера, только натуральная выпечка. Сделайте свой день ярче с Bean & Bite.
            </p>
            <div className="flex space-x-4">
              {[
                { href: "https://instagram.com", Icon: Instagram, label: "Наш Instagram" },
                { href: "https://facebook.com", Icon: Facebook, label: "Наш Facebook" },
                { href: "https://twitter.com", Icon: Twitter, label: "Наш Twitter" }
              ].map(({ href, Icon, label }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative bg-white/90 p-2 rounded-full border-2 border-amber-200/50 hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 transition-all duration-500 group/icon"
                  aria-label={label}
                >
                  <Icon size={20} className="text-amber-600 group-hover/icon:text-white transition-colors duration-300" />
                  <div className="absolute inset-0 bg-yellow-400/20 rounded-full animate-ping opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div className="relative bg-white/80 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border-2 border-white/50 hover:shadow-3xl hover:border-amber-200/50 transition-all duration-700 transform hover:-translate-y-2 group">
            <div className="absolute inset-0 bg-gradient-conic from-amber-400/10 via-orange-400/10 to-yellow-400/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <h3 className="text-lg font-bold mb-6 text-amber-800 bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent relative z-10">Быстрые ссылки</h3>
            <ul className="space-y-4 relative z-10">
              {[
                { href: "#about", text: "О нас" },
                { href: "#menu", text: "Меню" },
                { href: "#testimonials", text: "Отзывы" },
                { href: "#location", text: "Локация" }
              ].map(({ href, text }, index) => (
                <li key={index}>
                  <a
                    href={href}
                    className="flex items-center text-amber-700 hover:text-amber-900 transition-colors duration-300 group/link"
                  >
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2 group-hover/link:animate-ping"></span>
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="relative bg-white/80 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border-2 border-white/50 hover:shadow-3xl hover:border-amber-200/50 transition-all duration-700 transform hover:-translate-y-2 group">
            <div className="absolute inset-0 bg-gradient-conic from-amber-400/10 via-orange-400/10 to-yellow-400/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <h3 className="text-lg font-bold mb-6 text-amber-800 bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent relative z-10">Контактная информация</h3>
            <ul className="space-y-4 relative z-10">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-amber-700">
                  ул. Ленина, 24, Екатеринбург, Россия, 620014
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0" />
                <a
                  href="tel:+73431234567"
                  className="text-amber-700 hover:text-amber-900 transition-colors duration-300"
                >
                  +7 (343) 123-45-67
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@beanandbite.ru"
                  className="text-amber-700 hover:text-amber-900 transition-colors duration-300"
                >
                  info@beanandbite.ru
                </a>
              </li>
            </ul>
          </div>

          {/* Hours Column */}
          <div className="relative bg-white/80 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border-2 border-white/50 hover:shadow-3xl hover:border-amber-200/50 transition-all duration-700 transform hover:-translate-y-2 group">
            <div className="absolute inset-0 bg-gradient-conic from-amber-400/10 via-orange-400/10 to-yellow-400/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <h3 className="text-lg font-bold mb-6 text-amber-800 bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent relative z-10">Время работы</h3>
            <ul className="space-y-4 relative z-10">
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-amber-800 font-medium">Понедельник - Пятница</p>
                  <p className="text-amber-700">7:00 - 21:00</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-amber-800 font-medium">Суббота - Воскресенье</p>
                  <p className="text-amber-700">8:00 - 22:00</p>
                </div>
              </li>
            </ul>
            <div className="mt-6 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-lg p-4 relative group/preorder">
              <div className="absolute inset-0 bg-gradient-conic from-amber-400/10 via-orange-400/10 to-yellow-400/10 rounded-lg blur-xl opacity-0 group-hover/preorder:opacity-100 transition-opacity duration-500"></div>
              <p className="text-amber-800 font-medium relative z-10">Предзаказ</p>
              <p className="text-amber-700 text-sm relative z-10">
                Вы можете сделать предзаказ на вынос или доставку, позвонив нам за 30 минут до визита
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="relative bg-white/90 backdrop-blur-2xl rounded-3xl py-8 px-6 md:px-10 mb-12 shadow-2xl border-2 border-white/50 hover:shadow-3xl hover:border-amber-200/50 transition-all duration-700 group">
          <div className="absolute inset-0 bg-gradient-conic from-amber-400/10 via-orange-400/10 to-yellow-400/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="flex flex-col md:flex-row md:items-center justify-between relative z-10">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-lg font-bold text-amber-800 mb-2 bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">Подпишитесь на нашу рассылку</h3>
              <p className="text-amber-700">
                Получайте новости о специальных предложениях и сезонных новинках
              </p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="bg-white/80 text-amber-900 placeholder-amber-600 rounded-l-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 w-full md:w-64 border-2 border-amber-200/50"
                  aria-label="Email для подписки"
                />
                <button
                  type="button"
                  className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-r-lg px-6 py-3 font-medium hover:from-amber-600 hover:to-orange-600 transition-all duration-300 group/button"
                >
                  Подписаться
                  <Sparkles className="inline-block w-4 h-4 ml-2 group-hover/button:animate-pulse" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Policy Links */}
        <div className="pt-8 border-t border-amber-200/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-amber-700 text-sm mb-4 md:mb-0 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            © {currentYear} Bean & Bite Coffee. Все права защищены.
          </p>
          <div className="flex flex-wrap justify-center space-x-4 text-sm">
            {[
              { href: "#", text: "Политика конфиденциальности" },
              { href: "#", text: "Условия использования" },
              { href: "#", text: "Карта сайта" }
            ].map(({ href, text }, index) => (
              <a
                key={index}
                href={href}
                className="text-amber-700 hover:text-amber-900 transition-colors duration-300 group/link"
              >
                {text}
                <span className="block w-0 group-hover/link:w-full h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300"></span>
              </a>
            ))}
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
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(10px, -15px) rotate(90deg); }
          50% { transform: translate(-5px, -25px) rotate(180deg); }
          75% { transform: translate(-15px, -10px) rotate(270deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-20px, 15px) scale(1.2); }
          66% { transform: translate(25px, -10px) scale(0.8); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotate-0deg scale(1); }
          50% { transform: translateY(-30px) rotate(180deg) scale(1.5); }
        }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-reverse-spin { animation: reverse-spin 12s linear infinite; }
        .animate-float-1 { animation: float-1 8s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 6s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 10s ease-in-out infinite; }
        .bg-gradient-conic { background: conic-gradient(var(--tw-gradient-stops)); }
        .shadow-3xl { box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25); }
        .hover\\:scale-102:hover { transform: scale(1.02); }
      `}</style>
    </footer>
  );
};

export default Footer;