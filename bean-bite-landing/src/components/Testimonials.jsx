import { useState, useEffect, useMemo, useCallback } from 'react';
import { Star, Quote, Heart, Coffee, Sparkles, Crown, Award, ChevronLeft, ChevronRight, Users, MessageCircle, Flame, ThumbsUp, MapPin, Clock, Diamond } from 'lucide-react';

// Данные отзывов остаются без изменений
const testimonialData = [
  {
    id: 1,
    name: "Анна Петрова",
    text: "Невероятное место! Кофе здесь - это настоящее искусство. Каждый глоток - удовольствие!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    location: "Москва",
    date: "2 дня назад"
  },
  {
    id: 2,
    name: "Михаил Соколов",
    text: "Атмосфера потрясающая, персонал супер дружелюбный. Выпечка просто тает во рту!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    location: "Санкт-Петербург",
    date: "1 неделю назад"
  },
  {
    id: 3,
    name: "Елена Морозова",
    text: "Лучшие круассаны в городе! И чай такой ароматный - будто в Париже побывала.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    location: "Екатеринбург",
    date: "3 дня назад"
  },
  {
    id: 4,
    name: "Дмитрий Волков",
    text: "Работаю здесь удаленно каждую неделю. Wifi отличный, кофе еще лучше!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    location: "Новосибирск",
    date: "5 дней назад"
  },
  {
    id: 5,
    name: "Ольга Кузнецова",
    text: "Идеальное место для свиданий! Романтично, уютно и очень вкусно.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    location: "Казань",
    date: "1 день назад"
  }
];

