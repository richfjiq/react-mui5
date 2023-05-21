import { FC } from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

type ThemeProp = {
  children: JSX.Element;
};

export enum themePalette {
  BG = '#12181b',
  LIME = '#c8fa5f',
  FONT_GLOBAL = "'JetBrains Mono', monospace",
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: themePalette.BG,
    },
    primary: {
      main: themePalette.LIME,
    },
  },
  typography: {
    fontFamily: themePalette.FONT_GLOBAL,
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: '0.5em',
        },
      },
    },
  },
});

export const ThemeConfig: FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
