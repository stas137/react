import React from 'react';
import cn from 'clsx';

import './CartHeader.css';

interface CartHeaderProps {
  className?: string;
}

export const CartHeader = (props: CartHeaderProps) => {
  const { className } = props;

  return <div className={cn('CartHeader', className)}>Cart</div>;
};
