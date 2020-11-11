import styled from "styled-components";

import { APP_MAX_WIDTH } from "../../config";

type Props = {
  alignItems?: string;
  mt?: string;
  color?: string;
  p?: string;
};

export const Wrapper = styled.div<Props>`
  width: 100%;
  padding: ${({ p }) => p || "0px 16px"};
  margin: 0 auto;
  max-width: ${APP_MAX_WIDTH}px;
  display: flex;
  justify-content: space-between;
  align-items: ${({ alignItems }) => alignItems || "center"};
  margin-top: ${({ mt }) => mt || "unset"};
  flex-wrap: wrap;
  height: 100%;
  transition: margin 700ms;
  color: ${({ theme, color }) => color || theme.colors.font.base};
`;
