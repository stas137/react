import type { Meta } from '@storybook/react';

import { AuthPage } from './AuthPage';

const meta: Meta<typeof AuthPage> = {
  title: 'Pages/AuthPage',
  component: AuthPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const AuthPageStandard = {
  args: {},
};
