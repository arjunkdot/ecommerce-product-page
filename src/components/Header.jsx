import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <MainHeader>
      <div className="container">
        <NavLink to="/">
          <img src="/images/logo.svg" alt="Sneakers" />
        </NavLink>

        <Navbar />
      </div>
    </MainHeader>
  );
};

const MainHeader = styled.header``;
export default Header;
