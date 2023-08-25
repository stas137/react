import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import cn from 'clsx';

import { Form } from 'antd';

import { Title } from '../Title';
import s from './FormItem.module.scss';

export type Help = null | React.ReactNode;
export type ValidateStatus = 'error' | '';

interface FormItemProps {
  className?: string;
  title: React.ReactNode | React.ReactNode[];
  validateStatus?: ValidateStatus;
  help: Help;
  required?: boolean;
  children: React.ReactNode | React.ReactNode[];
}

export const FormItem = memo((props: FormItemProps) => {
  const { className, title, validateStatus, help, required, children } = props;

  const { t } = useTranslation();

  return (
    <div className={cn(s.FormItem, className)}>
      <Title required={required}>{title}</Title>
      <Form.Item validateStatus={validateStatus} help={help}>
        {children}
      </Form.Item>
    </div>
  );
});

FormItem.displayName = 'FormItem';
