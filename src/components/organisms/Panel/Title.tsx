import React from "react";
import styled from "styled-components";

import { PrimaryColors } from "types";
import { Span } from "components/atoms";

type Props = {
  title: string;
  accentColor: PrimaryColors;
};

export const Title = React.memo(({ title, accentColor }: Props) => (
  <Heading>
    <Span color={accentColor}>#</Span> {title}
  </Heading>
));

const Heading = styled.h5`
  margin: 0;
  font-weight: 700;
  font-size: 14px;
  padding: ${({ theme: { paddings } }) => `0px 0px ${paddings.xs}px 0px`};
`;
