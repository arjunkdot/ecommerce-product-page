import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavLinks>
      <ul className="navbar-list">
        <li className="navbar-link">
          <NavLink to="/">Collections</NavLink>
        </li>
        <li className="navbar-link">
          <NavLink to="/">Men</NavLink>
        </li>
        <li className="navbar-link">
          <NavLink to="/">Women</NavLink>
        </li>
        <li className="navbar-link">
          <NavLink to="/">About</NavLink>
        </li>
        <li className="navbar-link">
          <NavLink to="/">Contact</NavLink>
        </li>
      </ul>
    </NavLinks>
  );
};

const NavLinks = styled.nav`
  .navbar-list {
    display: flex;
    align-items: center;
    @media (max-width: ${({ theme }) => theme.media.medium}) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  .navbar-link {
    a {
      color: ${({ theme }) => theme.colors.darkGrayishBlue};
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 99px;
      margin-right: 2rem;
      text-decoration: none;
      border-bottom: 4px solid transparent;

      &:hover {
        color: ${({ theme }) => theme.colors.veryDarkBlue};
        border-bottom: 4px solid ${({ theme }) => theme.colors.orange};
      }

      @media (max-width: ${({ theme }) => theme.media.medium}) {
        border-bottom: none;
        color: ${({ theme }) => theme.colors.veryDarkBlue};
        font-size: 1.25rem;
        font-weight: 700;
        height: auto;
        &:hover {
          border-bottom: none;
        }
      }
    }
    @media (max-width: ${({ theme }) => theme.media.medium}) {
      margin-bottom: 1.25rem;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

export default Navbar;
