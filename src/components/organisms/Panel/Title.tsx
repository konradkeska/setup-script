import React from "react";
import Sc from "styled-components";

import { PrimaryColors } from "types";
import { Span } from "components/atoms";

type Props = {
  text: string;
  accentColor: PrimaryColors;
};

export const Title = React.memo(({ text, accentColor }: Props) => (
  <Heading>
    <Span color={accentColor}>#</Span> {text}
  </Heading>
));

const Heading = Sc.h5`
  margin: 0;
  font-weight: 700;
  font-size: 14px;
  padding: ${({ theme: { paddings } }) => `0px 0px ${paddings.xs}px 0px`};
`;
