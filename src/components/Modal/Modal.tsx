import React from 'react';
import cn from 'clsx';
import { Icon } from '../Icon/Icon';

import './Modal.css';

import CartIcon from '../../stories/assets/close.svg';

interface ModalProps {
  className?: string;
  title: string;
  content: string;
}

export const Modal = (props: ModalProps) => {
  const { className, title, content } = props;

  return (
    <div className={cn('Modal--wrapper')}>
      <div className={cn('Modal', className)}>
        <div className={cn('Modal--header')}>
          <span>{title}</span>
          <Icon
            className={cn('Modal--close-icon')}
            Svg={CartIcon}
            clickable
            width={24}
            height={24}
            onClick={() => console.log('close modal')}
          />
        </div>
        <div className={cn('Modal--content')}>
          <span>{content}</span>
        </div>
      </div>
    </div>
  );
};
