// src/components/Hero.jsx
import { useState, useEffect } from 'react';
import Button from './Button';
import OrderModal from './OrderModal';
import { Sparkles, Star, Coffee, Heart } from 'lucide-react';

const Hero = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Контролируем эффект параллакса при скролле
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      
      if (window.scrollY > 150) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Отслеживаем движение мыши для интерактивных эффектов
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div 
        id="hero" 
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Фоновые изображения с параллакс-эффектом */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollPosition * 0.4}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        ></div>
        
        {/* Улучшенный тонированный оверлей с градиентом в стиле меню */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-amber-900/60 to-orange-900/50"></div>
        
        {/* Интерактивный градиентный фон от мыши */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background: `radial-gradient(800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(245,158,11,0.6), rgba(249,115,22,0.4), transparent 70%)`
          }}
        />
        
        {/* Декоративные элементы в стиле меню */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-10 w-48 h-48 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        {/* Основной контент */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          {/* Элегантный бейдж */}
          <div className="mb-8 sm:mb-10">
            <span className="inline-flex items-center gap-3 text-amber-200 text-base sm:text-lg lg:text-xl font-semibold tracking-widest mb-4 px-6 sm:px-8 py-3 sm:py-4 border-2 border-amber-300/40 rounded-full backdrop-blur-xl bg-gradient-to-r from-white/10 to-amber-500/20 shadow-2xl shadow-amber-500/30 hover:scale-105 transition-all duration-500 group">
              <Coffee className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300 group-hover:rotate-12 transition-transform duration-500" />
              КАФЕ & КОНДИТЕРСКАЯ
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 animate-pulse" />
            </span>
          </div>
          
          {/* Главный заголовок с улучшенной типографикой */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-6 sm:mb-8 tracking-tight leading-none">
            <span className="block transform transition-all hover:scale-105 duration-500 drop-shadow-2xl relative">
              Bean 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-yellow-400 animate-pulse mx-2 sm:mx-4">
                &
              </span> 
              Bite
              {/* Декоративные элементы */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 animate-spin" />
              </div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4">
                <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-amber-400 animate-bounce" />
              </div>
            </span>
          </h1>
          
          {/* Подзаголовок */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 mb-8 sm:mb-12 lg:mb-16 max-w-4xl mx-auto leading-relaxed drop-shadow-xl font-light">
            Лучшее утро начинается с Bean & Bite — кафе, где каждый напиток и десерт создан с 
            <span className="text-amber-300 font-semibold"> любовью </span>
            и 
            <span className="text-orange-300 font-semibold"> вдохновением</span>
          </p>
          
          {/* Улучшенные кнопки в стиле navbar */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8">
            <Button 
              onClick={scrollToMenu} 
              variant="primary"
              className="group relative px-8 sm:px-10 lg:px-12 py-4 sm:py-5 text-base sm:text-lg lg:text-xl font-bold text-white bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 hover:from-amber-600 hover:via-orange-600 hover:to-yellow-600 rounded-2xl transform hover:scale-110 hover:-rotate-1 transition-all duration-500 shadow-2xl hover:shadow-2xl hover:shadow-amber-500/60 overflow-hidden w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-white/20 group-hover:animate-pulse"></div>
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Coffee className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-180 transition-transform duration-700" />
                Посмотреть меню
                <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              {/* Парящие частицы */}
              <div className="absolute top-1 left-4 w-1.5 h-1.5 bg-white/60 rounded-full group-hover:animate-ping"></div>
              <div className="absolute bottom-1 right-6 w-1 h-1 bg-white/80 rounded-full group-hover:animate-bounce"></div>
            </Button>
            
            <Button 
              onClick={() => setIsOrderModalOpen(true)} 
              variant="secondary"
              className="group relative px-8 sm:px-10 lg:px-12 py-4 sm:py-5 text-base sm:text-lg lg:text-xl font-bold text-white border-2 border-white/60 hover:border-amber-300 hover:bg-gradient-to-r hover:from-amber-500/20 hover:to-orange-500/20 rounded-2xl transform hover:scale-110 transition-all duration-500 backdrop-blur-xl bg-white/10 shadow-xl hover:shadow-2xl hover:shadow-white/30 w-full sm:w-auto overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-180 transition-transform duration-700" />
                Сделать заказ
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-spin" />
              </span>
            </Button>
          </div>

          {/* Дополнительная информация */}
          <div className="mt-12 sm:mt-16 lg:mt-20">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-12 text-white/80">
              <div className="flex items-center gap-3 group cursor-pointer hover:text-amber-300 transition-colors duration-300">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm sm:text-base font-medium">Открыто: 8:00 - 22:00</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30"></div>
              <div className="flex items-center gap-3 group cursor-pointer hover:text-amber-300 transition-colors duration-300">
                <Coffee className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base font-medium">Свежий кофе каждый день</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30"></div>
              <div className="flex items-center gap-3 group cursor-pointer hover:text-amber-300 transition-colors duration-300">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base font-medium">Сделано с любовью</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Элегантный скролл-индикатор */}
        {showScrollIndicator && (
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <div 
              onClick={scrollToMenu}
              className="flex flex-col items-center cursor-pointer group"
            >
              {/* Вертикальная линия */}
              <div className="w-px h-12 sm:h-16 bg-gradient-to-b from-transparent via-white/60 to-transparent mb-4"></div>
              
              {/* Анимированная стрелка */}
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-white/60 rounded-full flex items-center justify-center group-hover:border-amber-300 transition-all duration-300 bg-white/10 backdrop-blur-sm group-hover:bg-amber-500/20">
                  <svg 
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white/80 group-hover:text-amber-300 transition-colors duration-300 animate-bounce" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                
                {/* Пульсирующий эффект */}
                <div className="absolute inset-0 w-10 h-10 sm:w-12 sm:h-12 border-2 border-white/30 rounded-full animate-ping"></div>
              </div>
              
              {/* Текст подсказки */}
              <span className="text-xs sm:text-sm text-white/60 mt-3 font-light tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                ПРОКРУТИТЬ
              </span>
            </div>
          </div>
        )}
        
        {/* Дополнительные декоративные частицы */}
        <div className="absolute top-1/4 left-4 sm:left-10 w-2 h-2 bg-amber-400/60 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-8 sm:right-16 w-1 h-1 bg-white/60 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-amber-300/50 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-orange-400/60 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/6 right-1/4 w-2 h-2 bg-yellow-400/50 rounded-full animate-bounce delay-300"></div>
      </div>

      {/* OrderModal компонент */}
      <OrderModal 
        isOpen={isOrderModalOpen} 
        onClose={() => setIsOrderModalOpen(false)} 
      />

      {/* Дополнительные стили для анимаций */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default Hero;