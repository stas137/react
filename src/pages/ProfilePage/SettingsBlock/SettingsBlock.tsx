import React, { memo } from 'react';

import cn from 'clsx';

import { Divider } from 'antd';

import { ChangePasswordCompletedForm } from '../ChangePasswordCompletedForm';
import { ProfileCompletedForm } from '../ProfileCompletedForm';

export type SettingsBlockProps = {
  className?: string;
};

export const SettingsBlock = memo<SettingsBlockProps>(
  ({ className }: SettingsBlockProps) => (
    <div className={cn(className)}>
      <ProfileCompletedForm />
      <Divider />
      <ChangePasswordCompletedForm />
    </div>
  )
);

SettingsBlock.displayName = 'SettingsBlock';
