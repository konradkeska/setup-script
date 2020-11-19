import React from "react";
import styled from "styled-components";

import { Button, Span, Wrapper } from "../atoms";

type Props = {
  label: string;
  btnLabel: string;
  onConfirm: () => void;
  onClose: () => void;
};

export const Bar = React.memo(
  ({ label, btnLabel, onClose, onConfirm }: Props) => (
    <Aside>
      <Wrapper maxW="100%">
        <div>
          {label}{" "}
          <Button onClick={onConfirm} small ml>
            {btnLabel}
          </Button>
        </div>
        <Span onClick={onClose} clickable>
          ✖
        </Span>
      </Wrapper>
    </Aside>
  )
);

const Aside = styled.aside`
  bottom: 0px;
  border-top: ${({ theme }) => theme.colors.material.background};
  background-color: ${({ theme }) => theme.colors.material.overlay};
  width: 100%;
  padding: ${({ theme }) => `${theme.paddings.xs}px 0px`};
  position: fixed;
  justify-content: center;
  display: flex;
  align-items: center;
  z-index: 5;
  color: ${({ theme }) => theme.colors.font.base};
`;
