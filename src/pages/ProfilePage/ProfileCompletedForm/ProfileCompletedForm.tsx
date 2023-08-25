import React, { memo, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

// import { useSelector } from 'react-redux';
import cn from 'clsx';

import { Button } from 'antd';

// import { useMutation } from '@apollo/client';
import type { FormikConfig } from 'formik';
import { useFormik } from 'formik';
import {
  ProfileForm,
  ProfileFormErrors,
  ProfileFormValues,
} from 'src/components/Forms/ProfileForm';
import { Title } from 'src/components/Title';
// import { profileSelectors } from 'src/store/profile';
// import { createErrorHandlers } from 'src/utils/createErrorHandlers';
import { isNotDefinedString } from 'src/utils/validations/validations';

// import {
//   UPDATE_PROFILE,
//   UpdateProfileResponse,
//   UpdateProfileVars,
// } from './connection';
import s from './ProfileCompletedForm.module.scss';

export type ProfileCompletedFormProps = {
  className?: string;
};

export const ProfileCompletedForm = memo<ProfileCompletedFormProps>(
  ({ className }: ProfileCompletedFormProps) => {
    // const profile = useSelector(profileSelectors.get);

    const { t } = useTranslation();

    const profile = useMemo(
      () => ({
        name: 'Ivan',
        about: 'About',
      }),
      []
    );

    // const [update, { loading }] = useMutation<
    //   UpdateProfileResponse,
    //   UpdateProfileVars
    // >(UPDATE_PROFILE);

    const { onSubmit, validate, initialValues } = useMemo<
      Pick<
        FormikConfig<ProfileFormValues>,
        'onSubmit' | 'validate' | 'initialValues'
      >
    >(() => {
      // const { catcherValidator } = createErrorHandlers<keyof ProfileFormValues>(
      //   (code, _, error) => {
      //     if (code === null) {
      //       message.error(t(`errors.${error.message}`));
      //     } else {
      //       message.error(t(`errors.${code}`));
      //     }
      //   },
      //   {
      //     name: ['ERR_INVALID_NICKNAME'],
      //   }
      // );

      return {
        initialValues: {
          name: profile?.name,
          about: profile?.about,
        },
        onSubmit: (values, { setErrors }) => {
          // update({
          //   variables: { input: { name: values.name, about: values.about } },
          // })
          //   .then(() =>
          //     message.success(t(`screens.ProfileScreen.updateProfile.success`))
          //   )
          //   .catch(
          //     catcherValidator({
          //       setErrors,
          //       getMessage: (code) => t(`errors.${code}`),
          //     })
          //   );

          console.log({ values });
        },
        validate: (values) => {
          const errors = {} as ProfileFormErrors;
          if (isNotDefinedString(values.name)) {
            errors.name = t(`errors.is_required`);
          }
          return errors;
        },
      };
    }, [profile, t]);

    const formManager = useFormik<ProfileFormValues>({
      initialValues,
      onSubmit,
      validate,
    });
    const { submitForm, setValues } = formManager;

    useEffect(() => {
      setValues({ name: profile?.name, about: profile?.about });
    }, [profile, setValues]);

    return (
      <div className={cn(s.root, className)}>
        <Title className={s.title}>
          {t(`screens.ProfileScreen.updateProfile.title`)}
        </Title>
        <ProfileForm formManager={formManager} />
        <Button type="primary" loading={false} onClick={submitForm}>
          {t(`screens.ProfileScreen.updateProfile.save`)}
        </Button>
      </div>
    );
  }
);

ProfileCompletedForm.displayName = 'ProfileCompletedForm';
