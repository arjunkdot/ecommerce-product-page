import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <MainHeader>
      <div className="header-left">
        <img
          src="./images/icon-menu.svg"
          className="nav-menu-icon"
          alt="Menu"
        />
        <NavLink to="/">
          <img src="/images/logo.svg" className="navbar-logo" alt="Sneakers" />
        </NavLink>
        <div className="navbar-container">
          <img
            src="./images/icon-close.svg"
            className="nav-menu-close"
            alt="Close"
          />
          <Navbar />
        </div>
      </div>
      <div className="header-right">
        <img src="./images/icon-cart.svg" className="cart-icon" alt="Cart" />
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
  .header-right {
    * {
      &:first-child {
        margin-right: 2rem;
      }
    }
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
`;
export default Header;
