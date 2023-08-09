import type { Meta } from '@storybook/react';

import { ThemeSwitcher } from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'Features/ThemeSwitcher',
  component: ThemeSwitcher,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const ThemeSwitcherStandard = {
  args: {},
};
