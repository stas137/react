import type { Meta, StoryObj } from '@storybook/react';

import { ButtonCart } from './ButtonCart';

type Story = StoryObj<typeof ButtonCart>;

const meta: Meta<typeof ButtonCart> = {
  title: 'Components/ButtonCart',
  component: ButtonCart,
  tags: ['autodocs'],
};

export default meta;

export const ButtonCartWithProducts: Story = {
  args: {
    countProducts: 1,
  },
};

export const ButtonCartWithoutProducts = {
  args: {},
};
