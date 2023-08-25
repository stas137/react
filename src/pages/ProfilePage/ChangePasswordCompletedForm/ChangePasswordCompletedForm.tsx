import React, { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import cn from 'clsx';

import { Button } from 'antd';

// import { useMutation } from '@apollo/client';
import type { FormikConfig } from 'formik';
import { useFormik } from 'formik';
import {
  ChangePasswordForm,
  ChangePasswordFormErrors,
  ChangePasswordFormValues,
} from 'src/components/Forms';
import { Title } from 'src/components/Title';
// import { createErrorHandlers } from 'src/utils/createErrorHandlers';
import {
  isLongEnough,
  isNotDefinedString,
} from 'src/utils/validations/validations';

import s from './ChangePasswordCompletedForm.module.scss';
// import {
//   CHANGE_PASSWORD,
//   ChangePasswordResponse,
//   ChangePasswordVars,
// } from './connection';

export type ChangePasswordCompletedFormProps = {
  className?: string;
};

const initialValues: ChangePasswordFormValues = {
  password: undefined,
  newPassword: undefined,
  repeatPassword: undefined,
};

export const ChangePasswordCompletedForm =
  memo<ChangePasswordCompletedFormProps>(
    ({ className }: ChangePasswordCompletedFormProps) => {
      const { t } = useTranslation();

      // const [update, { loading }] = useMutation<
      //   ChangePasswordResponse,
      //   ChangePasswordVars
      // >(CHANGE_PASSWORD);

      const { onSubmit, validate } = useMemo<
        Pick<FormikConfig<ChangePasswordFormValues>, 'onSubmit' | 'validate'>
      >(() => {
        // const { catcherValidator } = createErrorHandlers<
        //   keyof ChangePasswordFormValues
        // >(
        //   (code, _, error) => {
        //     if (code === null) {
        //       message.error(t(`errors.${error.message}`));
        //     } else {
        //       message.error(t(`errors.${code}`));
        //     }
        //   },
        //   {
        //     password: ['ERR_INCORRECT_PASSWORD'],
        //     newPassword: ['ERR_INVALID_PASSWORD'],
        //   }
        // );

        return {
          onSubmit: (values, { setErrors, resetForm }) => {
            // update({
            //   variables: {
            //     input: {
            //       password: values.password,
            //       newPassword: values.newPassword,
            //     },
            //   },
            // })
            //   .then(() => {
            //     resetForm();
            //     message.success(
            //       t(`screens.ProfileScreen.changePassword.success`)
            //     );
            //   })
            //   .catch(
            //     catcherValidator({
            //       setErrors,
            //       getMessage: (code) => t(`errors.${code}`),
            //     })
            //   );
            console.log({ values });
            resetForm();
          },
          validate: (values) => {
            const errors = {} as ChangePasswordFormErrors;
            if (isNotDefinedString(values.password)) {
              errors.password = t(`errors.is_required`);
            } else if (!isLongEnough(values.password)) {
              errors.password = t(`errors.too_short_password`);
            }

            if (isNotDefinedString(values.newPassword)) {
              errors.newPassword = t(`errors.is_required`);
            } else if (!isLongEnough(values.password)) {
              errors.newPassword = t(`errors.too_short_password`);
            }

            if (isNotDefinedString(values.repeatPassword)) {
              errors.repeatPassword = t(`errors.is_required`);
            } else if (!isLongEnough(values.password)) {
              errors.repeatPassword = t(`errors.too_short_password`);
            }

            if (values.repeatPassword !== values.newPassword) {
              errors.newPassword = t(`errors.not_same_password`);
              errors.repeatPassword = t(`errors.not_same_password`);
            }

            return errors;
          },
        };
      }, [t]);

      const formManager = useFormik<ChangePasswordFormValues>({
        initialValues,
        onSubmit,
        validate,
      });
      const { submitForm } = formManager;

      return (
        <div className={cn(s.root, className)}>
          <Title className={s.title}>
            {t(`screens.ProfileScreen.changePassword.title`)}
          </Title>
          <ChangePasswordForm formManager={formManager} />
          <Button type="primary" loading={false} onClick={submitForm}>
            {t(`screens.ProfileScreen.changePassword.save`)}
          </Button>
        </div>
      );
    }
  );

ChangePasswordCompletedForm.displayName = 'ChangePasswordCompletedForm';
