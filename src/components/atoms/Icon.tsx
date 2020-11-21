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
  ({ name, size = 16, fillColor = FontColors.SUB, hoverFillColor }: Props) => (
    <Container size={size}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        width="100%"
        height="100%"
        fillColor={fillColor}
        hoverFillColor={hoverFillColor}
      >
        <use xlinkHref={`#${name}`} href={`#${name}`} />
      </Svg>
    </Container>
  )
);

type SvgProps = {
  size: number;
  fillColor: FontColors | PrimaryColors | MaterialColors;
  hoverFillColor?: FontColors | PrimaryColors | MaterialColors;
};

const Container = Sc.div<Pick<SvgProps, "size">>`
  position: relative;
  width: ${({ size }) => `${size || 16}px`};
  height: ${({ size }) => `${size || 16}px`};
  max-width: ${({ size }) => `${size || 16}px`};
  max-height: ${({ size }) => `${size || 16}px`};
`;

const Svg = Sc.svg<Omit<SvgProps, "size">>`
  position: absolute;
  top: 0;
  left: 0;
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
