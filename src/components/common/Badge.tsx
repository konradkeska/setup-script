import React from "react";

import { Theme } from "../../themes";
import { Span } from "../base";

export function Badge({
  theme,
  children,
}: {
  theme: Theme;
  children: React.ReactNode;
}) {
  return (
    <Span
      color={theme.colors.font1}
      bg={theme.colors.red}
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
