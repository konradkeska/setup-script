import React, { useState } from "react";

import styled from "styled-components";

import { Soft } from "../../../types";
import { truncate } from "../../../utils";
import { Code, Span } from "../../base";

type Props = {
  index: number;
  record: Soft;
  operation: "add" | "remove";
  onClick: () => void;
};

export const ListItem = React.memo(
  ({ index, record, operation, onClick }: Props) => {
    const [focused, setFocused] = useState(false);
    return (
      <li>
        <Button
          index={index}
          operation={operation}
          onClick={onClick}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onKeyDown={(e) => {
            if (focused && e.key === "Enter") onClick();
          }}
        >
          <Code>
            <Span>{truncate(record.name, 60)}</Span>
            {record.version && <Span>{truncate(record.version)}</Span>}
          </Code>
        </Button>
      </li>
    );
  }
);

const Button = styled.button<{
  index: number;
  operation: "add" | "remove";
}>`
  padding: 6px 10px;
  border: 1px dashed transparent;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: ellipsis;
  background-color: ${({ theme }) => theme.colors.bg3};
  color: ${({ theme }) => theme.colors.font1};

  &:hover {
    cursor: pointer;
    border: 1px dashed
      ${({ theme, operation }) =>
        operation === "add" ? theme.colors.green : theme.colors.red};
  }
`;
