import React from 'react';
import cn from 'clsx';
import { useTranslation } from 'react-i18next';
import { Icon } from 'src/components/Icon/Icon';

import './LanguageSwitcher.css';

import RuIcon from 'src/stories/assets/ru.svg';
import EnIcon from 'src/stories/assets/en.svg';

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
