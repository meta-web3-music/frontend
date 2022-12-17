import styled from "styled-components";

export const AdListItemStyled = styled.div`
  :hover {
    .play-button {
      transform: scale(1) translate(-50%, -50%);
      opacity: 1;
    }

    .image-placeholder {
      scale: 0.7;
      opacity: 0;
    }

    .artwork {
      transform: scale(1.03);
    }
  }

  .buy-btn {
    :hover {
      .label {
        top: 50%;
      }
      .price {
        top: 200%;
      }
    }
  }
  .data {
    color: #042440;
  }
`;
