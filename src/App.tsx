import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { STRANGER_LABEL, STRANGER_BTN_LABEL } from "./constants";
import { Mode, themes } from "./themes";
import { IBaseCask, IBaseFormula, Setting } from "./types";
import { toBaseCask, toBaseFormula } from "./mappers";
import { loadBrewData } from "./api";
import { useHotkeys } from "./hooks";

import settingsData from "./data/settings.json";

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
import { Bar, Panel, ResultPanel, SearchPanel } from "./components/complex";

function App() {
  const [mode, setMode] = useState<Mode>("dark");
  const [wasUserGuided, setWasUserGuided] = useState(false);
  const [query, setQuery] = useState<string>("");
  const [casks, setCasks] = useState<IBaseCask[]>([]);
  const [settings, setSettings] = useState<Setting[]>([]);
  const [formulas, setFormulas] = useState<IBaseFormula[]>([]);
  const [addedCasks, setAddedCasks] = useState<IBaseCask[]>([]);
  const [addedFormulas, setAddedFormulas] = useState<IBaseFormula[]>([]);
  const [addedSettings, setAddedSettings] = useState<Setting[]>([]);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const theme = useMemo(() => themes[mode], [mode]);

  const loadData = useCallback(async () => {
    const [casks, formulas] = await loadBrewData();
    setCasks(toBaseCask(casks.data));
    setFormulas(toBaseFormula(formulas.data));
    console.log(settingsData);
    setSettings(settingsData);
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  useEffect(() => {
    if (!query) inputRef.current?.focus();
  }, [query]);

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

  const switchTheme = useCallback(
    () => setMode((prevState) => (prevState === "dark" ? "light" : "dark")),
    [mode]
  );

  const addCask = useCallback(
    (cask: IBaseCask) => () => {
      if (!addedCasks.find((item) => item.name === cask.name)) {
        setAddedCasks([...addedCasks, cask]);
        setQuery("");
      }
    },
    [addedCasks]
  );

  const addFormula = useCallback(
    (formula: IBaseFormula) => () => {
      if (!addedFormulas.find((item) => item.name === formula.name)) {
        setAddedFormulas([...addedFormulas, formula]);
        setQuery("");
      }
    },
    [addedFormulas]
  );

  const addSetting = useCallback(
    (setting: Setting) => () => {
      if (!addedSettings.find((item) => item.name === setting.name)) {
        setAddedSettings([...addedSettings, setting]);
        setQuery("");
      }
    },
    [addedSettings]
  );

  const removeCask = useCallback(
    (cask: IBaseCask) => () =>
      setAddedCasks(addedCasks.filter((item) => item.name !== cask.name)),
    [addedCasks]
  );

  const removeFormula = useCallback(
    (formula: IBaseFormula) => () =>
      setAddedFormulas(
        addedFormulas.filter((item) => item.name !== formula.name)
      ),
    [addedFormulas]
  );

  const removeSetting = useCallback(
    (setting: Setting) => () =>
      setAddedSettings(
        addedSettings.filter((item) => item.name !== setting.name)
      ),
    [addedFormulas]
  );

  return (
    <>
      <GlobalStyle wasUserGuided={wasUserGuided} theme={theme} />
      {!wasUserGuided && (
        <Bar
          label={STRANGER_LABEL}
          btnLabel={STRANGER_BTN_LABEL}
          onClose={() => setWasUserGuided(true)}
          onClick={() => setWasUserGuided(true)}
          theme={theme}
        />
      )}
      <Header query={query} theme={theme} wasUserGuided={wasUserGuided}>
        <Wrapper theme={theme}>
          <Row>
            <Brand onClick={switchTheme} theme={theme} />
          </Row>
          <Input
            ref={inputRef}
            theme={theme}
            placeholder="Search.."
            type="text"
            value={query}
            onChange={onChange}
          />
          <Button id="download-button" theme={theme} bg={theme.colors.green}>
            Save 💾
          </Button>
        </Wrapper>
      </Header>
      {query && (
        <SearchPanel
          theme={theme}
          wasUserGuided={wasUserGuided}
          addCask={addCask as any}
          addFormula={addFormula as any}
          addSetting={addSetting as any}
          query={query}
          casks={casks}
          formulas={formulas}
          settings={settings}
        />
      )}
      <Main theme={theme}>
        <ResultPanel
          theme={theme}
          wasUserGuided={wasUserGuided}
          addedCasks={addedCasks}
          addedFormulas={addedFormulas}
          addedSettings={addedSettings}
          removeCask={removeCask as any}
          removeFormula={removeFormula as any}
          removeSetting={removeSetting as any}
        />
      </Main>
      <Footer theme={theme}>
        <Wrapper theme={theme} color={theme.colors.font2}>
          <Span>
            Made with ♥️ by&nbsp;
            <Link
              theme={theme}
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
  );
}

export default App;
