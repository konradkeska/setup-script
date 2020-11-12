import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { ThemeProvider } from "styled-components";

import { Soft, Setting, PrimaryColors } from "../types";
import { formatResponse, matches, notMatches } from "../utils/helpers";
import { loadBrewData, loadSettings } from "../utils/api";
import { useHotkeys, useTheme, useTour } from "../hooks";

import {
  Author,
  Button,
  Footer,
  GlobalStyle,
  Header,
  Input,
  Main,
  Row,
  ThemeToggle,
  Wrapper,
} from "./base";
import { Brand } from "./common";
import { ResultPanel, SearchPanel } from "./complex";

function App() {
  const [query, setQuery] = useState<string>("");
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const { mode, theme, switchTheme } = useTheme();
  const { wasUserGuided, GuideTourBar, GuideTour } = useTour({ theme });

  const [casks, setCasks] = useState<Soft[]>([]);
  const [formulas, setFormulas] = useState<Soft[]>([]);
  const [settings, setSettings] = useState<Setting[]>([]);

  const [addedCasks, setAddedCasks] = useState<Soft[]>([]);
  const [addedFormulas, setAddedFormulas] = useState<Soft[]>([]);
  const [addedSettings, setAddedSettings] = useState<Setting[]>([]);

  const hasValidQuery = useMemo(() => query?.length > 1, [query]);

  const loadData = useCallback(async () => {
    const [[casks, formulas], settings] = [
      await loadBrewData(),
      loadSettings(),
    ];
    setCasks(formatResponse(casks.data));
    setFormulas(formatResponse(formulas.data));
    setSettings(settings);
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  useEffect(() => {
    if (!hasValidQuery) searchInputRef.current?.focus();
  }, [hasValidQuery]);

  useHotkeys(
    () => ({
      Backspace: () => searchInputRef.current?.focus(),
      Enter: () => searchInputRef.current?.focus(),
    }),
    []
  );

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.currentTarget.value),
    []
  );

  const addCask = useCallback(
    (record: Soft) => () => {
      if (!addedCasks.find(matches(record))) {
        setAddedCasks([record, ...addedCasks]);
        setCasks(casks.filter(notMatches(record)));
      }
    },
    [addedCasks, casks]
  );

  const addFormula = useCallback(
    (record: Soft) => () => {
      if (!addedFormulas.find(matches(record))) {
        setAddedFormulas([record, ...addedFormulas]);
        setFormulas(formulas.filter(notMatches(record)));
      }
    },
    [addedFormulas, formulas]
  );

  const addSetting = useCallback(
    (record: Setting) => () => {
      if (!addedSettings.find(matches(record))) {
        setAddedSettings([record, ...addedSettings]);
        setSettings(settings.filter(notMatches(record)));
      }
    },
    [addedSettings, settings]
  );

  const removeCask = useCallback(
    (record: Soft) => () => {
      setAddedCasks(addedCasks.filter(notMatches(record)));
      setCasks([record, ...casks]);
    },
    [addedCasks, casks]
  );

  const removeFormula = useCallback(
    (record: Soft) => () => {
      setAddedFormulas(addedFormulas.filter(notMatches(record)));
      setFormulas([record, ...formulas]);
    },
    [addedFormulas, formulas]
  );

  const removeSetting = useCallback(
    (record: Setting) => () => {
      setAddedSettings(addedSettings.filter(notMatches(record)));
      setSettings([record, ...settings]);
    },
    [addedSettings, settings]
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle wasUserGuided={wasUserGuided} />
      <>
        {!wasUserGuided && <GuideTourBar />}
        <GuideTour />
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
            <Row>
              <Brand onClick={switchTheme} />
            </Row>
            <Button id="download-button" bgColor={PrimaryColors.GREEN}>
              Download
            </Button>
          </Wrapper>
        </Header>
        {hasValidQuery && (
          <SearchPanel
            wasUserGuided={wasUserGuided}
            query={query}
            casks={casks}
            formulas={formulas}
            settings={settings}
            addCask={addCask}
            addFormula={addFormula}
            addSetting={addSetting}
          />
        )}
        <Main wasUserGuided={wasUserGuided}>
          <ResultPanel
            wasUserGuided={wasUserGuided}
            casks={addedCasks}
            formulas={addedFormulas}
            settings={addedSettings}
            removeCask={removeCask}
            removeFormula={removeFormula}
            removeSetting={removeSetting}
          />
        </Main>
        <Footer>
          <Wrapper color={theme.colors.font.sub}>
            <Author />
            <ThemeToggle mode={mode} switchTheme={switchTheme} />
          </Wrapper>
        </Footer>
      </>
    </ThemeProvider>
  );
}

export default App;
