import React from "react";
import Sc from "styled-components";
import { ListChildComponentProps } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import { APP } from "config";
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
  panelWidth?: string;
  panelHeight?: string;
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
    panelWidth = "100%",
    panelHeight = "100%",
  }: IProps<T>) => (
    <PanelWrapper
      aria-label={getAriaLabel(action, heading)}
      heading={heading}
      panelWidth={panelWidth}
      panelHeight={panelHeight}
      id={id}
    >
      {heading && <Title text={heading} description={description} />}
      <AutoSizer>
        {({ height, width }) => (
          <List
            id={id}
            innerElementType="ul"
            height={height - (heading ? APP.PANEL_ITEM_HEIGHT : 0)}
            itemCount={items.length}
            itemSize={APP.PANEL_ITEM_HEIGHT}
            width={width}
            heading={heading}
            border={border}
            bgColor={bgColor}
          >
            {({ index, style }: ListChildComponentProps) => (
              <ListItem
                style={style}
                id={toSoftId(items[index])}
                key={index}
                index={index}
                record={items[index]}
                action={action}
                onClick={onItemClick?.(items[index])}
                dotColor={
                  items[index].type ? COLORS_MAP[items[index].type!] : undefined
                }
                withDots={withDots}
                withSeparator={withItemSeparator}
              />
            )}
          </List>
        )}
      </AutoSizer>
    </PanelWrapper>
  )
);

const getAriaLabel = (action: Action, heading: string = "records") =>
  `${action === Action.SUCCESS ? "found" : "added"} ${heading}`;

const COLORS_MAP = {
  [SoftType.CASK]: PrimaryColor.TEAL,
  [SoftType.FORMULA]: PrimaryColor.YELLOW,
};

type PanelWrapperProps = Pick<
  IProps<IBase>,
  "panelWidth" | "panelHeight" | "heading"
>;

const PanelWrapper = Sc.div<PanelWrapperProps>`
  width: ${({ panelWidth }) => panelWidth};
  height: ${({ panelHeight }) => panelHeight};
  padding: ${({ theme: { paddings }, heading }) =>
    heading ? `0px ${paddings.sm}px ${paddings.sm}px ${paddings.sm}px` : "0px"};
`;
