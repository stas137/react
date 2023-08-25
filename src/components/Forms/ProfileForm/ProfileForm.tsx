import React, { memo } from 'react';

import cn from 'clsx';

import { AboutField } from './AboutField';
import { NameField } from './NameField';
import { ProfileFormProps } from './types';

export const ProfileForm = memo<ProfileFormProps>(
  ({
    className,
    formManager,
    formElement,
    autoFocusElement,
    disabled,
  }: ProfileFormProps) => {
    const {
      values,
      touched,
      errors,
      submitCount,
      handleBlur,
      handleSubmit,
      handleChange,
    } = formManager;

    return (
      <form ref={formElement} onSubmit={handleSubmit} className={cn(className)}>
        <NameField
          autoFocusElement={autoFocusElement}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.name}
          errors={errors.name}
          submitCount={submitCount}
          touched={touched.name}
          disabled={disabled}
        />
        <AboutField
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.about}
          errors={errors.about}
          submitCount={submitCount}
          touched={touched.about}
          disabled={disabled}
        />
      </form>
    );
  }
);

ProfileForm.displayName = 'ProfileForm';
