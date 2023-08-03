import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import cn from 'clsx';
import { Icon } from 'src/components/Icon/Icon';

import './Button.css';
import SpinnerIcon from 'src/stories/assets/spinner.svg';

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

// eslint-disable-next-line react/display-name
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

    // const onClick = () => {
    //   sum(4, 5);
    // };

    if (loading) {
      return (
        <button
          ref={ref}
          type="button"
          className={cn(
            className,
            'Button',
            `Button--${size}`,
            `Button--${variant}`,
            `Button--${color}`,
            fullWidth ? `Button--fullWidth` : '',
            square ? `Button--square` : ''
          )}
          style={width ? { minWidth: width } : {}}
          disabled={disabled}
          onClick={onClick}
          {...otherProps}
        >
          {loading && (
            <Icon
              className="Button--spinner"
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
          'Button',
          `Button--${size}`,
          `Button--${variant}`,
          `Button--${color}`,
          fullWidth ? `Button--fullWidth` : '',
          square ? `Button--square` : ''
        )}
        disabled={disabled}
        style={width ? { minWidth: width } : {}}
        onClick={onClick}
        {...otherProps}
      >
        {addonLeft && <div className={cn('Button--addon')}>{addonLeft}</div>}
        {children}
        {addonRight && <div className={cn('Button--addon')}>{addonRight}</div>}
      </button>
    );
  }
);
