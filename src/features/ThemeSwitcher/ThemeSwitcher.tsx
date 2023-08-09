import React from 'react';
import cn from 'clsx';
import { Icon } from 'src/components/Icon/Icon';
import { Theme, useTheme } from 'src/providers/ThemeProvider/ThemeProvider';

import './ThemeSwitcher.css';

import LightIcon from 'src/stories/assets/light.svg';
import DarkIcon from 'src/stories/assets/dark.svg';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { className } = props;

  const { theme, setTheme } = useTheme();

  return (
    <div className={cn('ThemeSwitcher', className)}>
      <Icon
        Svg={theme === Theme.LIGHT_THEME ? LightIcon : DarkIcon}
        width={24}
        height={24}
        clickable
        onClick={() => {
          setTheme(
            theme === Theme.LIGHT_THEME ? Theme.DARK_THEME : Theme.LIGHT_THEME
          );
        }}
      />
    </div>
  );
};
