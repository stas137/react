import React, { useState } from 'react';
import cn from 'clsx';
import { ButtonCart } from '../../ButtonCart/ButtonCart';
import { Button } from '../../Button/Button';

import './CartItem.css';

interface CartItemProps {
  className?: string;
  img: string;
  title: string;
  price: string;
  count: number;
}

export const CartItem = (props: CartItemProps) => {
  const { className, img, title, price, count } = props;

  const [countProducts, setCountProducts] = useState(count);

  return (
    <div className={cn('CartItem', className)}>
      <div className={cn('CartItem--wrapper-image')}>
        <img className={cn('CartItem--image')} src={img} alt={title} />
      </div>
      <div className={cn('CartItem--title')}>
        <span>{title}</span>
      </div>
      <div className={cn('CartItem--price')}>
        <span>{price}₽</span>
      </div>
      <div className={cn('CartItem--delete-button')}>
        <Button>Delete</Button>
      </div>
      <div className={cn('CartItem--count')}>
        <ButtonCart
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />
      </div>
    </div>
  );
};
