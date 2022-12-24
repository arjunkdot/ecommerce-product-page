import React, { useRef } from "react";

const outsideClickManage = (ref, clickHandler) => {

  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      clickHandler(false)
    }
  }
  
  document.addEventListener('mousedown', handleClickOutside);
};

const OutsideClickHandler = ({ children, clickHandler }) => {
  const wrapperRef = useRef(null);
  outsideClickManage(wrapperRef, clickHandler);

  return <div ref={wrapperRef}>{children}</div>
} 

export default OutsideClickHandler;
