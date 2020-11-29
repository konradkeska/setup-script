import Sc from "styled-components";

export const Tab = Sc.button<{ active?: boolean }>`
  width: 96.6666px;
  height: 58px;
  line-height: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.font.base};
  margin-top: -1px;
  border-bottom: 3px solid transparent;

  &:disabled {
    cursor: default !important;
  }

  &:hover {
    cursor: pointer;

    svg {
      fill: ${({ theme }) => theme.colors.font.base};
    }
  }

  &:focus {
    border: none;
    background-color: ${({ theme }) => theme.colors.material.backdrop};

    svg {
      fill: ${({ theme }) => theme.colors.brand.lighter};
    }
  }


  ${({ theme, active }) => {
    if (active) {
      return `
      color: ${theme.colors.brand.lighter};
      border-bottom: 3px solid ${theme.colors.brand.lighter};

      &:focus {
        border-top: none;
        border-right: none;
        border-bottom: 3px solid ${theme.colors.brand.lighter};
        border-left: none;
        background-color: ${theme.colors.material.backdrop};
      }

      &:hover {
        svg {
          fill: ${theme.colors.brand.lighter};
        }
      }

      svg {
        fill: ${theme.colors.brand.lighter};
      }
      `;
    }
  }}
`;
