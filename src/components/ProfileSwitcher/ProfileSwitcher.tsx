import React from 'react';
import { useNavigate } from 'react-router-dom';

import cn from 'clsx';

import { Icon } from 'src/components/Icon/Icon';
import ProfileIcon from 'src/stories/assets/profile.svg';

import s from './ProfileSwitcher.module.scss';

interface ProfileSwitcherProps {
  className?: string;
}

export const ProfileSwitcher = (props: ProfileSwitcherProps) => {
  const { className } = props;

  const navigate = useNavigate();

  return (
    <div className={cn(s.ProfileSwitcher, className)}>
      <Icon
        Svg={ProfileIcon}
        width={24}
        height={24}
        clickable
        onClick={() => {
          navigate('/profile');
        }}
      />
    </div>
  );
};
