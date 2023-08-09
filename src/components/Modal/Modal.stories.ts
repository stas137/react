import type { Meta } from '@storybook/react';

import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const ModalStandard = {
  args: {
    isOpen: true,
    title: 'Modal title',
    children: 'Modal content',
  },
};
