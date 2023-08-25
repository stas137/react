import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import cn from 'clsx';

import s from './Title.module.scss';

type TitleProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  required?: boolean;
  children: React.ReactNode;
};

export const Title = memo((props: TitleProps) => {
  const { className, required, ...otherProps } = props;

  const { t } = useTranslation();

  return (
    <div
      {...otherProps}
      className={cn(s.Title, required && s.required, className)}
    />
  );
});

Title.displayName = 'Title';
