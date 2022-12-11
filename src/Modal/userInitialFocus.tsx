import { useEffect } from 'react';
import getFocusableElements from '../utilities/getFocusableElements';

type UseInitialFocusProps = {
  readonly initialFocusRef?: React.RefObject<HTMLElement>;
  modalContentElement: HTMLElement | null;
};

const useInitialFocus = (props: UseInitialFocusProps) => {
  const { initialFocusRef, modalContentElement } = props;

  useEffect(() => {
    if (initialFocusRef?.current) {
      initialFocusRef.current.focus();
    } else if (modalContentElement) {
      const focusableElements = getFocusableElements(modalContentElement);
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      } else {
        modalContentElement.focus();
      }
    }
  }, [initialFocusRef, modalContentElement]);
};
export default useInitialFocus;
