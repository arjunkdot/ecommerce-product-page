import React from "react";
import styled from "styled-components";

const CartItem = () => {
  return (
    <ShoppingCartItem>
      <div className="cart-item-image-container">
        <img src="./images/image-product-1-thumbnail.jpg" alt="Product Image" />
      </div>
      <div className="cart-item-meta">
        <span className="cart-item-name">Fall Limited Edition Sneakers</span>
        <div className="cart-item-prices">
          <span className="cart-item-price">$125 x 3</span>
          <span className="cart-item-total">$375.00</span>
        </div>
      </div>
      <img
        src="./images/icon-delete.svg"
        className="cart-item-delete"
        alt="Delete Item"
      />
    </ShoppingCartItem>
  );
};

export default CartItem;

const ShoppingCartItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 0.5rem;
  align-items: center;

  .cart-item-image-container {
    width: 42px;
    height: 42px;
    border-radius: 3px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .cart-item-name,
  .cart-item-price,
  .cart-item-total {
    font-size: 14px;
    line-height: 1.5;
  }
  .cart-item-name,
  .cart-item-price {
    color: ${({ theme }) => theme.colors.darkGrayishBlue};
  }
  .cart-item-total {
    color: ${({ theme }) => theme.colors.veryDarkBlue};
    font-weight: bold;
    margin-left: 0.5rem;
  }
  .cart-item-delete {
    opacity: 0.3;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
      transition: all 0.3s ease-in-out;
    }
  }
`;
