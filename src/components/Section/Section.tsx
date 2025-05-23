import { ReactNode } from 'react';
import { cn } from '@/utils';

export function Section({ children, className, id }: { children: ReactNode; className?: string; id: string }) {
  return (
    <section id={id} className={cn('px-[5%] py-10 lg:py-20 max-w-7xl mx-auto', className)}>
      {children}
    </section>
  );
}

export function SectionHeader({ text, className }: { text: string; className?: string }) {
  return (
    <header className={cn('text-center text-2xl md:text-4xl font-bold mb-5', className)}>
      <h2>{text}</h2>
      <div className="flex items-center justify-center gap-3 mt-3 mb-6">
        <div className="h-px flex-1 bg-secondary/30 backdrop-blur-sm" />
        <div className="w-1.5 h-1.5 rounded-full bg-secondary shadow-sm" />
        <div className="h-px flex-1 bg-secondary/30 backdrop-blur-sm" />
      </div>
    </header>
  );
}
