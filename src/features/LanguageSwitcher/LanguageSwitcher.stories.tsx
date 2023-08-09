import type { Meta } from '@storybook/react';

import { LanguageSwitcher } from './LanguageSwitcher';

const meta: Meta<typeof LanguageSwitcher> = {
  title: 'Features/LanguageSwitcher',
  component: LanguageSwitcher,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const LanguageSwitcherStandard = {
  args: {},
};
