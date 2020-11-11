import React from "react";
import { DefaultColors } from "styled-components";

import { Code } from "../base";

type Props = {
  children: React.ReactNode;
  color?: keyof DefaultColors;
  bgColor?: keyof DefaultColors;
};

export const Badge = React.memo(
  ({ children, color = "font1", bgColor = "bg3" }: Props) => (
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
