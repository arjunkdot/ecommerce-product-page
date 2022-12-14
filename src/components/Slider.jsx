import React from "react";
import styled from "styled-components";

const Slider = () => {
  return (
    <ProductSlider>
      <div className="product-image-spotlight">
        <div className="product-images">
          <img src="./images/image-product-1.jpg" />
          <img src="./images/image-product-2.jpg" />
          <img src="./images/image-product-3.jpg" />
          <img src="./images/image-product-4.jpg" />
        </div>
      </div>
      <ul className="product-thumbnails">
        <li className="product-thumbnail active">
          <img src="./images/image-product-1-thumbnail.jpg" />
        </li>
        <li className="product-thumbnail">
          <img src="./images/image-product-2-thumbnail.jpg" />
        </li>
        <li className="product-thumbnail">
          <img src="./images/image-product-3-thumbnail.jpg" />
        </li>
        <li className="product-thumbnail">
          <img src="./images/image-product-4-thumbnail.jpg" />
        </li>
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
  .product-images{
    display: flex;
    align-items: center;
  }
`;
