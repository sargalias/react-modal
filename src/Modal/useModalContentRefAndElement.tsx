import { useState, useCallback } from 'react';

const useModalContentRefAndElement = () => {
  const [modalContentElement, setModalContentElement] =
    useState<HTMLElement | null>(null);

  const modalContentRef = useCallback(
    (node: HTMLElement | null) => {
      if (node !== null) {
        setModalContentElement(node);
      }
    },
    [setModalContentElement],
  );

  return [modalContentRef, modalContentElement] as const;
};

export default useModalContentRefAndElement;

