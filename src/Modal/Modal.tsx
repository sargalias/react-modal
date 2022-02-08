import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import useFocusTrap from '../utilities/useFocusTrap';
import useModalCloseListeners from './useModalCloseListeners';
import style from './Modal.module.scss';
import useModalContentRefAndElement from './useModalContentRefAndElement';

type ModalProps = {
  onClose: () => void;
  readonly returnFocusTo?: HTMLElement;
  readonly initialFocusRef?: React.RefObject<HTMLElement>;
  readonly children: React.ReactNode;
  readonly ariaLabelledby?: string;
  readonly disablePortal?: boolean;
  readonly portalContainerElement?: Element;
};

const Modal = (props: ModalProps) => {
  const {
    initialFocusRef,
    ariaLabelledby,
    portalContainerElement = document.querySelector('body') as Element,
    disablePortal = false,
    onClose,
  } = props;
  const [elementToFocusOnClose] = useState(() => {
    return props.returnFocusTo || (document.activeElement! as HTMLElement);
  });

  useEffect(() => {
    if (initialFocusRef?.current) {
      initialFocusRef.current.focus();
    }
  }, [initialFocusRef]);

  const [modalContentRef, modalContentElement] = useModalContentRefAndElement();
  useFocusTrap(modalContentElement);
  useModalCloseListeners(modalContentElement, elementToFocusOnClose, onClose);

  const modalContent = (
    <dialog
      className={style.Modal}
      aria-modal="true"
      aria-labelledby={ariaLabelledby}
    >
      <div className={style.Modal_Content} ref={modalContentRef}>
        {props.children}
      </div>
    </dialog>
  );

  return disablePortal
    ? modalContent
    : createPortal(modalContent, portalContainerElement);
};

export default Modal;
