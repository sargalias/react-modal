const focusableElementSelectors = [
  'input',
  'select',
  'textarea',
  'a[href]',
  'button',
  '[tabindex]',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false"])',
].join(',');

const getFocusableElements = (root: HTMLElement) => {
  const isFocusable = (element: Element) => {
    if (
      element.hasAttribute('tabindex') &&
      Number(element.getAttribute('tabindex')) < 0
    ) {
      return false;
    }
    return true;
  };

  const sortByTabIndex = (element1: Element, element2: Element) => {
    const tabIndex1 = element1.getAttribute('tabindex');
    const tabIndex2 = element2.getAttribute('tabindex');
    const tabIndex1Num = Number(tabIndex1);
    const tabIndex2Num = Number(tabIndex2);
    return tabIndex1Num - tabIndex2Num;
  };

  const focusableElements = Array.from(
    root.querySelectorAll(focusableElementSelectors),
  ).filter(isFocusable);
  const sortedFocusableElements = focusableElements.sort(sortByTabIndex);
  return sortedFocusableElements as HTMLElement[];
};

export default getFocusableElements;
