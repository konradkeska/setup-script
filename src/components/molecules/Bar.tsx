import React from "react";
import Sc from "styled-components";

import { APP } from "config";
import { Span, Wrapper } from "../atoms";

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
          <ConfirmButton aria-label="confirm guide tour" onClick={onConfirm}>
            {btnLabel}
          </ConfirmButton>
        </div>
        <Span onClick={onClose} clickable>
          ✖
        </Span>
      </Wrapper>
    </Aside>
  )
);

const Aside = Sc.aside`
  bottom: ${APP.FOOTER_HEIGHT}px;
  border-top: ${({ theme }) => theme.colors.material.side};
  background-color: ${({ theme }) => theme.colors.material.inactive};
  width: 100%;
  padding: ${({ theme }) => `${theme.paddings.xs}px 0px`};
  position: fixed;
  justify-content: center;
  display: flex;
  align-items: center;
  z-index: 5;
  color: ${({ theme }) => theme.colors.font.base};
`;

const ConfirmButton = Sc.button`
    padding: 2px 10px;
    border-radius: ${({ theme }) => `${theme.paddings.xs / 2}px`};
    color: ${({ theme }) => theme.colors.font.base};
    margin-left: ${({ theme }) => `${theme.paddings.xs * 1.5}px`};
    background-color: ${({ theme }) => theme.colors.primary.green};
    font-size: 14px;
    font-weight: 700;
    border-width: 1px solid transparent;

    &:hover {
      cursor: pointer;
      opacity: 0.9;
    }
`;
