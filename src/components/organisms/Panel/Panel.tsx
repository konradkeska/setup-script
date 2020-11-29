import React from "react";
import Sc from "styled-components";

import { SoftType, Action, MaterialColor, PrimaryColor } from "types";
import { toSoftId } from "utils";

import { List } from "./List";
import { ListItem, IBase } from "./Item";
import { Title } from "./Title";

interface IProps<T> {
  items: T[];
  id?: string;
  heading?: string;
  description?: string;
  count?: number;
  withDots?: boolean;
  withItemSeparator?: boolean;
  bgColor?: MaterialColor;
  border?: boolean;
  action?: Action;
  width?: string;
  height?: string;
  onItemClick?: (record: T) => () => void;
}

export const Panel = React.memo(
  <T extends IBase>({
    heading,
    description,
    items,
    onItemClick,
    id,
    withDots = false,
    withItemSeparator = false,
    bgColor = MaterialColor.OVERLAY,
    border = false,
    action = Action.SUCCESS,
    width = "100%",
    height = "100%",
  }: IProps<T>) => (
    <PanelWrapper
      aria-label={getAriaLabel(action, heading)}
      heading={heading}
      width={width}
      height={height}
    >
      {heading && <Title text={heading} description={description} />}
      <List
        aria-label={`${heading || "records"} list`}
        id={id}
        heading={heading}
        border={border}
        bgColor={bgColor}
      >
        {items.map((record, index) => (
          <ListItem
            id={toSoftId(record)}
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
  `${action === Action.SUCCESS ? "found" : "added"} ${heading}`;

const COLORS_MAP = {
  [SoftType.CASK]: PrimaryColor.TEAL,
  [SoftType.FORMULA]: PrimaryColor.YELLOW,
};

type PanelWrapperProps = Pick<IProps<IBase>, "width" | "height" | "heading">;

const PanelWrapper = Sc.div<PanelWrapperProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ theme: { paddings }, heading }) =>
    heading ? `0px ${paddings.sm}px ${paddings.sm}px ${paddings.sm}px` : "0px"};
`;
