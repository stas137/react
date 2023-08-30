import React, { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import type { UploadFile } from 'antd';

import ProductImg1 from 'src/stories/assets/product1.jpg';

import { Page } from '../../components/Page';
import { ProductCompletedForm } from './ProductCompletedForm';

import s from './EditProductPage.module.scss';

export type ProductType = {
  name: string;
  photo: UploadFile[];
  description?: string;
  oldPrice?: number;
  price: number;
  category: string;
};

export const EditProductPage: FC = () => {
  const { t } = useTranslation();

  const product = useMemo<ProductType>(
    () => ({
      name: 'Laundry gel Laska (Super)',
      photo: [
        {
          uid: 'product-img-11',
          name: 'product-image-11.png',
          status: 'done',
          url: ProductImg1,
        },
      ],
      description:
        'Restore COLOR for color, liquid laundry detergent 4L (66 washes)',
      oldPrice: 1000,
      price: 1250,
      category: 'notebook',
    }),
    []
  );

  return (
    <Page title={t`screens.EditProductScreen.title`}>
      <div className={s.block}>
        <ProductCompletedForm product={product} />
      </div>
    </Page>
  );
};

export default EditProductPage;
