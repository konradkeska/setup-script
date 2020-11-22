import Sc from "styled-components";

export const TabButton = Sc.button<{ active?: boolean }>`
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
    background-color: rgba(35, 206, 107, 0.2);

    svg {
      fill: ${({ theme }) => theme.colors.primary.green};
    }
  }


  ${({ theme, active }) => {
    if (active) {
      return `
      color: ${theme.colors.primary.green};
      border-bottom: 3px solid ${theme.colors.primary.green};

      &:focus {
        border-top: none;
        border-right: none;
        border-bottom: 3px solid ${theme.colors.primary.green};
        border-left: none;
        background-color: rgba(35, 206, 107, 0.2);
      }

      &:hover {
        svg {
          fill: ${theme.colors.primary.green};
        }
      }

      svg {
        fill: ${theme.colors.primary.green};
      }
      `;
    }
  }}
`;
