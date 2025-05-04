import { createContext } from 'react';

interface ModalContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined);
