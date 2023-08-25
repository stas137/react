import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import cn from 'clsx';

import { Input } from 'antd';

import { UserOutlined } from '@ant-design/icons';
import { FormikHandlers } from 'formik/dist/types';
import { FormItem } from 'src/components/FormItem';
import { AuthFormProps } from 'src/components/Forms/AuthForm';
import { getValidates } from 'src/utils/validations/validations';

// import s from './EmailField.scss';

export type EmailFieldProps = Pick<
  AuthFormProps,
  'className' | 'disabled' | 'autoFocusElement'
> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: string;
  onPressEnter: () => void;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
};

const prefix = <UserOutlined />;

export const EmailField = memo<EmailFieldProps>(
  ({
    className,
    onChange,
    onBlur,
    onPressEnter,
    autoFocusElement,
    touched,
    value,
    errors,
    disabled,
    submitCount,
  }: EmailFieldProps) => {
    const { t } = useTranslation();

    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem
        className={cn(className)}
        title={t(`forms.AuthForm.email.title`)}
        required
        validateStatus={validateStatus}
        help={help}
      >
        <Input
          prefix={prefix}
          disabled={disabled}
          ref={autoFocusElement}
          onPressEnter={onPressEnter}
          data-cy="input"
          autoFocus
          type="email"
          name="email"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={t(`forms.AuthForm.email.placeholder`)}
        />
      </FormItem>
    );
  }
);

EmailField.displayName = 'EmailField';
