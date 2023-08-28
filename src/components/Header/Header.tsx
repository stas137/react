import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import cn from 'clsx';

import { Button } from 'src/components/Button/Button';
import { Icon } from 'src/components/Icon/Icon';
import { Logo } from 'src/components/Logo/Logo';
import { LanguageSwitcher } from 'src/features/LanguageSwitcher/LanguageSwitcher';
import { ThemeSwitcher } from 'src/features/ThemeSwitcher/ThemeSwitcher';
import { CreateProductPage } from 'src/pages/CreateProductPage';
import CartIcon from 'src/stories/assets/cart.svg';
import PlusIcon from 'src/stories/assets/plus.svg';

import { Modal } from '../Modal';
import { ProfileSwitcher } from '../ProfileSwitcher';

import './Header.css';

interface HeaderProps {
  className?: string;
}

export const Header = (props: HeaderProps) => {
  const { className } = props;

  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const content = <CreateProductPage />;

  return (
    <header className={cn('Header--wrapper')}>
      <div className={cn('Header', className)}>
        <Logo />
        <ProfileSwitcher className={cn('Header--theme')} />
        <ThemeSwitcher />
        <LanguageSwitcher />
        <Button
          addonLeft={<Icon Svg={CartIcon} width={20} height={20} />}
          width="auto"
          onClick={() => {
            navigate('/cart');
          }}
        />
        <Button
          addonLeft={<Icon Svg={PlusIcon} width={20} height={20} />}
          width="auto"
          onClick={() => {
            setIsModalOpen(true);
          }}
        />
      </div>
      <Modal isOpen={isModalOpen} onClose={handleClose}>
        {content}
      </Modal>
    </header>
  );
};
