import type { Meta } from '@storybook/react';

import { Main } from './Main';

const meta: Meta<typeof Main> = {
  title: 'Components/Main',
  component: Main,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;

export const MainStandard = {
  args: {},
};
