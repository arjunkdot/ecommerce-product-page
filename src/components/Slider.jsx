import React, { useState } from "react";
import styled from "styled-components";
import { Overlay } from "../styles/Overlay";

const Slider = ({ images, thumbnails }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  return (
    <>
      {isOverlayVisible ? (
        <SliderOverlay>
          <Carousel
            images={images}
            thumbnails={thumbnails}
            showControls={true}
            visibilityHandler={setIsOverlayVisible}
          />

          <Overlay />
        </SliderOverlay>
      ) : null}

      <Carousel
        images={images}
        thumbnails={thumbnails}
        showNav={false}
        visibilityHandler={setIsOverlayVisible}
      />
    </>
  );
};

export default Slider;

const Carousel = ({ images, thumbnails, showControls, visibilityHandler }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleNavigation(mode) {
    if (mode == "prev" && currentSlide != 0) {
      setCurrentSlide((prev) => prev - 1);
    }
    if (mode == "next" && currentSlide < images.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  }

  function toggleOverlay(clickedSlide) {
    setCurrentSlide(clickedSlide);
    visibilityHandler(true);
  }

  return (
    <ProductCarousel>
      <div className="product-image-spotlight">
        {showControls ? (
          <button
            className="close-button"
            onClick={() => visibilityHandler(false)}
          >
            <svg
              width="18px"
              height="21spx"
              version="1.1"
              viewBox="0 0 23 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m19.051 1.25 3.4844 3.3945-7.5508 7.3555 7.5508 7.3555-3.4844 3.3945-7.5508-7.3594-7.5508 7.3555-3.4844-3.3945 7.5508-7.3516-7.5508-7.3555 3.4844-3.3945 7.5508 7.3555z"
                fillRule="evenodd"
              />
            </svg>
          </button>
        ) : null}

        {showControls ? (
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

        {showControls ? (
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
            return (
              <img
                src={"images/" + image}
                key={i}
                onClick={() => toggleOverlay(i)}
              />
            );
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
    </ProductCarousel>
  );
};

const ProductCarousel = styled.div`
  position: relative;

  .product-image-spotlight {
    margin-bottom: 1.5rem;
    border-radius: 1rem;
    overflow: hidden;
    width: 385px;
    height: 385px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
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
    background-color: ${({ theme }) => theme.colors.white};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.4s ease-in-out;
    }
    &:hover {
      img {
        opacity: 0.3;
        transition: all 0.4s ease-in-out;
      }
    }
  }
  .product-thumbnail.active {
    border: 2px solid ${({ theme }) => theme.colors.orange};
    img {
      opacity: 0.3;
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
    left: -22px;
  }
  .product-images-nav--next {
    right: -22px;
  }
  .close-button {
    position: absolute;
    top: -40px;
    right: 0;
    z-index: 1;
    background-color: transparent;
    border: none;
    cursor: pointer;

    svg {
      fill: ${({ theme }) => theme.colors.white};
    }
    &:hover {
      svg {
        fill: ${({ theme }) => theme.colors.orange};
      }
    }
  }
`;

const SliderOverlay = styled.div`
  & > div:first-child {
    position: absolute;
    z-index: 99;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    max-width: 485px;
    max-height: calc(485px + 75px + 1.5rem);

    .product-image-spotlight {
      width: 485px;
      height: 485px;
    }
    .product-thumbnails {
      margin: 0 auto;
    }
  }
`;
