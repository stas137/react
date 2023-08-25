import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '../../components/Page';
import { ProductCompletedForm } from './ProductCompletedForm';

import s from './CreateProductPage.module.scss';

export const CreateProductPage: FC = () => {
  const { t } = useTranslation();
  return (
    <Page title={t`screens.CreateProductScreen.title`}>
      <div className={s.block}>
        <ProductCompletedForm />
      </div>
    </Page>
  );
};

export default CreateProductPage;
