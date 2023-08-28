import React from 'react';
import { useTranslation } from 'react-i18next';

import cn from 'clsx';

import { Icon } from 'src/components/Icon/Icon';
import EnIcon from 'src/stories/assets/en.svg';
import RuIcon from 'src/stories/assets/ru.svg';

import './LanguageSwitcher.css';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = (props: LanguageSwitcherProps) => {
  const { className } = props;

  const { i18n } = useTranslation();
  const language = i18n.resolvedLanguage;

  return (
    <div className={cn('LanguageSwitcher', className)}>
      <Icon
        Svg={language === 'ru' ? RuIcon : EnIcon}
        width={24}
        height={24}
        clickable
        onClick={() => {
          language === 'ru'
            ? i18n.changeLanguage('en')
            : i18n.changeLanguage('ru');
        }}
      />
      <span className={cn('LanguageSwitcher--language')}>
        {language || 'en'}
      </span>
    </div>
  );
};
