import React, { useState } from "react";

import styled from "styled-components";

import { Soft } from "../../../types";
import { truncate } from "../../../utils/helpers";
import { Code } from "../../base";

type Props = {
  id: string;
  index: number;
  record: Soft;
  operation: "add" | "remove";
  onClick: () => void;
};

export const ListItem = React.memo(
  ({ id, index, record, operation, onClick }: Props) => {
    const [focused, setFocused] = useState(false);
    return (
      <li>
        <Button
          id={id}
          index={index}
          operation={operation}
          onClick={onClick}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onKeyDown={(e) => {
            if (focused && e.key === "Enter") onClick();
          }}
        >
          <Code>{truncate(record.name, 60)}</Code>
          {record.version && <Code>{truncate(record.version)}</Code>}
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
  background-color: ${({ theme }) => theme.colors.material.input};
  color: ${({ theme }) => theme.colors.font.base};

  &:hover {
    cursor: pointer;
    border: ${({ theme, operation }) =>
      operation === "add"
        ? `1px dashed ${theme.colors.primary.green}`
        : `1px dashed ${theme.colors.primary.red}`};
  }
`;
