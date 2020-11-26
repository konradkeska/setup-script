import React from "react";

import Sc from "styled-components";

import { Action, Base, PrimaryColors } from "types";
import { truncate, MinXs } from "utils";

import { Code, Dot } from "components/atoms";

interface Props<T> {
  id: string;
  index: number;
  record: T;
  action: Action;
  onClick?: () => void;
  dotColor?: PrimaryColors;
  withDots?: boolean;
  withSeparator?: boolean;
}

export const ListItem = React.memo(
  <T extends Base>({
    id,
    index,
    record,
    action,
    onClick,
    dotColor,
    withDots,
    withSeparator,
  }: Props<T>) => (
    <StyledListItem withSeparator={withSeparator}>
      <Button
        id={id}
        index={index}
        action={action}
        onClick={onClick}
        aria-label={`${action} ${record.name} ${record.type || "preset"}`}
      >
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

const StyledListItem = Sc.li<Pick<Props<Base>, "withSeparator">>`
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

const Button = Sc.button<Pick<Props<Base>, "index" | "action">>`
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
    border: ${({ theme, action }) =>
      `1px dashed ${theme.colors.primary[getHighlightColor(action)]}`};
  }

  &:active {
    border: ${({ theme, action }) => `1px solid
      ${theme.colors.primary[getHighlightColor(action)]}`};
    background-color: ${({ theme, action }) =>
      theme.colors.primary[getHighlightColor(action)]};
    color: ${({ theme }) => theme.colors.font.base};

    span {
      color: ${({ theme }) => theme.colors.font.base};
    }
  }
`;

const getHighlightColor = (action: Action): PrimaryColors =>
  action === Action.ADD ? PrimaryColors.GREEN : PrimaryColors.RED;
