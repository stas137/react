import React, { useCallback, useState } from 'react';
import cn from 'clsx';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import { Input } from '../Input/Input';

import './ModalDemo.css';

interface ModalDemoProps {
  className?: string;
}

export const ModalDemo = (props: ModalDemoProps) => {
  const { className } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // const { t } = useTranslation();

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className={cn('ModalDemo--wrapper', className)}>
      <div className={cn('ModalDemo')}>
        <Input
          label={'Input title:'}
          value={title}
          onChange={(val) => {
            setTitle(val);
          }}
        />
        <Input
          label={'Input content:'}
          value={content}
          onChange={(val) => {
            setContent(val);
          }}
        />
        <Button
          className={cn('ModalDemo--button')}
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Open modal
        </Button>
        <Modal isOpen={isOpen} title={title} onClose={handleClose}>
          {content}
        </Modal>
      </div>
    </div>
  );
};
