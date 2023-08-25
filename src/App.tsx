import React from 'react';
import { I18nextProvider } from 'react-i18next';

import { Header } from 'src/components/Header/Header';
import { Layout } from 'src/components/Layout/Layout';
import { Main } from 'src/components/Main/Main';
import {
  Theme,
  ThemeProvider,
} from 'src/providers/ThemeProvider/ThemeProvider';

import i18n from './config/i18n/i18n';

import './App.css';

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider initialTheme={Theme.LIGHT_THEME}>
          <Layout header={<Header />} body={<Main />} />
        </ThemeProvider>
      </I18nextProvider>
    </React.Suspense>
  );
}

export default App;
