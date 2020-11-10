import styled from "styled-components";

export const Input = styled.input`
  padding: 8px 24px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.bg3};
  color: ${({ theme }) => theme.colors.font1};
  outline: none;
  border: 1px solid transparent;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.purple};
  }
`;
