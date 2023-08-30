import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import cn from 'clsx';

import { ButtonCart } from 'src/components/ButtonCart/ButtonCart';
import { RUB_USD } from 'src/utils/consts/consts';
import SwiperCore, { Navigation } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import './myswiper.css';
import s from './ProductCard.module.scss';

export type ProductCardSize = 's' | 'm';
interface ImageProps {
  images: string | string[];
}

interface ProductCardProps {
  className?: string;
  size?: ProductCardSize;
  category?: string;
  price?: string;
  images?: string | string[];
  name?: string;
  desc?: string;
}

export const ProductCard = (props: ProductCardProps) => {
  const { className, size = 'm', category, price, images, name, desc } = props;

  const { i18n } = useTranslation();
  const language = i18n.resolvedLanguage;

  const [count, setCount] = useState(0);

  // install Swiper modules
  SwiperCore.use([Navigation]);

  const MySwiper: React.FC<ImageProps> = ({ images }: ImageProps) => {
    if (images.length > 1) {
      return (
        <Swiper navigation className="mySwiper">
          {(images as string[]).map((image) => (
            <SwiperSlide key={image}>
              <img className={cn(s.ProductCardImage)} src={image} alt={name} />
            </SwiperSlide>
          ))}
        </Swiper>
      );
    }

    return (
      <img className={cn(s.ProductCardImage)} src={images[0]} alt={name} />
    );
  };

  return (
    <div className={cn(s.ProductCardWrapper, s[size], className)}>
      <div className={cn(s.ProductCardWrapperImage)}>
        {size === 's' ? (
          <div className={cn(s.ProductCardContainerImage)}>
            <img
              className={cn(s.ProductCardImage)}
              src={images as string}
              alt={name}
            />
          </div>
        ) : (
          <MySwiper images={images} />
        )}
      </div>
      <div
        className={cn(
          s.ProductCardWrapperInfo,
          size === 'm' ? s.ProductCardWrapperInfoM : ''
        )}
      >
        <div className={cn(s.ProductCardPrice)}>
          <span>
            {language === 'ru'
              ? price
              : String((Number(price) / RUB_USD).toFixed(2))}
            {language === 'ru' ? '₽' : '$'}
          </span>
        </div>
        <div className={cn(s.ProductCardTitle)}>
          <span>{name}</span>
        </div>
        <div className={cn(s.ProductCardDescription)}>
          <span>{desc}</span>
        </div>
        <div className={cn(s.ProductCardCategory)}>
          <span>{category}</span>
        </div>
        <div className={cn(s.ProductCardCart)}>
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
