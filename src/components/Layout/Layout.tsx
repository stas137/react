import React from 'react';

import cn from 'clsx';

import './Layout.css';

interface LayoutProps {
  className?: string;
  header: React.ReactNode;
  body: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
  const { className, header, body } = props;

  return (
    <div className={cn('Layout', className)}>
      {header}
      {body}
    </div>
  );
};
