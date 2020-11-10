import React from "react";

import styled from "styled-components";

import { Button, Span, Wrapper } from "../base";

export function Bar({
  label,
  btnLabel,
  onClose,
  onClick,
}: {
  label: string;
  btnLabel: string;
  onClick: () => void;
  onClose: () => void;
}) {
  return (
    <Aside>
      <Wrapper>
        <div>
          {label}{" "}
          <Button bgColor={"green"} onClick={onClick} small ml>
            {btnLabel}
          </Button>
        </div>
        <Span onClick={onClose}>✖️</Span>
      </Wrapper>
    </Aside>
  );
}

const Aside = styled.aside`
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
