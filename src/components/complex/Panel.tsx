import React, { useState } from "react";
import styled from "styled-components";

import { Theme } from "../../themes";
import { BaseParams } from "../../types";
import { Span } from "../base";

export function Panel({
  title,
  items,
  onClick,
  theme,
  count = 7,
  mt,
  operation = "add",
  width = "100%",
}: {
  title: string;
  items: BaseParams[];
  onClick: (item: BaseParams) => () => void;
  theme: Theme;
  count?: number;
  mt?: boolean;
  operation?: "add" | "remove";
  width?: string;
}) {
  return (
    <PanelWrapper mt={mt} count={count} width={width}>
      <Title mt={mt}>
        <Span color={theme.colors.purple}>#</Span> {title.toUpperCase()}
      </Title>
      <UnorderedList count={count}>
        {items.map((record, index) => (
          <ListItem
            key={index}
            record={record}
            theme={theme}
            operation={operation}
            onClick={onClick(record)}
          />
        ))}
      </UnorderedList>
    </PanelWrapper>
  );
}

function ListItem({
  record,
  theme,
  operation,
  onClick,
}: {
  record: BaseParams;
  theme: Theme;
  operation: "add" | "remove";
  onClick: () => void;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <li>
      <StyledButton
        theme={theme}
        operation={operation}
        onClick={onClick}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onKeyDown={(e) => {
          if (focused && e.key === "Enter") onClick();
        }}
      >
        <Span>{record.name}</Span>
        {record.version && <Span>{record.version}</Span>}
      </StyledButton>
    </li>
  );
}

const PanelWrapper = styled.div<{ count: number; width: string; mt?: boolean }>`
  padding: 0px 16px 24px 16px;
  width: ${({ width }) => width};
  min-height: ${({ count, mt }) =>
    `calc(${count} * 32px + ${mt ? 24 + 66 : 66}px)`};
  max-height: ${({ count, mt }) =>
    `calc(${count} * 32px + ${mt ? 24 + 66 : 66}px)`};
`;

const UnorderedList = styled.ul<{ count: number }>`
  margin: 0px;
  padding: 0px;
  min-height: ${({ count }) => `calc(${count} * 32px)`};
  max-height: ${({ count }) => `calc(${count} * 32px)`};
  overflow-y: auto;
`;

const Title = styled.h5<{ mt?: boolean }>`
  margin: 0;
  font-weight: 700;
  font-size: 16px;
  margin: ${({ mt }) => (mt ? "24px 0px" : "0px 0px 24px 0px")};
`;

const StyledButton = styled.button<{
  theme: Theme;
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
