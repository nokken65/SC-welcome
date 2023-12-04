import React from "react";
import * as S from "./Card.styled";

type CardProps = React.PropsWithChildren<{
  title: string;
  coverUrl: string;
  coverAlt?: string;
}>;

const Card = ({ title, coverUrl, coverAlt, children }: CardProps) => {
  return (
    <S.Card>
      <S.Cover src={coverUrl} alt={coverAlt} />
      <S.Title>{title}</S.Title>
      {children}
    </S.Card>
  );
};

export { Card };
