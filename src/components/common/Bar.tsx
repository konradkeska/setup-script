import React from "react";
import styled from "styled-components";

import { PrimaryColors } from "../../hooks/useTheme";
import { Button, Span, Wrapper } from "../base";

type Props = {
  label: string;
  btnLabel: string;
  onConfirm: () => void;
  onClose: () => void;
};

export const Bar = React.memo(
  ({ label, btnLabel, onClose, onConfirm }: Props) => (
    <Aside>
      <Wrapper>
        <div>
          {label}{" "}
          <Button bgColor={PrimaryColors.GREEN} onClick={onConfirm} small ml>
            {btnLabel}
          </Button>
        </div>
        <Span onClick={onClose}>✖️</Span>
      </Wrapper>
    </Aside>
  )
);

const Aside = styled.aside`
  background-color: ${({ theme }) => theme.colors.material.input};
  width: 100%;
  padding: 10px 24px;
  position: fixed;
  justify-content: center;
  display: flex;
  align-items: center;
  z-index: 5;
  color: ${({ theme }) => theme.colors.font.base};
`;
