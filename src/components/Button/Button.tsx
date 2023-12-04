import React from "react";
import * as S from "./Button.styled";

type ButtonProps = React.PropsWithChildren<{
  variant?: "solid" | "outlined";
}>;

const Button = ({ variant = "solid", children }: ButtonProps) => {
  return <S.Button variant={variant}>{children}</S.Button>;
};

export { Button };
