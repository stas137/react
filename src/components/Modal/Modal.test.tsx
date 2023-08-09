import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Modal } from './Modal';

jest.mock('src/stories/assets/close.svg');

describe('Modal.test', () => {
  it('Modal with title', () => {
    const { debug } = render(
      <Modal title="Title" isOpen onClose={jest.fn()}>
        children
      </Modal>
    );

    console.log(debug());

    const title = screen.queryByText('Title');

    expect(title).toBeInTheDocument();
  });

  it('Modal with children', () => {
    const { debug } = render(
      <Modal title="Title" isOpen onClose={jest.fn()}>
        children
      </Modal>
    );

    console.log(debug());

    const title = screen.queryByText('children');

    expect(title).toBeInTheDocument();
  });

  it('Invoke handler onClose when click on close button', async () => {
    const handleClose = jest.fn();

    render(
      <Modal title="title" isOpen onClose={handleClose}>
        children
      </Modal>
    );

    const button = screen.getByTestId('modal-close-button');
    fireEvent.click(button);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('Invoke handler onClose when click on wrapper modal', async () => {
    const handleClose = jest.fn();

    render(
      <Modal title="title" isOpen onClose={handleClose}>
        children
      </Modal>
    );

    const wrapper = screen.getByTestId('modal-wrapper');
    fireEvent.click(wrapper);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('Invoke handler onClose when press on Escape', async () => {
    const handleClose = jest.fn();

    render(
      <Modal title="title" isOpen onClose={handleClose}>
        children
      </Modal>
    );

    const wrapper = screen.getByTestId('modal-wrapper');
    fireEvent.keyDown(wrapper, { key: 'Escape', code: 'Escape' });

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
