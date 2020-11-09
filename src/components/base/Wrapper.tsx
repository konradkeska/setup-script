import styled from "styled-components";

import { Theme } from "../../themes";

export const Wrapper = styled.div<{
  theme: Theme;
  alignItems?: string;
  mt?: string;
  color?: string;
  p?: string;
}>`
  width: 100%;
  padding: ${({ p }) => p || "0px 16px"};
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: ${({ alignItems }) => alignItems || "center"};
  margin-top: ${({ mt }) => mt || "unset"};
  flex-wrap: wrap;
  height: 100%;
  transition: margin 700ms;
  color: ${({ theme, color }) => color || theme.colors.font1};
`;
