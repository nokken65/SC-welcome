import styled, { css } from "styled-components";

type ButtonProps = {
  variant: "solid" | "outlined";
};

const Button = styled.button<ButtonProps>`
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 200% */
  border-radius: 5px;
  width: 86px;
  height: 30px;
  flex-shrink: 0;
  cursor: pointer;
  outline: unset;

  ${(props) =>
    props.variant === "solid" &&
    css<ButtonProps>`
      color: #fff;
      background: #4e71fe;
    `}

  ${(props) =>
    props.variant === "outlined" &&
    css<ButtonProps>`
      color: #4e71fe;
      border: 2px solid #4e71fe;
    `}
`;

export { Button };
