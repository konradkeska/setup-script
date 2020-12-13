import React, { useCallback, useMemo } from "react";
import { useMediaQuery } from "react-responsive";

import { MinMd, MinSm, RWD } from "utils";
import {
  useBrewSoft,
  usePreview,
  useHotkeys,
  useSearch,
  useSides,
  useTheme,
} from "hooks";
import { Action, MaterialColor } from "types";
import { Preview } from "types";

import { APP, FEATURED_BUNDLES } from "config";

import { Button, Code, Icon, Link, Row, Tab } from "./atoms";
import { Brand, Search } from "./molecules";
import { Panel, Script } from "./organisms";
import { View } from "./templates";

function App() {
  const [mode, theme, switchTheme] = useTheme();
  const [preview, toggleEditor, toggleScript] = usePreview();

  const {
    details,
    casks,
    addedCasks,
    formulas,
    addedFormulas,
    onAdd,
    onRemove,
    handleBundleLoad,
    handleBundleSave,
  } = useBrewSoft();

  const records = useMemo(() => [...casks, ...formulas], [casks, formulas]);

  const [query, setQuery, searchResults] = useSearch({ records });

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

  useHotkeys([
    {
      getHotkeys: () => ({
        ArrowLeft: toggleLeft,
        ArrowRight: toggleRight,
        Escape: onQueryReset,
      }),
    },
    [toggleLeft, toggleRight, onQueryReset],
  ]);

  useHotkeys([
    {
      getHotkeys: () => ({
        KeyE: toggleEditor,
        KeyS: toggleScript,
      }),
      modifier: "shiftKey",
    },
    [toggleEditor, toggleScript],
  ]);

  const onMobileDevice = useMediaQuery({ maxWidth: RWD.SM - 1 });

  return (
    <View theme={theme}>
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
            <Tab
              id="editor-mode-button"
              aria-label="switch to edit mode"
              onClick={toggleEditor}
              active={preview === Preview.EDITOR}
              disabled={preview === Preview.EDITOR}
            >
              <Icon name="tools" />
            </Tab>
            <Tab
              id="script-mode-button"
              aria-label="switch to script preview mode"
              onClick={toggleScript}
              active={preview === Preview.SCRIPT}
              disabled={preview === Preview.SCRIPT}
            >
              <Icon name="code" />
            </Tab>
          </Row>
        </MinSm>
        <Row justifyContent="flex-end" w="30%">
          <Button
            id="save-button"
            aria-label="save script"
            disabled={!addedCasks.length && !addedFormulas.length}
            onClick={handleBundleSave}
            mr
          >
            <Icon name="save" />
          </Button>
          <Button id="download-button" aria-label="download script" disabled>
            <Icon name="download" />
          </Button>
        </Row>
      </View.Header>
      <View.Sides>
        <View.Sides.Left expanded={isLeftExpanded} onClick={toggleLeft}>
          <Panel
            id="search-results"
            items={searchResults}
            onItemClick={onAdd}
            bgColor={MaterialColor.SIDE}
            withDots
          />
        </View.Sides.Left>
        <View.Sides.Right expanded={isRightExpanded} onClick={toggleRight}>
          <Panel
            id="bundles"
            items={FEATURED_BUNDLES}
            bgColor={MaterialColor.SIDE}
            onItemClick={handleBundleLoad}
            withItemSeparator
          />
        </View.Sides.Right>
      </View.Sides>
      <View.Main>
        {preview === Preview.EDITOR ? (
          <>
            <Panel
              id="added-formulas"
              heading={APP.FORMULAS_PANEL_HEADING}
              description={APP.FORMULAS_PANEL_DESCRIPTION}
              items={addedFormulas}
              onItemClick={onRemove}
              action={Action.ERROR}
              panelHeight="50%"
              withDots
              border
            />
            <Panel
              id="added-casks"
              heading={APP.CASKS_PANEL_HEADING}
              description={APP.CASKS_PANEL_DESCRIPTION}
              items={addedCasks}
              onItemClick={onRemove}
              action={Action.ERROR}
              panelHeight="50%"
              withDots
              border
            />
          </>
        ) : (
          <Script casks={addedCasks} formulas={addedFormulas} />
        )}
      </View.Main>
      <View.Footer mode={mode} switchTheme={switchTheme}>
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
      </View.Footer>
    </View>
  );
}

export default App;
