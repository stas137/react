import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import AuthPage from './pages/AuthPage/AuthPage';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

//const authScreen = getWithSpinSuspense(lazy(() => import('../screens/AuthScreen')));

root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="auth/*" element={<AuthPage />}>
        <Route path=":mode" element={<AuthPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);
