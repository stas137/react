import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Cart } from 'src/components/Cart/Cart';

import { Page } from '../../components/Page';

import s from './CartPage.module.scss';

export const CartPage: FC = () => {
  const { t } = useTranslation();
  return (
    <Page title={t`screens.CartScreen.title`} className={s.top60}>
      <Cart />
    </Page>
  );
};

export default CartPage;
