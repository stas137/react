import React, { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
// import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import cn from 'clsx';

import { Button } from 'antd';

// import { useMutation } from '@apollo/client';
import type { FormikConfig } from 'formik';
import { useFormik } from 'formik';
import { AuthForm, AuthFormErrors, AuthFormValues } from 'src/components/Forms';
import {
  isLongEnough,
  isNotDefinedString,
  isValidEmail,
} from 'src/utils/validations/validations';

import s from './SignInBlock.module.scss';

export type SingInBlockProps = {
  className?: string;
};

const initialValues: AuthFormValues = {
  email: undefined,
  password: undefined,
};

export const SingInBlock = memo<SingInBlockProps>(
  ({ className }: SingInBlockProps) => {
    const { t } = useTranslation();

    // const [signIn, { loading }] = useMutation<SignInResponse, SignInVars>(
    //   SIGN_IN,
    //   { fetchPolicy: 'no-cache' }
    // );

    // const dispatch = useDispatch();

    const navigate = useNavigate();
    const location = useLocation();

    const { onSubmit, validate } = useMemo<
      Pick<FormikConfig<AuthFormValues>, 'onSubmit' | 'validate'>
    >(() => {
      // const { catcher } = createErrorHandlers((code, _, error) => {
      //   if (code === null) {
      //     message.error(t(`errors.${error.message}`));
      //   } else {
      //     message.error(t(`errors.${code}`));
      //   }
      // });

      return {
        onSubmit: (values, { resetForm }) => {
          // signIn({
          //   variables: { email: values.email, password: values.password },
          // })
          //   .then((res) => {
          //     dispatch(tokenActions.set(extractSignIn(res.data)));
          //     resetForm();
          //     navigate((location.state as NavigationState)?.from || '/');
          //   })
          //   .catch(catcher);

          console.log({ email: values.email, password: values.password });
          resetForm();
        },

        validate: (values) => {
          const errors = {} as AuthFormErrors;

          if (isNotDefinedString(values.email)) {
            errors.email = t(`errors.is_required`);
          } else if (!isValidEmail(values.email)) {
            errors.email = t(`errors.email_is_not_valid`);
          }

          if (isNotDefinedString(values.password)) {
            errors.password = t(`errors.is_required`);
          } else if (!isLongEnough(values.password)) {
            errors.password = t(`errors.too_short_password`);
          }

          return errors;
        },
      };
    }, [location.state, navigate, t]);

    const formik = useFormik<AuthFormValues>({
      onSubmit,
      initialValues,
      validate,
    });

    const { submitForm } = formik;

    return (
      <div className={cn(s.root, className)}>
        <AuthForm formManager={formik} />
        <div className={s.bottom}>
          <Button
            className={s.submit}
            loading={false}
            type="primary"
            onClick={submitForm}
          >
            {t(`screens.auth.signIn.submit`)}
          </Button>
        </div>
      </div>
    );
  }
);

SingInBlock.displayName = 'SingInBlock';
