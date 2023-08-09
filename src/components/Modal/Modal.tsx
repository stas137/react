import React, { useCallback, useEffect, useRef, useState } from 'react';
import cn from 'clsx';
import { Icon } from '../Icon/Icon';
import { Portal } from '../Portal/Portal';
import { createContainer } from 'src/utils/createContainer/createContainer';
import { destroyContainer } from 'src/utils/destroyContainer/destroyContainer';
import CloseIcon from 'src/stories/assets/close.svg';

import './Modal.css';

interface ModalProps {
  className?: string;
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const MODAL_CONTAINER_ID = 'modal-container-id';

export const Modal = (props: ModalProps) => {
  const { className, title, children, isOpen, onClose } = props;

  const [isMounted, setIsMounted] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      createContainer({ id: MODAL_CONTAINER_ID });
      setIsMounted(true);
    }

    if (!isOpen) {
      setIsMounted(false);
      destroyContainer({ id: MODAL_CONTAINER_ID });
    }
  }, [isOpen]);

  useEffect(() => {
    const handleWrapperClick = (event: MouseEvent) => {
      const { target } = event;

      if (target === modalRef.current) {
        onClose?.();
      }
    };

    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose?.();
      }
    };

    window.addEventListener('click', handleWrapperClick);
    window.addEventListener('keydown', handleEscapePress);

    return () => {
      window.removeEventListener('click', handleWrapperClick);
      window.removeEventListener('keydown', handleEscapePress);
    };
  }, [onClose]);

  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  if (!isMounted) {
    return null;
  }

  return (
    <Portal id={MODAL_CONTAINER_ID}>
      <div
        data-testid="modal-wrapper"
        className={cn('Modal--wrapper')}
        ref={modalRef}
      >
        <div
          className={cn('Modal', className)}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className={cn('Modal--header')}>
            <span>{title || 'Default title'}</span>
            <Icon
              data-testid="modal-close-button"
              className={cn('Modal--close-icon')}
              Svg={CloseIcon}
              clickable
              width={24}
              height={24}
              onClick={handleClose}
            />
          </div>
          <div className={cn('Modal--content')}>
            <span>{children || 'Default content'}</span>
          </div>
        </div>
      </div>
    </Portal>
  );
};
