import React from 'react';
import cn from 'clsx';

import { Button } from 'src/components/Button/Button';
import { Icon } from 'src/components/Icon/Icon';
import { Logo } from 'src/components/Logo/Logo';
import { ThemeSwitcher } from 'src/features/ThemeSwitcher/ThemeSwitcher';
import { LanguageSwitcher } from 'src/features/LanguageSwitcher/LanguageSwitcher';

import './Header.css';

import CartIcon from 'src/stories/assets/cart.svg';

interface HeaderProps {
  className?: string;
}

export const Header = (props: HeaderProps) => {
  const { className } = props;

  return (
    <header className={cn('Header--wrapper')}>
      <div className={cn('Header', className)}>
        <Logo />
        <ThemeSwitcher className={cn('Header--theme')} />
        <LanguageSwitcher />
        <Button
          addonLeft={<Icon Svg={CartIcon} width={20} height={20} />}
          width="auto"
        />
      </div>
    </header>
  );
};
