import React, { memo } from 'react';

import cn from 'clsx';

import s from './Frame.module.scss';

export type FrameProps = {
  className?: string;
  children: React.ReactNode;
};

export const Frame = memo<FrameProps>(({ className, children }: FrameProps) => (
  <div className={cn(s.root, className)}>{children}</div>
));

Frame.displayName = 'Frame';
