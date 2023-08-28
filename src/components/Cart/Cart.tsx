import React from 'react';

import cn from 'clsx';

import { CartBody } from './CartBody/CartBody';
import { CartHeader } from './CartHeader/CartHeader';

import './Cart.css';

interface CartProps {
  className?: string;
}

export const Cart = (props: CartProps) => {
  const { className } = props;

  return (
    <div className={cn('Cart--wrapper', className)}>
      <div className={cn('Cart', className)}>
        <CartHeader />
        <CartBody />
      </div>
    </div>
  );
};
