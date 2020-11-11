import styled from "styled-components";

type Props = {
  mt?: boolean;
};

export const Title = styled.h5<Props>`
  margin: 0;
  font-weight: 700;
  font-size: 16px;
  margin: ${({ mt }) => (mt ? "24px 0px" : "0px 0px 24px 0px")};
`;
