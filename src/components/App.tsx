import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { ThemeProvider } from "styled-components";

import {
  useDisplayMode,
  useHotkeys,
  useTheme,
  useList,
  useSearch,
  useSides,
  useWindowSize,
} from "../hooks";
import { PrimaryColors, MaterialColors, SoftType, Soft } from "../types";
import { loadCasks, loadFormulas } from "../utils/api";
import { CASKS_PANEL_LABEL, FORMULAS_PANEL_LABEL } from "../utils/config";
import { MinSm } from "../utils/rwd";
import { SvgSprites } from "../utils/SvgSprites";

import {
  Button,
  Footer,
  GlobalStyle,
  Emoji,
  Header,
  Input,
  Main,
  Row,
  Toggle,
  Wrapper,
} from "./base";
import { Brand } from "./common";
import { Panel, Side, UsageTour } from "./complex";
import { Script } from "./complex/Script";

const HEADER_HEIGHT = 54;
const PANEL_ITEM_HEIGHT = 32;
const CONTENT_PAD_SUM = 135;

function App() {
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const [casks, addedCasks, addCask, removeCask] = useList(
    loadCasks,
    SoftType.CASK
  );

  const [formulas, addedFormulas, addFormula, removeFormula] = useList(
    loadFormulas,
    SoftType.FORMULA
  );

  const { width, height } = useWindowSize();
  const { mode, theme, switchTheme } = useTheme();
  const { displayMode, switchDisplayMode, DisplayMode } = useDisplayMode();
  const { query, setQuery, sortedResults } = useSearch({ casks, formulas });

  const {
    isLeftSideExpanded,
    isRightSideExpanded,
    toggleLeftSide,
    toggleRightSide,
    setLeftSideExpanded,
  } = useSides();

  useEffect(() => {
    if (query.length < 1) searchInputRef.current?.focus();
  }, [query]);

  useHotkeys(
    () => ({
      Backspace: () => searchInputRef.current?.focus(),
    }),
    []
  );

  const onQueryChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.currentTarget.value);
      setLeftSideExpanded(e.currentTarget.value.length > 0);
    },
    [setQuery, setLeftSideExpanded]
  );

  const onAdd = useCallback(
    (record: Soft) =>
      ({
        [SoftType.CASK]: addCask,
        [SoftType.FORMULA]: addFormula,
      }[record.type](record)),
    [addCask, addFormula]
  );

  const contentHeight = useMemo(() => height - HEADER_HEIGHT, [height]);

  const searchItemCount = useMemo(
    () => Math.floor(contentHeight / PANEL_ITEM_HEIGHT),
    [contentHeight]
  );

  const panelItemCount = useMemo(
    () => Math.floor((contentHeight - CONTENT_PAD_SUM) / PANEL_ITEM_HEIGHT / 2),
    [contentHeight]
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SvgSprites />
      <>
        <UsageTour theme={theme} />
        <Header>
          <Wrapper maxW="100%">
            <Input
              id="search-input"
              ref={searchInputRef}
              placeholder="Find software.."
              type="text"
              value={query}
              onChange={onQueryChange}
              autoComplete="off"
            />
            <MinSm>
              <Row>
                <Brand />
              </Row>
            </MinSm>
            <Button id="download-button" bgColor={PrimaryColors.GREEN} disabled>
              Download
            </Button>
          </Wrapper>
        </Header>
        <Side
          expanded={isLeftSideExpanded}
          onClick={toggleLeftSide}
          screenWidth={width}
          left
        >
          <Panel
            id="results"
            count={searchItemCount}
            items={sortedResults}
            onClick={onAdd}
            bgColor={MaterialColors.SIDE}
            withDots
          />
        </Side>
        <Side
          expanded={isRightSideExpanded}
          onClick={toggleRightSide}
          screenWidth={width}
          right
        >
          <Panel
            id="results"
            count={searchItemCount}
            items={[]}
            bgColor={MaterialColors.INPUT}
          />
        </Side>
        <Main>
          <Wrapper align="flex-start" p="18px 0px 0px 0px">
            {displayMode === DisplayMode.PICKER ? (
              <>
                <Panel
                  id="added-formulas"
                  title={FORMULAS_PANEL_LABEL}
                  items={addedFormulas}
                  onClick={removeFormula}
                  count={panelItemCount}
                  operation="remove"
                  accentColor={PrimaryColors.BLUE}
                  withItemSeparator
                  border
                />
                <Panel
                  id="added-casks"
                  title={CASKS_PANEL_LABEL}
                  items={addedCasks}
                  onClick={removeCask}
                  count={panelItemCount}
                  operation="remove"
                  withItemSeparator
                  border
                />
              </>
            ) : (
              <Script
                screenHeight={contentHeight}
                casks={addedCasks}
                formulas={addedFormulas}
              />
            )}
          </Wrapper>
        </Main>
        <Footer>
          <Wrapper color={theme.colors.font.sub} p="0px 16px">
            <Toggle
              defaultChecked={displayMode === DisplayMode.PICKER}
              onChange={switchDisplayMode}
              icons={DISPLAY_ICONS}
            />
            <Toggle
              defaultChecked={mode === "light"}
              onChange={switchTheme}
              icons={THEME_ICONS}
            />
          </Wrapper>
        </Footer>
      </>
    </ThemeProvider>
  );
}

export default App;

const DISPLAY_ICONS = {
  checked: <Emoji>📦</Emoji>,
  unchecked: <Emoji>📜</Emoji>,
};

const THEME_ICONS = {
  checked: <Emoji>☀️</Emoji>,
  unchecked: <Emoji>🌙</Emoji>,
};
