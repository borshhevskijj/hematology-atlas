import React from 'react';


import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';

register();

const Carousel = ({imagesArr}) => {
    const swiperElRef = useRef(null);
  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current && swiperElRef.current.addEventListener('progress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress,swiper);
    });

    swiperElRef.current.addEventListener('slidechange', (e) => {
      console.log('slide changed');
    });
  }, []);

    return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view="3"
      navigation="true"
      pagination="true"
    >
      {imagesArr&& Object.keys(imagesArr) && imagesArr.map(image =>{
        return(
          <swiper-slide><img src={image} alt="" /></swiper-slide>
        )
      })}
    </swiper-container>
  );
};

export default Carousel;