import React,{useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination} from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CarouselImage from './CarouselImage';
import cl from "./carousel.module.css";

const Carousel = ({imagesArr,cellName}) => {
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
      className={cl.carousel}
      >

     {imagesArr&& Object.keys(imagesArr) && imagesArr.map(image =>{
        return(
          <SwiperSlide key={image}>
              <CarouselImage key={image} image ={image} cellName={cellName} />
          </SwiperSlide>
        )
      })}
    </Swiper>
     
  
  );
};

export default Carousel;