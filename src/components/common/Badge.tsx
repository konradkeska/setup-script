import React from "react";
import { DefaultColors } from "styled-components";

import { Span } from "../base";

export function Badge({
  children,
  color = "font1",
  bgColor = "bg3",
}: {
  children: React.ReactNode;
  color?: keyof DefaultColors;
  bgColor?: keyof DefaultColors;
}) {
  return (
    <Span
      color={color}
      bgColor={bgColor}
      radius="4px"
      h="19px"
      size="12px"
      ml
      p
    >
      {children}
    </Span>
  );
}
