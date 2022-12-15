import React, { useState } from "react";
import styled from "styled-components";

const Slider = ({ images, thumbnails }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log(currentSlide);
  return (
    <ProductSlider>
      <div className="product-image-spotlight">
        <div
          className="product-images" data-target={currentSlide}
          style={{transform: 'translateX(-'+(currentSlide * 100)+'%)'}}
        >
          {images.map((image, i) => {
            return <img src={"images/" + image} key={i} />;
          })}
        </div>
      </div>
      <ul className="product-thumbnails">
        {thumbnails.map((thumbnail, i) => {
          let slideNo = i;
          return (
            <li
              key={i}
              data-target={i}
              onClick={()=> setCurrentSlide(slideNo)}
              className={`product-thumbnail ${i == currentSlide ? "active" : ''}`}
            >
              <img src={"images/" + thumbnail} />;
            </li>
          );
        })}
      </ul>
    </ProductSlider>
  );
};

export default Slider;

const ProductSlider = styled.div`
  .product-image-spotlight {
    margin-bottom: 1.5rem;
    border-radius: 1rem;
    overflow: hidden;
    width: 385;
    height: 385px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .product-thumbnails {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 385px;
  }
  .product-thumbnail {
    display: block;
    width: 75px;
    height: 75px;
    border-radius: 0.5rem;
    overflow: hidden;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.4s ease-in-out;
    }
    &:hover {
      img {
        opacity: 0.7;
        transition: all 0.4s ease-in-out;
      }
    }
  }
  .product-thumbnail.active {
    border: 2px solid ${({ theme }) => theme.colors.orange};
    img {
      opacity: 0.7;
    }
  }
  .product-images {
    display: flex;
    align-items: center;
    transition: all 0.5s ease-in-out;
  }
`;
