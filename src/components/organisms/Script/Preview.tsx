import Sc from "styled-components";

import { Code } from "components/atoms";

export const Preview = Sc(Code)`
  width: 100%;
  height: 100%;
  padding: 16px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.material.input};
  border: ${({ theme }) => `1px solid ${theme.colors.material.overlay}`};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  overflow-y: auto;

  &:hover {
    user-select: unset;
  }
`;
