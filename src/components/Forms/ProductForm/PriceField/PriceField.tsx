import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import cn from 'clsx';

import { InputNumber } from 'antd';

import { FormikHandlers } from 'formik/dist/types';
import { FormItem } from 'src/components/FormItem';
import { RUB_USD } from 'src/utils/consts/consts';
import { getValidates } from 'src/utils/validations/validations';

import { ProductFormProps } from '../types';

export type PriceFieldProps = Pick<
  ProductFormProps,
  'className' | 'disabled' | 'autoFocusElement'
> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: string;
  // onChange: FormikHandlers['handleChange'];
  onChange: (name: string, data: number) => void;
  onBlur: FormikHandlers['handleBlur'];
};

export const PriceField = memo<PriceFieldProps>(
  ({
    className,
    onChange,
    onBlur,
    touched,
    value,
    errors,
    disabled,
    submitCount,
  }: PriceFieldProps) => {
    const { t, i18n } = useTranslation();
    const language = i18n.resolvedLanguage;

    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem
        className={cn(className)}
        title={t(`forms.ProductForm.price.title`)}
        required
        validateStatus={validateStatus}
        help={help}
      >
        <InputNumber
          formatter={(value) =>
            `${language === 'ru' ? '₽' : '$'} ${
              language === 'ru'
                ? value
                : String((Number(value) / RUB_USD).toFixed(2))
            }`
          }
          disabled={disabled}
          data-cy="input"
          name="price"
          onChange={(data) => {
            onChange('price', Number(data));
          }}
          onBlur={onBlur}
          value={value}
          placeholder={t(`forms.ProductForm.price.placeholder`)}
        />
      </FormItem>
    );
  }
);

PriceField.displayName = 'PriceField';
