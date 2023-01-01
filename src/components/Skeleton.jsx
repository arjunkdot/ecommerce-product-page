import React from "react";
import styled from "styled-components";

const Skeleton = ({ style }) => {
  switch (style) {
    case "paragraph":
      return (
        <div>
          <SkeletonBase height={15} width={100} minWidth={100}>
            <div></div>
          </SkeletonBase>
          <SkeletonBase height={15} width={100} minWidth={100}>
            <div></div>
          </SkeletonBase>
          <SkeletonBase height={15} width={100} minWidth={100}>
            <div></div>
          </SkeletonBase>
        </div>
      );

    case "title":
      return (
        <div>
          <SkeletonBase height={20} width={100} minWidth={100}>
            <div></div>
          </SkeletonBase>
          <SkeletonBase height={20} width={50} minWidth={100}>
            <div></div>
          </SkeletonBase>
        </div>
      );

    case "subhead":
      return (
        <div>
          <SkeletonBase height={10} width={25} minWidth={100}>
            <div></div>
          </SkeletonBase>
        </div>
      );

    case "tag":
      return (
        <div>
          <SkeletonBase height={15} width={25} minWidth={100}>
            <div></div>
          </SkeletonBase>
        </div>
      );

    case "photo":
      return (
        <div>
          <SkeletonBase height={300} width={100} minWidth={300}>
            <div></div>
          </SkeletonBase>
        </div>
      );
  }
};

export default Skeleton;

const SkeletonBase = styled.div`
  @keyframes skeletonEffect {
    0% {
      left: -100%;
    }
    100% {
      left: 200%;
    }
  }
  display: block;
  background-color: ${({ theme }) => theme.colors.borderColor};
  min-width:  ${(props) => props.minWidth}px;
  width: ${(props) => props.width}%;
  height: ${(props) => props.height}px;
  overflow: hidden;
  margin-top: 10px;
  margin-bottom: 10px;
  div {
    position: relative;
    width: 100%;
    height: 100%;
    background: rgb(236, 241, 251);
    background: -moz-linear-gradient(
      90deg,
      rgba(236, 241, 251, 0) 0%,
      rgba(225, 225, 225, 1) 19%,
      rgba(225, 225, 225, 1) 83%,
      rgba(250, 250, 250, 0) 100%
    );
    background: -webkit-linear-gradient(
      90deg,
      rgba(236, 241, 251, 0) 0%,
      rgba(225, 225, 225, 1) 19%,
      rgba(225, 225, 225, 1) 83%,
      rgba(250, 250, 250, 0) 100%
    );
    background: linear-gradient(
      90deg,
      rgba(236, 241, 251, 0) 0%,
      rgba(225, 225, 225, 1) 19%,
      rgba(225, 225, 225, 1) 83%,
      rgba(250, 250, 250, 0) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ecf1fb",endColorstr="#fafafa",GradientType=1);
    animation: skeletonEffect 1s ease-in-out infinite;
  }
`;
