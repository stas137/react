import type { Meta } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;

export const InputStandard = {
  args: {
    placeholder: 'Placeholder',
    value: 'Text',
  },
};
