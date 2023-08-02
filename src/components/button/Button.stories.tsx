import React from 'react';
import type { Meta } from '@storybook/react';

import { Button } from './Button';

import LeftIcon from '../../stories/assets/minus.svg';
import RightIcon from '../../stories/assets/plus.svg';
import { Icon } from '../Icon/Icon';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export default meta;

export const PrimaryNormal = {
  args: {
    variant: 'primary',
    color: 'normal',
    children: 'Button',
  },
};

export const PrimarySuccess = {
  args: {
    variant: 'primary',
    color: 'success',
    children: 'Button',
  },
};

export const PrimaryError = {
  args: {
    variant: 'primary',
    color: 'error',
    children: 'Button',
  },
};

export const PrimaryFullWidth = {
  args: {
    variant: 'primary',
    color: 'normal',
    fullWidth: true,
    children: 'Button',
  },
};

export const PrimarySquare = {
  args: {
    variant: 'primary',
    color: 'normal',
    square: true,
    children: 'Button',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    color: 'transparent',
    children: 'Button',
  },
};

export const Text = {
  args: {
    variant: 'text',
    color: 'transparent',
    children: 'Button',
  },
};

export const PrimaryLoading = {
  args: {
    variant: 'primary',
    color: 'normal',
    loading: true,
    children: 'Button',
  },
};

export const PrimaryLeftAddon = {
  args: {
    variant: 'primary',
    color: 'normal',
    addonLeft: <Icon Svg={LeftIcon} width={20} height={20} />,
    children: 'Button',
  },
};

export const PrimaryRightAddon = {
  args: {
    variant: 'primary',
    color: 'normal',
    addonRight: <Icon Svg={RightIcon} width={20} height={20} />,
    children: 'Button',
  },
};

export const Large = {
  args: {
    size: 'l',
    children: 'Button',
  },
};

export const Small = {
  args: {
    size: 's',
    children: 'Button',
  },
};
