import React from "react";
import Sc from "styled-components";

import { FontColors, MaterialColors, PrimaryColors } from "types";
import { toColorString } from "utils";

type Props = {
  name: string;
  size?: number;
  fillColor?: FontColors | PrimaryColors | MaterialColors;
  hoverFillColor?: FontColors | PrimaryColors | MaterialColors;
};

export const Icon = React.memo(
  ({ name, size = 20, fillColor = FontColors.SUB, hoverFillColor }: Props) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      fillColor={fillColor}
      hoverFillColor={hoverFillColor}
      size={size}
    >
      <use xlinkHref={`#${name}`} href={`#${name}`} />
    </Svg>
  )
);

type SvgProps = {
  size: number;
  fillColor: FontColors | PrimaryColors | MaterialColors;
  hoverFillColor?: FontColors | PrimaryColors | MaterialColors;
};

const Svg = Sc.svg<SvgProps>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  max-width: ${({ size }) => `${size}px`};
  max-height: ${({ size }) => `${size}px`};
  fill: ${({ theme, fillColor }) => toColorString(fillColor, theme)};

  ${({ theme, hoverFillColor }) => {
    if (hoverFillColor) {
      return `
        &:hover {
          fill: ${toColorString(hoverFillColor, theme)};
        }
      `;
    }
  }}
`;
