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
      pagination={{type:'progressbar'}}
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
      450:{slidesPerView:2} ,
      800:{slidesPerView:3}
    }}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      className={cl.carousel}
    >
     {imagesArr&& Object.keys(imagesArr) && imagesArr.map(image =>{
        return(
          <SwiperSlide key={image}><img loading='lazy' src={image} alt="blood cell"/></SwiperSlide>
        )
      })}
    </Swiper>
     
  
  );
};

export default Carousel;