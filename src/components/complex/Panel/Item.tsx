import React from "react";

import styled from "styled-components";

import { PrimaryColors, Soft } from "../../../types";
import { truncate } from "../../../utils/helpers";
import { MinXs } from "../../../utils/rwd";

import { Code, Dot } from "../../base";

type Props = {
  id: string;
  index: number;
  record: Soft;
  operation: "add" | "remove";
  onClick?: () => void;
  accentColor?: PrimaryColors;
  withDots?: boolean;
};

export const ListItem = React.memo(
  ({ id, index, record, operation, onClick, accentColor, withDots }: Props) => (
    <li>
      <Button id={id} index={index} operation={operation} onClick={onClick}>
        <Code>
          {withDots ? <Dot color={accentColor}>· </Dot> : null}
          {truncate(record.name, 33)}
        </Code>
        {record.version && (
          <MinXs>
            <Code>{truncate(record.version)}</Code>
          </MinXs>
        )}
      </Button>
    </li>
  )
);

const Button = styled.button<Pick<Props, "index" | "operation">>`
  padding: 6px 10px;
  border: 1px dashed transparent;
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
