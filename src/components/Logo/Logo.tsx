import React from 'react';
import { useNavigate } from 'react-router-dom';

import cn from 'clsx';

import { Icon } from 'src/components/Icon/Icon';
import LogoIcon from 'src/stories/assets/logo.svg';

import './Logo.css';

interface LogoProps {
  className?: string;
}

export const Logo = (props: LogoProps) => {
  const { className } = props;

  const navigate = useNavigate();

  return (
    <div className={cn('Logo--wrapper', className)}>
      <div className={cn('Logo', className)}>
        <Icon
          Svg={LogoIcon}
          width={80}
          clickable
          onClick={() => {
            console.log('go home');
            navigate('/');
          }}
        />
      </div>
    </div>
  );
};
