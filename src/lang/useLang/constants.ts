import { Context, createContext } from 'react';

/** Generic type for the langTokens returned by the useLang hook. */
export type LangTokens = { [key: string]: string | LangTokens };

/** Supported languages. */
export type AllowedLanguages = 'en' | 'gr';

/** Lang Context Type */
export type LangContextType = {
  activeLang: AllowedLanguages;
  switchLang: () => void;
};

/** Return type for the useLang hook, LangTokens are optional (only if a path is provided). */
export type useLangReturnType = LangContextType & {
    getTranslation: (path:string) => string | undefined
};

export const LangContext: Context<LangContextType> =
  createContext<LangContextType>({
    activeLang: 'en',
    switchLang: () => {},
  });
