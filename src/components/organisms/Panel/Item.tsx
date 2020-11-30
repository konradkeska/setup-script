import React from "react";

import Sc from "styled-components";

import { Soft, SoftType } from "types";
import { Action, PrimaryColor } from "types";
import { Bundle } from "types";
import { truncate, MinXs } from "utils";

import { Code, Dot } from "components/atoms";

export interface IBase extends Bundle, Soft {
  name: string;
  token?: string;
  type?: SoftType;
  version?: string;
}

interface IProps<T> {
  style: React.CSSProperties;
  id: string;
  index: number;
  record: T;
  action: Action;
  onClick?: () => void;
  dotColor?: PrimaryColor;
  withDots?: boolean;
  withSeparator?: boolean;
}

export const ListItem = React.memo(
  <T extends IBase>({
    style,
    id,
    index,
    record,
    action,
    onClick,
    dotColor,
    withDots,
    withSeparator,
  }: IProps<T>) => (
    <StyledListItem style={style} withSeparator={withSeparator}>
      <Button
        id={id}
        index={index}
        action={action}
        onClick={onClick}
        aria-label={`${action} ${record.name} ${record.type || "bundle"}`}
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

const StyledListItem = Sc.li<Pick<IProps<IBase>, "withSeparator">>`
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

const Button = Sc.button<Pick<IProps<IBase>, "index" | "action">>`
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

const getHighlightColor = (action: Action): PrimaryColor =>
  action === Action.SUCCESS ? PrimaryColor.GREEN : PrimaryColor.RED;
