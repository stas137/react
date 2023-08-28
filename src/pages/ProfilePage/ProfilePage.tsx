import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '../../components/Page';
import { SettingsBlock } from './SettingsBlock';

import s from './ProfilePage.module.scss';

export const ProfilePage: FC = () => {
  const { t } = useTranslation();
  return (
    <Page title={t`screens.ProfileScreen.title`} className={s.top60}>
      <SettingsBlock className={s.block} />
    </Page>
  );
};

export default ProfilePage;
