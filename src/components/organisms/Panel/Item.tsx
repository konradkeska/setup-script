import React from "react";

import styled from "styled-components";

import { PrimaryColors, Soft } from "types";
import { truncate, MinXs } from "utils";

import { Code, Dot } from "components/atoms";

type Props = {
  id: string;
  index: number;
  record: Soft;
  operation: "add" | "remove";
  onClick?: () => void;
  dotColor?: PrimaryColors;
  withDots?: boolean;
  withSeparator?: boolean;
};

export const ListItem = React.memo(
  ({
    id,
    index,
    record,
    operation,
    onClick,
    dotColor,
    withDots,
    withSeparator,
  }: Props) => (
    <StyledListItem withSeparator={withSeparator}>
      <Button id={id} index={index} operation={operation} onClick={onClick}>
        <Code>
          {withDots ? <Dot color={dotColor}>· </Dot> : null}
          {truncate(record.name, 33)}
        </Code>
        {record.version && (
          <MinXs>
            <Code>{truncate(record.version)}</Code>
          </MinXs>
        )}
      </Button>
    </StyledListItem>
  )
);

const StyledListItem = styled.li<Pick<Props, "withSeparator">>`
  ${({ withSeparator }) => {
    if (withSeparator) {
      return `
        border-bottom: 1px solid transparent;

        &:last-child {
          border-bottom: none;
        }
      `;
    }
  }}
`;

const Button = styled.button<Pick<Props, "index" | "operation">>`
  padding: 6px 10px;
  border: 1px solid transparent;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: ellipsis;
  background-color: ${({ theme }) => theme.colors.material.input};
  color: ${({ theme }) => theme.colors.font.base};

  &:hover {
    cursor: pointer;
    border: ${({ theme, operation }) =>
      operation === "add"
        ? `1px dashed ${theme.colors.primary.green}`
        : `1px dashed ${theme.colors.primary.red}`};
  }

  &:active {
    border: ${({ theme, operation }) => `1px solid
      ${
        operation === "add"
          ? theme.colors.primary.green
          : theme.colors.primary.red
      }`};
    background-color: ${({ theme, operation }) =>
      operation === "add"
        ? theme.colors.primary.green
        : theme.colors.primary.red};
  }
`;
