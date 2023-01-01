import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { ButtonPrimaryBlockShadow } from "./styles/Buttons";
import { BadgePrimary } from "./styles/Badges";
import { Toast } from "./styles/Toasts";
import Counter from "./components/Counter";
import Slider from "./components/Slider";
import { CartContext } from "./store/CartContext";
import Skeleton from "./components/Skeleton";

const Home = () => {
  const [data, setData] = useState(null);
  const [itemCount, setItemCount] = useState(0);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const { addItem } = useContext(CartContext);
  useEffect(function () {
    fetch("./data.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setData(data);
      })
      .catch(function (err) {
        console.log("Error", err);
      });
  }, []);

  function addToCartHandler(e) {
    e.preventDefault();
    addItem({
      id: data.productID,
      name: data.productName,
      quantity: itemCount,
      price: data.price,
    });
    if (itemCount > 0) {
      setIsToastVisible(true);
      setTimeout(() => {
        setIsToastVisible(false);
      }, 2000);
    }
  }

  return (
    <>
      <div className="container">
        <Homepage>
          <div className="product-image">
            {data ? (
              <Slider
                images={data.productImages}
                thumbnails={data.productThumbnails}
              />
            ) : (
              <Skeleton style="photo" />
            )}
          </div>
          <div className="product-meta">
            <span className="product-category">{data ? data.brand : <Skeleton style="subhead" />}</span>
            <span className="product-name">
              {data ? data.productName : <Skeleton style="title" />}
            </span>
            <span className="product-description">
              {data ? data.productDescripiton : <Skeleton style="paragraph" />}
            </span>
            <div className="product-price-container">
              <span className="product-price">
                {data ? (
                  '$'+parseFloat(data.price).toFixed(2)
                ) : (
                  <Skeleton style="tag" />
                )}
              </span>
              <BadgePrimary>{data ? data.discount : null}%</BadgePrimary>
            </div>
            <span className="product-original-price">
              {data ? (
                "$" + parseFloat(data.oldPrice).toFixed(2)
              ) : (
                <Skeleton style="tag" />
              )}
            </span>
            <div className="product-actions">
              <Counter count={itemCount} countHandler={setItemCount} />
              <ButtonPrimaryBlockShadow onClick={addToCartHandler}>
                <img
                  src="./images/icon-cart-white.svg"
                  width="16"
                  height="16"
                  alt=""
                />
                Add to cart
              </ButtonPrimaryBlockShadow>
            </div>
          </div>
        </Homepage>
      </div>
      {isToastVisible ? <Toast>Added to cart</Toast> : null}
    </>
  );
};

export default Home;

const Homepage = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 5rem;

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    grid-template-columns: unset;
    margin-top: unset;
    grid-template-rows: repeat(2, auto);
  }

  .product-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .product-meta {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 400px;
    @media (max-width: ${({ theme }) => theme.media.large}) {
      max-width: 300px;
    }
    @media (max-width: ${({ theme }) => theme.media.medium}) {
      max-width: 100%;
      padding: 1.5rem;
    }
  }

  .product-category {
    color: ${({ theme }) => theme.colors.orange};
    display: block;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  .product-name {
    color: ${({ theme }) => theme.colors.veryDarkBlue};
    display: block;
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 1.25rem;
    @media (max-width: ${({ theme }) => theme.media.medium}) {
      font-size: 1.75rem;
      margin-top: 0.25rem;
    }
  }

  .product-description {
    color: ${({ theme }) => theme.colors.darkGrayishBlue};
    font-size: 0.9rem;
    display: block;
    line-height: 1.5;
    margin-bottom: 1.5rem;
    @media (max-width: ${({ theme }) => theme.media.medium}) {
      line-height: 1.75;
    }
  }

  .product-price-container {
    display: flex;
    align-items: center;
    margin-bottom: 0.25rem;
  }

  .product-price {
    color: ${({ theme }) => theme.colors.veryDarkBlue};
    display: block;
    font-size: 1.5rem;
    font-weight: bold;
    margin-right: 0.75rem;
    @media (max-width: ${({ theme }) => theme.media.small}) {
      font-size: 1.75rem;
    }
  }

  .product-original-price {
    color: ${({ theme }) => theme.colors.grayishBlue};
    font-weight: 700;
    font-size: 0.85rem;
    text-decoration: line-through;
    @media (max-width: ${({ theme }) => theme.media.medium}) {
      position: relative;
      text-align: right;
      display: inline-block;
      top: -35px;
      font-size: 1rem;
    }
  }

  .product-actions {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    margin-top: 1.5rem;
    @media (max-width: ${({ theme }) => theme.media.medium}) {
      grid-template-columns: unset;
      grid-template-rows: repeat(2, 1fr);
      margin-top: unset;
      div {
        &:first-child {
          margin-bottom: 1rem;
        }
      }
    }
  }
`;
