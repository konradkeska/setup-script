import React from "react";
import Sc from "styled-components";

import { Base, PrimaryColors, MaterialColors, SoftType, Action } from "types";
import { List } from "./List";
import { ListItem } from "./Item";
import { Title } from "./Title";

interface Props<T> {
  items: T[];
  id?: string;
  heading?: string;
  description?: string;
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
    heading,
    description,
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
    <PanelWrapper
      aria-label={getAriaLabel(action, heading)}
      heading={heading}
      width={width}
      height={height}
    >
      {heading && (
        <Title
          text={heading}
          description={description}
          accentColor={accentColor}
        />
      )}
      <List
        aria-label={`${heading || "records"} list`}
        id={id}
        heading={heading}
        border={border}
        bgColor={bgColor}
      >
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

const getAriaLabel = (action: Action, heading: string = "records") =>
  `${action === Action.ADD ? "found" : "added"} ${heading}`;

const COLORS_MAP = {
  [SoftType.CASK]: PrimaryColors.BLUE,
  [SoftType.FORMULA]: PrimaryColors.YELLOW,
};

type PanelWrapperProps = Pick<Props<Base>, "width" | "height" | "heading">;

const PanelWrapper = Sc.div<PanelWrapperProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ theme: { paddings }, heading }) =>
    heading ? `0px ${paddings.sm}px ${paddings.sm}px ${paddings.sm}px` : "0px"};
`;
