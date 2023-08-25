import type { Meta } from '@storybook/react';

import { EditProductPage } from './EditProductPage';

const meta: Meta<typeof EditProductPage> = {
  title: 'Pages/EditProductPage',
  component: EditProductPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const EditProductPageStandard = {
  args: {},
};
