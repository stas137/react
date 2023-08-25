import type { Meta } from '@storybook/react';

import { CreateProductPage } from './CreateProductPage';

const meta: Meta<typeof CreateProductPage> = {
  title: 'Pages/CreateProductPage',
  component: CreateProductPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const CreateProductPageStandard = {
  args: {},
};
