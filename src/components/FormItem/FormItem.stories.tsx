import type { Meta } from '@storybook/react';

import { FormItem } from './FormItem';

const meta: Meta<typeof FormItem> = {
  title: 'Components/FormItem',
  component: FormItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const FormItemStandard = {
  args: {
    title: 'Test',
    required: true,
    children: 'Text',
  },
};
