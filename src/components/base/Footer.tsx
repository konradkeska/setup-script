import styled from "styled-components";

export const Footer = styled.footer`
  color: ${({ theme }) => theme.colors.font.sub};
  background-color: ${({ theme }) => theme.colors.material.background};
  padding: 0px 24px;
  text-align: right;
  display: flex;
  justify-content: space-between;
`;
