interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className = '', ...props }: InputProps) {
  return (
    <input
      className={`w-full h-9 px-3 py-1 text-base rounded-md border border-pink-200
        bg-white transition-all duration-200 outline-none
        focus:border-primary focus:ring-2 focus:ring-primary/20
        disabled:opacity-50 disabled:cursor-not-allowed
        placeholder:text-gray-400 ${className}`}
      {...props}
    />
  );
}
