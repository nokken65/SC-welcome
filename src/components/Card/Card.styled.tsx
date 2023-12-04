import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
  height: 350px;
  padding: 10px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);

  color: #abb3ba;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 166.667% */
`;

const Cover = styled.img`
  border-radius: 10px;
`;

const Title = styled.h2`
  color: #000;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
`;

export { Card, Cover, Title };
