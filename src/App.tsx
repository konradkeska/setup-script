import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { ThemeProvider } from "styled-components";

import { Soft, Setting } from "./types";
import { matches, notMatches } from "./utils";
import { formatData } from "./mappers";
import { loadBrewData, loadSettings } from "./api";
import { useHotkeys, useTheme } from "./hooks";

import {
  Button,
  GlobalStyle,
  Row,
  Wrapper,
  Main,
  Header,
  Input,
  Footer,
} from "./components/base";
import { Bar, Brand } from "./components/common";
import { ResultPanel, SearchPanel } from "./components/complex";
import Author from "./components/base/Author";

function App() {
  const [query, setQuery] = useState<string>("");
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const { theme, switchTheme } = useTheme();

  const [wasUserGuided, setWasUserGuided] = useState(false);

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
    setCasks(formatData(casks.data));
    setFormulas(formatData(formulas.data));
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

  const cancelGuide = useCallback(() => {
    // TODO
    setWasUserGuided(true);
  }, []);

  const startGuide = useCallback(() => {
    // TODO
    setWasUserGuided(true);
  }, []);

  const addCask = useCallback(
    (record: Soft) => () => {
      if (!addedCasks.find(matches(record))) {
        setAddedCasks([...addedCasks, record]);
        setCasks(casks.filter(notMatches(record)));
        setQuery("");
      }
    },
    [addedCasks, casks]
  );

  const addFormula = useCallback(
    (record: Soft) => () => {
      if (!addedFormulas.find(matches(record))) {
        setAddedFormulas([...addedFormulas, record]);
        setFormulas(formulas.filter(notMatches(record)));
        setQuery("");
      }
    },
    [addedFormulas, formulas]
  );

  const addSetting = useCallback(
    (record: Setting) => () => {
      if (!addedSettings.find(matches(record))) {
        setAddedSettings([...addedSettings, record]);
        setSettings(settings.filter(notMatches(record)));
        setQuery("");
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
        {!wasUserGuided && (
          <Bar
            label={"Are you up for a quick tour?"}
            btnLabel={"Ok"}
            onClose={cancelGuide}
            onConfirm={startGuide}
          />
        )}
        <Header hasShadow={hasValidQuery} wasUserGuided={wasUserGuided}>
          <Wrapper>
            <Row>
              <Brand onClick={switchTheme} />
            </Row>
            <Input
              ref={searchInputRef}
              placeholder="Search.."
              type="text"
              value={query}
              onChange={onChange}
            />
            <Button id="download-button" bgColor="green">
              Save
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
          <Wrapper color={theme.colors.font2}>
            <Author />
          </Wrapper>
        </Footer>
      </>
    </ThemeProvider>
  );
}

export default App;
