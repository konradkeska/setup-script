import Sc from "styled-components";

import { APP } from "config";
import { RWD } from "utils";

type Props = {
  expanded: boolean;
  onClick?: () => void;
  left?: boolean;
  right?: boolean;
  screenWidth?: number;
};

export const Wrapper = Sc.aside<Props>`
  display: flex;
  flex-direction: row;
  z-index: 4;
  padding-top: ${APP.HEADER_HEIGHT}px;
  padding-bottom: ${APP.FOOTER_HEIGHT}px;
  right: ${({ right, expanded }) =>
    getCoord({ side: right, width: `-350px`, expanded })};
  left: ${({ left, expanded }) =>
    getCoord({ side: left, width: `-350px`, expanded })};
  max-width: 380px;
  width: 100%;
  height: 100%;
  position: fixed;
  transition: padding 500ms, left 500ms, right 500ms;

  @media (max-width: ${RWD.SM - 1}px) {
    max-width: calc(100% - 40px);
    right: ${({ right, expanded }) =>
      getCoord({
        side: right,
        width: `calc((100% - 70px) * -1)`,
        expanded,
      })};
    left: ${({ left, expanded }) =>
      getCoord({
        side: left,
        width: `calc((100% - 70px) * -1)`,
        expanded,
      })};
  }

  @media (min-width: ${RWD.LG}px) {
    max-width: calc((100% - 750px) / 2);
    right: ${({ right, expanded }) =>
      getCoord({
        side: right,
        width: `calc((100% - 810px) / -2)`,
        expanded,
      })};
    left: ${({ left, expanded }) =>
      getCoord({
        side: left,
        width: `calc((100% - 810px) / -2)`,
        expanded,
      })};
  }
`;

const getCoord = ({
  width,
  expanded,
  side,
}: {
  expanded: boolean;
  width: string;
  side?: boolean;
}) => (side ? (expanded ? `0px` : width) : "unset");
