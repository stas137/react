import React, { memo, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import cn from 'clsx';

import type { UploadFile } from 'antd';
import { Button } from 'antd';

import type { FormikConfig } from 'formik';
import { useFormik } from 'formik';
import {
  ProductForm,
  ProductFormErrors,
  ProductFormValues,
} from 'src/components/Forms/ProductForm';
import { Title } from 'src/components/Title';
import { isNotDefinedString } from 'src/utils/validations/validations';

import s from './ProductCompletedForm.module.scss';

export type ProductCompletedFormProps = {
  className?: string;
};

export const ProductCompletedForm = memo<ProductCompletedFormProps>(
  ({ className }: ProductCompletedFormProps) => {
    const { t } = useTranslation();

    const product = useMemo(
      (): {
        name: string;
        photo: UploadFile[];
        description?: string;
        oldPrice?: number;
        price: number;
        category: string;
      } => ({
        name: '',
        photo: [
          // {
          //   uid: 'product-img-11',
          //   name: 'product-image-11.png',
          //   status: 'done',
          //   url: ProductImg1,
          // },
        ],
        description: '',
        oldPrice: 0,
        price: 0,
        category: '',
      }),
      []
    );

    const { onSubmit, validate, initialValues } = useMemo<
      Pick<
        FormikConfig<ProductFormValues>,
        'onSubmit' | 'validate' | 'initialValues'
      >
    >(() => {
      return {
        initialValues: {
          name: product.name,
          photo: product.photo,
          description: product?.description,
          oldPrice: product?.oldPrice,
          price: product.price,
          category: product.category,
        },
        onSubmit: (values, { setErrors }) => {
          // create({
          //   );

          console.log({ values });
        },
        validate: (values) => {
          const errors = {} as ProductFormErrors;

          if (isNotDefinedString(values.name)) {
            errors.name = t(`errors.is_required`);
          }

          return errors;
        },
      };
    }, [product, t]);

    const formManager = useFormik<ProductFormValues>({
      initialValues,
      onSubmit,
      validate,
    });

    const { submitForm, setValues } = formManager;

    useEffect(() => {
      setValues({
        name: product.name,
        photo: product.photo,
        description: product?.description,
        oldPrice: Number(product?.oldPrice),
        price: Number(product.price),
        category: product.category,
      });
    }, [product, setValues]);

    return (
      <div className={cn(s.root, className)}>
        <Title className={s.title}>
          {t(`screens.CreateProductScreen.createProduct.title`)}
        </Title>
        <ProductForm formManager={formManager} />
        <Button type="primary" loading={false} onClick={submitForm}>
          {t(`screens.EditProductScreen.editProduct.save`)}
        </Button>
      </div>
    );
  }
);

ProductCompletedForm.displayName = 'ProductCompletedForm';