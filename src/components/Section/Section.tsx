import { ReactNode } from 'react';
import { cn } from '@/utils';

export function Section({ children, className, id }: { children: ReactNode; className?: string; id: string }) {
  return (
    <section id={id} className={cn('px-[5%] py-10 lg:py-20', className)}>
      {children}
    </section>
  );
}

export function SectionHeader({ text, className }: { text: string; className?: string }) {
  return (
    <header className={cn('text-center text-4xl font-bold mb-5', className)}>
      <h2>{text}</h2>
    </header>
  );
}
