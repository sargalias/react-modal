import { useEffect } from 'react';
import getFocusableElements from '../getFocusableElements';

type UseFocusTrap = {
  (element: HTMLElement | null): void;
};

const useFocusTrap: UseFocusTrap = (element) => {
  useEffect(() => {
    if (!element) {
      return;
    }
    const focusableElements = getFocusableElements(element);
    const elementFocusHandler = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (!e.shiftKey) {
          if (
            document.activeElement ===
            focusableElements[focusableElements.length - 1]
          ) {
            focusableElements[0].focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === focusableElements[0]) {
            focusableElements[focusableElements.length - 1].focus();
            e.preventDefault();
          }
        }
      }
    };
    document.body.addEventListener('keydown', elementFocusHandler);
    return () => {
      document.body.removeEventListener('keydown', elementFocusHandler);
    };
  }, [element]);
};

export default useFocusTrap;
