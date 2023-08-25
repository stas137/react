import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import cn from 'clsx';

import Input from 'antd/lib/input';

import { FormikHandlers } from 'formik/dist/types';
import { FormItem } from 'src/components/FormItem';
import { getValidates } from 'src/utils/validations/validations';

import { ProductFormProps } from '../types';

export type DescriptionFieldProps = Pick<
  ProductFormProps,
  'className' | 'disabled'
> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: string;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
};

export const DescriptionField = memo<DescriptionFieldProps>(
  ({
    className,
    onChange,
    onBlur,
    touched,
    value,
    errors,
    disabled,
    submitCount,
  }: DescriptionFieldProps) => {
    const { t } = useTranslation();

    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem
        className={cn(className)}
        title={t(`forms.ProductForm.description.title`)}
        validateStatus={validateStatus}
        help={help}
      >
        <Input.TextArea
          disabled={disabled}
          name="description"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={t(`forms.ProductForm.description.placeholder`)}
          readOnly={false}
        />
      </FormItem>
    );
  }
);

DescriptionField.displayName = 'DescriptionField';
