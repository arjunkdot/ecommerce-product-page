import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Cart from "./Cart";
import Navbar from "./Navbar";

const Header = (props) => {
  const [isMobNavVisible, setIsMobNavVisible] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);

  // Handle mobile menu visibilty
  const mobMenuHandler = () => {
    setIsMobNavVisible(!isMobNavVisible);
  };

  // Handle mobile menu visibilty
  const cartHandler = () => {
    setIsCartVisible(!isCartVisible);
  };

  // Used useEffect to prevent bad setState() call
  useEffect(() => {
    // Display overlay
    props.displayOverlay(isMobNavVisible);
  }, [isMobNavVisible]);

  return (
    <MainHeader>
      <div className="header-left">
        <img
          src="./images/icon-menu.svg"
          className="nav-menu-icon"
          alt="Menu"
          onClick={mobMenuHandler}
        />
        <NavLink to="/">
          <img src="/images/logo.svg" className="navbar-logo" alt="Sneakers" />
        </NavLink>
        <div
          className={`navbar-container ${
            isMobNavVisible ? "" : "nav-mob-hidden"
          }`}
        >
          <img
            src="./images/icon-close.svg"
            className="nav-menu-close"
            alt="Close"
            onClick={mobMenuHandler}
          />
          <Navbar />
        </div>
      </div>
      <div className="header-right">
        <img
          src="./images/icon-cart.svg"
          onClick={cartHandler}
          className="cart-icon"
          alt="Cart"
        />
        {isCartVisible ? <Cart /> : null}
        <div className="user-avatar-container">
          <img
            src="./images/image-avatar.png"
            className="user-avatar"
            alt="User"
          />
        </div>
      </div>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  width: 85%;
  .header-left,
  .header-right {
    display: flex;
    align-items: center;
  }
  .header-right > * {
    &:first-child {
      margin-right: 2rem;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.small}) {
    height: 70px;
    border-bottom: none;
  }
  .navbar-logo {
    margin-right: 2.5rem;
  }
  .user-avatar-container {
    border-radius: 50%;
    overflow: hidden;
    height: 52px;
    width: 52px;
    border: 2px solid transparent;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      border: 2px solid ${({ theme }) => theme.colors.orange};
      transition: all 0.3s ease-in-out;
    }


    @media (max-width: ${({ theme }) => theme.media.medium}) {
      height: 40px;
      width: 40px;
    }

    @media (max-width: ${({ theme }) => theme.media.small}) {
      height: 32px;
      width: 32px;
    }
  }
  .cart-icon {
    opacity: 0.6;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      opacity: 1;
      transition: all 0.3s ease-in-out;
    }
  }
  .nav-menu-icon {
    cursor: pointer;
    display: none;
    margin-right: 1rem;

    @media (max-width: ${({ theme }) => theme.media.medium}) {
      display: inline-block;
    }
  }

  .nav-menu-close {
    display: none;
    width: 18px;
    height: 18px;
    position: absolute;
    top: 30px;
    cursor: pointer;
    @media (max-width: ${({ theme }) => theme.media.medium}) {
      display: inline-block;
    }
  }

  .navbar-container {
    @media (max-width: ${({ theme }) => theme.media.medium}) {
      display: flex;
      position: fixed;
      padding: 100px 25px 25px;
      min-width: 250px;
      max-width: 70%;
      height: 100%;
      background-color: ${({ theme }) => theme.colors.white};
      left: 0;
      top: 0;
      z-index: 99;
    }
  }

  .nav-mob-hidden {
    @media (max-width: ${({ theme }) => theme.media.medium}) {
      display: none;
    }
  }
`;
export default Header;
