import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination} from 'swiper'
import cl from './carousel.module.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = ({imagesArr}) => {
    return (
      <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className={cl.carousel}
    >
     {imagesArr&& Object.keys(imagesArr) && imagesArr.map(image =>{
        return(
          <SwiperSlide key={image}><img src={image} alt="" /></SwiperSlide>
        )
      })}
    </Swiper>
     
  
  );
};

export default Carousel;