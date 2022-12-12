import React, { useState } from "react";
import styled from "styled-components";

const Counter = () => {
  const [count, setCount] = useState(0);

  const plusClickHandler = () => {
    setCount(count + 1);
  };

  const minusClickHandler = () => {
    if (count != 0) setCount(count - 1);
  };
  return (
    <QtyCounter>
      <button onClick={minusClickHandler} className="count-button">
        <img
          src="./images/icon-minus.svg"
          width="10"
          height="10"
          alt="Decrease quanity"
          className="count-icon"
        />
      </button>
      <span className="count">{count}</span>
      <button onClick={plusClickHandler} className="count-button">
        <img
          src="./images/icon-plus.svg"
          width="10"
          height="10"
          alt="Decrease quanity"
          className="count-icon"
        />
      </button>
    </QtyCounter>
  );
};

export default Counter;

const QtyCounter = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrayishBlue};
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-content: center;
  align-items: center;
  max-width: 135px;
  padding: 0.9rem;

  .count {
    text-align: center;
    font-weight: 700;
    font-size: 0.9rem;
  }

  .count-button {
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease-in-out;

    &:hover {
      opacity: 0.7;
      transition: all 0.4s ease-in-out;
    }
  }
`;
