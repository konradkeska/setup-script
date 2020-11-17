import styled from "styled-components";

type Props = {
  mt?: boolean;
};

export const Title = styled.h5<Props>`
  margin: 0;
  font-weight: 700;
  font-size: 14px;
  padding: ${({ theme: { paddings }, mt }) =>
    mt ? `${paddings.md}px 0px` : `0px 0px ${paddings.xs}px 0px`};
`;
