import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { ThemeProvider } from "styled-components";

import { Soft, Setting, PrimaryColors } from "../types";
import { loadCasks, loadFormulas, loadSettings } from "../utils/api";
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
import { useList } from "../hooks/useList";
import { MaxMd, MinMd, MinSm } from "../utils/rwd";

function App() {
  const [query, setQuery] = useState<string>("");
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const { mode, theme, switchTheme } = useTheme();
  const { wasUserGuided, GuideTourBar, GuideTour } = useTour({ theme });

  const [casks, addedCasks, addCask, removeCask] = useList<Soft>(loadCasks);
  const [formulas, addedFormulas, addFormula, removeFormula] = useList<Soft>(
    loadFormulas
  );
  const [settings, addedSettings, addSetting, removeSetting] = useList<Setting>(
    loadSettings,
    true
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

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.currentTarget.value),
    []
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
            <MinSm>
              <Row>
                <Brand onClick={switchTheme} />
              </Row>
            </MinSm>
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
