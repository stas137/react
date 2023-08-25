import { MutableRefObject } from 'react';

import type { InputRef } from 'antd';

import type { FormikContextType } from 'formik';

export interface FormProps<Values = unknown> {
  className?: string;
  disabled?: boolean;
  formManager: FormikContextType<Values>;
  formElement?: MutableRefObject<HTMLFormElement>;
  autoFocusElement?: MutableRefObject<InputRef>;
}
