import styled from "styled-components";

export const StickyPlayerStyled = styled.div`
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 10px;
    height: 10px;
    border-radius: 10px;
  }
  .slider.songbar:hover::-webkit-slider-thumb {
    background-color: #f3ea01;
  }
  .slider.volumebar::-webkit-slider-thumb {
    background-color: #777777;
  }
  .slider::before {
    -webkit-appearance: none;
    display: none;
  }
`;
