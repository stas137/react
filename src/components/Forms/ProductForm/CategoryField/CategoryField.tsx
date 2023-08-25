import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import cn from 'clsx';

import { Input } from 'antd';

import { FormikHandlers } from 'formik/dist/types';
import { FormItem } from 'src/components/FormItem';
import { getValidates } from 'src/utils/validations/validations';

import { ProductFormProps } from '../types';

export type CategoryFieldProps = Pick<
  ProductFormProps,
  'className' | 'disabled' | 'autoFocusElement'
> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: string;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
};

export const CategoryField = memo<CategoryFieldProps>(
  ({
    className,
    onChange,
    onBlur,
    touched,
    value,
    errors,
    disabled,
    submitCount,
  }: CategoryFieldProps) => {
    const { t } = useTranslation();

    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem
        className={cn(className)}
        title={t(`forms.ProductForm.category.title`)}
        required
        validateStatus={validateStatus}
        help={help}
      >
        <Input
          disabled={disabled}
          data-cy="input"
          name="category"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={t(`forms.ProductForm.category.placeholder`)}
        />
      </FormItem>
    );
  }
);

CategoryField.displayName = 'CategoryField';
