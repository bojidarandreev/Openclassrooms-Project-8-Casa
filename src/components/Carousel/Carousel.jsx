import React, { useState } from "react";
import "./carousel.scss";
const Carousel = ({ images }) => {
  const hasOneImage = images.length <= 1;
  const [activeIndex, setActiveIndex] = useState(0);
  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    // console.log(`Current image index: ${activeIndex+1}`);
  };
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    // console.log(`Current image index: ${activeIndex+1}`);
  };
  return (
    <div className="carousel">
      <button
        onClick={prevSlide}
        className={
          hasOneImage ? "carousel__btn__none" : `carousel__btn carousel__btn--prev`
        }
      >
        &lt;
      </button>
      <div className="carousel__imgContainer">
        <img
          src={images[activeIndex]}
          alt={`Slide ${activeIndex}`}
          className="carousel__img"
        />
        <p
          className={
            hasOneImage ? "carousel__number__none" : "carousel__number"
          }
        >
          {activeIndex + 1}/{images.length}
        </p>
      </div>
      <button
        onClick={nextSlide}
        className={
          hasOneImage ? "carousel__btn__none" : "carousel__btn carousel__btn--next"
        }
      >
        &gt;
      </button>
    </div>
  );
};
export default Carousel;
