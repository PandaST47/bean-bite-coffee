import { ShoppingCart, Star, Heart, Sparkles, Crown, Zap, Clock, Award, Flame, Diamond } from 'lucide-react';
import { useState } from 'react';

const MenuItem = ({ name, description, price, image, onOrder }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl hover:-translate-y-2 border-2 border-white/40 transform hover:scale-105 max-w-full mx-auto sm:max-w-md lg:max-w-lg xl:max-w-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Background Effects */}
      <div
        className={`absolute inset-0 bg-gradient-conic from-amber-400/10 via-orange-400/15 to-yellow-400/10 transition-opacity duration-500 sm:duration-700 ${
          isHovered ? 'opacity-100 sm:animate-spin-slow' : 'opacity-0'
        }`}
      ></div>
      <div
        className={`absolute inset-0 bg-gradient-radial from-white/20 to-transparent transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>

      {/* Floating Particles (disabled on mobile for performance) */}
      <div
        className={`hidden sm:block absolute -top-2 -right-2 w-2 h-2 bg-amber-400/60 rounded-full transition-opacity duration-300 ${
          isHovered ? 'opacity-100 animate-ping' : 'opacity-0'
        }`}
      ></div>
      <div
        className={`hidden sm:block absolute -bottom-2 -left-2 w-2.5 h-2.5 bg-orange-400/50 rounded-full transition-opacity duration-300 delay-200 ${
          isHovered ? 'opacity-100 animate-bounce' : 'opacity-0'
        }`}
      ></div>

      {/* Favorite Button */}
      <button
        onClick={() => setIsLiked(!isLiked)}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 group/heart transition-all duration-500 hover:scale-110 sm:hover:scale-125"
      >
        <div className="relative">
          <div
            className={`absolute inset-0 bg-gradient-conic rounded-full blur-xl transition-all duration-500 ${
              isLiked ? 'from-red-500 via-pink-500 to-red-500 opacity-60 animate-pulse' : `from-gray-400/20 via-white/20 to-gray-400/20 ${isHovered ? 'opacity-50' : 'opacity-0'}`
            }`}
          ></div>
          <div
            className={`relative w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-500 border-2 sm:border-3 ${
              isLiked
                ? 'bg-gradient-to-r from-red-500 via-pink-500 to-red-600 text-white shadow-2xl shadow-red-500/50 border-white/90'
                : 'bg-white/95 backdrop-blur-2xl text-gray-400 hover:text-red-400 shadow-xl border-white/60 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50'
            }`}
          >
            <Heart
              className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-500 ${isLiked ? 'fill-current animate-bounce' : 'group-hover/heart:scale-110'}`}
            />
            {isLiked && isHovered && (
              <>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-white/80 rounded-full animate-bounce delay-300"></div>
              </>
            )}
          </div>
        </div>
      </button>

      {/* Premium Badge */}
      <div className={`absolute top-4 left-4 sm:top-6 sm:left-6 z-20 ${isHovered ? 'animate-float-gentle' : ''}`}>
        <div className="relative group/badge">
          <div
            className={`absolute inset-0 bg-gradient-conic from-yellow-400 via-amber-500 to-orange-500 rounded-full blur-lg opacity-50 ${
              isHovered ? 'sm:animate-spin-slow' : ''
            }`}
          ></div>
          <div
            className="relative bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-bold shadow-2xl border-2 border-white/80 flex items-center gap-2"
          >
            <Crown className={`w-3 h-3 sm:w-4 sm:h-4 ${isHovered ? 'animate-pulse' : ''}`} />
            ПРЕМИУМ
            <Sparkles className={`w-2 h-2 sm:w-3 sm:h-3 ${isHovered ? 'animate-spin-slow' : ''}`} />
          </div>
        </div>
      </div>

      {/* Product Image */}
      <div className="relative h-48 sm:h-64 lg:h-72 xl:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>
        <img
          src={image || '/api/placeholder/400/300'}
          alt={name}
          className="w-full h-full object-cover transition-all duration-700 sm:duration-1000 group-hover:scale-110 sm:group-hover:scale-125"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent z-10 transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        ></div>

        {/* Rating */}
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20">
          <div className="relative group/rating">
            <div
              className={`absolute inset-0 bg-gradient-conic from-yellow-400 via-amber-500 to-orange-500 rounded-2xl blur-lg opacity-60 ${
                isHovered ? 'animate-pulse' : ''
              }`}
            ></div>
            <div className="relative bg-white/95 backdrop-blur-2xl rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-2xl border-2 border-white/70">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Star
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-current ${isHovered ? 'animate-pulse' : ''}`}
                  />
                  <div className={`absolute inset-0 bg-yellow-400/30 rounded-full ${isHovered ? 'animate-ping' : ''}`}></div>
                </div>
                <span className="text-sm sm:text-base font-black text-gray-800">4.8</span>
                <div className="flex ml-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cooking Time */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20">
          <div className="relative group/time">
            <div
              className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-40 ${
                isHovered ? 'animate-pulse' : ''
              }`}
            ></div>
            <div className="relative bg-white/90 backdrop-blur-2xl rounded-full px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-xl border-2 border-white/60 flex items-center gap-2">
              <Clock
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 ${isHovered ? 'animate-spin-slow' : ''}`}
              />
              <span className="text-xs sm:text-sm font-bold text-gray-800">15м</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="relative p-4 sm:p-6 lg:p-8 z-10">
        <div className="flex justify-between items-start mb-4 sm:mb-6">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-amber-900 group-hover:text-amber-700 transition-all duration-500 group-hover:scale-105 leading-tight">
            {name}
          </h3>
          <div className="relative group/price">
            <div
              className={`absolute inset-0 bg-gradient-conic from-amber-500 via-orange-500 to-yellow-500 rounded-2xl blur-xl opacity-60 ${
                isHovered ? 'animate-pulse' : ''
              }`}
            ></div>
            <div className="relative bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 text-white px-4 py-2 sm:px-5 sm:py-3 rounded-2xl shadow-2xl border-2 border-white/80 transform group-hover/price:scale-105 sm:group-hover/price:scale-110 transition-transform duration-300">
              <span className="text-base sm:text-xl font-black">{price} ₽</span>
            </div>
          </div>
        </div>

        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 group-hover:text-gray-600 transition-colors duration-300 line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex space-x-2 sm:space-x-3">
            <div className="relative group/tag">
              <div
                className={`absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-md opacity-40 ${
                  isHovered ? 'animate-pulse' : ''
                }`}
              ></div>
              <span className="relative text-xs sm:text-sm bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold shadow-xl border-2 border-white/60 flex items-center gap-2">
                <Flame className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isHovered ? 'animate-pulse' : ''}`} />
                Эко
              </span>
            </div>
            <div className="relative group/tag">
              <div
                className={`absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-md opacity-40 ${
                  isHovered ? 'animate-pulse delay-300' : ''
                }`}
              ></div>
              <span className="relative text-xs sm:text-sm bg-gradient-to-r from-purple-500 to-pink-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold shadow-xl border-2 border-white/60 flex items-center gap-2">
                <Award className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isHovered ? 'animate-bounce' : ''}`} />
                ТОП
              </span>
            </div>
          </div>
        </div>

        {/* Order Button */}
        <div className="relative">
          <div
            className={`absolute inset-0 bg-gradient-conic from-amber-500 via-orange-500 to-yellow-500 rounded-3xl blur-2xl opacity-40 transition-opacity duration-500 sm:duration-700 ${
              isHovered ? 'opacity-60 animate-pulse' : 'opacity-0'
            }`}
          ></div>
          <button
            onClick={onOrder}
            className="relative w-full bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 hover:from-amber-600 hover:via-orange-600 hover:to-yellow-600 text-white py-3 sm:py-4 lg:py-5 rounded-3xl font-bold text-base sm:text-lg transition-all duration-500 sm:duration-700 hover:shadow-3xl hover:shadow-amber-500/50 transform hover:scale-105 sm:hover:scale-110 flex items-center justify-center group/btn overflow-hidden border-2 sm:border-3 border-white/60"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500 transition-opacity duration-500 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            ></div>
            <span className="relative z-10 flex items-center gap-3 sm:gap-4">
              <div className="relative">
                <ShoppingCart
                  className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-500 ${isHovered ? 'scale-110 sm:scale-125 rotate-12' : ''}`}
                />
                <div
                  className={`absolute inset-0 bg-white/20 rounded-full transition-opacity ${
                    isHovered ? 'opacity-100 animate-ping' : 'opacity-0'
                  }`}
                ></div>
              </div>
              ЗАКАЗАТЬ СЕЙЧАС
              <div className="relative">
                <Zap
                  className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ${isHovered ? 'translate-x-2 scale-110' : ''}`}
                />
                <div
                  className={`absolute inset-0 bg-yellow-300/30 rounded-full transition-opacity ${
                    isHovered ? 'opacity-100 animate-pulse' : 'opacity-0'
                  }`}
                ></div>
              </div>
            </span>
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 sm:h-2 bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-400"></div>
      <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-400"></div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes float-gentle {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(1deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-float-gentle {
          animation: float-gentle 4s ease-in-out infinite;
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
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.3);
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Media Queries for TV and Large Screens */
        @media (min-width: 1920px) {
          .group {
            max-width: 28rem;
          }
          .group img {
            height: 24rem;
          }
          .group h3 {
            font-size: 1.75rem;
          }
          .group p {
            font-size: 1.125rem;
          }
          .group button {
            padding: 1.25rem;
            font-size: 1.125rem;
          }
        }
      `}</style>
    </div>
  );
};

export default MenuItem;