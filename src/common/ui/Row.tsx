import styled from "styled-components";

type RowProps = { full?: boolean };

const Row = styled.div<RowProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  width: ${(props) => (props.full ? "100%" : "fit-content")};
`;

export { Row };
