import React, { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
// import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import cn from 'clsx';

import { Button } from 'antd';

import type { FormikConfig } from 'formik';
// import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { AuthForm, AuthFormErrors, AuthFormValues } from 'src/components/Forms';
import {
  isLongEnough,
  isNotDefinedString,
  isValidEmail,
} from 'src/utils/validations/validations';

// import { SIGN_UP, SignUpResponse, SignUpVars } from '../connections';
import s from './SignUpBlock.module.scss';

export type SingUpBlockProps = {
  className?: string;
};

const initialValues: AuthFormValues = {
  email: undefined,
  password: undefined,
};

export const SingUpBlock = memo<SingUpBlockProps>(
  ({ className }: SingUpBlockProps) => {
    const { t } = useTranslation();

    // const [signUp, { loading }] = useMutation<SignUpResponse, SignUpVars>(
    //   SIGN_UP,
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
          // signUp({ variables: { email: values.email, password: values.password } })
          //   .then((res) => {
          //     dispatch(tokenActions.set(extractSignUp(res.data)));
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
            {t(`screens.auth.signUp.submit`)}
          </Button>
        </div>
      </div>
    );
  }
);

SingUpBlock.displayName = 'SingUpBlock';
