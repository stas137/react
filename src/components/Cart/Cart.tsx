import React from 'react';

import cn from 'clsx';

import { CartBody } from './CartBody/CartBody';
import { CartHeader } from './CartHeader/CartHeader';

import s from './Cart.module.scss';

interface CartProps {
  className?: string;
}

export const Cart = (props: CartProps) => {
  const { className } = props;

  return (
    <div className={cn(s.CartWrapper, className)}>
      <div className={cn(s.Cart, className)}>
        <CartHeader />
        <CartBody />
      </div>
    </div>
  );
};
