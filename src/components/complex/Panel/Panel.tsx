import React from "react";
import styled from "styled-components";

import { PANEL_RECORD_COUNT } from "../../../utils/config";
import { Soft, PrimaryColors, MaterialColors, SoftType } from "../../../types";
import { Span, Title } from "../../base";

import { ListItem } from "./Item";
import { List } from "./List";

type Props = {
  items: Soft[];
  id?: string;
  title?: string;
  count?: number;
  withDots?: boolean;
  withItemSeparator?: boolean;
  accentColor?: PrimaryColors;
  bgColor?: MaterialColors;
  mt?: boolean;
  mb?: boolean;
  border?: boolean;
  operation?: "add" | "remove";
  width?: string;
  onClick?: (record: Soft) => (() => void) | undefined;
};

const COLORS_MAP = {
  [SoftType.CASK]: PrimaryColors.PURPLE,
  [SoftType.FORMULA]: PrimaryColors.BLUE,
};

export const Panel = React.memo(
  ({
    title,
    items,
    onClick,
    id,
    count = PANEL_RECORD_COUNT,
    withDots = false,
    withItemSeparator = false,
    accentColor = PrimaryColors.PURPLE,
    bgColor = MaterialColors.OVERLAY,
    border = false,
    mt = false,
    operation = "add",
    width = "100%",
  }: Props) => (
    <PanelWrapper count={count} title={title} mt={mt} width={width}>
      {title && (
        <Title mt={mt} title={title}>
          <Span color={accentColor}>#</Span> {title}
        </Title>
      )}
      <List id={id} border={border} count={count} bgColor={bgColor}>
        {items.map((record, index) => (
          <ListItem
            id={record.token}
            key={index}
            index={index}
            record={record}
            operation={operation}
            onClick={onClick?.(record)}
            accentColor={COLORS_MAP[record.type]}
            withDots={withDots}
            withSeparator={withItemSeparator}
          />
        ))}
      </List>
    </PanelWrapper>
  )
);

type PanelWrapperProps = Pick<Props, "count" | "width" | "mt" | "title">;

const PanelWrapper = styled.div<PanelWrapperProps>`
  width: ${({ width }) => width};

  padding: ${({ theme: { paddings }, title }) =>
    title ? `0px ${paddings.sm}px ${paddings.sm}px ${paddings.sm}px` : "0px"};

  height: ${({ mt, count, title }) =>
    `calc(${count} * 32px + ${
      mt ? 24 + (title ? 25 + 24 : 0) : title ? 25 + 24 : 0
    }px)`};

  /* max-height: ${({ mt, count, title }) =>
    `calc(${count} * 32px + ${
      mt ? 24 + (title ? 25 + 24 : 0) : title ? 25 + 24 : 0
    }px)`}; */
`;
