import { useEffect } from 'react';
import { assertIsNode } from '../utils';

const useModalCloseListeners = (
  modalContentElement: HTMLElement | null,
  elementToFocusOnClose: HTMLElement,
  onClose: () => void,
) => {
  useEffect(() => {
    const handleClose = () => {
      elementToFocusOnClose.focus();
      onClose();
    };

    const clickEventListener = ({ target }: MouseEvent) => {
      assertIsNode(target);
      if (!modalContentElement) {
        return;
      }
      if (!modalContentElement.contains(target)) {
        handleClose();
      }
    };
    const keyUpEventListener = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    const timeoutId = setTimeout(() => {
      // this is here because of react behaviour described in https://github.com/facebook/react/issues/24657
      document.body.addEventListener('keyup', keyUpEventListener);
      document.body.addEventListener('click', clickEventListener);
    }, 0);
    return () => {
      clearTimeout(timeoutId);
      document.body.removeEventListener('keyup', keyUpEventListener);
      document.body.removeEventListener('click', clickEventListener);
    };
  }, [modalContentElement, elementToFocusOnClose, onClose]);
};

export default useModalCloseListeners;
