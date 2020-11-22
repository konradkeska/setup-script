import React from "react";
import { useMediaQuery } from "react-responsive";

import {
  useBrewSoft,
  useDisplayMode,
  usePreset,
  useSearch,
  useSides,
  useTheme,
} from "hooks";
import {
  PrimaryColors,
  MaterialColors,
  Action,
  DisplayMode,
  ThemeMode,
} from "types";
import { ActionButton, Emoji, Icon, Row, TabButton } from "./atoms";
import { Brand, Search, Toggle } from "./molecules";
import { Panel, Script } from "./organisms";
import { Global, View } from "./templates";
import {
  CASKS_PANEL_HEADING,
  CASKS_PANEL_DESCRIPTION,
  FORMULAS_PANEL_HEADING,
  FORMULAS_PANEL_DESCRIPTION,
} from "./config";
import { MinSm, RWD } from "utils";

function App() {
  const [mode, theme, switchTheme] = useTheme();
  const [displayMode, switchDisplayMode] = useDisplayMode();

  const {
    casks,
    addedCasks,
    formulas,
    addedFormulas,
    onAdd,
    onRemove,
    onMultiAdd,
    onMultiRemove,
  } = useBrewSoft();

  const [onPresetClick, FEATURED_PRESETS] = usePreset({
    casks,
    formulas,
    addedCasks,
    addedFormulas,
    onMultiAdd,
    onMultiRemove,
  });

  const [query, setQuery, searchResults] = useSearch({ casks, formulas });

  const {
    isLeftExpanded,
    isRightExpanded,
    toggleLeft,
    toggleRight,
    setLeftExpanded,
  } = useSides();

  const onMobileDevice: boolean = useMediaQuery({ maxWidth: RWD.SM - 1 });

  return (
    <Global theme={theme}>
      <View>
        <View.Header>
          <Row justifyContent="flex-start" w={onMobileDevice ? "70%" : "30%"}>
            {query ? (
              <ActionButton
                onClick={() => {
                  setQuery("");
                  setLeftExpanded(false);
                }}
                mr
              >
                <Icon name="arrow-left" />
              </ActionButton>
            ) : (
              <Brand>S</Brand>
            )}
            <Search
              id="search-input"
              query={query}
              setQuery={setQuery}
              setLeftExpanded={setLeftExpanded}
            />
          </Row>
          <MinSm>
            <Row w="30%">
              <TabButton
                onClick={switchDisplayMode}
                active={displayMode === DisplayMode.PICKER}
                disabled={displayMode === DisplayMode.PICKER}
              >
                <Icon name="tools" />
              </TabButton>
              <TabButton
                onClick={switchDisplayMode}
                active={displayMode === DisplayMode.SCRIPT}
                disabled={displayMode === DisplayMode.SCRIPT}
              >
                <Icon name="code" />
              </TabButton>
            </Row>
          </MinSm>
          <Row justifyContent="flex-end" w="30%">
            <ActionButton onClick={() => console.log("save")} mr>
              <Icon name="save" />
            </ActionButton>
            <ActionButton onClick={() => console.log("download")}>
              <Icon name="download" />
            </ActionButton>
          </Row>
        </View.Header>
        <View.Sides>
          <View.Sides.Left expanded={isLeftExpanded} onClick={toggleLeft}>
            <Panel
              id="search-results"
              items={searchResults}
              onItemClick={onAdd}
              bgColor={MaterialColors.SIDE}
              withDots
            />
          </View.Sides.Left>
          <View.Sides.Right expanded={isRightExpanded} onClick={toggleRight}>
            <Panel
              id="presets"
              items={FEATURED_PRESETS}
              bgColor={MaterialColors.SIDE}
              onItemClick={onPresetClick}
            />
          </View.Sides.Right>
        </View.Sides>
        <View.Main>
          {displayMode === DisplayMode.PICKER ? (
            <>
              <Panel
                id="added-formulas"
                heading={FORMULAS_PANEL_HEADING}
                description={FORMULAS_PANEL_DESCRIPTION}
                items={addedFormulas}
                onItemClick={onRemove}
                action={Action.REMOVE}
                accentColor={PrimaryColors.BLUE}
                withItemSeparator
                height="50%"
                withDots
                border
              />
              <Panel
                id="added-casks"
                heading={CASKS_PANEL_HEADING}
                description={CASKS_PANEL_DESCRIPTION}
                items={addedCasks}
                onItemClick={onRemove}
                action={Action.REMOVE}
                withItemSeparator
                height="50%"
                withDots
                border
              />
            </>
          ) : (
            <Script casks={addedCasks} formulas={addedFormulas} />
          )}
        </View.Main>
        <View.Footer>
          <Toggle
            id="theme-toggle"
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
