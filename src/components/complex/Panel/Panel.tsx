import React from "react";
import styled, { DefaultColorsMaterial } from "styled-components";

import { PANEL_RECORD_COUNT } from "../../../utils/config";
import { Soft, PrimaryColors } from "../../../types";
import { Span } from "../../base";

import { ListItem } from "./Item";
import { List } from "./List";
import { Title } from "./Title";

type Props = {
  title: string;
  items: Soft[];
  onClick: (item: Soft) => () => void;
  id?: string;
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
    id,
    bgColor = "overlay",
    mt = false,
    operation = "add",
    width = "100%",
  }: Props) => (
    <Wrapper mt={mt} width={width}>
      <Title mt={mt}>
        <Span color={PrimaryColors.PURPLE}>#</Span> {title}
      </Title>
      <List id={id} bgColor={bgColor}>
        {items.map((record, index) => (
          <ListItem
            id={record.token}
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
  padding: ${({ theme: { paddings } }) =>
    `0px ${paddings.sm}px ${paddings.md}px ${paddings.sm}px`};
  width: ${({ width }) => width};
  min-height: ${({ mt }) =>
    `calc(${PANEL_RECORD_COUNT} * 32px + ${mt ? 24 + 66 : 66}px)`};
  max-height: ${({ mt }) =>
    `calc(${PANEL_RECORD_COUNT} * 32px + ${mt ? 24 + 66 : 66}px)`};
`;
