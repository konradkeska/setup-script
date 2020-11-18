import React from "react";

import { FontColors, MaterialColors } from "types";

import { Code } from "../atoms";

type Props = {
  children: React.ReactNode;
  color?: FontColors;
  bgColor?: MaterialColors;
};

export const Badge = React.memo(
  ({
    children,
    color = FontColors.BASE,
    bgColor = MaterialColors.INPUT,
  }: Props) => (
    <Code
      color={color}
      bgColor={bgColor}
      radius="4px"
      h="18px"
      size="12px"
      ml
      p
    >
      {children}
    </Code>
  )
);
