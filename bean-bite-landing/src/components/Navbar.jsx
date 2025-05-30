// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Menu, X, Coffee, Sparkles, Star } from 'lucide-react';
import OrderModal from './OrderModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Отслеживаем движение мыши для интерактивных эффектов
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Улучшенное отслеживание скролла с плавными переходами
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setScrollY(currentScrollY);
          
          // Более плавный переход с постепенным изменением
          const scrollThreshold = 50;
          const newIsScrolled = currentScrollY > scrollThreshold;
          
          if (newIsScrolled !== isScrolled) {
            setIsScrolled(newIsScrolled);
          }
          
          // Определяем активную секцию
          const sections = ['hero', 'about', 'menu', 'testimonials', 'location'];
          const currentSection = sections.find(section => {
            const element = document.getElementById(section);
            if (!element) return false;
            const rect = element.getBoundingClientRect();
            return rect.top <= 150 && rect.bottom >= 150;
          }) || 'hero';
          
          if (currentSection !== activeSection) {
            setActiveSection(currentSection);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled, activeSection]);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  // Вычисляем прозрачность фона на основе скролла
  const getBackgroundOpacity = () => {
    const maxScroll = 100;
    const opacity = Math.min(scrollY / maxScroll, 1);
    return opacity;
  };

  // Вычисляем размытие на основе скролла
  const getBlurAmount = () => {
    const maxScroll = 80;
    const blur = Math.min((scrollY / maxScroll) * 20, 20);
    return blur;
  };

  const getNavItemClass = (sectionId) => {
    const baseClass = "relative font-bold text-sm uppercase tracking-wider transition-all duration-700 ease-out group cursor-pointer px-4 py-2 rounded-xl";
    const activeClass = activeSection === sectionId ? 
      "text-white bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg shadow-amber-500/30 scale-105" : 
      `${isScrolled ? 'text-amber-700 hover:text-amber-600 hover:bg-amber-50/80' : 'text-white/90 hover:text-white hover:bg-white/20'}`;
    
    return `${baseClass} ${activeClass}`;
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-1000 ease-out transform ${
          isScrolled ? 'translate-y-0' : 'translate-y-0'
        }`}
        style={{
          background: isScrolled 
            ? `linear-gradient(135deg, 
                rgba(254, 243, 199, ${0.95 * getBackgroundOpacity()}), 
                rgba(255, 237, 213, ${0.95 * getBackgroundOpacity()}), 
                rgba(254, 240, 138, ${0.95 * getBackgroundOpacity()}))` 
            : `linear-gradient(135deg, 
                rgba(0, 0, 0, 0.4), 
                rgba(120, 53, 15, 0.3), 
                rgba(180, 83, 9, 0.25), 
                rgba(217, 119, 6, 0.2))`,
          backdropFilter: `blur(${isScrolled ? getBlurAmount() : 15}px) saturate(1.5)`,
          WebkitBackdropFilter: `blur(${isScrolled ? getBlurAmount() : 15}px) saturate(1.5)`,
          boxShadow: isScrolled 
            ? `0 25px 50px -12px rgba(245, 158, 11, ${0.25 * getBackgroundOpacity()}), 
               0 0 0 1px rgba(245, 158, 11, ${0.1 * getBackgroundOpacity()})` 
            : `0 8px 32px rgba(0, 0, 0, 0.3), 
               0 1px 0 rgba(255, 255, 255, 0.1) inset`,
          borderBottom: isScrolled 
            ? `1px solid rgba(245, 158, 11, ${0.2 * getBackgroundOpacity()})` 
            : '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Интерактивный градиентный фон с плавным переходом */}
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-1000 ease-out"
          style={{
            background: isScrolled 
              ? `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, 
                  rgba(245,158,11,${0.15 * getBackgroundOpacity()}), 
                  transparent 70%)`
              : `radial-gradient(800px at ${mousePosition.x}px ${mousePosition.y}px, 
                  rgba(245,158,11,0.2), 
                  rgba(249,115,22,0.15), 
                  rgba(217,119,6,0.1), 
                  transparent 70%)`,
            opacity: 1
          }}
        />

        {/* Дополнительный декоративный слой для Hero-состояния */}
        {!isScrolled && (
          <div className="absolute inset-0 opacity-60 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-0 right-1/3 w-40 h-40 bg-gradient-to-br from-orange-400/15 to-yellow-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        )}

        <div className="container mx-auto px-6 py-4 relative z-10">
          <div className="flex justify-between items-center">
            {/* Улучшенный логотип с плавными переходами */}
            <div 
              className="flex items-center group cursor-pointer transition-all duration-700 ease-out hover:scale-105" 
              onClick={() => scrollTo('hero')}
            >
              <div 
                className={`relative p-3 rounded-2xl transition-all duration-700 ease-out group-hover:shadow-2xl group-hover:shadow-amber-500/50`}
                style={{
                  background: isScrolled 
                    ? `linear-gradient(135deg, 
                        rgba(251, 191, 36, ${getBackgroundOpacity()}), 
                        rgba(249, 115, 22, ${getBackgroundOpacity()}), 
                        rgba(250, 204, 21, ${getBackgroundOpacity()}))` 
                    : `linear-gradient(135deg, 
                        rgba(251, 191, 36, 0.9), 
                        rgba(249, 115, 22, 0.8), 
                        rgba(250, 204, 21, 0.7))`,
                  backdropFilter: `blur(${isScrolled ? getBlurAmount() / 2 : 10}px)`,
                  WebkitBackdropFilter: `blur(${isScrolled ? getBlurAmount() / 2 : 10}px)`,
                  border: isScrolled ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: isScrolled 
                    ? `0 20px 40px -10px rgba(245, 158, 11, ${0.4 * getBackgroundOpacity()})` 
                    : '0 20px 40px -10px rgba(245, 158, 11, 0.4)'
                }}
              >
                <Coffee 
                  className={`h-8 w-8 transition-all duration-700 ease-out group-hover:rotate-12 text-white`} 
                />
                <div className="absolute -top-1 -right-1 transition-all duration-700">
                  <Sparkles className="h-4 w-4 text-yellow-300 animate-pulse" />
                </div>
                {/* Орбитальные элементы с улучшенной анимацией */}
                <div className="absolute -top-2 -left-2 w-3 h-3 bg-amber-300 rounded-full transition-all duration-700 animate-bounce"></div>
                <div className="absolute -bottom-1 -right-2 w-2 h-2 bg-yellow-300 rounded-full transition-all duration-700 animate-pulse delay-500"></div>
              </div>
              <div className="ml-4">
                <span 
                  className={`block text-2xl font-black tracking-tight transition-all duration-700 ease-out group-hover:scale-110 ${
                    isScrolled 
                      ? 'bg-gradient-to-r from-amber-700 via-orange-600 to-yellow-600 bg-clip-text text-transparent' 
                      : 'text-white drop-shadow-2xl'
                  }`}
                >
                  Bean & Bite
                </span>
                <span 
                  className={`block text-xs font-medium transition-all duration-700 ease-out ${
                    isScrolled ? 'text-amber-600' : 'text-amber-200'
                  } opacity-80`}
                >
                  PREMIUM COFFEE EXPERIENCE
                </span>
              </div>
            </div>

            {/* Улучшенное десктопное меню */}
            <div 
              className={`hidden lg:flex items-center space-x-2 backdrop-blur-xl rounded-2xl px-6 py-3 border transition-all duration-700 ease-out`}
              style={{
                background: isScrolled 
                  ? `rgba(255, 255, 255, ${0.8 * getBackgroundOpacity()})` 
                  : 'rgba(255, 255, 255, 0.15)',
                borderColor: isScrolled 
                  ? `rgba(245, 158, 11, ${0.2 * getBackgroundOpacity()})` 
                  : 'rgba(255, 255, 255, 0.2)',
                boxShadow: isScrolled 
                  ? `0 20px 40px -10px rgba(245, 158, 11, ${0.2 * getBackgroundOpacity()})` 
                  : '0 8px 32px rgba(0, 0, 0, 0.2)'
              }}
            >
              {[
                { id: 'about', label: 'О нас' },
                { id: 'menu', label: 'Меню' },
                { id: 'testimonials', label: 'Отзывы' },
                { id: 'location', label: 'Контакты' }
              ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollTo(item.id)} 
                  className={getNavItemClass(item.id)}
                >
                  <span className="relative z-10">{item.label}</span>
                  {activeSection === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-xl -z-0 animate-pulse"></div>
                  )}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 group-hover:w-full transition-all duration-700 ease-out"></div>
                </button>
              ))}
            </div>

            {/* Улучшенная кнопка заказа */}
            <div className="hidden lg:block">
              <button 
                onClick={() => setIsOrderModalOpen(true)} 
                className="group relative px-8 py-4 font-bold text-white bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 rounded-2xl overflow-hidden transform hover:scale-110 hover:-rotate-1 transition-all duration-700 ease-out shadow-2xl hover:shadow-2xl hover:shadow-amber-500/60"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0 bg-white/20 group-hover:animate-pulse"></div>
                <span className="relative z-10 flex items-center gap-2">
                  <Star className="w-5 h-5 group-hover:rotate-180 transition-transform duration-700" />
                  ЗАКАЗАТЬ СЕЙЧАС
                  <Sparkles className="w-4 h-4 group-hover:animate-spin" />
                </span>
                {/* Парящие частицы */}
                <div className="absolute top-1 left-4 w-1.5 h-1.5 bg-white/60 rounded-full group-hover:animate-ping"></div>
                <div className="absolute bottom-1 right-6 w-1 h-1 bg-white/80 rounded-full group-hover:animate-bounce"></div>
              </button>
            </div>

            {/* Улучшенная кнопка мобильного меню */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className={`relative p-3 rounded-xl hover:scale-110 transition-all duration-700 ease-out`}
                style={{
                  background: isScrolled 
                    ? `linear-gradient(135deg, 
                        rgba(254, 243, 199, ${getBackgroundOpacity()}), 
                        rgba(255, 237, 213, ${getBackgroundOpacity()}))` 
                    : 'rgba(255, 255, 255, 0.2)',
                  color: isScrolled ? '#b45309' : 'white',
                  backdropFilter: `blur(${isScrolled ? getBlurAmount() / 2 : 10}px)`,
                  WebkitBackdropFilter: `blur(${isScrolled ? getBlurAmount() / 2 : 10}px)`,
                  border: isScrolled ? 'none' : '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: isScrolled 
                    ? `0 10px 20px -5px rgba(245, 158, 11, ${0.3 * getBackgroundOpacity()})` 
                    : '0 8px 20px rgba(0, 0, 0, 0.2)'
                }}
              >
                <div className="relative z-10">
                  {isOpen ? <X size={24} className="animate-spin" /> : <Menu size={24} />}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Мобильное меню остается без изменений */}
        <div 
          className={`lg:hidden fixed top-0 right-0 h-full w-full max-w-sm bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50/90 backdrop-blur-2xl shadow-2xl z-50 transition-all duration-700 ease-out transform ${
            isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          } pt-20 overflow-hidden border-l border-amber-200/50`}
        >
          {/* Декоративный фон */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 right-10 w-32 h-32 bg-amber-300 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-orange-300 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-yellow-300 rounded-full blur-3xl"></div>
          </div>

          <button
            className="absolute top-6 right-6 p-3 rounded-2xl bg-white/90 text-amber-600 hover:bg-amber-100 hover:rotate-90 transition-all duration-700 shadow-lg shadow-amber-500/30"
            onClick={() => setIsOpen(false)}
          >
            <X size={20} />
          </button>
          
          <div className="relative z-10 flex flex-col mt-8">
            {[
              { id: 'about', label: 'О нас', icon: '🏪' },
              { id: 'menu', label: 'Меню', icon: '☕' },
              { id: 'testimonials', label: 'Отзывы', icon: '💬' },
              { id: 'gallery', label: 'Галерея', icon: '📸' },
              { id: 'location', label: 'Контакты', icon: '📍' }
            ].map((item, index) => (
              <button 
                key={item.id}
                onClick={() => scrollTo(item.id)} 
                className={`group flex items-center py-4 px-6 mx-4 mb-3 rounded-2xl font-bold transition-all duration-700 ease-out transform hover:scale-105 ${
                  activeSection === item.id 
                    ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-white shadow-xl shadow-amber-500/40' 
                    : 'text-amber-700 hover:bg-white/80 hover:shadow-lg hover:shadow-amber-500/20 bg-white/60 backdrop-blur-sm'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-2xl mr-4 group-hover:scale-125 transition-transform duration-700">{item.icon}</span>
                <span className="text-lg">{item.label}</span>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            ))}
            
            {/* Мобильная кнопка заказа */}
            <div className="mt-8 px-6">
              <button 
                onClick={() => {
                  setIsOpen(false);
                  setIsOrderModalOpen(true);
                }} 
                className="w-full py-4 text-white font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 hover:from-amber-600 hover:to-orange-600 rounded-2xl transition-all duration-700 shadow-2xl hover:shadow-2xl hover:shadow-amber-500/50 transform hover:scale-105 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Star className="w-5 h-5 animate-spin" />
                  ЗАКАЗАТЬ КОФЕ
                  <Sparkles className="w-4 h-4" />
                </span>
              </button>
            </div>
            
            {/* Контактная информация */}
            <div className="mt-8 px-6 py-6 bg-white/80 backdrop-blur-sm rounded-2xl mx-4 border border-amber-200/50 shadow-lg shadow-amber-500/20">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full mr-3 animate-pulse"></div>
                <p className="text-sm font-medium text-amber-800">Работаем: 8:00 - 22:00</p>
              </div>
              <p className="text-lg font-bold text-amber-700 mb-4">+7 (343) 123-45-67</p>
              
              {/* Социальные сети */}
              <div className="flex space-x-3">
                {['instagram', 'facebook', 'telegram'].map((social, index) => (
                  <a 
                    key={social}
                    href="#" 
                    className="p-3 rounded-xl bg-gradient-to-br from-amber-400 to-orange-400 text-white hover:from-amber-500 hover:to-orange-500 transition-all duration-700 transform hover:scale-110 hover:-rotate-12 shadow-lg shadow-amber-500/30"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-5 h-5 bg-white/20 rounded"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Стильное затемнение */}
        {isOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-gradient-to-br from-black/60 via-amber-900/20 to-black/60 z-40 transition-all duration-700 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </nav>

      <OrderModal 
        isOpen={isOrderModalOpen} 
        onClose={() => setIsOrderModalOpen(false)} 
      />

      {/* Дополнительные стили для анимаций */}
      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slideIn {
          animation: slideInFromRight 0.6s ease-out forwards;
        }
        
        /* Дополнительные стили для плавности */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .transition-all {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </>
  );
};

export default Navbar;