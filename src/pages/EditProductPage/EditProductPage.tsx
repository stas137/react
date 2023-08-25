import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '../../components/Page';
import { ProductCompletedForm } from './ProductCompletedForm';

import s from './EditProductPage.module.scss';

export const EditProductPage: FC = () => {
  const { t } = useTranslation();
  return (
    <Page title={t`screens.EditProductScreen.title`}>
      <div className={s.block}>
        <ProductCompletedForm />
      </div>
    </Page>
  );
};

export default EditProductPage;
