import React from 'react';
import cn from 'clsx';
import { ProductCard } from '../ProductCard/ProductCard';

import './Main.css';

import ProductImg1 from '../../stories/assets/product1.jpg';
import ProductImg2 from '../../stories/assets/product2.jpg';
import ProductImg3 from '../../stories/assets/product3.jpg';

interface MainProps {
  className?: string;
}

export const Main = (props: MainProps) => {
  const { className } = props;

  return (
    <div className={cn('Main--wrapper', className)}>
      <div className={cn('Main')}>
        <div className={cn('Main--products')}>
          <ProductCard
            size="s"
            images={ProductImg1}
            price="1205"
            title="Гель для стирки Ласка (Super)"
            description="Восстановление COLOR для цветного, жидкое средство для стирки 4л (66 стирок)"
          />
          <ProductCard
            size="s"
            images={ProductImg2}
            price="1405"
            title="Гель для стирки Ласка (Super)"
            description="Восстановление COLOR для цветного, жидкое средство для стирки 4л (66 стирок)"
          />
          <ProductCard
            size="s"
            images={ProductImg3}
            price="1605"
            title="Гель для стирки Ласка (Super)"
            description="Восстановление COLOR для цветного, жидкое средство для стирки 4л (66 стирок)"
          />
        </div>
        <div className={cn('Main--products')}>
          <ProductCard
            size="m"
            images={[ProductImg1, ProductImg2, ProductImg3]}
            category="Бытовая химия и гигиена"
            price="1205"
            title="Гель для стирки Ласка (Super)"
            description="Восстановление COLOR для цветного, жидкое средство для стирки 4л (66 стирок)"
          />
          <ProductCard
            size="m"
            images={[ProductImg1, ProductImg2, ProductImg3]}
            category="Бытовая химия и гигиена"
            price="1405"
            title="Гель для стирки Ласка (Super)"
            description="Восстановление COLOR для цветного, жидкое средство для стирки 4л (66 стирок)"
          />
          <ProductCard
            size="m"
            images={[ProductImg1, ProductImg2, ProductImg3]}
            category="Бытовая химия и гигиена"
            price="1605"
            title="Гель для стирки Ласка (Super)"
            description="Восстановление COLOR для цветного, жидкое средство для стирки 4л (66 стирок)"
          />
        </div>
      </div>
    </div>
  );
};
