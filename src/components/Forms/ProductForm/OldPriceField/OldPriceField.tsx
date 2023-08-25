import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import cn from 'clsx';

import { InputNumber } from 'antd';

import { UserOutlined } from '@ant-design/icons';
import { FormikHandlers } from 'formik/dist/types';
import { FormItem } from 'src/components/FormItem';
import { RUB_USD } from 'src/components/ProductCard/ProductCard';
import { getValidates } from 'src/utils/validations/validations';

import { ProductFormProps } from '../types';

export type OldPriceFieldProps = Pick<
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

const prefix = <UserOutlined />;

export const OldPriceField = memo<OldPriceFieldProps>(
  ({
    className,
    onChange,
    onBlur,
    touched,
    value,
    errors,
    disabled,
    submitCount,
  }: OldPriceFieldProps) => {
    const { t, i18n } = useTranslation();
    const language = i18n.resolvedLanguage;

    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem
        className={cn(className)}
        title={t(`forms.ProductForm.oldPrice.title`)}
        validateStatus={validateStatus}
        help={help}
      >
        <InputNumber
          // formatter={(value) =>
          //   `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          // }
          // parser={(value) => value!.replace(/\$\s?|(,*)/g, '')}
          formatter={(value) =>
            `${language === 'ru' ? '₽' : '$'} ${
              language === 'ru'
                ? value
                : String((Number(value) / RUB_USD).toFixed(2))
            }`
          }
          disabled={disabled}
          data-cy="input"
          name="oldPrice"
          onChange={(data) => {
            onChange('oldPrice', Number(data));
          }}
          onBlur={onBlur}
          value={value}
          placeholder={t(`forms.ProductForm.oldPrice.placeholder`)}
        />
      </FormItem>
    );
  }
);

OldPriceField.displayName = 'OldPriceField';
