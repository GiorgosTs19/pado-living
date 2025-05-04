// @ts-nocheck
import en from '../en.json';
import gr from '../gr.json';
import { useContext } from 'react';
import {
  LangContext,
  LangContextType,
  LangTokens,
  useLangReturnType,
} from './constants.ts';

/** Map the json lang token files to their respective languages, so they can be dynamically used by the hook. */
const LANG_TOKENS = {
  en: en,
  gr: gr,
};

/**
 * Hook that provides the active language,
 * a function to switch between the two available languages,
 * and if a path is provided, then the langTokens of said path in the active language.
 */
export function useLang(): useLangReturnType {
  const { activeLang, switchLang } = useContext<LangContextType>(LangContext);

  function getTranslation(path: string): string | undefined {
    const value = path
      .split('.')
      .reduce(
        (acc, key: string) =>
          acc && acc[key as keyof LangTokens]
            ? acc[key as keyof LangTokens]
            : undefined,
        LANG_TOKENS[activeLang],
      );
    return value ?? undefined;
  }

  return {
    activeLang,
    switchLang,
    getTranslation,
  };
}
