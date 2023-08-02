import type { Meta } from '@storybook/react';

import { CartBody } from './CartBody';

// import ProductImg1 from '../../stories/assets/product1.jpg';
// import ProductImg2 from '../../stories/assets/product2.jpg';

const meta: Meta<typeof CartBody> = {
  title: 'Components/CartBody',
  component: CartBody,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const CartBodyStandard = {
  args: {
    // size: 's',
    // price: '1205',
    // title: 'Гель для стирки Ласка (Super)',
    // description:
    //   'Восстановление COLOR для цветного, жидкое средство для стирки 4л (66 стирок)',
    // images: ProductImg1,
  },
};
