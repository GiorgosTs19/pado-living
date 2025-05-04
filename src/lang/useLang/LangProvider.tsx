import {ReactElement, ReactNode, useCallback, useState} from 'react';
import { AllowedLanguages, LangContext } from './constants.ts';

/** Global Context provider for language related information. */

export function LangProvider({ children }:{children:ReactNode}): ReactElement {
  const [activeLang, setActiveLang] = useState<AllowedLanguages>('en');

  /** Switch between the available languages. */
  const switchLang = useCallback(() => {
    setActiveLang((prev) => (prev === 'en' ? 'gr' : 'en'));
  }, []);

  return (
    <LangContext.Provider value={{ activeLang, switchLang }}>
      {children}
    </LangContext.Provider>
  );
}
