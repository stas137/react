import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import cn from 'clsx';

import Input from 'antd/lib/input';

import { LockOutlined } from '@ant-design/icons';
import { FormikHandlers } from 'formik/dist/types';
import { FormItem } from 'src/components/FormItem';
import { getValidates } from 'src/utils/validations/validations';

import { ChangePasswordFormProps } from '../types';

import s from './NewPasswordField.module.scss';

export type NewPasswordFieldProps = Pick<
  ChangePasswordFormProps,
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

export const NewPasswordField = memo<NewPasswordFieldProps>(
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
  }: NewPasswordFieldProps) => {
    const { t } = useTranslation();

    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem
        className={cn(className)}
        title={t(`forms.ChangePasswordForm.newPassword.title`)}
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
          name="newPassword"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={t(`forms.ChangePasswordForm.newPassword.placeholder`)}
        />
      </FormItem>
    );
  }
);

NewPasswordField.displayName = 'NewPasswordField';
