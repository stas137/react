import React, { memo } from 'react';

import cn from 'clsx';

import { CategoryField } from './CategoryField';
import { DescriptionField } from './DescriptionField';
import { NameField } from './NameField';
import { OldPriceField } from './OldPriceField';
import { PhotoField } from './PhotoField';
import { PriceField } from './PriceField';
import { ProductFormProps } from './types';

export const ProductForm = memo<ProductFormProps>(
  ({
    className,
    formManager,
    formElement,
    autoFocusElement,
    disabled,
  }: ProductFormProps) => {
    const {
      values,
      touched,
      errors,
      submitCount,
      handleBlur,
      handleSubmit,
      handleChange,
      setFieldValue,
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
        <PhotoField
          onBlur={handleBlur}
          onChange={(name, data) => {
            setFieldValue(name, data);
          }}
          value={values.photo}
          errors={errors.photo as string}
          submitCount={submitCount}
          touched={touched.photo as unknown as boolean}
          disabled={disabled}
        />
        <DescriptionField
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.description}
          errors={errors.description}
          submitCount={submitCount}
          touched={touched.description}
          disabled={disabled}
        />
        <OldPriceField
          onBlur={handleBlur}
          onChange={(name, data) => {
            setFieldValue(name, Number(data));
          }}
          value={String(values.oldPrice)}
          errors={errors.oldPrice}
          submitCount={submitCount}
          touched={touched.oldPrice}
          disabled={disabled}
        />
        <PriceField
          onBlur={handleBlur}
          onChange={(name, data) => {
            setFieldValue(name, Number(data));
          }}
          value={String(values.price)}
          errors={errors.price}
          submitCount={submitCount}
          touched={touched.price}
          disabled={disabled}
        />
        <CategoryField
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.category}
          errors={errors.category}
          submitCount={submitCount}
          touched={touched.category}
          disabled={disabled}
        />
      </form>
    );
  }
);

ProductForm.displayName = 'ProductForm';
