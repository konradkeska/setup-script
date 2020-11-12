import styled from "styled-components";

export const Input = styled.input`
  padding: ${({ theme }) => `${theme.paddings.xs}px ${theme.paddings.sm}px`};
  border-radius: ${({ theme }) => `${theme.radiuses.md}px`};
  background-color: ${({ theme }) => theme.colors.material.input};
  color: ${({ theme }) => theme.colors.font.base};
  outline: none;
  border: 1px solid transparent;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary.purple};
  }
`;
