import React, { useCallback } from "react";
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
import { ActionButton, Code, Emoji, Icon, Link, Row, TabButton } from "./atoms";
import { Brand, Search, Toggle } from "./molecules";
import { Panel, Script } from "./organisms";
import { Global, View } from "./templates";
import {
  CASKS_PANEL_HEADING,
  CASKS_PANEL_DESCRIPTION,
  FORMULAS_PANEL_HEADING,
  FORMULAS_PANEL_DESCRIPTION,
} from "./config";
import { MinMd, MinSm, RWD } from "utils";

function App() {
  const [mode, theme, switchTheme] = useTheme();
  const [displayMode, switchDisplayMode] = useDisplayMode();

  const {
    details,
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

  const onQueryReset = useCallback(() => {
    setQuery("");
    setLeftExpanded(false);
  }, [setQuery, setLeftExpanded]);

  const onMobileDevice = useMediaQuery({ maxWidth: RWD.SM - 1 });

  return (
    <Global theme={theme}>
      <View>
        <View.Header>
          <Row justifyContent="flex-start" w={onMobileDevice ? "70%" : "30%"}>
            <Brand query={query} onQueryReset={onQueryReset} />
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
                id="edit-mode-button"
                aria-label="switch to edit mode"
                onClick={switchDisplayMode}
                active={displayMode === DisplayMode.PICKER}
                disabled={displayMode === DisplayMode.PICKER}
              >
                <Icon name="tools" />
              </TabButton>
              <TabButton
                id="script-mode-button"
                aria-label="switch to script preview mode"
                onClick={switchDisplayMode}
                active={displayMode === DisplayMode.SCRIPT}
                disabled={displayMode === DisplayMode.SCRIPT}
              >
                <Icon name="code" />
              </TabButton>
            </Row>
          </MinSm>
          <Row justifyContent="flex-end" w="30%">
            <ActionButton
              id="save-button"
              aria-label="save script"
              onClick={() => console.log("save")}
              mr
            >
              <Icon name="save" />
            </ActionButton>
            <ActionButton
              id="download-button"
              aria-label="download script"
              onClick={() => console.log("download")}
            >
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
              withItemSeparator
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
            aria-label="toggle display mode"
            defaultChecked={mode === ThemeMode.DARK}
            onChange={switchTheme}
            checkedIcon={<Emoji>☀️</Emoji>}
            uncheckedIcon={<Emoji>🌙</Emoji>}
          />
          {details && (
            <MinMd>
              <Code>
                <Link href={details.homepage}>{details.name}</Link>(
                {details.version}) {details.desc}
              </Code>
              <Code>{details.installs} installs (365 days)</Code>
              <Code>{details.conflicts} conflicts</Code>
            </MinMd>
          )}
          <Code>
            powered by <Link href="https://formulae.brew.sh/">Brew</Link> 🤍
          </Code>
        </View.Footer>
      </View>
    </Global>
  );
}

export default App;
