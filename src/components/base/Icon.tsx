import React from "react";
import styled from "styled-components";
import { FontColors, MaterialColors, PrimaryColors } from "../../types";
import { toColorString } from "../../utils/helpers";

type Props = {
  name: string;
  size?: number;
  fillColor?: FontColors | PrimaryColors | MaterialColors;
  hoverFillColor?: FontColors | PrimaryColors | MaterialColors;
};

export const Icon = React.memo(
  ({ name, size = 16, fillColor = FontColors.SUB, hoverFillColor }: Props) => (
    <Svg size={size} fillColor={fillColor} hoverFillColor={hoverFillColor}>
      <use xlinkHref={`#${name}`} />
    </Svg>
  )
);

type SvgProps = {
  size: number;
  fillColor: FontColors | PrimaryColors | MaterialColors;
  hoverFillColor?: FontColors | PrimaryColors | MaterialColors;
};

const Svg = styled.svg<SvgProps>`
  fill: ${({ theme, fillColor }) => toColorString(fillColor, theme)};
  max-width: ${({ size }) => `${size || 16}px`};
  max-height: ${({ size }) => `${size || 16}px`};

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
