import React from 'react';
import { useTranslation } from 'react-i18next';

import cn from 'clsx';

import './CartHeader.css';

interface CartHeaderProps {
  className?: string;
}

export const CartHeader = (props: CartHeaderProps) => {
  const { className } = props;

  const { t } = useTranslation();

  return (
    <div className={cn('CartHeader', className)}>
      {t('screens.CartScreen.name')}
    </div>
  );
};
