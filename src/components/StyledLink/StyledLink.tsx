import React, { FC } from 'react';
import type { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';

import cn from 'clsx';

// import s from './StyledLink.sass';

export type StyledLinkProps = LinkProps &
  React.RefAttributes<HTMLAnchorElement>;

export const StyledLink: FC<StyledLinkProps> = ({ className, ...props }) => (
  <Link {...props} className={cn(className)} />
);
