import React from 'react';
import cn from 'clsx';

import './Icon.css';

type SvgProps = Omit<React.SVGAttributes<SVGAElement>, 'onClick'>;

interface BaseIconProps extends SvgProps {
  className?: string;
  Svg: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
}

interface NonClickableIconProps extends BaseIconProps {
  clickable?: false;
}

interface ClickableIconProps extends BaseIconProps {
  clickable: true;
  onClick: () => void;
}

type IconProps = ClickableIconProps | NonClickableIconProps;

export const Icon = (props: IconProps) => {
  const {
    className,
    Svg,
    width = 24,
    height = 24,
    clickable,
    ...otherProps
  } = props;

  const icon = (
    <Svg
      className={cn(className)}
      width={width}
      height={height}
      {...otherProps}
      onClick={undefined}
    />
  );

  if (clickable) {
    return (
      <button
        className={cn(className, 'Icon--button')}
        type="button"
        style={{ width, height }}
        onClick={props.onClick}
      >
        {icon}
      </button>
    );
  }

  return <>{icon}</>;
};
