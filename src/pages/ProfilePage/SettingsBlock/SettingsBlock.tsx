import React, { memo, useMemo } from 'react';

import cn from 'clsx';

import { Divider } from 'antd';

import { ChangePasswordCompletedForm } from '../ChangePasswordCompletedForm';
import { ProfileCompletedForm } from '../ProfileCompletedForm';

export type SettingsBlockProps = {
  className?: string;
};

export type ProfileType = {
  name: string;
  about: string;
};

export const SettingsBlock = memo<SettingsBlockProps>(
  ({ className }: SettingsBlockProps) => {
    const profile = useMemo<ProfileType>(
      () => ({
        name: 'Ivan',
        about: 'About',
      }),
      []
    );

    return (
      <div className={cn(className)}>
        <ProfileCompletedForm profile={profile} />
        <Divider />
        <ChangePasswordCompletedForm />
      </div>
    );
  }
);

SettingsBlock.displayName = 'SettingsBlock';
