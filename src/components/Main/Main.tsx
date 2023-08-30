import React, { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import cn from 'clsx';

import {
  ProductCard,
  ProductCardSize,
} from 'src/components/ProductCard/ProductCard';
import { createRandomProduct, Product } from 'src/homeworks/ts1/3_write';
import { useInfiniteScroll } from 'src/hooks/useInfiniteScroll';
import ProductImg1 from 'src/stories/assets/product1.jpg';
import ProductImg2 from 'src/stories/assets/product2.jpg';
import ProductImg3 from 'src/stories/assets/product3.jpg';

import s from './Main.module.scss';

interface MainProps {
  className?: string;
}

export const Main = (props: MainProps) => {
  const { className } = props;

  const { t } = useTranslation();
  const triggerRef = useRef<HTMLDivElement>(null);

  // const category = t('household-chemicals-and-hygiene');
  const name = 'laundry-gel-laska-super';
  const desc = 'restore-color-for-color-liquid-laundry-detergent-4l-66-washes';
  const [smallProducts] = useState([
    {
      id: 'small-1',
      size: 's',
      images: ProductImg1,
      price: '1205',
      name,
      desc,
    },
    {
      id: 'small-2',
      size: 's',
      images: ProductImg2,
      price: '1405',
      name,
      desc,
    },
    {
      id: 'small-3',
      size: 's',
      images: ProductImg3,
      price: '1705',
      name,
      desc,
    },
  ]);

  const [products, setProducts] = useState<Product[]>([
    createRandomProduct(new Date().toISOString()),
    createRandomProduct(new Date().toISOString()),
    createRandomProduct(new Date().toISOString()),
  ]);

  const handleIntersection = useCallback(() => {
    setProducts((prev) => [
      ...prev,
      ...[
        createRandomProduct(new Date().toISOString()),
        createRandomProduct(new Date().toISOString()),
        createRandomProduct(new Date().toISOString()),
      ],
    ]);
  }, []);

  useInfiniteScroll({ cb: handleIntersection, triggerRef });

  return (
    <div className={cn(s.MainWrapper, className)}>
      <div className={cn(s.Main)}>
        <div className={cn(s.MainProducts)}>
          {smallProducts.map((product) => (
            <ProductCard
              key={product.id}
              size={product.size as ProductCardSize}
              images={product.images}
              price={product.price}
              name={t(product.name)}
              desc={t(product.desc)}
            />
          ))}
        </div>
        <div className={cn(s.MainProducts)}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              // size={product.size as ProductCardSize}
              images={product.photo}
              price={String(product.price)}
              category={t(product.category.name)}
              name={t(product.name)}
              desc={t(product.desc)}
            />
          ))}
        </div>
      </div>
      <div className={cn(s.MainTrigger)} ref={triggerRef}></div>
    </div>
  );
};
