import React, {useContext} from "react";
import styled from "styled-components";
import { CartContext } from "../store/CartContext";
import { ButtonPrimaryBlock } from "../styles/Buttons";
import CartItem from "./CartItem";

const Cart = () => {
  const { items, removeItem } = useContext(CartContext);

  return (
    <ShoppingCart>
      <div className="shopping-cart-header">Cart</div>
      <div className="shopping-cart-body">
        {items && items.map(item=> <CartItem key={item.id} removeHandler={removeItem} item={item} />)}
        
        <ButtonPrimaryBlock>Checkout</ButtonPrimaryBlock>
      </div>
    </ShoppingCart>
  );
};

export default Cart;

const ShoppingCart = styled.div`
  position: absolute;
  width: 320px;
  min-height: 200px;
  height: auto;
  top: 85px;
  right: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 15px 35px -5px;
  z-index: 99;
  .shopping-cart-header {
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
    display: flex;
    align-items: center;
    height: 60px;
    width: 100%;
    padding: 20px;
    font-size: 0.9rem;
    font-weight: bold;
  }

  .shopping-cart-body {
    padding: 20px;
    button {
      margin-top: 1rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.small}) {
    width: calc(100% - 20px);
    min-height: 210px;
    left: 10px;
  }
`;
