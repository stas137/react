import React from 'react';
import cn from 'clsx';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { Input } from '../Input/Input';

import MinusIcon from '../../stories/assets/minus.svg';
import PlusIcon from '../../stories/assets/plus.svg';
import CartIcon from '../../stories/assets/cart.svg';

import './ButtonCart.css';

interface ButtonCartProps {
  className?: string;
  countProducts?: number;
  setCountProducts?: (count: number) => void;
  onClick?: () => void;
}

export const ButtonCart = (props: ButtonCartProps) => {
  const { className, countProducts, setCountProducts, onClick } = props;

  // const [count, setCount] = useState(countProducts);

  if (countProducts) {
    return (
      <div className={cn('ButtonCart', className)}>
        <div className={cn('ButtonCart--controls', className)}>
          <Icon
            Svg={MinusIcon}
            clickable
            width={20}
            height={20}
            onClick={
              setCountProducts
                ? () => setCountProducts(countProducts - 1)
                : undefined
            }
          ></Icon>
          <Input
            value={countProducts}
            background="none"
            color="light"
            readOnly
          />
          <Icon
            Svg={PlusIcon}
            clickable
            width={20}
            height={20}
            onClick={
              setCountProducts
                ? () => setCountProducts(countProducts + 1)
                : undefined
            }
          ></Icon>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn('ButtonCart', className)}
      onClick={onClick ? onClick : undefined}
    >
      <Button addonLeft={<CartIcon width={20} height={20} />}>
        Add to cart
      </Button>
    </div>
  );
};
