import React, { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import type { UploadFile } from 'antd';

import { Page } from '../../components/Page';
import { ProductCompletedForm } from './ProductCompletedForm';

import s from './CreateProductPage.module.scss';

export type ProductType = {
  name: string;
  photo: UploadFile[];
  description?: string;
  oldPrice?: number;
  price: number;
  category: string;
};

export const CreateProductPage: FC = () => {
  const { t } = useTranslation();

  const product = useMemo<ProductType>(
    () => ({
      name: '',
      photo: [],
      description: '',
      oldPrice: 0,
      price: 0,
      category: '',
    }),
    []
  );

  return (
    <Page title={t`screens.CreateProductScreen.title`}>
      <div className={s.block}>
        <ProductCompletedForm product={product} />
      </div>
    </Page>
  );
};

export default CreateProductPage;
