import React from 'react';
import cn from 'clsx';

import './Input.css';
import { Icon } from '../Icon/Icon';

type InputSize = 's' | 'm' | 'l';
type InputColor = 'light' | 'dark';
type InputBackground = 'none' | 'normal';

type HTMLInputProps = Omit<
  React.HTMLAttributes<HTMLInputElement>,
  'value' | 'readOnly' | 'size' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  label?: string;
  value?: string | number;
  type?: string;
  placeholder?: string;
  // autofocus?: boolean;
  color?: InputColor;
  background?: InputBackground;
  readOnly?: boolean;
  size?: InputSize;
  // width?: string;
  addonLeft?: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
  addonRight?: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
  onChange?: (value: string) => void;
}

export const Input = (props: InputProps) => {
  const {
    className,
    label,
    value,
    type = 'text',
    placeholder,
    color = 'dark',
    background = 'normal',
    // autofocus,
    readOnly,
    size = 'm',
    // width,
    addonLeft,
    addonRight,
    onChange,
    ...otherProps
  } = props;

  // const [isFocused, setIsFocused] = useState(false);

  // const onBlur = () => {
  //   setIsFocused(false);
  // };

  // const onFocus = () => {
  //   setIsFocused(true);
  // };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  // useEffect(() => {
  //   if (autoFocus) {
  //     setIsFocused(true);
  //     inputRef.current?.focus();
  //   }
  // }, [autoFocus]);

  const input = (
    <div className={cn('Input--wrapper', className)}>
      {addonLeft && (
        <div className={cn('Input--addon')}>
          {<Icon Svg={addonLeft} width={20} height={20} />}
        </div>
      )}

      <input
        className={cn(
          'Input',
          `Input--${background}`,
          `Input--${color}`,
          `Input--${size}`
        )}
        type={type}
        value={value}
        placeholder={placeholder}
        readOnly={readOnly}
        // onBlur={onBlur}
        // onFocus={onFocus}
        onChange={onChangeHandler}
        {...otherProps}
      />

      {addonRight && (
        <div className={cn('Input--addon')}>
          {<Icon Svg={addonRight} width={20} height={20} />}
        </div>
      )}
    </div>
  );

  if (label) {
    return (
      <div className={cn('Input--label')}>
        {/* <Text text={label} width={width} /> */}
        {input}
      </div>
    );
  }

  return input;
};
