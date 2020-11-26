import Sc from "styled-components";

export const ActionButton = Sc.button<{ active?: boolean; mr?: boolean }>`
  width: 40px;
  height: 40px;
  line-height: 0;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.material.input};
  color: ${({ theme }) => theme.colors.font.base};
  margin-right: ${({ theme, mr }) => (mr ? `${theme.paddings.xs}px` : "unset")};

  ${({ theme, active }) => {
    if (active) {
      return `
        background-color: ${theme.colors.material.backdrop};
        color: ${theme.colors.brand.lighter};
        svg {
          fill: ${theme.colors.brand.lighter};
        }
      `;
    }
  }}

  &:hover {
    cursor: pointer;
    svg {
      fill: ${({ theme }) => theme.colors.font.base};
    }
  }

  &:active {
    border: none;
    background-color: ${({ theme }) => theme.colors.material.backdrop};
    color: ${({ theme }) => theme.colors.brand.lighter};
    svg {
      fill: ${({ theme }) => theme.colors.brand.lighter};
    }
  }
`;
