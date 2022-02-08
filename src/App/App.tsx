import { startTransition, useRef, useState } from 'react';
import Modal from '../Modal';
import style from './App.module.scss';

const App = () => {
  const [shouldDisplayModal, setShouldDisplayModal] = useState(false);
  const [shouldShowAudi, setShouldShowAudi] = useState(false);
  const linkRef = useRef(null);

  const handleDisplayModal = () => {
    startTransition(() => {
      setShouldDisplayModal(true);
    });
  };

  const handleHideModal = () => {
    startTransition(() => {
      setShouldDisplayModal(false);
    });
  };

  return (
    <div className={style.App}>
      <button onClick={handleDisplayModal}>Display modal</button>
      {shouldDisplayModal && (
        <Modal
          ariaLabelledby="modal-title"
          onClose={handleHideModal}
          initialFocusRef={linkRef}
        >
          <h2 id="modal-title">Featured car manufacturers</h2>
          <ul>
            <li>Ferarri</li>
            <li>Audi</li>
            <li>Toyota</li>
            {shouldShowAudi && <li>Audi</li>}
          </ul>
          <div>
            <a href="#foo" ref={linkRef}>
              See foo
            </a>
          </div>
          <div>
            <a href="#bar">See bar</a>
          </div>
          <div>
            <button onClick={() => setShouldShowAudi(true)}>Add Audi</button>
            <button onClick={() => setShouldShowAudi(false)}>
              Remove Audi
            </button>
          </div>
          <p>
            The modal is accessible. Click outside of the modal or press ESC on
            your keyboard to close it.
          </p>
        </Modal>
      )}
      <div className={style.App_Code}>
        View code on{' '}
        <a
          href="https://github.com/sargalias/react-modal"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default App;
