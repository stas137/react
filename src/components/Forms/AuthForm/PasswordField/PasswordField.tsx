import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import cn from 'clsx';

import Input from 'antd/lib/input';

import { LockOutlined } from '@ant-design/icons';
import { FormikHandlers } from 'formik/dist/types';
import { FormItem } from 'src/components/FormItem';
import { AuthFormProps } from 'src/components/Forms/AuthForm';
import { getValidates } from 'src/utils/validations/validations';

import s from './PasswordField.module.scss';

export type PasswordFieldProps = Pick<
  AuthFormProps,
  'className' | 'disabled'
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
  }: PasswordFieldProps) => {
    const { t } = useTranslation();

    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem
        className={cn(className)}
        title={t(`forms.AuthForm.password.title`)}
        required
        validateStatus={validateStatus}
        help={help}
      >
        <Input.Password
          className={cn(validateStatus === 'error' ? s.error : '')}
          prefix={prefix}
          onPressEnter={onPressEnter}
          disabled={disabled}
          data-cy="input"
          type="password"
          name="password"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={t(`forms.AuthForm.password.placeholder`)}
        />
      </FormItem>
    );
  }
);

PasswordField.displayName = 'PasswordField';
