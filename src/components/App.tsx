import React from "react";

import {
  useBrewSoft,
  useDisplayMode,
  useSearch,
  useSides,
  useTheme,
} from "hooks";
import { PrimaryColors, MaterialColors } from "types";
import { MinSm } from "utils";
import { Button, Emoji } from "./atoms";
import { Brand, Search, Toggle } from "./molecules";
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
  const { mode, theme, switchTheme, ThemeMode } = useTheme();
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
            <Brand />
          </MinSm>
          <Button id="download-button" disabled>
            Download
          </Button>
        </View.Header>
        <View.Sides>
          <View.Sides.Left expanded={isLeftExpanded} onClick={toggleLeft}>
            <Panel
              id="results"
              items={sortedResults}
              onItemClick={onAdd}
              bgColor={MaterialColors.SIDE}
              withDots
            />
          </View.Sides.Left>
          <View.Sides.Right expanded={isRightExpanded} onClick={toggleRight}>
            <Panel items={sortedResults} bgColor={MaterialColors.SIDE} />
          </View.Sides.Right>
        </View.Sides>
        <View.Main>
          {displayMode === DisplayMode.PICKER ? (
            <>
              <Panel
                id="added-formulas"
                title={FORMULAS_PANEL_LABEL}
                items={addedFormulas}
                onItemClick={onRemove}
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
                onItemClick={onRemove}
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
            checkedIcon={<Emoji>📦</Emoji>}
            uncheckedIcon={<Emoji>📜</Emoji>}
          />
          <Toggle
            defaultChecked={mode === ThemeMode.LIGHT}
            onChange={switchTheme}
            checkedIcon={<Emoji>☀️</Emoji>}
            uncheckedIcon={<Emoji>🌙</Emoji>}
          />
        </View.Footer>
      </View>
    </Global>
  );
}

export default App;
