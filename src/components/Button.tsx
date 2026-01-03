interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'default' | 'lg';
}

export function Button({
  children,
  variant = 'primary',
  size = 'default',
  className = '',
  ...props
}: ButtonProps) {
  const variants = {
    primary: 'bg-primary hover:bg-pink-600 text-white',
    secondary: 'bg-secondary hover:bg-secondary/80 text-secondary-foreground',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    outline: 'border-2 bg-transparent hover:bg-accent'
  };

  const sizes = {
    sm: 'px-3 py-1 text-sm',
    default: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-md
        transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
