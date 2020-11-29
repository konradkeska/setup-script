import Sc from "styled-components";

export const Button = Sc.button<{ active?: boolean; mr?: boolean }>`
  width: 40px;
  height: 40px;
  line-height: 0;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.material.inactive};
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

  &:disabled {
    background-color: ${({ theme }) => theme.colors.material.inactive};
    color: ${({ theme }) => theme.colors.font.sub};
    svg {
      fill: ${({ theme }) => theme.colors.font.sub};
    }
    &:hover,
    &:active {
      cursor: default;
      background-color: ${({ theme }) => theme.colors.material.inactive};
      svg {
        fill: ${({ theme }) => theme.colors.font.sub};
      }
    }
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.material.input};
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
