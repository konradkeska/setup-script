import React from "react";
import ReactToggle from "react-toggle";

import { Emoji } from "components/atoms";

type Props = {
  onChange: () => void;
  checkedIcon?: JSX.Element;
  uncheckedIcon?: JSX.Element;
  defaultChecked?: boolean;
};

export const Toggle = React.memo(
  ({
    checkedIcon = <Emoji>✔️</Emoji>,
    uncheckedIcon = <Emoji>✖️</Emoji>,
    ...props
  }: Props) => (
    <ReactToggle
      icons={{ checked: checkedIcon, unchecked: checkedIcon }}
      {...props}
    />
  )
);
