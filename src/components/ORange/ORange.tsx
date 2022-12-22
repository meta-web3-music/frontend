import React from "react";
import styled from "styled-components";

const ORangeStyled = styled.input`
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
  border-radius: 200px;
  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 12.8px;
    cursor: pointer;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    background: #003c83;
    border-radius: 25px;
    border: 0px solid #000101;
  }
  &::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    border: 0px solid #000000;
    height: 20px;
    width: 39px;
    border-radius: 7px;
    background: #003c83;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -3.6px;
  }
  &:focus::-webkit-slider-runnable-track {
    background: #003c83;
  }
  &::-moz-range-track {
    width: 100%;
    height: 12.8px;
    cursor: pointer;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    background: #003c83;
    border-radius: 25px;
    border: 0px solid #000101;
  }
  &::-moz-range-thumb {
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    border: 4px solid #003c83;
    height: 39px;
    width: 39px;
    border-radius: 100%;
    cursor: pointer;
  }
  &::-ms-track {
    width: 100%;
    height: 12.8px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    border-width: 39px 0;
    color: transparent;
  }
  &::-ms-fill-lower {
    background: #003c83;
    border: 0px solid #000101;
    border-radius: 50px;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  }
  &::-ms-fill-upper {
    background: #003c83;
    border: 0px solid #000101;
    border-radius: 50px;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  }
  &::-ms-thumb {
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    border: 0px solid #000000;
    height: 20px;
    width: 39px;
    border-radius: 7px;
    background: #003c83;
    cursor: pointer;
  }
  &:focus::-ms-fill-lower {
    background: #003c83;
  }
  &:focus::-ms-fill-upper {
    background: #003c83;
  }
`;

const ORange = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((p, ref) => <ORangeStyled type="range" ref={ref} {...p} />);

ORange.displayName = "ORange";

export default ORange;
