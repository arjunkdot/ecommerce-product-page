import React from "react";
import styled from "styled-components";

const Slider = () => {
  return (
    <ProductSlider>
      <div className="product-image-spotlight">
        <img src="./images/image-product-1.jpg" />
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
  .product-image-spotlight{
    margin-bottom: 1.5rem;
    border-radius: 1rem;
    overflow: hidden;

    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .product-thumbnails {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .product-thumbnail {
    display: block;
    width: 75px;
    height: 75px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0.5rem;
    }
  }
`;
