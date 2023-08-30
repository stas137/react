import type { Meta } from '@storybook/react';

import { ModalDemo } from './ModalDemo';

import 'src/index.scss';

const meta: Meta<typeof ModalDemo> = {
  title: 'Components/ModalDemo',
  component: ModalDemo,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const ModalDemoStandard = {
  args: {},
};
