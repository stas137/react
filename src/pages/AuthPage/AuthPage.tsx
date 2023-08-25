import React, { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { StyledLink } from 'src/components/StyledLink';
import { Title } from 'src/components/Title';
import { SingInBlock } from 'src/pages/AuthPage/SignInBlock';
import { SingUpBlock } from 'src/pages/AuthPage/SignUpBlock';

import s from './AuthPage.module.scss';

export enum AuthMode {
  signIn = 'signin',
  signUp = 'signup',
}

export type Params = { mode: AuthMode; token?: string };

export const AuthPage: FC = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const path = useMemo(
    () => location.pathname.split('/').slice(0, -1).join('/'),
    [location.pathname]
  );

  const signinElement = (
    <>
      <div className={s.top}>
        <Title className={s.title}>{t(`screens.auth.signIn.title`)}</Title>
        <StyledLink to={`${path}/${AuthMode.signUp}`}>
          {t(`screens.auth.signUp.title`)}
        </StyledLink>
      </div>
      <SingInBlock />
    </>
  );

  const signupElement = (
    <>
      <div className={s.top}>
        <Title className={s.title}>{t(`screens.auth.signUp.title`)}</Title>
        <StyledLink to={`${path}/${AuthMode.signIn}`}>
          {t(`screens.auth.signIn.title`)}
        </StyledLink>
      </div>
      <SingUpBlock />
    </>
  );

  return (
    <div className={s.AuthPage}>
      <div className={s.frame}>
        <Routes>
          <Route
            index
            element={
              <Navigate to={AuthMode.signIn} state={location.state} replace />
            }
          />
          <Route path={AuthMode.signIn} element={signinElement} />
          <Route path={AuthMode.signUp} element={signupElement} />
        </Routes>
      </div>
    </div>
  );
};

export default AuthPage;
