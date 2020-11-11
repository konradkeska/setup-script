import React from "react";
import styled, { DefaultColorsMaterial } from "styled-components";

import { PrimaryColors } from "../../../hooks/useTheme";
import { PANEL_RECORD_COUNT } from "../../../config";
import { Soft } from "../../../types";
import { Span } from "../../base";

import { ListItem } from "./Item";
import { List } from "./List";
import { Title } from "./Title";

type Props = {
  title: string;
  items: Soft[];
  onClick: (item: Soft) => () => void;
  bgColor?: keyof DefaultColorsMaterial;
  mt?: boolean;
  operation?: "add" | "remove";
  width?: string;
};

export const Panel = React.memo(
  ({
    title,
    items,
    onClick,
    bgColor = "overlay",
    mt = false,
    operation = "add",
    width = "100%",
  }: Props) => (
    <Wrapper mt={mt} width={width}>
      <Title mt={mt}>
        <Span color={PrimaryColors.PURPLE}>#</Span> {title.toUpperCase()}
      </Title>
      <List bgColor={bgColor}>
        {items.map((record, index) => (
          <ListItem
            key={index}
            index={index}
            record={record}
            operation={operation}
            onClick={onClick(record)}
          />
        ))}
      </List>
    </Wrapper>
  )
);

const Wrapper = styled.div<{ width: string; mt?: boolean }>`
  padding: 0px 16px 24px 16px;
  width: ${({ width }) => width};
  min-height: ${({ mt }) =>
    `calc(${PANEL_RECORD_COUNT} * 32px + ${mt ? 24 + 66 : 66}px)`};
  max-height: ${({ mt }) =>
    `calc(${PANEL_RECORD_COUNT} * 32px + ${mt ? 24 + 66 : 66}px)`};
`;
