import React from 'react';
import type { Meta } from '@storybook/react';

import { Layout } from './Layout';
import { Header } from 'src/components/Header/Header';
import { Main } from 'src/components/Main/Main';

const meta: Meta<typeof Layout> = {
  title: 'Components/Layout',
  component: Layout,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;

export const LayoutStandard = {
  args: {
    header: <Header />,
    body: <Main />,
  },
};
