import React from "react";
import styled from "styled-components";

import { Base, PrimaryColors, MaterialColors, SoftType, Action } from "types";
import { Soft, PrimaryColors, MaterialColors, SoftType } from "types";

import { ListItem } from "./Item";
import { List } from "./List";
import { Title } from "./Title";

type Props = {
  items: Soft[];
  id?: string;
  title?: string;
  count?: number;
  withDots?: boolean;
  withItemSeparator?: boolean;
  accentColor?: PrimaryColors;
  bgColor?: MaterialColors;
  border?: boolean;
  operation?: "add" | "remove";
  width?: string;
  height?: string;
  onItemClick?: (record: Soft) => (() => void) | undefined;
};

const COLORS_MAP = {
  [SoftType.CASK]: PrimaryColors.PURPLE,
  [SoftType.FORMULA]: PrimaryColors.BLUE,
};

export const Panel = React.memo(
  ({
    title,
    items,
    onItemClick,
    id,
    withDots = false,
    withItemSeparator = false,
    accentColor = PrimaryColors.PURPLE,
    bgColor = MaterialColors.OVERLAY,
    border = false,
    operation = "add",
    width = "100%",
    height = "100%",
  }: Props) => (
    <PanelWrapper title={title} width={width} height={height}>
      {title && <Title title={title} accentColor={accentColor} />}
      <List id={id} title={title} border={border} bgColor={bgColor}>
        {items.map((record, index) => (
          <ListItem
            id={record.token}
            key={index}
            index={index}
            record={record}
            operation={operation}
            onClick={onItemClick?.(record)}
            dotColor={COLORS_MAP[record.type]}
            withDots={withDots}
            withSeparator={withItemSeparator}
          />
        ))}
      </List>
    </PanelWrapper>
  )
);

type PanelWrapperProps = Pick<Props, "width" | "height" | "title">;

const PanelWrapper = styled.div<PanelWrapperProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ theme: { paddings }, title }) =>
    title ? `0px ${paddings.sm}px ${paddings.sm}px ${paddings.sm}px` : "0px"};
`;
