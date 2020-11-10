import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { ThemeProvider } from "styled-components";

import { Soft, Setting } from "./types";
import { addToListFactory, removeFromListFactory } from "./utils";
import { formatData } from "./mappers";
import { loadBrewData, loadSettings } from "./api";
import { useHotkeys, useTheme } from "./hooks";

import {
  Button,
  GlobalStyle,
  Row,
  Wrapper,
  Main,
  Link,
  Header,
  Input,
  Footer,
  Span,
} from "./components/base";
import { Brand } from "./components/common";
import { Bar, ResultPanel, SearchPanel } from "./components/complex";

function App() {
  const [query, setQuery] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);

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
    if (!hasValidQuery) inputRef.current?.focus();
  }, [hasValidQuery]);

  useHotkeys(
    () => ({
      Backspace: () => inputRef.current?.focus(),
      Enter: () => inputRef.current?.focus(),
    }),
    []
  );

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.currentTarget.value),
    []
  );

  // const switchTheme = useCallback(
  //   () => setMode((prevState) => (prevState === "dark" ? "light" : "dark")),
  //   [mode]
  // );

  const addCask = addToListFactory({
    list: addedCasks,
    setList: setAddedCasks,
    setQuery,
  });

  const addFormula = addToListFactory({
    list: addedFormulas,
    setList: setAddedFormulas,
    setQuery,
  });

  const addSetting = addToListFactory({
    list: addedSettings,
    setList: setAddedSettings,
    setQuery,
  });

  const removeCask = removeFromListFactory({
    list: addedCasks,
    setList: setAddedCasks,
  });

  const removeFormula = removeFromListFactory({
    list: addedFormulas,
    setList: setAddedFormulas,
  });

  const removeSetting = removeFromListFactory({
    list: addedSettings,
    setList: setAddedSettings,
  });

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle wasUserGuided={wasUserGuided} />
        {!wasUserGuided && (
          <Bar
            label={"Want a quick guide? 🚍"}
            btnLabel={"Ok"}
            onClose={() => setWasUserGuided(true)}
            onClick={() => setWasUserGuided(true)}
          />
        )}
        <Header hasShadow={hasValidQuery} wasUserGuided={wasUserGuided}>
          <Wrapper>
            <Row>
              <Brand onClick={switchTheme} />
            </Row>
            <Input
              ref={inputRef}
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
            addCask={addCask}
            addFormula={addFormula}
            addSetting={addSetting}
            query={query}
            casks={casks}
            formulas={formulas}
            settings={settings}
          />
        )}
        <Main>
          <ResultPanel
            wasUserGuided={wasUserGuided}
            addedCasks={addedCasks}
            addedFormulas={addedFormulas}
            addedSettings={addedSettings}
            removeCask={removeCask}
            removeFormula={removeFormula}
            removeSetting={removeSetting}
          />
        </Main>
        <Footer>
          <Wrapper color={theme.colors.font2}>
            <Span>
              Made with ♥️ by&nbsp;
              <Link
                href="https://github.com/konradkeska"
                rel="noopener noreferer"
                target="_blank"
              >
                Konrad Kęska
              </Link>
              &nbsp;in 2020.
            </Span>
          </Wrapper>
        </Footer>
      </>
    </ThemeProvider>
  );
}

export default App;
