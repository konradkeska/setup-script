import styled from "styled-components";

import { rwd } from "../../../utils/rwd";

type Props = {
  expanded: boolean;
  onClick?: () => void;
  left?: boolean;
  right?: boolean;
  screenWidth?: number;
};

export const Wrapper = styled.aside<Props>`
  display: flex;
  flex-direction: row;
  z-index: 4;
  padding-top: 54px;
  right: ${({ right, expanded }) =>
    getExpandValue({ side: right, sideWidth: `-350px`, expanded })};
  left: ${({ left, expanded }) =>
    getExpandValue({ side: left, sideWidth: `-350px`, expanded })};
  max-width: 380px;
  width: 100%;
  height: 100%;
  position: fixed;
  transition: padding 700ms, left 700ms, right 700ms;

  @media (max-width: ${rwd.sm - 1}px) {
    max-width: calc(100% - 40px);
    right: ${({ right, expanded, screenWidth }) =>
      getExpandValue({
        side: right,
        sideWidth: `calc((${screenWidth}px - 70px) * -1)`,
        expanded,
      })};
    left: ${({ left, expanded, screenWidth }) =>
      getExpandValue({
        side: left,
        sideWidth: `calc((${screenWidth}px - 70px) * -1)`,
        expanded,
      })};
  }

  @media (min-width: ${rwd.lg}px) {
    max-width: calc((100% - 750px) / 2);
    right: ${({ right, expanded, screenWidth }) =>
      getExpandValue({
        side: right,
        sideWidth: `calc((${screenWidth}px - 810px) / -2)`,
        expanded,
      })};
    left: ${({ left, expanded, screenWidth }) =>
      getExpandValue({
        side: left,
        sideWidth: `calc((${screenWidth}px - 810px) / -2)`,
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
