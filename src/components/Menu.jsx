import { useState } from 'react';
import MenuItem from './MenuItem';
import OrderModal from './OrderModal';
import { menuData } from '../data/menuData';
import { Coffee, Leaf, Cake, Star, Sparkles, Crown, Zap, ArrowRight, Eye, Flame, Diamond, Award, Clock } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [preselectedItem, setPreselectedItem] = useState(null);
  
  const categories = [
    { id: 'coffee', name: 'Кофе', icon: Coffee },
    { id: 'tea', name: 'Чай', icon: Leaf },
    { id: 'pastry', name: 'Выпечка', icon: Cake }
  ];

  const handleOrder = (item) => {
    setPreselectedItem(item);
    setOrderModalOpen(true);
  };

  return (
    <section id="menu" className="relative py-12 sm:py-20 lg:py-32 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
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

      <div className="container mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
      {/* Центрированный заголовок с мега-эффектом */}
      <div className="text-center mb-8 sm:mb-16 lg:mb-24">
        {/* Floating badge */}
        <div className="mb-4 sm:mb-8 animate-float-gentle">
            <div className="inline-flex items-center gap-4 group">
              <div className="relative">
                <span className="inline-flex items-center gap-2 text-amber-800 text-sm sm:text-lg font-bold tracking-wider px-4 py-3 sm:px-10 sm:py-5 border-2 sm:border-3 border-amber-400/50 rounded-full backdrop-blur-2xl bg-gradient-to-r from-white/80 to-amber-100/80 shadow-2xl shadow-amber-500/30 hover:scale-110 transition-all duration-700 group-hover:shadow-amber-500/50">
                  <div className="relative">
                    <Coffee className="w-6 h-6 text-amber-600 group-hover:rotate-180 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-amber-400/30 rounded-full animate-ping"></div>
                  </div>
                  МЕНЮ
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
            <h2 className="text-3xl sm:text-5xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 leading-tight sm:leading-none">
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-amber-800 via-orange-700 to-yellow-700 bg-clip-text text-transparent drop-shadow-2xl">
                  Наше меню
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
            
            <p className="text-base sm:text-xl lg:text-3xl text-amber-900/80 max-w-4xl mx-auto leading-relaxed font-light mb-6 sm:mb-10 px-4 sm:px-0">
              Откройте для себя уникальные вкусы нашего авторского кофе, ароматных чаев и свежей выпечки
            </p>
          </div>
        </div>
          
        {/* Революционные табы категорий с мега-эффектами */}
        <div className="flex justify-center mb-8 sm:mb-16 px-2 sm:px-0">
          <div className="relative group">
            {/* Магический фон для табов */}
            <div className="absolute inset-0 bg-gradient-conic from-amber-500 via-orange-500 to-yellow-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-700 scale-110"></div>
            <div className="absolute inset-0 bg-gradient-radial from-white/40 to-transparent rounded-3xl animate-pulse-slow"></div>
            
            <div className="relative flex bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl p-2 sm:p-3 border-2 border-white/50 overflow-hidden">
              {/* Анимированный фон активной кнопки - только для больших экранов */}
              <div 
                className={`hidden sm:block absolute top-2 bottom-2 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 rounded-2xl shadow-2xl shadow-amber-500/40 transition-all duration-700 ease-out`}
                style={{
                  width: `calc(${100 / categories.length}% - 0.5rem)`,
                  left: `calc(${(categories.findIndex(cat => cat.id === activeCategory) * 100) / categories.length}% + 0.25rem)`
                }}
              ></div>
                            
              {categories.map((category, index) => {
                const IconComponent = category.icon;
                const isActive = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`relative z-10 flex items-center py-3 px-3 sm:py-5 sm:px-8 lg:px-12 rounded-2xl transition-all duration-500 transform group/tab ${
                      isActive 
                        ? 'bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 sm:bg-none text-white scale-105 shadow-lg sm:shadow-none' 
                        : 'hover:bg-amber-100/50 text-amber-800 hover:scale-102'
                    }`}
                  >
                    <div className="relative">
                      <IconComponent className={`w-5 h-5 sm:w-7 sm:h-7 mr-2 sm:mr-4 transition-all duration-500 ${
                        isActive 
                          ? 'text-white group-hover/tab:rotate-12' 
                          : 'text-amber-600 group-hover/tab:scale-110'
                      }`} />
                      {/* Мини-орбитальные частицы для активной иконки */}
                      {isActive && (
                        <>
                          <div className="absolute -top-1 -right-1 w-2 h-2 bg-white/60 rounded-full animate-ping"></div>
                          <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-yellow-200/80 rounded-full animate-bounce delay-300"></div>
                        </>
                      )}
                    </div>
                    <span className="font-bold text-sm sm:text-lg lg:text-xl">
                      {category.name}
                    </span>
                    
                    {/* Летающие элементы вокруг активной кнопки */}
                    {isActive && (
                      <>
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <Star className="w-4 h-4 text-yellow-300 animate-spin-slow" />
                        </div>
                        <div className="absolute -bottom-3 right-1/4">
                          <Diamond className="w-3 h-3 text-white/80 animate-bounce" />
                        </div>
                      </>
                    )}
                  </button>
                );
              })}
              
              {/* Внутренние блики */}
              <div className="absolute top-2 left-2 w-20 h-20 bg-white/20 rounded-full blur-2xl animate-pulse-slow"></div>
              <div className="absolute bottom-2 right-2 w-16 h-16 bg-amber-300/20 rounded-full blur-xl animate-pulse-slow delay-500"></div>
            </div>
            
            {/* Летающие иконки вокруг табов */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-pink-500 to-red-500 p-3 rounded-full shadow-2xl animate-float-gentle border-3 border-white/90">
              <Flame className="w-5 h-5 text-white animate-pulse" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-full shadow-2xl animate-float-gentle delay-500 border-3 border-white/90">
              <Award className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
          
        {/* Сетка товаров с мега-анимациями */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-12 mb-8 sm:mb-16 px-2 sm:px-0">
          {menuData
            .filter((item) => item.category === activeCategory)
            .map((item, index) => (
              <div
                key={item.id}
                className="relative transform transition-all duration-1000 ease-out hover:z-10"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: 'fadeInUp 1s ease-out forwards'
                }}
              >
                {/* Магический фон для каждой карточки */}
                <div className="absolute inset-0 bg-gradient-conic from-amber-400/10 via-orange-400/10 to-yellow-400/10 rounded-3xl blur-2xl opacity-0 hover:opacity-100 transition-opacity duration-700 scale-110"></div>
                
                <MenuItem
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                  onOrder={() => handleOrder(item)}
                />
                
                {/* Летающие частицы вокруг карточек */}
                <div className="absolute -top-2 -right-2 w-1.5 h-1.5 bg-amber-400/60 rounded-full animate-ping opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-orange-400/50 rounded-full animate-bounce opacity-0 hover:opacity-100 transition-opacity duration-300 delay-300"></div>
              </div>
            ))}
        </div>

        {/* Революционный блок с призывом к действию */}
        <div className="relative text-center">
          {/* Мега-фон */}
          <div className="absolute inset-0 bg-gradient-conic from-amber-500 via-orange-500 to-yellow-500 rounded-3xl blur-3xl opacity-20 animate-pulse-slow scale-110"></div>
          <div className="absolute inset-0 bg-gradient-radial from-white/30 to-transparent rounded-3xl"></div>
          
          <div className="relative bg-white/80 backdrop-blur-2xl rounded-3xl p-4 sm:p-8 lg:p-16 shadow-2xl border-2 border-white/50 max-w-4xl mx-auto overflow-hidden">
            {/* Внутренние анимированные элементы */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 to-orange-50/30 rounded-3xl"></div>
            
            <div className="relative z-10 space-y-8">
              {/* Иконка с мега-эффектами */}
              <div className="relative mx-auto w-24 h-24 mb-8">
                <div className="absolute inset-0 bg-gradient-conic from-amber-500 via-orange-500 to-yellow-500 rounded-2xl blur-xl opacity-50 animate-spin-slow"></div>
                <div className="relative flex items-center justify-center w-full h-full bg-white rounded-2xl shadow-2xl border-3 border-amber-200">
                  <Eye className="w-12 h-12 text-amber-600 animate-pulse" />
                </div>
                {/* Орбитальные частицы */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-orange-400 rounded-full animate-ping"></div>
                <div className="absolute top-1/2 -right-4 w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 -left-4 w-2.5 h-2.5 bg-pink-400 rounded-full animate-bounce delay-300"></div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl lg:text-5xl font-black bg-gradient-to-r from-amber-800 via-orange-700 to-yellow-700 bg-clip-text text-transparent">
                  Не можете определиться?
                </h3>
                <p className="text-lg sm:text-xl text-amber-700/90 max-w-2xl mx-auto leading-relaxed">
                  Попробуйте наши фирменные сеты или спросите совет у бариста - мы поможем найти ваш идеальный вкус
                </p>
              </div>
              
              {/* Мега кнопка */}
              <div className="relative">
                <button
                  onClick={() => setOrderModalOpen(true)}
                  className="group relative bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 hover:from-amber-600 hover:via-orange-600 hover:to-yellow-600 text-white px-6 py-4 sm:px-12 sm:py-6 rounded-full font-bold text-lg sm:text-xl shadow-2xl hover:shadow-3xl hover:shadow-amber-500/50 transform hover:scale-110 transition-all duration-700 overflow-hidden border-3 border-white/40"
                >
                  {/* Анимированный фон */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-white/10 group-hover:animate-pulse"></div>
                  
                  <span className="relative z-10 flex items-center gap-4">
                    <Zap className="w-7 h-7 group-hover:rotate-12 group-hover:scale-125 transition-transform duration-500" />
                    Оформить заказ
                    <ArrowRight className="w-7 h-7 group-hover:translate-x-3 transition-transform duration-300" />
                  </span>
                  
                  {/* Внутренние блики */}
                  <div className="absolute top-2 left-2 w-8 h-8 bg-white/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-2 right-2 w-6 h-6 bg-yellow-300/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </button>
                
                {/* Летающие элементы вокруг кнопки */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-red-500 p-2 rounded-full shadow-xl animate-bounce border-2 border-white/90">
                  <Star className="w-4 h-4 text-white animate-spin-slow" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-full shadow-xl animate-pulse border-2 border-white/90">
                  <Diamond className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            
            {/* Внутренние декоративные элементы */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-amber-400/40 rounded-full animate-ping"></div>
            <div className="absolute bottom-6 right-6 w-2 h-2 bg-orange-400/60 rounded-full animate-bounce delay-500"></div>
            <div className="absolute bottom-4 left-4 w-2.5 h-2.5 bg-yellow-400/50 rounded-full animate-pulse delay-700"></div>
            <div className="absolute top-1/2 left-6 w-1.5 h-1.5 bg-pink-400/60 rounded-full animate-ping delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Модальное окно заказа */}
      <OrderModal 
        isOpen={orderModalOpen} 
        onClose={() => {
          setOrderModalOpen(false);
          setPreselectedItem(null);
        }}
        preselectedItem={preselectedItem}
      />

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
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
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
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
};

export default Menu;