import React from "react";

import {
  useBrewSoft,
  useDisplayMode,
  useSearch,
  useSides,
  useTheme,
  useWindowSize,
} from "hooks";
import { PrimaryColors, MaterialColors } from "types";
import { MinSm } from "utils";
import { Button, Emoji, Row, Toggle } from "./atoms";
import { Brand, Search } from "./molecules";
import { Panel, Script } from "./organisms";
import { Global, View } from "./templates";

import { CASKS_PANEL_LABEL, FORMULAS_PANEL_LABEL } from "./config";

function App() {
  const {
    casks,
    addedCasks,
    formulas,
    addedFormulas,
    onAdd,
    onRemove,
  } = useBrewSoft();
  const {
    isLeftExpanded,
    isRightExpanded,
    toggleLeft,
    toggleRight,
    setLeftExpanded,
  } = useSides();
  const { width } = useWindowSize();
  const { mode, theme, switchTheme } = useTheme();
  const { displayMode, switchDisplayMode, DisplayMode } = useDisplayMode();
  const { query, setQuery, sortedResults } = useSearch({ casks, formulas });
  return (
    <Global theme={theme}>
      <View>
        <View.Header>
          <Search
            query={query}
            setQuery={setQuery}
            setLeftExpanded={setLeftExpanded}
          />
          <MinSm>
            <Row>
              <Brand />
            </Row>
          </MinSm>
          <Button id="download-button" bgColor={PrimaryColors.GREEN} disabled>
            Download
          </Button>
        </View.Header>
        <View.Sides>
          <View.Sides.Left
            expanded={isLeftExpanded}
            onClick={toggleLeft}
            screenWidth={width}
          >
            <Panel
              id="results"
              items={sortedResults}
              onClick={onAdd}
              bgColor={MaterialColors.SIDE}
              withDots
            />
          </View.Sides.Left>
          <View.Sides.Right
            expanded={isRightExpanded}
            onClick={toggleRight}
            screenWidth={width}
          >
            <Panel
              id="results"
              items={sortedResults}
              bgColor={MaterialColors.INPUT}
            />
          </View.Sides.Right>
        </View.Sides>
        <View.Main>
          {displayMode === DisplayMode.PICKER ? (
            <>
              <Panel
                id="added-formulas"
                title={FORMULAS_PANEL_LABEL}
                items={addedFormulas}
                onClick={onRemove}
                operation="remove"
                accentColor={PrimaryColors.BLUE}
                withItemSeparator
                height="50%"
                border
              />
              <Panel
                id="added-casks"
                title={CASKS_PANEL_LABEL}
                items={addedCasks}
                onClick={onRemove}
                operation="remove"
                withItemSeparator
                height="50%"
                border
              />
            </>
          ) : (
            <Script casks={addedCasks} formulas={addedFormulas} />
          )}
        </View.Main>
        <View.Footer>
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
        </View.Footer>
      </View>
    </Global>
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
