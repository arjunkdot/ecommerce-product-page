import React, { useState } from "react";
import styled from "styled-components";

const Slider = ({ images, thumbnails, showNav }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleNavigation(mode) {
    if (mode == "prev" && currentSlide != 0) {
      setCurrentSlide((prev) => prev - 1);
    }
    if (mode == "next" && currentSlide < images.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  }

  return (
    <ProductSlider>
      <div className="product-image-spotlight">
        {showNav ? (
          <button
            onClick={() => handleNavigation("prev")}
            className="product-images-nav product-images-nav--prev"
          >
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 1 3 9l8 8"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
        ) : null}

        {showNav ? (
          <button
            onClick={() => handleNavigation("next")}
            className="product-images-nav product-images-nav--next"
          >
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m2 1 8 8-8 8"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
        ) : null}

        <div
          className="product-images"
          data-target={currentSlide}
          style={{ transform: "translateX(-" + currentSlide * 100 + "%)" }}
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
              onClick={() => setCurrentSlide(slideNo)}
              className={`product-thumbnail ${
                i == currentSlide ? "active" : ""
              }`}
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
  position: relative;

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
    border: 2px solid transparent;
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
        opacity: 0.4;
        transition: all 0.4s ease-in-out;
      }
    }
  }
  .product-thumbnail.active {
    border: 2px solid ${({ theme }) => theme.colors.orange};
    img {
      opacity: 0.4;
    }
  }
  .product-images {
    display: flex;
    align-items: center;
    transition: all 0.5s ease-in-out;
  }
  .product-images-nav {
    width: 45px;
    height: 45px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: 50%;
    padding: 15px;
    top: calc(45% - 45px);
    cursor: pointer;
    z-index: 1;
    transition: all 0.3s ease-in-out;
    stroke: ${({ theme }) => theme.colors.veryDarkBlue};
    &:hover {
      stroke: ${({ theme }) => theme.colors.orange};
      transition: all 0.3s ease-in-out;
    }
  }
  .product-images-nav--prev {
    left: -25px;
  }
  .product-images-nav--next {
    right: -25px;
  }
`;
