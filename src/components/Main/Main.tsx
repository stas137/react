import React, { useCallback, useRef, useState } from 'react';
import cn from 'clsx';
import { useTranslation } from 'react-i18next';
import {
  ProductCard,
  ProductCardSize,
} from 'src/components/ProductCard/ProductCard';
import { useInfiniteScroll } from 'src/hooks/useInfiniteScroll';
import { Product, createRandomProduct } from 'src/homeworks/ts1/3_write';

import './Main.css';

import ProductImg1 from 'src/stories/assets/product1.jpg';
import ProductImg2 from 'src/stories/assets/product2.jpg';
import ProductImg3 from 'src/stories/assets/product3.jpg';

interface MainProps {
  className?: string;
}

export const Main = (props: MainProps) => {
  const { className } = props;

  const { t } = useTranslation();
  const triggerRef = useRef<HTMLDivElement>(null);

  // const category = t('household-chemicals-and-hygiene');
  const title = t('laundry-gel-laska-super');
  const description = t(
    'restore-color-for-color-liquid-laundry-detergent-4l-66-washes'
  );

  const [smallProducts] = useState([
    {
      id: 'small-1',
      size: 's',
      images: ProductImg1,
      price: '1205',
      title,
      description,
    },
    {
      id: 'small-2',
      size: 's',
      images: ProductImg2,
      price: '1405',
      title,
      description,
    },
    {
      id: 'small-3',
      size: 's',
      images: ProductImg3,
      price: '1705',
      title,
      description,
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
    <div className={cn('Main--wrapper', className)}>
      <div className={cn('Main')}>
        <div className={cn('Main--products')}>
          {smallProducts.map((product) => (
            <ProductCard
              key={product.id}
              size={product.size as ProductCardSize}
              images={product.images}
              price={product.price}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
        <div className={cn('Main--products')}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              // size={product.size as ProductCardSize}
              images={product.photo}
              price={String(product.price)}
              category={t(product.category.name)}
              title={t(product.name)}
              description={t(product.desc)}
            />
          ))}
        </div>
      </div>
      <div className={cn('Main--trigger')} ref={triggerRef}></div>
    </div>
  );
};
