import React, { Suspense } from 'react';
import { Preview } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import {
  Theme,
  ThemeProvider,
} from '../src/providers/ThemeProvider/ThemeProvider';

import i18n from '../src/config/i18n/i18n';

import 'src/index.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <Suspense fallback={<div>Loading...</div>}>
        <MemoryRouter initialEntries={['/']}>
          <I18nextProvider i18n={i18n}>
            <ThemeProvider initialTheme={Theme.LIGHT_THEME}>
              <Story />
            </ThemeProvider>
          </I18nextProvider>
        </MemoryRouter>
      </Suspense>
    ),
  ],
};

export default preview;
