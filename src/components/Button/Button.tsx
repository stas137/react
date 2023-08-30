import React, { ButtonHTMLAttributes, forwardRef } from 'react';

import cn from 'clsx';

import { Icon } from 'src/components/Icon/Icon';
import SpinnerIcon from 'src/stories/assets/spinner.svg';

import s from './Button.module.scss';

type ButtonVariant = 'primary' | 'secondary' | 'text';
type ButtonSize = 's' | 'm' | 'l';
type ButtonColor = 'normal' | 'success' | 'error';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  color?: ButtonColor;
  addonLeft?: React.ReactNode;
  addonRight?: React.ReactNode;
  loading?: boolean;
  fullWidth?: boolean;
  square?: boolean;
  width?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      className,
      variant = 'primary',
      size = 'm',
      color = 'normal',
      disabled,
      width,
      addonLeft,
      addonRight,
      loading,
      fullWidth,
      square,
      onClick,
      children,
      ...otherProps
    } = props;

    if (loading) {
      return (
        <button
          ref={ref}
          type="button"
          className={cn(
            className,
            s.Button,
            s[size],
            s[variant],
            s[color],
            fullWidth ? s.fullWidth : '',
            square ? s.square : ''
          )}
          style={width ? { minWidth: width } : {}}
          disabled={disabled}
          onClick={onClick}
          {...otherProps}
        >
          {loading && (
            <Icon
              className={s.ButtonSpinner}
              Svg={SpinnerIcon}
              width={20}
              height={20}
            />
          )}
        </button>
      );
    }

    return (
      <button
        type="button"
        className={cn(
          className,
          s.Button,
          s[size],
          s[variant],
          s[color],
          fullWidth ? s.fullWidth : '',
          square ? s.square : ''
        )}
        disabled={disabled}
        style={width ? { minWidth: width } : {}}
        onClick={onClick}
        {...otherProps}
      >
        {addonLeft && <div className={cn(s.addon)}>{addonLeft}</div>}
        {children}
        {addonRight && <div className={cn(s.addon)}>{addonRight}</div>}
      </button>
    );
  }
);

Button.displayName = 'Button';
