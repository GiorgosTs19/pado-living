import { RefObject, useEffect } from 'react';

export const useOutsideClick = (
  ref: RefObject<HTMLDivElement | undefined>,
  callback: (event: MouseEvent | TouchEvent | null) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent | null) => {
      // DO NOTHING if the element being clicked is the target element or their children
      if (!ref.current || ref.current.contains(event?.target as Node | null)) {
        return;
      }
      callback(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, callback]);
};
