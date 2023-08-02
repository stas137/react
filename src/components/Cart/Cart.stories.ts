import type { Meta } from '@storybook/react';

import { Cart } from './Cart';

// import ProductImg1 from '../../stories/assets/product1.jpg';
// import ProductImg2 from '../../stories/assets/product2.jpg';

const meta: Meta<typeof Cart> = {
  title: 'Components/Cart',
  component: Cart,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const CartWithProducts = {
  args: {},
};
