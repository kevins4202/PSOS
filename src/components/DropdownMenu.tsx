import { useState, useRef, useEffect } from 'react';

interface DropdownMenuProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
}

export function DropdownMenu({ trigger, children }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-1">
        {trigger}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg border
          border-pink-100 py-1 z-50 animate-in fade-in-0 zoom-in-95 duration-200">
          {children}
        </div>
      )}
    </div>
  );
}

export function DropdownMenuItem({
  children,
  onClick
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-accent
        hover:text-accent-foreground transition-colors cursor-pointer"
    >
      {children}
    </button>
  );
}
