import React, { useState, useEffect } from "react";
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
        showControls={false}
        visibilityHandler={setIsOverlayVisible}
      />
    </>
  );
};

export default Slider;

const Carousel = ({ images, thumbnails, showControls, visibilityHandler }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showNav, setShowNav] = useState(showControls);
  // Show control on mobile view regardless of the preference
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setShowNav(true);
      } else {
        setShowNav(showControls);
      }
    }
    window.addEventListener("resize", handleResize);
    
    // Check condition on load
    handleResize();

  }, []);

  function handleNavigation(mode) {
    if (mode == "prev" && currentSlide != 0) {
      setCurrentSlide((prev) => prev - 1);
    }
    if (mode == "next" && currentSlide < images.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  }

  function toggleOverlay() {
    // Do not show modal carousel if screen size is smaller than 576px
    if (window.innerWidth < 768) return;
    visibilityHandler(true);
  }

  return (
    <ProductCarousel>
      <div className="product-image-spotlight">
        {showNav ? (
          <button
            className="close-button"
            onClick={() => visibilityHandler(false)}
          >
            <svg
              width="18px"
              height="21px"
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
            return (
              <img
                src={"images/" + image}
                key={i}
                onClick={() => toggleOverlay()}
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
    @media (max-width: ${({ theme }) => theme.media.large}) {
      width: 340px;
      height: 340px;
    }
    @media (max-width: ${({ theme }) => theme.media.medium}) {
      width: 100%;
      height: 380px;
      border-radius: unset;
      img {
        object-fit: cover;
        object-position: center bottom;
      }
    }
    @media (max-width: ${({ theme }) => theme.media.small}) {
      height: 300px;
    }
  }
  .product-thumbnails {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 385px;
    @media (max-width: ${({ theme }) => theme.media.medium}) {
      display: none;
    }
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
    @media (max-width: ${({ theme }) => theme.media.medium}) {
      top: calc(55% - 45px);
      width: 40px;
      height: 40px;

      svg {
        width: 25%;
        height: 25%;
        overflow: visible;
        top: -5px;
        position: relative;
        left: -5px;
      }
    }
  }
  .product-images-nav--prev {
    left: -22px;
    @media (max-width: ${({ theme }) => theme.media.medium}) {
      left: 1.5rem;
    }
  }
  .product-images-nav--next {
    right: -22px;
    @media (max-width: ${({ theme }) => theme.media.medium}) {
      right: 1.5rem;
    }
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
    @media (max-width: ${({ theme }) => theme.media.medium}) {
      display: none;
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
