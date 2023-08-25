import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import cn from 'clsx';

import { Input } from 'antd';

import { UserOutlined } from '@ant-design/icons';
import { FormikHandlers } from 'formik/dist/types';
import { FormItem } from 'src/components/FormItem';
import { getValidates } from 'src/utils/validations/validations';

import { ProfileFormProps } from '../types';

export type NameFieldProps = Pick<
  ProfileFormProps,
  'className' | 'disabled' | 'autoFocusElement'
> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: string;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
};

const prefix = <UserOutlined />;

export const NameField = memo<NameFieldProps>(
  ({
    className,
    onChange,
    onBlur,
    autoFocusElement,
    touched,
    value,
    errors,
    disabled,
    submitCount,
  }: NameFieldProps) => {
    const { t } = useTranslation();

    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem
        className={cn(className)}
        title={t(`forms.ProfileForm.name.title`)}
        required
        validateStatus={validateStatus}
        help={help}
      >
        <Input
          prefix={prefix}
          disabled={disabled}
          ref={autoFocusElement}
          data-cy="input"
          autoFocus
          name="name"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={t(`forms.ProfileForm.name.placeholder`)}
        />
      </FormItem>
    );
  }
);

NameField.displayName = 'NameField';
