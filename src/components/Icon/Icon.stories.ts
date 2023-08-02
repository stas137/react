import type { Meta } from '@storybook/react';

import { Icon } from './Icon';

import PlusIcon from '../../stories/assets/plus.svg';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
};

export default meta;

export const IconClickable = {
  args: {
    clickable: true,
    Svg: PlusIcon,
  },
};

export const IconNonClickable = {
  args: {
    Svg: PlusIcon,
  },
};
