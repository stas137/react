import type { UploadFile } from 'antd/es/upload/interface';

import { FormProps } from 'src/components/Forms/types';

export type ProductFormValues = {
  name: string;
  photo: UploadFile[];
  description?: string;
  oldPrice?: number;
  price: number;
  category: string;
};

export type ProductFormErrors = Record<keyof ProductFormValues, string>;
export type ProductFormTouched = Record<keyof ProductFormValues, boolean>;

export type ProductFormProps = FormProps<ProductFormValues>;
