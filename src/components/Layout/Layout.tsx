import React from 'react';
import cn from 'clsx';

import { Header } from '../Header/Header';
import { Main } from '../Main/Main';

import './Layout.css';

interface LayoutProps {
  className?: string;
}

export const Layout = (props: LayoutProps) => {
  const { className } = props;

  return (
    <div className={cn('Layout', className)}>
      <Header />
      <Main />
    </div>
  );
};