const TestimonialCard = ({ testimonial }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = useCallback(() => {
    setIsLiked(prev => !prev);
  }, []);

  return (
    <div className="h-full" >
      <div className="relative bg-white/80 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-white/50 hover:shadow-3xl hover:border-amber-200/50 transition-all duration-700 transform hover:-translate-y-2 hover:scale-102 flex flex-col group min-h-[420px] sm:min-h-[450px] will-change-transform">
        <div className="absolute inset-0 bg-gradient-conic from-amber-400/10 via-orange-400/10 to-yellow-400/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-110"></div>
        <div className="absolute -top-2 -right-2 w-1.5 h-1.5 bg-amber-400/60 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-orange-400/50 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300"></div>

        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-1 bg-gradient-conic from-amber-400 via-orange-500 to-yellow-400 rounded-full opacity-50 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-3 border-white shadow-lg"
                loading="lazy"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full border-2 border-white shadow-md">
                <div className="w-full h-full bg-green-400 rounded-full animate-ping opacity-75"></div>
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="font-bold text-amber-800 text-base sm:text-lg truncate">{testimonial.name}</h4>
              <div className="flex items-center gap-2 text-sm text-amber-700/80 mt-1">
                <MapPin className="w-3 h-3 text-amber-600 flex-shrink-0" />
                <span className="truncate">{testimonial.location}</span>
              </div>
            </div>
          </div>
          <button
            onClick={handleLikeClick}
            className={`relative p-2 rounded-full transition-all duration-500 group-hover:scale-110 transform ${
              isLiked ? 'bg-gradient-to-r from-red-500 to-pink-500 scale-110' : 'bg-white/90 hover:bg-amber-100/50'
            }`}
          >
            <Heart
              className={`w-5 h-5 transition-all duration-300 ${
                isLiked ? 'text-white fill-white scale-110' : 'text-amber-600 hover:text-red-500'
              }`}
            />
            {isLiked && <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>}
          </button>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, starIndex) => (
              <Star
                key={starIndex}
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 ${
                  starIndex < testimonial.rating ? 'text-yellow-500 fill-yellow-500 scale-110' : 'text-amber-200'
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-amber-800 bg-amber-100/80 px-2 py-1 rounded-full">{testimonial.rating}.0</span>
        </div>

        <div className="flex-1 relative mb-6">
          <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-conic from-amber-400 to-orange-400 rounded-full flex items-center justify-center opacity-30">
            <Quote className="w-4 h-4 text-white" />
          </div>
          <blockquote className="text-amber-800 text-base sm:text-lg leading-relaxed italic font-medium relative z-10">"{testimonial.text}"</blockquote>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-amber-100/50 mt-auto">
          <div className="flex items-center gap-2 text-sm text-amber-700/80">
            <Clock className="w-4 h-4 text-amber-600" />
            <span>{testimonial.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <ThumbsUp className="w-4 h-4 text-green-500" />
            <span className="text-sm font-semibold text-green-600">Рекомендует</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const slideConfig = useMemo(() => ({
    mobile: 1,
    tablet: 2,
    desktop: 3
  }), []);

  const handleResize = useCallback(() => {
    const width = window.innerWidth;
    if (width < 640) {
      setSlidesToShow(slideConfig.mobile);
    } else if (width < 1024) {
      setSlidesToShow(slideConfig.tablet);
    } else {
      setSlidesToShow(slideConfig.desktop);
    }
  }, [slideConfig]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  const maxSlide = Math.max(0, testimonialData.length - slidesToShow);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev >= maxSlide ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, maxSlide]);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev >= maxSlide ? 0 : prev + 1));
  }, [maxSlide]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev <= 0 ? maxSlide : prev - 1));
  }, [maxSlide]);

  const stopAutoPlay = useCallback(() => setIsAutoPlaying(false), []);
  const startAutoPlay = useCallback(() => setIsAutoPlaying(true), []);

  return (
    <section id='testimonials' className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-100/30 via-orange-100/20 to-yellow-100/30"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-conic from-amber-400 via-orange-500 to-yellow-400 rounded-full blur-3xl opacity-20 animate-spin-slow"></div>
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-conic from-pink-400 via-red-500 to-orange-400 rounded-full blur-3xl opacity-15 animate-reverse-spin"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-yellow-400/30 to-transparent rounded-full animate-pulse-slow"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/60 rounded-full animate-float-1"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-orange-500/50 rounded-full animate-float-2"></div>
          <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-yellow-400/70 rounded-full animate-float-3"></div>
          <div className="absolute top-1/3 right-1/3 w-2.5 h-2.5 bg-pink-400/40 rounded-full animate-float-4"></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-red-400/50 rounded-full animate-float-5"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="mb-8 sm:mb-10 animate-float-gentle">
            <div className="inline-flex items-center gap-4 group">
              <div className="relative">
                <span className="inline-flex items-center gap-3 text-amber-800 text-lg sm:text-xl font-bold tracking-wider px-10 py-5 border-3 border-amber-400/50 rounded-full backdrop-blur-2xl bg-gradient-to-r from-white/80 to-amber-100/80 shadow-2xl shadow-amber-500/30 hover:scale-110 transition-all duration-700 group-hover:shadow-amber-500/50">
                  <div className="relative">
                    <MessageCircle className="w-6 h-6 text-amber-600 group-hover:rotate-180 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-amber-400/30 rounded-full animate-ping"></div>
                  </div>
                  ОТЗЫВЫ
                  <div className="relative">
                    <Heart className="w-6 h-6 text-red-600 animate-pulse group-hover:animate-spin" />
                    <div className="absolute inset-0 bg-yellow-400/20 rounded-full animate-pulse delay-300"></div>
                  </div>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-orange-400/20 to-yellow-400/20 rounded-full blur-xl group-hover:animate-pulse"></div>
              </div>
            </div>
          </div>

          <div className="relative">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 leading-none">
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-amber-800 via-orange-700 to-yellow-700 bg-clip-text text-transparent drop-shadow-2xl">Что говорят о нас</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              </span>
            </h2>
            <div className="flex justify-center mb-8">
              <div className="relative w-32 h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
              </div>
            </div>
            <p className="text-xl sm:text-2xl lg:text-3xl text-amber-900/80 max-w-4xl mx-auto leading-relaxed font-light mb-10">
              Более 1000+ довольных гостей уже оценили наш сервис и атмосферу
            </p>
          </div>

          <div className="flex justify-center items-center gap-4 sm:gap-6 lg:gap-8 flex-wrap">
            {[
              { icon: Users, value: "1000+", label: "Гостей" },
              { icon: Star, value: "4.9", label: "Рейтинг", iconClass: "text-yellow-500 fill-yellow-500" },
              { icon: Award, value: "98%", label: "Довольных", iconClass: "text-green-600" }
            ].map((stat, index) => (
              <div key={index} className="relative bg-white/90 backdrop-blur-2xl rounded-xl px-4 sm:px-6 py-3 sm:py-4 shadow-2xl border-2 border-white/50 group">
                <div className="absolute inset-0 bg-gradient-conic from-amber-400/10 via-orange-400/10 to-yellow-400/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="flex items-center gap-2 sm:gap-3 relative z-10">
                  <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.iconClass || 'text-amber-600'}`} />
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-amber-800">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-amber-600">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="hidden lg:flex absolute inset-y-0 left-0 right-0 items-center justify-between pointer-events-none z-20">
            <button
              onClick={prevSlide}
              onMouseEnter={stopAutoPlay}
              onMouseLeave={startAutoPlay}
              className="pointer-events-auto -ml-6 bg-white/90 backdrop-blur-2xl rounded-full p-4 shadow-2xl border-2 border-white/50 hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 hover:shadow-3xl transition-all duration-700 group"
            >
              <ChevronLeft className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors duration-200" />
            </button>
            <button
              onClick={nextSlide}
              onMouseEnter={stopAutoPlay}
              onMouseLeave={startAutoPlay}
              className="pointer-events-auto -mr-6 bg-white/90 backdrop-blur-2xl rounded-full p-4 shadow-2xl border-2 border-white/50 hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 hover:shadow-3xl transition-all duration-700 group"
            >
              <ChevronRight className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors duration-200" />
            </button>
          </div>

          {/* Исправленный контейнер слайдера */}
          <div
            className="rounded-2xl"
            onMouseEnter={stopAutoPlay}
            onMouseLeave={startAutoPlay}
          >
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${(currentSlide / slidesToShow) * 100}%)`,
              }}
            >
              {testimonialData.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="px-3 sm:px-4 flex-shrink-0 flex"
                  style={{ width: `${100 / slidesToShow}%` }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 sm:mt-12 gap-3">
            {Array.from({ length: maxSlide + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-500 rounded-full border-2 ${
                  currentSlide === index
                    ? 'w-12 h-3 bg-gradient-to-r from-amber-500 to-orange-500 border-amber-400 shadow-lg'
                    : 'w-3 h-3 bg-amber-200/50 border-amber-200 hover:bg-amber-300 hover:border-amber-300 hover:scale-125'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex lg:hidden justify-center mt-6 sm:mt-8 gap-4">
          <button
            onClick={prevSlide}
            className="bg-white/90 backdrop-blur-2xl rounded-full p-3 shadow-2xl border-2 border-white/50 hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 hover:shadow-3xl transition-all duration-700 group"
          >
            <ChevronLeft className="w-5 h-5 text-amber-600 group-hover:text-white transition-colors duration-200" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white/90 backdrop-blur-2xl rounded-full p-3 shadow-2xl border-2 border-white/50 hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 hover:shadow-3xl transition-all duration-700 group"
          >
            <ChevronRight className="w-5 h-5 text-amber-600 group-hover:text-white transition-colors duration-200" />
          </button>
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
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-30px) rotate(180deg) scale(1.5); }
        }
        @keyframes float-4 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(15px, 20px) rotate(45deg); }
        }
        @keyframes float-5 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          50% { transform: translate(-10px, -15px) scale(1.3) rotate(90deg); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-reverse-spin { animation: reverse-spin 12s linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-float-gentle { animation: float-gentle 6s ease-in-out infinite; }
        .animate-float-1 { animation: float-1 8s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 6s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 10s ease-in-out infinite; }
        .animate-float-4 { animation: float-4 7s ease-in-out infinite; }
        .animate-float-5 { animation: float-5 9s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 2s ease-in-out infinite; }
        .border-3 { border-width: 3px; }
        .bg-gradient-conic { background: conic-gradient(var(--tw-gradient-stops)); }
        .bg-gradient-radial { background: radial-gradient(var(--tw-gradient-stops)); }
        .shadow-3xl { box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25); }
        .hover\\:scale-102:hover { transform: scale(1.02); }
        .will-change-transform { will-change: transform, opacity; }
      `}</style>
    </section>
  );
};

export default Testimonials;