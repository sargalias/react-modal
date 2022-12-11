import { render, fireEvent, screen } from '@testing-library/react';
import { useState } from 'react';
import Modal from './Modal';
import userEvent from '@testing-library/user-event';

const user = userEvent.setup();

const ModalWrapper = () => {
  const [shouldDisplayModal, setShouldDisplayModal] = useState(true);
  const handleHideModal = () => {
    setShouldDisplayModal(false);
  };
  return (
    <div>
      <div>Other content</div>
      {shouldDisplayModal && (
        <Modal id="modal" onClose={handleHideModal}>
          Foo
          <button>Bar</button>
          <input />
        </Modal>
      )}
    </div>
  );
};

const wait = (ms: number = 0) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

describe('Modal', () => {
  test('should close when clicking outside of modal content', async () => {
    render(<ModalWrapper />);
    expect(screen.getByText('Foo')).toBeVisible();

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(screen.getByText('Foo')).toBeVisible();

    await wait(0);

    const modal = screen.getByTestId('modal');
    fireEvent.click(modal);

    expect(screen.queryByText('Foo')).not.toBeInTheDocument();
  });

  test('should close when pressing Escape', async () => {
    render(<ModalWrapper />);
    expect(screen.getByText('Foo')).toBeVisible();

    await user.keyboard('{Escape}');

    expect(screen.queryByText('Foo')).not.toBeInTheDocument();
  });

  test('should trap focus', async () => {
    render(<ModalWrapper />);

    await wait();

    const bar = screen.getByRole('button');
    expect(bar).toHaveFocus();

    await user.keyboard('{Tab}');
    await user.keyboard('{Tab}');
    expect(bar).toHaveFocus();

    await user.keyboard('[Shift]{Tab}');
    await user.keyboard('[Shift]{Tab}');
    expect(bar).toHaveFocus();
  });

  test('should focus first focusable element', async () => {
    render(<ModalWrapper />);

    await wait();

    const bar = screen.getByRole('button');
    expect(bar).toHaveFocus();
  });
});
