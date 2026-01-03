interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({ className = '', ...props }: TextareaProps) {
  return (
    <textarea
      className={`w-full min-h-32 px-3 py-2 text-base rounded-md border border-pink-200
        bg-white transition-all duration-200 outline-none resize-none
        focus:border-primary focus:ring-2 focus:ring-primary/20
        disabled:opacity-50 disabled:cursor-not-allowed
        placeholder:text-gray-400 ${className}`}
      {...props}
    />
  );
}
