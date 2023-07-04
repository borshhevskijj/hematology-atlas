import React, { useState } from "react";
import cl from "./carousel.module.css";
type Props = {
  image: string;
  cellName: string;
};
const CarouselImage: React.FC<Props> = ({ image, cellName }) => {
  const [isImgLoaded, setImgLoaded] = useState(false);
  return (
    <img
      loading="lazy"
      onLoad={() => setImgLoaded(true)}
      className={!isImgLoaded ? cl.loading : cl.loaded}
      src={image}
      alt={cellName}
    />
  );
};

export default CarouselImage;
