import type { Meta } from '@storybook/react';

import ProductImg1 from '../../stories/assets/product1.jpg';
import ProductImg2 from '../../stories/assets/product2.jpg';
import ProductImg3 from '../../stories/assets/product3.jpg';
import { ProductCard } from './ProductCard';

const meta: Meta<typeof ProductCard> = {
  title: 'Components/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
};

export default meta;

export const ProductCardSmall = {
  args: {
    size: 's',
    price: '1205',
    name: 'Гель для стирки Ласка (Super)',
    desc: 'Восстановление COLOR для цветного, жидкое средство для стирки 4л (66 стирок)',
    images: ProductImg1,
  },
};

export const ProductCardStandard = {
  args: {
    size: 'm',
    category: 'Бытовая химия и гигиена',
    price: '1205',
    name: 'Гель для стирки Ласка (Super)',
    desc: 'Восстановление COLOR для цветного, жидкое средство для стирки 4л (66 стирок)',
    images: [ProductImg1, ProductImg2, ProductImg3],
  },
};
