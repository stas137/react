import React from 'react';
import cn from 'clsx';
import { CartItem } from 'src/components/Cart/CartItem/CartItem';

import './CartBody.css';

interface CartBodyProps {
  className?: string;
}

import ProductImg1 from 'src/stories/assets/product1.jpg';
import ProductImg3 from 'src/stories/assets/product3.jpg';

const cartItemTitle1 = 'Гель для стирки Ласка (Super)';
const cartItemPrice1 = '1205';

export const CartBody = (props: CartBodyProps) => {
  const { className } = props;

  return (
    <div className={cn('CartBody', className)}>
      <CartItem
        title={cartItemTitle1}
        img={ProductImg1}
        price={cartItemPrice1}
        count={1}
      />
      <CartItem
        title={cartItemTitle1}
        img={ProductImg3}
        price={cartItemPrice1}
        count={1}
      />
    </div>
  );
};
