import React from 'react';
import cn from 'clsx';
import { Button } from 'src/components/Button/Button';
import { Icon } from 'src/components/Icon/Icon';
import { Input } from 'src/components/Input/Input';

import MinusIcon from 'src/stories/assets/minus.svg';
import PlusIcon from 'src/stories/assets/plus.svg';
import CartIcon from 'src/stories/assets/cart.svg';

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
