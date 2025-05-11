import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LangProvider } from '@/lang';
import { ModalProvider } from '@/providers';

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    <BrowserRouter>
      <LangProvider>
        <ModalProvider>{children}</ModalProvider>
      </LangProvider>
    </BrowserRouter>
  );
}
