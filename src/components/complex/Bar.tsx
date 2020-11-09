import React from "react";

import styled from "styled-components";

import { Theme } from "../../themes";
import { Button, Span, Wrapper } from "../base";

export function Bar({
  label,
  btnLabel,
  onClose,
  onClick,
  theme,
}: {
  label: string;
  btnLabel: string;
  onClick: () => void;
  onClose: () => void;
  theme: Theme;
}) {
  return (
    <Aside theme={theme}>
      <Wrapper theme={theme}>
        <div>
          {label}{" "}
          <Button
            theme={theme}
            bg={theme.colors.green}
            onClick={onClick}
            small
            ml
          >
            {btnLabel}
          </Button>
        </div>
        <Span onClick={onClose} color={theme.colors.font1}>
          ✖️
        </Span>
      </Wrapper>
    </Aside>
  );
}

const Aside = styled.aside<{ theme: Theme }>`
  background-color: ${({ theme }) => theme.colors.purple};
  width: 100%;
  padding: 10px 24px;
  position: fixed;
  justify-content: center;
  display: flex;
  align-items: center;
  z-index: 5;
  color: ${({ theme }) => theme.colors.font1};
`;
