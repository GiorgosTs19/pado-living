import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LangProvider } from '@/lang';

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    <BrowserRouter>
      <LangProvider>{children}</LangProvider>
    </BrowserRouter>
  );
}
