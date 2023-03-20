import * as React from "react";
import styled from "styled-components";
import { css } from "styled-components";

const StyledButton = styled.button`
  /* 색상 */
  color: ${(props) => props.theme.gray.medium};

  ${(props) => {
    const selected =
      // typeof props.color !== "undefined"
      //   ? props.theme.colors[props.color]
      //   : props.theme.colors["main"];

      typeof props.color !== "undefined" && props.theme.mainColor;

    return css`
      background: ${selected};
      &:hover {
        background: red;
      }
      &:active {
        background: yellow;
      }
    `;
  }}
`;

export default function MyPage() {
  return <StyledButton>MyPage</StyledButton>;
}
