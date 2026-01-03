interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl border border-pink-100 p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
