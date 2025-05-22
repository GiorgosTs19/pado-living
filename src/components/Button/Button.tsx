import { ReactNode } from 'react';
import { cn } from '@/utils';

export function Button({ onClick, children, className }: { onClick?: () => void; children: ReactNode; className?: string }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-36 max-w-md rounded-xl bg-primary text-secondary text-sm md:text-base font-medium py-2 hover:bg-subtitle transition mx-auto cursor-pointer',
        className
      )}
    >
      {children}
    </button>
  );
}
