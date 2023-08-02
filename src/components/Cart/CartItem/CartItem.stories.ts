import type { Meta } from '@storybook/react';

import { CartItem } from './CartItem';

import ProductImg1 from '../../../stories/assets/product1.jpg';

const meta: Meta<typeof CartItem> = {
  title: 'Components/CartItem',
  component: CartItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const CartItemStandard = {
  args: {
    price: '1205',
    title: 'Гель для стирки Ласка (Super)',
    img: ProductImg1,
    count: 1,
  },
};
