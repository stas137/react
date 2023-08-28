import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import cn from 'clsx';

import { CartItem } from 'src/components/Cart/CartItem/CartItem';
import { createRandomProduct, Product } from 'src/homeworks/ts1/3_write';

import './CartBody.css';

interface CartBodyProps {
  className?: string;
}

export const CartBody = (props: CartBodyProps) => {
  const { className } = props;

  const { t } = useTranslation();

  const [products] = useState<Product[]>([
    createRandomProduct(new Date().toISOString()),
    createRandomProduct(new Date().toISOString()),
    createRandomProduct(new Date().toISOString()),
  ]);

  return (
    <div className={cn('CartBody', className)}>
      {products.map((product) => (
        <CartItem
          key={product.id}
          name={t(product.name)}
          img={
            typeof product.photo === 'string' ? product.photo : product.photo[0]
          }
          price={product.price}
          count={1}
        />
      ))}
    </div>
  );
};
