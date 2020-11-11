import styled from "styled-components";

export const Input = styled.input`
  padding: 8px 24px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.material.input};
  color: ${({ theme }) => theme.colors.font.base};
  outline: none;
  border: 1px solid transparent;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary.purple};
  }
`;
