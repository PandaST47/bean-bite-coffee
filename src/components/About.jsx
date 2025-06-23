// src/components/About.jsx
import { Coffee, Heart, Leaf, Clock, Award, Users, Star, Sparkles, Crown, Zap, ArrowRight, Eye, Flame, Diamond } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Coffee className="w-10 h-10 text-amber-600" />,
      title: "Крафтовое зерно",
      description: "Отборные сорта кофе со всего мира, обжаренные с любовью для раскрытия полного потенциала вкуса",
      gradient: "from-amber-500 to-orange-500",
      accent: "amber"
    },
    {
      icon: <Heart className="w-10 h-10 text-pink-600" />,
      title: "Уютная атмосфера",
      description: "Теплое место, где каждый гость чувствует себя как дома, а время останавливается",
      gradient: "from-pink-500 to-red-500",
      accent: "pink"
    },
    {
      icon: <Leaf className="w-10 h-10 text-green-600" />,
      title: "Натуральная выпечка",
      description: "Свежая выпечка каждое утро по авторским рецептам наших кондитеров",
      gradient: "from-green-500 to-emerald-500",
      accent: "green"
    }
  ];

  const stats = [
    { 
      number: "500+", 
      label: "Довольных гостей ежедневно",
      icon: <Users className="w-8 h-8 text-amber-600" />,
      color: "amber"
    },
    { 
      number: "15", 
      label: "Сортов кофе со всего мира",
      icon: <Coffee className="w-8 h-8 text-orange-600" />,
      color: "orange"
    },
    { 
      number: "3", 
      label: "Года заботы о качестве",
      icon: <Award className="w-8 h-8 text-yellow-600" />,
      color: "yellow"
    }
  ];

  const achievements = [
    { text: "Лучшая кофейня города 2023", icon: <Crown className="w-6 h-6" />, color: "from-yellow-400 to-amber-500" },
    { text: "100% натуральные ингредиенты", icon: <Leaf className="w-6 h-6" />, color: "from-green-400 to-emerald-500" },
    { text: "Собственная обжарка", icon: <Zap className="w-6 h-6" />, color: "from-orange-400 to-red-500" }
  ];

  return (
    <section id="about" className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
      {/* Революционный фон с анимированными слоями */}
      <div className="absolute inset-0">
        {/* Базовые gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-100/30 via-orange-100/20 to-yellow-100/30"></div>
        
        {/* Анимированные орбы */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-conic from-amber-400 via-orange-500 to-yellow-400 rounded-full blur-3xl opacity-20 animate-spin-slow"></div>
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-conic from-pink-400 via-red-500 to-orange-400 rounded-full blur-3xl opacity-15 animate-reverse-spin"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-yellow-400/30 to-transparent rounded-full animate-pulse-slow"></div>
        
        {/* Летающие частицы */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/60 rounded-full animate-float-1"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-orange-500/50 rounded-full animate-float-2"></div>
          <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-yellow-400/70 rounded-full animate-float-3"></div>
          <div className="absolute top-1/3 right-1/3 w-2.5 h-2.5 bg-pink-400/40 rounded-full animate-float-4"></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-red-400/50 rounded-full animate-float-5"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Центрированный заголовок с мега-эффектом */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          {/* Floating badge */}
          <div className="mb-8 sm:mb-10 animate-float-gentle">
            <div className="inline-flex items-center gap-4 group">
              <div className="relative">
                <span className="inline-flex items-center gap-3 text-amber-800 text-lg sm:text-xl font-bold tracking-wider px-10 py-5 border-3 border-amber-400/50 rounded-full backdrop-blur-2xl bg-gradient-to-r from-white/80 to-amber-100/80 shadow-2xl shadow-amber-500/30 hover:scale-110 transition-all duration-700 group-hover:shadow-amber-500/50">
                  <div className="relative">
                    <Coffee className="w-6 h-6 text-amber-600 group-hover:rotate-180 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-amber-400/30 rounded-full animate-ping"></div>
                  </div>
                  НАША ИСТОРИЯ
                  <div className="relative">
                    <Sparkles className="w-6 h-6 text-yellow-600 animate-pulse group-hover:animate-spin" />
                    <div className="absolute inset-0 bg-yellow-400/20 rounded-full animate-pulse delay-300"></div>
                  </div>
                </span>
                {/* Магический ореол */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-orange-400/20 to-yellow-400/20 rounded-full blur-xl group-hover:animate-pulse"></div>
              </div>
            </div>
          </div>
          
          {/* Мега заголовок */}
          <div className="relative">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 leading-none">
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-amber-800 via-orange-700 to-yellow-700 bg-clip-text text-transparent drop-shadow-2xl">
                  О нас
                </span>
                {/* Подсветка текста */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              </span>
            </h2>
            
            {/* Анимированная линия */}
            <div className="flex justify-center mb-8">
              <div className="relative w-32 h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
              </div>
            </div>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-amber-900/80 max-w-4xl mx-auto leading-relaxed font-light mb-10">
              Место, где рождается настоящая кофейная культура и каждый день становится особенным
            </p>
          </div>

          {/* Достижения в новом стиле */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-12 px-4">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="group relative p-2"
              >
                {/* Магический фон - теперь за пределами основного блока */}
                <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-25 blur-2xl rounded-3xl transition-all duration-700 scale-110`}></div>
                
                {/* Основной блок */}
                <div className={`relative flex items-center gap-3 px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r ${achievement.color} text-white rounded-2xl shadow-2xl group-hover:shadow-3xl group-hover:scale-[1.02] transition-all duration-500 border-2 border-white/30 backdrop-blur-sm`}>
                  <div className="group-hover:rotate-12 transition-transform duration-300 flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <span className="text-sm sm:text-base font-bold whitespace-nowrap">
                    {achievement.text}
                  </span>
                  
                  {/* Внутренний блик */}
                  <div className="absolute top-2 left-2 w-8 h-8 bg-white/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Революционная сетка контента - изменен порядок */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          {/* Основной текст и CTA - левая колонка */}
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-black leading-tight text-center lg:text-left">
                <span className="bg-gradient-to-r from-amber-800 via-orange-700 to-yellow-700 bg-clip-text text-transparent">
                  Bean & Bite
                </span>
              </h3>
              
              <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                <div className="relative p-4 bg-white/80 backdrop-blur-sm rounded-2xl border-l-4 border-amber-400 shadow-lg">
                  <p>
                    Мы создали особенное место, где каждая чашка кофе становится незабываемым моментом вашего дня.
                  </p>
                </div>
                <div className="relative p-4 bg-white/80 backdrop-blur-sm rounded-2xl border-l-4 border-orange-400 shadow-lg">
                  <p>
                    Наша команда тщательно подбирает лучшие зерна со всего мира и обжариваем их с душой.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center lg:text-left">
              <button className="group relative bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 hover:from-amber-600 hover:via-orange-600 hover:to-yellow-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl hover:shadow-amber-500/50 transform hover:scale-105 transition-all duration-500 overflow-hidden border-2 border-white/30">
                {/* Анимированный фон */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-white/10 group-hover:animate-pulse"></div>
                
                <span className="relative z-10 flex items-center gap-3">
                  <Eye className="w-6 h-6 group-hover:rotate-12 transition-transform duration-500" />
                  Узнать больше
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>

          {/* Изображение - центральная колонка */}
          <div className="lg:col-span-6 relative px-8 sm:px-12 lg:px-0">
            <div className="group relative h-96 lg:h-[500px] overflow-visible">
              {/* Множественные магические слои */}
              <div className="absolute inset-0 bg-gradient-conic from-amber-500 via-orange-500 to-yellow-500 rounded-3xl transform rotate-2 scale-105 opacity-20 group-hover:rotate-6 group-hover:scale-110 transition-all duration-1000 blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-conic from-pink-500 via-red-500 to-orange-500 rounded-3xl transform -rotate-3 scale-103 opacity-15 group-hover:-rotate-6 group-hover:scale-108 transition-all duration-800 blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-radial from-yellow-400/30 to-transparent rounded-3xl animate-pulse-slow"></div>
              
              {/* Основной контейнер */}
              <div className="relative h-full bg-white/90 backdrop-blur-xl p-4 rounded-3xl shadow-2xl border-2 border-white/60 overflow-hidden">
                {/* Изображение с мягкими эффектами */}
                <div className="relative h-full overflow-hidden rounded-2xl">
                  <img 
                    src="/images/cafe-interior.jpg" 
                    alt="Bean & Bite кофейня интерьер" 
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                  />
                  
                  {/* Многослойные оверлеи */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-radial from-transparent via-orange-400/10 to-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Анимированные частицы на изображении */}
                  <div className="absolute top-4 left-4 w-3 h-3 bg-white/60 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 right-6 w-2 h-2 bg-yellow-300/80 rounded-full animate-bounce delay-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-1/2 left-6 w-1.5 h-1.5 bg-orange-400/70 rounded-full animate-pulse delay-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Внутренние блики */}
                <div className="absolute top-6 left-6 w-20 h-20 bg-white/20 rounded-full blur-2xl opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                <div className="absolute bottom-8 right-8 w-16 h-16 bg-amber-300/30 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
              </div>
              
              {/* Летающие значки вокруг изображения - видимые с самого начала */}
              <div className="absolute -top-8 -right-8 bg-gradient-to-r from-amber-500 to-orange-500 p-4 rounded-full shadow-2xl animate-float-gentle border-4 border-white/90 group-hover:scale-125 transition-transform duration-500">
                <Award className="w-8 h-8 text-white group-hover:rotate-180 transition-transform duration-700" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-full shadow-2xl animate-float-gentle delay-500 border-4 border-white/90 group-hover:scale-125 transition-transform duration-500">
                <Clock className="w-8 h-8 text-white group-hover:rotate-180 transition-transform duration-700" />
              </div>
              <div className="absolute top-1/2 -right-6 bg-gradient-to-r from-pink-500 to-red-500 p-3 rounded-full shadow-xl animate-pulse border-3 border-white/90">
                <Star className="w-6 h-6 text-white animate-spin-slow" />
              </div>
              <div className="absolute top-1/4 -left-6 bg-gradient-to-r from-yellow-400 to-amber-500 p-3 rounded-full shadow-xl animate-bounce border-3 border-white/90">
                <Diamond className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Статистика - правая колонка */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-black text-amber-800 mb-6 text-center lg:text-left">
              Наши цифры
            </h3>
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group relative bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-2 border border-white/50 overflow-hidden"
              >
                {/* Мягкий анимированный фон */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-50 to-${stat.color}-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 text-center">
                  <div className="flex justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {stat.icon}
                  </div>
                  <div className={`text-4xl sm:text-5xl font-black text-${stat.color}-600 mb-2 group-hover:scale-105 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold text-gray-700 leading-tight">
                    {stat.label}
                  </div>
                </div>
                
                {/* Мягкие декоративные элементы */}
                <div className={`absolute -top-1 -right-1 w-4 h-4 bg-${stat.color}-400/40 rounded-full animate-ping`}></div>
                <div className={`absolute -bottom-1 -left-1 w-3 h-3 bg-${stat.color}-300/50 rounded-full animate-bounce delay-300`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Особенности в революционном дизайне */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-white/80 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-4 border border-white/50 overflow-hidden"
            >
              {/* Мягкий анимированный градиентный фон */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
              <div className={`absolute inset-0 bg-gradient-radial from-${feature.accent}-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 text-center space-y-6">
                {/* Иконка с контрастным фоном */}
                <div className="relative mx-auto w-20 h-20">
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                  <div className={`relative flex items-center justify-center w-full h-full bg-white rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-xl border-2 border-${feature.accent}-200`}>
                    {feature.icon}
                  </div>
                  {/* Мягкие орбитальные частицы */}
                  <div className={`absolute -top-1 -right-1 w-3 h-3 bg-${feature.accent}-400/60 rounded-full animate-ping group-hover:animate-bounce`}></div>
                  <div className={`absolute -bottom-1 -left-1 w-2 h-2 bg-${feature.accent}-300/50 rounded-full animate-pulse delay-300`}></div>
                </div>
                
                <div className="space-y-4">
                  <h4 className={`text-2xl font-black text-${feature.accent}-800 group-hover:scale-105 transition-transform duration-300`}>
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
              
              {/* Мягкие декоративные элементы */}
              <div className={`absolute top-4 right-4 w-2 h-2 bg-${feature.accent}-400/40 rounded-full animate-pulse`}></div>
              <div className={`absolute bottom-6 right-6 w-1.5 h-1.5 bg-${feature.accent}-300/60 rounded-full animate-bounce delay-500`}></div>
              <div className={`absolute top-1/2 left-4 w-1 h-1 bg-${feature.accent}-500/50 rounded-full animate-ping delay-700`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Кастомные стили для анимаций */}
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
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-reverse-spin {
          animation: reverse-spin 12s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-float-gentle {
          animation: float-gentle 6s ease-in-out infinite;
        }
        
        .animate-float-1 {
          animation: float-1 8s ease-in-out infinite;
        }
        
        .animate-float-2 {
          animation: float-2 6s ease-in-out infinite;
        }
        
        .animate-float-3 {
          animation: float-3 10s ease-in-out infinite;
        }
        
        .animate-float-4 {
          animation: float-4 7s ease-in-out infinite;
        }
        
        .animate-float-5 {
          animation: float-5 9s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
        
        .border-3 {
          border-width: 3px;
        }
        
        .bg-gradient-conic {
          background: conic-gradient(var(--tw-gradient-stops));
        }
        
        .bg-gradient-radial {
          background: radial-gradient(var(--tw-gradient-stops));
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};

export default About;