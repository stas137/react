import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import cn from 'clsx';

import { Input } from 'antd';

import { LockOutlined } from '@ant-design/icons';
import { FormikHandlers } from 'formik/dist/types';
import { FormItem } from 'src/components/FormItem';
import { getValidates } from 'src/utils/validations/validations';

import { ChangePasswordFormProps } from '../types';

export type PasswordFieldProps = Pick<
  ChangePasswordFormProps,
  'className' | 'disabled' | 'autoFocusElement'
> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: string;
  onChange: FormikHandlers['handleChange'];
  onPressEnter: () => void;
  onBlur: FormikHandlers['handleBlur'];
};

const prefix = <LockOutlined className="site-form-item-icon" />;

export const PasswordField = memo<PasswordFieldProps>(
  ({
    className,
    onChange,
    onBlur,
    onPressEnter,
    touched,
    value,
    errors,
    disabled,
    submitCount,
    autoFocusElement,
  }: PasswordFieldProps) => {
    const { t } = useTranslation();

    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem
        className={cn(className)}
        title={t(`forms.ChangePasswordForm.password.title`)}
        required
        validateStatus={validateStatus}
        help={help}
      >
        <Input.Password
          ref={autoFocusElement}
          prefix={prefix}
          onPressEnter={onPressEnter}
          disabled={disabled}
          data-cy="input"
          name="password"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={t(`forms.ChangePasswordForm.password.placeholder`)}
        />
      </FormItem>
    );
  }
);

PasswordField.displayName = 'PasswordField';
