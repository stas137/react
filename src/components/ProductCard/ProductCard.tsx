import React, { useState } from 'react';
import cn from 'clsx';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';
import { ButtonCart } from 'src/components/ButtonCart/ButtonCart';

import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

import './ProductCard.css';

export type ProductCardSize = 's' | 'm';

interface ProductCardProps {
  className?: string;
  size?: ProductCardSize;
  category?: string;
  price?: string;
  images?: string | string[];
  title?: string;
  description?: string;
}

export const ProductCard = (props: ProductCardProps) => {
  const {
    className,
    size = 'm',
    category,
    price,
    images,
    title,
    description,
  } = props;

  const { i18n } = useTranslation();
  const language = i18n.resolvedLanguage;

  const [count, setCount] = useState(0);

  // install Swiper modules
  SwiperCore.use([Navigation]);

  return (
    <div
      className={cn('ProductCard--wrapper', `ProductCard--${size}`, className)}
    >
      <div className={cn('ProductCard--wrapper-image')}>
        {size === 's' ? (
          <div className={cn('ProductCard--container-image')}>
            <img
              className={cn('ProductCard--image')}
              src={images as string}
              alt={title}
            />
          </div>
        ) : (
          <Swiper navigation className="mySwiper">
            {(images as string[]).map((image) => (
              <SwiperSlide key={image}>
                <img
                  className={cn('ProductCard--image')}
                  src={image}
                  alt={title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      <div
        className={cn(
          'ProductCard--wrapper-info',
          `ProductCard--wrapper-info-${size}`
        )}
      >
        <div className={cn('ProductCard--price')}>
          <span>
            {language === 'ru'
              ? price
              : String((Number(price) / 90).toFixed(2))}
            {language === 'ru' ? '₽' : '$'}
          </span>
        </div>
        <div className={cn('ProductCard--title')}>
          <span>{title}</span>
        </div>
        <div className={cn('ProductCard--description')}>
          <span>{description}</span>
        </div>
        <div className={cn('ProductCard--category')}>
          <span>{category}</span>
        </div>
        <div className={cn('ProductCard--cart')}>
          <ButtonCart
            countProducts={count}
            setCountProducts={(val) => setCount(val)}
            onClick={() => {
              setCount(1);
            }}
          />
        </div>
      </div>
    </div>
  );
};
