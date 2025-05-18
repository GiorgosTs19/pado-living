import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function replaceString(template: string, values: Record<string, string>): string {
  return template.replace(/{{(.*?)}}/g, (_, key) => {
    return key.trim() in values ? values[key.trim()] : `{{${key}}}`;
  });
}
