import Sc from "styled-components";

import { HEADER_HEIGHT } from "components/config";
import styled from "styled-components";

import { rwd } from "utils";

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
  padding-top: ${HEADER_HEIGHT}px;
  right: ${({ right, expanded }) =>
    getExpandValue({ side: right, sideWidth: `-350px`, expanded })};
  left: ${({ left, expanded }) =>
    getExpandValue({ side: left, sideWidth: `-350px`, expanded })};
  max-width: 380px;
  width: 100%;
  height: 100%;
  position: fixed;
  transition: padding 500ms, left 500ms, right 500ms;

  @media (max-width: ${rwd.sm - 1}px) {
    max-width: calc(100% - 40px);
    right: ${({ right, expanded }) =>
      getExpandValue({
        side: right,
        sideWidth: `calc((100% - 70px) * -1)`,
        expanded,
      })};
    left: ${({ left, expanded }) =>
      getExpandValue({
        side: left,
        sideWidth: `calc((100% - 70px) * -1)`,
        expanded,
      })};
  }

  @media (min-width: ${rwd.lg}px) {
    max-width: calc((100% - 750px) / 2);
    right: ${({ right, expanded }) =>
      getExpandValue({
        side: right,
        sideWidth: `calc((100% - 810px) / -2)`,
        expanded,
      })};
    left: ${({ left, expanded }) =>
      getExpandValue({
        side: left,
        sideWidth: `calc((100% - 810px) / -2)`,
        expanded,
      })};
  }
`;

const getExpandValue = ({
  sideWidth,
  expanded,
  side,
}: {
  expanded: boolean;
  sideWidth: string;
  side?: boolean;
}) => (side ? (expanded ? `0px` : sideWidth) : "unset");
