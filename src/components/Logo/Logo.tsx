import React from 'react';
import cn from 'clsx';

import { Icon } from '../Icon/Icon';
import './Logo.css';

import LogoIcon from '../../stories/assets/logo.svg';

interface LogoProps {
  className?: string;
}

export const Logo = (props: LogoProps) => {
  const { className } = props;

  return (
    <div className={cn('Logo--wrapper', className)}>
      <div className={cn('Logo', className)}>
        <Icon Svg={LogoIcon} width={80} />
      </div>
    </div>
  );
};
