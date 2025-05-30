import { useState, useEffect } from 'react';
import { X, ShoppingCart, Check, ChevronDown, ChevronUp, Coffee, UserCircle, Phone, Calendar, Clock, MessageSquare, Star, Trash2, Plus, Minus, Gift, CreditCard, MapPin, Sparkles } from 'lucide-react';
import { menuData } from '../data/menuData';

const OrderModal = ({ isOpen, onClose, preselectedItem }) => {
  const [activeTab, setActiveTab] = useState('menu');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: '',
    date: '',
    time: '',
    deliveryType: 'pickup',
    address: '',
    promocode: ''
  });
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState('coffee');
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [promoApplied, setPromoApplied] = useState(false);
  const [showPromoInput, setShowPromoInput] = useState(false);
  const [loyaltyPoints, setLoyaltyPoints] = useState(127); // Симуляция бонусных баллов
  const [useLoyaltyPoints, setUseLoyaltyPoints] = useState(false);
  const [orderStep, setOrderStep] = useState(1); // 1: menu, 2: details, 3: payment

  // Update order step when active tab changes
  useEffect(() => {
    if (activeTab === 'menu') setOrderStep(1);
    else if (activeTab === 'form') setOrderStep(2);
    else if (activeTab === 'payment') setOrderStep(3);
  }, [activeTab]);

  // Categories from menu data
  const categories = [...new Set(menuData.map(item => item.category))];
  const categoryLabels = {
    coffee: 'Кофе',
    tea: 'Чай', 
    pastry: 'Выпечка',
  };

  const categoryIcons = {
    coffee: Coffee,
    tea: '🍃',
    pastry: '🧁'
  };

  // Add preselected item to cart on modal open
  useEffect(() => {
    if (isOpen && preselectedItem && cart.find(item => item.id === preselectedItem.id) === undefined) {
      setCart(prev => [...prev, { ...preselectedItem, quantity: 1 }]);
    }
  }, [isOpen, preselectedItem]);

  // Add scroll lock with smooth animations
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px'; // Prevent layout shift
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      
      // Reset state when closing
      if (orderSuccess) {
        setTimeout(() => {
          setOrderSuccess(false);
          setCart([]);
          setFormData({
            name: '',
            phone: '',
            email: '',
            notes: '',
            date: '',
            time: '',
            deliveryType: 'pickup',
            address: '',
            promocode: ''
          });
          setActiveTab('menu');
          setOrderStep(1);
          setPromoApplied(false);
          setUseLoyaltyPoints(false);
        }, 300);
      }
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen, orderSuccess]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle adding item to cart with animation
  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 } 
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  // Handle removing item from cart
  const removeFromCart = (itemId) => {
    const existingItem = cart.find(item => item.id === itemId);
    
    if (existingItem.quantity > 1) {
      setCart(cart.map(item => 
        item.id === itemId 
          ? { ...item, quantity: item.quantity - 1 } 
          : item
      ));
    } else {
      setCart(cart.filter(item => item.id !== itemId));
    }
  };

  // Remove item completely from cart
  const removeItemCompletely = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  // Apply promo code
  const applyPromoCode = () => {
    if (formData.promocode.toLowerCase() === 'welcome10') {
      setPromoApplied(true);
      setShowPromoInput(false);
    } else {
      alert('Промокод не найден');
    }
  };

  // Calculate prices
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const promoDiscount = promoApplied ? Math.round(subtotal * 0.1) : 0;
  const loyaltyDiscount = useLoyaltyPoints ? Math.min(loyaltyPoints, subtotal * 0.2) : 0;
  const totalPrice = subtotal - promoDiscount - loyaltyDiscount;

  // Handle order submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (cart.length === 0) {
      alert('Пожалуйста, добавьте хотя бы один товар в корзину');
      setActiveTab('menu');
      return;
    }
    
    if (!formData.name || !formData.phone) {
      alert('Пожалуйста, заполните обязательные поля');
      return;
    }
    
    setOrderSuccess(true);
    
    console.log('Order submitted:', { 
      customer: formData,
      items: cart,
      subtotal,
      discounts: { promo: promoDiscount, loyalty: loyaltyDiscount },
      total: totalPrice
    });
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
      style={{ animation: 'fadeIn 0.3s ease-out' }}
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[95vh] overflow-hidden flex flex-col relative"
        style={{ 
          animation: 'modalSlideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
          background: 'linear-gradient(135deg, #ffffff 0%, #fef7ed 100%)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {orderSuccess ? (
          // Success Animation
          <div className="p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50"></div>
            <div className="relative z-10">
              <div 
                className="mx-auto mb-8 h-24 w-24 flex items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-emerald-500 shadow-2xl"
                style={{ animation: 'successBounce 0.6s ease-out' }}
              >
                <Check className="h-12 w-12 text-white" />
              </div>
              
              <div style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Спасибо за заказ!</h3>
                <div className="bg-white/80 backdrop-blur rounded-xl p-6 mb-6 border border-white/50">
                  <p className="text-gray-600 mb-4">
                    Ваш заказ #ORD-{Math.random().toString(36).substr(2, 6).toUpperCase()} принят!
                  </p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>15-20 мин</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-500" />
                      <span>+{Math.round(totalPrice / 10)} баллов</span>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={onClose}
                  className="w-full py-4 text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-2xl transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  Отлично!
                </button>
              </div>
            </div>
            
            {/* Confetti Animation */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"
                  style={{
                    left: `${20 + i * 7}%`,
                    animation: `confetti 1.5s ease-out ${i * 0.1}s`,
                    animationFillMode: 'both'
                  }}
                />
              ))}
            </div>
          </div>
        ) : (
          <>
            {/* Enhanced Header */}
            <div className="relative flex-shrink-0">
              <div className="h-24 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 flex items-center justify-center relative overflow-hidden px-4 sm:px-6">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10 flex items-center max-w-full mb-4">
                  <Sparkles className="h-6 w-6 sm:h-7 sm:w-7 text-white mr-2 sm:mr-3 flex-shrink-0" />
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-wide text-center truncate">
                    Оформление заказа
                  </h2>
                </div>
                
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-2 left-10 w-4 h-4 bg-white rounded-full animate-pulse"></div>
                  <div className="absolute bottom-3 right-20 w-3 h-3 bg-white rounded-full animate-pulse delay-75"></div>
                  <div className="absolute top-5 right-40 w-2 h-2 bg-white rounded-full animate-pulse delay-150"></div>
                </div>
              </div>
              
              <button 
                onClick={onClose}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white hover:text-white/80 transition-all duration-200 hover:scale-110 bg-black/20 backdrop-blur rounded-full p-2 z-20"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
              
              {/* Progress Steps */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-4">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                      orderStep >= step
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Enhanced Tabs */}
            <div className="flex border-b border-gray-200 flex-shrink-0 bg-white/80 backdrop-blur">
              {[
                { id: 'menu', label: 'Меню', icon: Coffee },
                { id: 'form', label: 'Детали', icon: UserCircle },
                { id: 'payment', label: 'Оплата', icon: CreditCard }
              ].map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    className={`flex-1 py-4 text-center font-medium transition-all duration-300 ${
                      activeTab === tab.id 
                        ? 'text-amber-500 border-b-2 border-amber-500 bg-amber-50' 
                        : 'text-gray-500 hover:text-amber-500 hover:bg-amber-50/50'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <div className="flex items-center justify-center">
                      <IconComponent className="mr-2 h-5 w-5" />
                      <span>{tab.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>
            
            {/* Content area */}
            <div className="flex-1 flex flex-col min-h-0">
              {activeTab === 'menu' ? (
                <div className="flex-1 flex flex-col min-h-0">
                  {/* Enhanced Category Navigation */}
                  <div className="flex overflow-x-auto p-4 bg-gradient-to-r from-amber-50 to-orange-50 flex-shrink-0 space-x-2">
                    {categories.map(category => {
                      const Icon = categoryIcons[category];
                      return (
                        <button
                          key={category}
                          onClick={() => setActiveCategory(category)}
                          className={`px-6 py-3 rounded-2xl whitespace-nowrap transition-all duration-300 flex items-center space-x-2 ${
                            activeCategory === category
                              ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xl transform scale-105'
                              : 'bg-white text-gray-700 hover:bg-amber-100 shadow-md hover:shadow-lg'
                          }`}
                        >
                          {typeof Icon === 'string' ? (
                            <span className="text-lg">{Icon}</span>
                          ) : (
                            <Icon className="h-5 w-5" />
                          )}
                          <span className="font-semibold">{categoryLabels[category] || category}</span>
                        </button>
                      );
                    })}
                  </div>
                  
                  {/* Enhanced Menu Items */}
                  <div className="flex-1 overflow-y-auto">
                    <div className="p-6">
                      <div className="grid gap-4">
                        {menuData
                          .filter(item => item.category === activeCategory)
                          .map((item, index) => {
                            const itemInCart = cart.find(cartItem => cartItem.id === item.id);
                            
                            return (
                              <div 
                                key={item.id}
                                className="flex bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-amber-200"
                                style={{ 
                                  animation: `slideInUp 0.4s ease-out ${index * 0.1}s both`
                                }}
                              >
                                <div className="w-24 h-24 bg-gradient-to-br from-amber-100 to-orange-100 flex-shrink-0 relative overflow-hidden">
                                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-400/20"></div>
                                  <div className="absolute inset-0 flex items-center justify-center text-2xl">
                                    {activeCategory === 'coffee' ? '☕' : activeCategory === 'tea' ? '🍃' : '🧁'}
                                  </div>
                                </div>
                                
                                <div className="flex-1 p-4">
                                  <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-bold text-gray-800 text-lg">{item.name}</h4>
                                    <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1 rounded-full">
                                      <span className="font-bold">{item.price} ₽</span>
                                    </div>
                                  </div>
                                  
                                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                                    {item.description}
                                  </p>
                                  
                                  {itemInCart ? (
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center bg-amber-50 rounded-2xl p-1">
                                        <button
                                          onClick={() => removeFromCart(item.id)}
                                          className="w-8 h-8 flex items-center justify-center text-amber-600 hover:bg-amber-100 rounded-full transition-colors"
                                        >
                                          <Minus className="h-4 w-4" />
                                        </button>
                                        <span className="mx-3 font-bold text-lg min-w-[2rem] text-center">{itemInCart.quantity}</span>
                                        <button
                                          onClick={() => addToCart(item)}
                                          className="w-8 h-8 flex items-center justify-center text-amber-600 hover:bg-amber-100 rounded-full transition-colors"
                                        >
                                          <Plus className="h-4 w-4" />
                                        </button>
                                      </div>
                                      
                                      <button
                                        onClick={() => removeItemCompletely(item.id)}
                                        className="text-red-500 hover:text-red-600 p-2 hover:bg-red-50 rounded-full transition-colors"
                                      >
                                        <Trash2 className="h-4 w-4" />
                                      </button>
                                    </div>
                                  ) : (
                                    <button
                                      onClick={() => addToCart(item)}
                                      className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-200 transform hover:scale-105"
                                    >
                                      Добавить
                                    </button>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              ) : activeTab === 'form' ? (
                // Enhanced Form
                <div className="flex-1 overflow-y-auto">
                  <form className="p-6 space-y-6">
                    {/* Personal Information */}
                    <div className="bg-white/60 backdrop-blur rounded-2xl p-6 border border-white/50">
                      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                        <UserCircle className="h-6 w-6 mr-2 text-amber-500" />
                        Личная информация
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Ваше имя *</label>
                          <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 transition-all duration-200 bg-white/80" 
                            placeholder="Введите ваше имя"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Телефон *</label>
                          <input 
                            type="tel" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 transition-all duration-200 bg-white/80" 
                            placeholder="+7 (___) ___-__-__"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email (опционально)</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 transition-all duration-200 bg-white/80" 
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    {/* Delivery Options */}
                    <div className="bg-white/60 backdrop-blur rounded-2xl p-6 border border-white/50">
                      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                        <MapPin className="h-6 w-6 mr-2 text-amber-500" />
                        Способ получения
                      </h3>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, deliveryType: 'pickup' }))}
                          className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                            formData.deliveryType === 'pickup'
                              ? 'border-amber-500 bg-amber-50'
                              : 'border-gray-200 hover:border-amber-300'
                          }`}
                        >
                          <div className="text-center">
                            <div className="text-2xl mb-2">🏪</div>
                            <div className="font-semibold">Самовывоз</div>
                            <div className="text-sm text-gray-500">Бесплатно</div>
                          </div>
                        </button>
                        
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, deliveryType: 'delivery' }))}
                          className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                            formData.deliveryType === 'delivery'
                              ? 'border-amber-500 bg-amber-50'
                              : 'border-gray-200 hover:border-amber-300'
                          }`}
                        >
                          <div className="text-center">
                            <div className="text-2xl mb-2">🚚</div>
                            <div className="font-semibold">Доставка</div>
                            <div className="text-sm text-gray-500">150 ₽</div>
                          </div>
                        </button>
                      </div>
                      
                      {formData.deliveryType === 'delivery' && (
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Адрес доставки</label>
                          <input 
                            type="text" 
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 transition-all duration-200 bg-white/80" 
                            placeholder="Введите полный адрес"
                          />
                        </div>
                      )}
                    </div>

                    {/* Time Selection */}
                    <div className="bg-white/60 backdrop-blur rounded-2xl p-6 border border-white/50">
                      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                        <Calendar className="h-6 w-6 mr-2 text-amber-500" />
                        Время получения
                      </h3>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Дата</label>
                          <input 
                            type="date" 
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 transition-all duration-200 bg-white/80"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Время</label>
                          <input 
                            type="time" 
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 transition-all duration-200 bg-white/80"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Comments */}
                    <div className="bg-white/60 backdrop-blur rounded-2xl p-6 border border-white/50">
                      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                        <MessageSquare className="h-6 w-6 mr-2 text-amber-500" />
                        Комментарий к заказу
                      </h3>
                      
                      <textarea 
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 transition-all duration-200 h-24 bg-white/80" 
                        placeholder="Особые пожелания, аллергии, предпочтения..."
                      ></textarea>
                    </div>
                  </form>
                </div>
              ) : (
                // Enhanced Payment Tab
                <div className="flex-1 overflow-y-auto">
                  <div className="p-6 space-y-6">
                    {/* Order Summary */}
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
                      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                        <ShoppingCart className="h-6 w-6 mr-2 text-amber-500" />
                        Ваш заказ
                      </h3>
                      
                      {cart.length > 0 ? (
                        <div className="space-y-3">
                          {cart.map(item => (
                            <div key={item.id} className="flex justify-between items-center p-3 bg-white/60 rounded-xl">
                              <div>
                                <span className="font-medium">{item.name}</span>
                                <span className="text-sm text-gray-500 ml-2">× {item.quantity}</span>
                              </div>
                              <span className="font-bold text-amber-600">{item.price * item.quantity} ₽</span>
                            </div>
                          ))}
                          
                          {/* Pricing Breakdown */}
                          <div className="border-t border-amber-200 pt-4 space-y-2">
                            <div className="flex justify-between text-gray-600">
                              <span>Подытог:</span>
                              <span>{subtotal} ₽</span>
                            </div>
                            
                            {formData.deliveryType === 'delivery' && (
                              <div className="flex justify-between text-gray-600">
                                <span>Доставка:</span>
                                <span>150 ₽</span>
                              </div>
                            )}
                            
                            {promoApplied && (
                              <div className="flex justify-between text-green-600">
                                <span>Скидка по промокоду:</span>
                                <span>-{promoDiscount} ₽</span>
                              </div>
                            )}
                            
                            {useLoyaltyPoints && (
                              <div className="flex justify-between text-purple-600">
                                <span>Списание баллов:</span>
                                <span>-{loyaltyDiscount} ₽</span>
                              </div>
                            )}
                            
                            <div className="flex justify-between text-xl font-bold text-gray-800 pt-2 border-t border-amber-200">
                              <span>Итого:</span>
                              <span>{totalPrice + (formData.deliveryType === 'delivery' ? 150 : 0)} ₽</span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center text-gray-500 py-8">
                          <ShoppingCart className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                          <p>Ваша корзина пуста</p>
                          <button
                            onClick={() => setActiveTab('menu')}
                            className="mt-4 text-amber-500 hover:text-amber-600 font-semibold"
                          >
                            Перейти к меню
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Promo Code Section */}
                    <div className="bg-white/60 backdrop-blur rounded-2xl p-6 border border-white/50">
                      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                        <Gift className="h-6 w-6 mr-2 text-amber-500" />
                        Промокод
                      </h3>
                      
                      {!promoApplied ? (
                        showPromoInput ? (
                          <div className="flex space-x-2">
                            <input
                              type="text"
                              name="promocode"
                              value={formData.promocode}
                              onChange={handleInputChange}
                              placeholder="Введите промокод"
                              className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 transition-all duration-200 bg-white/80"
                            />
                            <button
                              onClick={applyPromoCode}
                              className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all duration-200 font-semibold"
                            >
                              Применить
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setShowPromoInput(true)}
                            className="w-full py-3 border-2 border-dashed border-amber-300 text-amber-600 rounded-xl hover:border-amber-400 hover:bg-amber-50 transition-all duration-200 font-semibold"
                          >
                            У меня есть промокод
                          </button>
                        )
                      ) : (
                        <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-200">
                          <div className="flex items-center">
                            <Check className="h-5 w-5 text-green-500 mr-2" />
                            <span className="text-green-700 font-semibold">Промокод применен</span>
                          </div>
                          <span className="text-green-600 font-bold">-10%</span>
                        </div>
                      )}
                    </div>

                    {/* Loyalty Points Section */}
                    <div className="bg-white/60 backdrop-blur rounded-2xl p-6 border border-white/50">
                      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                        <Sparkles className="h-6 w-6 mr-2 text-purple-500" />
                        Бонусные баллы
                      </h3>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-gray-600">Доступно баллов:</p>
                          <p className="text-2xl font-bold text-purple-600">{loyaltyPoints}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">Можно списать до:</p>
                          <p className="text-lg font-semibold text-purple-600">{Math.min(loyaltyPoints, Math.round(subtotal * 0.2))} ₽</p>
                        </div>
                      </div>
                      
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={useLoyaltyPoints}
                          onChange={(e) => setUseLoyaltyPoints(e.target.checked)}
                          className="w-5 h-5 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
                        />
                        <span className="text-gray-700 font-medium">Использовать бонусные баллы</span>
                      </label>
                    </div>

                    {/* Payment Methods */}
                    <div className="bg-white/60 backdrop-blur rounded-2xl p-6 border border-white/50">
                      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                        <CreditCard className="h-6 w-6 mr-2 text-amber-500" />
                        Способ оплаты
                      </h3>
                      
                      <div className="space-y-3">
                        <label className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-xl hover:border-amber-300 cursor-pointer transition-all duration-200">
                          <input
                            type="radio"
                            name="payment"
                            value="card"
                            defaultChecked
                            className="w-5 h-5 text-amber-600"
                          />
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded flex items-center justify-center">
                              <CreditCard className="h-4 w-4 text-white" />
                            </div>
                            <span className="font-medium">Банковская карта</span>
                          </div>
                        </label>
                        
                        <label className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-xl hover:border-amber-300 cursor-pointer transition-all duration-200">
                          <input
                            type="radio"
                            name="payment"
                            value="cash"
                            className="w-5 h-5 text-amber-600"
                          />
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded flex items-center justify-center">
                              <span className="text-white font-bold text-sm">₽</span>
                            </div>
                            <span className="font-medium">Наличными</span>
                          </div>
                        </label>
                        
                        <label className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-xl hover:border-amber-300 cursor-pointer transition-all duration-200">
                          <input
                            type="radio"
                            name="payment"
                            value="sbp"
                            className="w-5 h-5 text-amber-600"
                          />
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded flex items-center justify-center">
                              <Phone className="h-4 w-4 text-white" />
                            </div>
                            <span className="font-medium">СБП (QR-код)</span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Enhanced Footer with Order Button */}
            {!orderSuccess && (
              <div className="flex-shrink-0 p-6 bg-white/90 backdrop-blur border-t border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                        <ShoppingCart className="h-6 w-6 text-white" />
                      </div>
                      {cart.length > 0 && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          {cart.reduce((sum, item) => sum + item.quantity, 0)}
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-800">
                        Итого: {totalPrice + (formData.deliveryType === 'delivery' ? 150 : 0)} ₽
                      </p>
                      <p className="text-sm text-gray-500">
                        {cart.length} {cart.length === 1 ? 'товар' : cart.length < 5 ? 'товара' : 'товаров'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    {activeTab !== 'menu' && (
                      <button
                        onClick={() => {
                          if (activeTab === 'form') setActiveTab('menu');
                          if (activeTab === 'payment') setActiveTab('form');
                        }}
                        className="px-6 py-3 border-2 border-amber-500 text-amber-600 rounded-2xl font-semibold hover:bg-amber-50 transition-all duration-200"
                      >
                        Назад
                      </button>
                    )}
                    
                    <button
                      onClick={activeTab === 'payment' ? handleSubmit : () => {
                        if (activeTab === 'menu') setActiveTab('form');
                        if (activeTab === 'form') setActiveTab('payment');
                      }}
                      disabled={cart.length === 0}
                      className={`px-8 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                        cart.length > 0
                          ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 shadow-lg hover:shadow-xl'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {activeTab === 'payment' ? 'Оформить заказ' : 'Продолжить'}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(50px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes successBounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-20px);
          }
          60% {
            transform: translateY(-10px);
          }
        }

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

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes confetti {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(200px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default OrderModal;