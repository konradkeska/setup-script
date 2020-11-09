import styled from "styled-components";

export const Span = styled.span<{
  color?: string;
  bg?: string;
  radius?: string;
  p?: boolean;
  ml?: boolean;
  size?: string;
  h?: string;
}>`
  color: ${(props) => props.color || "inherit"};
  background-color: ${(props) => props.bg || "unset"};
  border-radius: ${(props) => props.radius || "unset"};
  margin-left: ${(props) => (props.ml ? "12px" : "unset")};
  padding: ${(props) => (props.p ? "6px" : "unset")};
  font-size: ${(props) => props.size || "inherit"};
  height: ${(props) => props.h || "auto"};
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;
