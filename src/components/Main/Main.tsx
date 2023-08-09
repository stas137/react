import React from 'react';
import cn from 'clsx';
import { useTranslation } from 'react-i18next';
import { ProductCard } from 'src/components/ProductCard/ProductCard';

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
  const category = t('household-chemicals-and-hygiene');
  const title = t('laundry-gel-laska-super');
  const description = t(
    'restore-color-for-color-liquid-laundry-detergent-4l-66-washes'
  );

  return (
    <div className={cn('Main--wrapper', className)}>
      <div className={cn('Main')}>
        <div className={cn('Main--products')}>
          <ProductCard
            size="s"
            images={ProductImg1}
            price="1205"
            title={title}
            description={description}
          />
          <ProductCard
            size="s"
            images={ProductImg2}
            price="1405"
            title={title}
            description={description}
          />
          <ProductCard
            size="s"
            images={ProductImg3}
            price="1605"
            title={title}
            description={description}
          />
        </div>
        <div className={cn('Main--products')}>
          <ProductCard
            size="m"
            images={[ProductImg1, ProductImg2, ProductImg3]}
            category={category}
            price="1205"
            title={title}
            description={description}
          />
          <ProductCard
            size="m"
            images={[ProductImg1, ProductImg2, ProductImg3]}
            category={category}
            price="1405"
            title={title}
            description={description}
          />
          <ProductCard
            size="m"
            images={[ProductImg1, ProductImg2, ProductImg3]}
            category={category}
            price="1605"
            title={title}
            description={description}
          />
        </div>
      </div>
    </div>
  );
};
