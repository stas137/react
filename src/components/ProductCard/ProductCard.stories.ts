import type { Meta } from '@storybook/react';

import { ProductCard } from './ProductCard';

import ProductImg1 from '../../stories/assets/product1.jpg';
import ProductImg2 from '../../stories/assets/product2.jpg';
import ProductImg3 from '../../stories/assets/product3.jpg';

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
    title: 'Гель для стирки Ласка (Super)',
    description:
      'Восстановление COLOR для цветного, жидкое средство для стирки 4л (66 стирок)',
    images: ProductImg1,
  },
};

export const ProductCardStandard = {
  args: {
    size: 'm',
    category: 'Бытовая химия и гигиена',
    price: '1205',
    title: 'Гель для стирки Ласка (Super)',
    description:
      'Восстановление COLOR для цветного, жидкое средство для стирки 4л (66 стирок)',
    images: [ProductImg1, ProductImg2, ProductImg3],
  },
};
