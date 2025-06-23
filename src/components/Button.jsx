// src/components/Button.jsx
const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseClasses = 'py-3 px-6 rounded-full font-medium transition-all duration-300 text-center inline-block';
  
  const variantClasses = {
    primary: 'bg-amber-600 hover:bg-amber-700 text-white',
    secondary: 'bg-white hover:bg-gray-100 text-amber-800 border border-amber-600',
    outline: 'bg-transparent hover:bg-amber-50 text-amber-800 border border-amber-600',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;