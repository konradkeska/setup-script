import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styled, { ThemeProvider } from "styled-components";
import Tour from "reactour";

import { PrimaryColors, MaterialColors, SoftType, Soft } from "../types";
import { loadCasks, loadFormulas } from "../utils/api";
import { CASKS_PANEL_LABEL, FORMULAS_PANEL_LABEL } from "../utils/config";
import { MinSm } from "../utils/rwd";
import {
  useHotkeys,
  useTheme,
  useTour,
  useList,
  useWindowSize,
} from "../hooks";

import {
  Button,
  Footer,
  GlobalStyle,
  Header,
  Input,
  Main,
  Row,
  Toggle,
  Wrapper,
} from "./base";
import { Bar, Brand } from "./common";
import { Panel } from "./complex";
import { includesQuery, sort } from "../utils/helpers";
import { Script } from "./complex/Script";
import { Emoji } from "./base/Emoji";

export enum Preview {
  PICKER = "picker",
  SCRIPT = "script",
}

// TODO: fix this mess
function App() {
  const [query, setQuery] = useState<string>("");
  const [preview, setPreview] = useState<Preview>(Preview.PICKER);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const { height } = useWindowSize();
  const { mode, theme, switchTheme } = useTheme();

  const {
    cancelTour,
    startTour,
    isTourOpen,
    steps,
    onRequestClose,
    wasUserGuided,
  } = useTour({ theme });

  const [casks, addedCasks, addCask, removeCask] = useList(
    loadCasks,
    SoftType.CASK
  );

  const [formulas, addedFormulas, addFormula, removeFormula] = useList(
    loadFormulas,
    SoftType.FORMULA
  );

  const hasValidQuery = useMemo(() => query?.length > 1, [query]);

  useEffect(() => {
    if (!hasValidQuery) searchInputRef.current?.focus();
  }, [hasValidQuery]);

  useHotkeys(
    () => ({
      Backspace: () => searchInputRef.current?.focus(),
    }),
    []
  );

  const switchPreview = useCallback(
    () =>
      setPreview(preview === Preview.PICKER ? Preview.SCRIPT : Preview.PICKER),
    [preview]
  );

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.currentTarget.value),
    []
  );

  const onAdd = useCallback(
    (record: Soft) =>
      ({
        [SoftType.CASK]: addCask,
        [SoftType.FORMULA]: addFormula,
      }[record.type](record)),
    [addCask, addFormula]
  );

  const getFullHeightCount = useCallback(
    (wasUserGuided: boolean) =>
      Math.floor((height - (wasUserGuided ? 62 : 62 + 42)) / 32),
    [height]
  );

  const count = useMemo(() => getFullHeightCount(wasUserGuided), [
    getFullHeightCount,
    wasUserGuided,
  ]);

  const caskResults = useMemo(() => includesQuery(query, casks), [
    query,
    casks,
  ]);

  const formulaeResults = useMemo(() => includesQuery(query, formulas), [
    query,
    formulas,
  ]);

  const sortedResults = useMemo(
    () =>
      sort([...caskResults, ...formulaeResults], (a, b) =>
        a.name.localeCompare(b.name, "en", { sensitivity: "base" })
      ),
    [caskResults, formulaeResults]
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle wasUserGuided={wasUserGuided} />
      <>
        {!wasUserGuided && (
          <Bar
            label={"Are you up for a quick tour?"}
            btnLabel={"Ok"}
            onClose={cancelTour}
            onConfirm={startTour}
          />
        )}
        <Tour
          steps={steps}
          onRequestClose={onRequestClose}
          isOpen={isTourOpen}
          onAfterOpen={() => (document.body.style.overflowY = "hidden")}
          onBeforeClose={() => (document.body.style.overflowY = "auto")}
          accentColor={theme.colors.primary.purple}
          rounded={theme.radiuses.md}
          showNavigation={false}
          showNavigationNumber={false}
          disableFocusLock
        />
        <Header hasShadow={hasValidQuery} wasUserGuided={wasUserGuided}>
          <Wrapper maxW="100%">
            <Input
              id="search-input"
              ref={searchInputRef}
              placeholder="Search.."
              type="search"
              value={query}
              onChange={onChange}
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
        {hasValidQuery && sortedResults.length > 0 && (
          <Aside wasUserGuided={wasUserGuided}>
            <Wrapper
              justify="flex-start"
              align="flex-start"
              direction="column"
              p="0px"
            >
              <Panel
                id="results"
                count={count}
                items={sortedResults}
                onClick={onAdd}
                bgColor={MaterialColors.INPUT}
                mt={!wasUserGuided}
                withDots
              />
            </Wrapper>
          </Aside>
        )}
        <Main wasUserGuided={wasUserGuided}>
          <Wrapper align="flex-start" p="18px 0px 0px 0px">
            {preview === Preview.PICKER ? (
              <>
                <Panel
                  id="added-casks"
                  title={CASKS_PANEL_LABEL}
                  items={addedCasks}
                  onClick={removeCask}
                  operation="remove"
                  border
                />
                <Panel
                  id="added-formulas"
                  title={FORMULAS_PANEL_LABEL}
                  items={addedFormulas}
                  onClick={removeFormula}
                  operation="remove"
                  accentColor={PrimaryColors.BLUE}
                  border
                />
              </>
            ) : (
              <Script casks={addedCasks} formulas={addedFormulas} />
            )}
          </Wrapper>
        </Main>
        <Footer>
          <Wrapper color={theme.colors.font.sub} p="0px 16px">
            <Toggle
              defaultChecked={preview === Preview.PICKER}
              onChange={switchPreview}
              icons={{
                checked: <Emoji>📦</Emoji>,
                unchecked: <Emoji>📜</Emoji>,
              }}
            />
            <Toggle
              defaultChecked={mode === "light"}
              onChange={switchTheme}
              icons={{
                checked: <Emoji>☀️</Emoji>,
                unchecked: <Emoji>🌙</Emoji>,
              }}
            />
          </Wrapper>
        </Footer>
      </>
    </ThemeProvider>
  );
}

export default App;

const Aside = styled.aside<{ wasUserGuided: boolean }>`
  z-index: 4;
  padding-top: ${({ wasUserGuided }) => `${wasUserGuided ? 62 : 62 + 42}px`};
  max-width: 360px;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.material.input};
  box-shadow: ${({ theme }) => theme.shadows.base};
  transition: padding 700ms;
`;
