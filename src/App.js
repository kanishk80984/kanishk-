import React, { useMemo, useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ColorModeContext } from './context/ColorModeContext';
import Portfolio from './Components/portfolio';
import './css/App.css';

function getDesignTokens(mode) {
  const isLight = mode === 'light';
  return {
    palette: {
      mode,
      primary: {
        main: isLight ? '#0369a1' : '#38bdf8',
        light: isLight ? '#0ea5e9' : '#7dd3fc',
        dark: isLight ? '#075985' : '#0ea5e9',
      },
      secondary: {
        main: isLight ? '#4f46e5' : '#a5b4fc',
      },
      background: isLight
        ? { default: '#f1f5f9', paper: '#ffffff' }
        : { default: '#0a1628', paper: '#111d35' },
      text: isLight
        ? { primary: '#0f172a', secondary: '#475569' }
        : { primary: '#f1f5f9', secondary: '#94a3b8' },
      divider: isLight ? 'rgba(15, 23, 42, 0.08)' : 'rgba(148, 163, 184, 0.15)',
    },
    typography: {
      fontFamily: '"DM Sans", "Outfit", system-ui, sans-serif',
      h2: { fontFamily: '"Outfit", sans-serif' },
      h4: { fontFamily: '"Outfit", sans-serif' },
      h5: { fontFamily: '"Outfit", sans-serif' },
      h6: { fontFamily: '"DM Sans", sans-serif' },
      button: { fontFamily: '"DM Sans", sans-serif' },
    },
    shape: { borderRadius: 12 },
    components: {
      MuiButton: {
        styleOverrides: {
          root: { borderRadius: 12 },
        },
      },
    },
  };
}

function App() {
  const [mode, setMode] = useState(() => {
    try {
      return localStorage.getItem('portfolio-color-mode') === 'dark' ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('portfolio-color-mode', mode);
    } catch {
      /* ignore */
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', mode === 'light' ? '#f1f5f9' : '#0a1628');
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      mode,
      toggleColorMode: () => setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    [mode]
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Portfolio />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
