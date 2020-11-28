import React from "react";
import Sc from "styled-components";

type Props = {
  text: string;
  description?: string;
};

export const Title = React.memo(({ text, description }: Props) => (
  <Heading aria-label={`${text} ${description || ""}`}>
    {text} <Description>{description || ""}</Description>
  </Heading>
));

const Description = Sc.span`
  font-weight: 400;
`;

const Heading = Sc.h5`
  margin: 0;
  font-weight: 700;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.font.base};
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  background-color: ${({ theme }) => theme.colors.material.overlay};
  padding: ${({ theme: { paddings } }) => `${paddings.xs}px ${paddings.sm}px`};
`;
