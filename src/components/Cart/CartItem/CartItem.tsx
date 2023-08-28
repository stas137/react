import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import cn from 'clsx';

import { Button } from 'src/components/Button/Button';
import { ButtonCart } from 'src/components/ButtonCart/ButtonCart';
import { RUB_USD } from 'src/components/ProductCard/ProductCard';

import './CartItem.css';

interface CartItemProps {
  className?: string;
  img: string;
  name: string;
  price: number;
  count: number;
}

export const CartItem = (props: CartItemProps) => {
  const { className, img, name, price, count } = props;

  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage;

  const [countProducts, setCountProducts] = useState(count);

  return (
    <div className={cn('CartItem', className)}>
      <div className={cn('CartItem--wrapper-image')}>
        <img className={cn('CartItem--image')} src={img} alt={name} />
      </div>
      <div className={cn('CartItem--title')}>
        <span>{name}</span>
      </div>
      <div className={cn('CartItem--price')}>
        <span>
          {language === 'ru'
            ? price
            : String((Number(price) / RUB_USD).toFixed(2))}
          {language === 'ru' ? '₽' : '$'}
        </span>
      </div>
      <div className={cn('CartItem--delete-button')}>
        <Button>{t('screens.CartScreen.delete')}</Button>
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
