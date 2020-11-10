import styled from "styled-components";

export const Footer = styled.footer`
  color: ${({ theme }) => theme.colors.font2};
  background-color: ${({ theme }) => theme.colors.bg1};
  padding: 0px 24px;
  text-align: right;
  display: flex;
  justify-content: space-between;
`;
