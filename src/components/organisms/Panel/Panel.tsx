import React from "react";
import styled from "styled-components";

import { Base, PrimaryColors, MaterialColors, SoftType, Action } from "types";
import { List } from "./List";
import { ListItem } from "./Item";
import { Title } from "./Title";

interface Props<T> {
  items: T[];
  id?: string;
  title?: string;
  count?: number;
  withDots?: boolean;
  withItemSeparator?: boolean;
  accentColor?: PrimaryColors;
  bgColor?: MaterialColors;
  border?: boolean;
  action?: Action;
  width?: string;
  height?: string;
  onItemClick?: (record: T) => () => void;
}

export const Panel = React.memo(
  <T extends Base>({
    title,
    items,
    onItemClick,
    id,
    withDots = false,
    withItemSeparator = false,
    accentColor = PrimaryColors.PURPLE,
    bgColor = MaterialColors.OVERLAY,
    border = false,
    action = Action.ADD,
    width = "100%",
    height = "100%",
  }: Props<T>) => (
    <PanelWrapper title={title} width={width} height={height}>
      {title && <Title title={title} accentColor={accentColor} />}
      <List id={id} title={title} border={border} bgColor={bgColor}>
        {items.map((record, index) => (
          <ListItem
            id={record.token || record.name}
            key={index}
            index={index}
            record={record}
            action={action}
            onClick={onItemClick?.(record)}
            dotColor={record?.type ? COLORS_MAP[record.type] : undefined}
            withDots={withDots}
            withSeparator={withItemSeparator}
          />
        ))}
      </List>
    </PanelWrapper>
  )
);

const COLORS_MAP = {
  [SoftType.CASK]: PrimaryColors.PURPLE,
  [SoftType.FORMULA]: PrimaryColors.BLUE,
};

type PanelWrapperProps = Pick<Props<Base>, "width" | "height" | "title">;

const PanelWrapper = styled.div<PanelWrapperProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ theme: { paddings }, title }) =>
    title ? `0px ${paddings.sm}px ${paddings.sm}px ${paddings.sm}px` : "0px"};
`;
