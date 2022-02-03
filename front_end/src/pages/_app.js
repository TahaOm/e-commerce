import * as React from 'react';
import { CacheProvider } from '@emotion/react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useMediaQuery } from "@mui/material";
import { Provider } from 'react-redux';

import theme from '../utils/theme';
import createEmotionCache from '../utils/createEmotionCache';
import darkTheme from "../utils/darkTheme";
import ColorModeContext from "../utils/ColorModeContext";
import { useStore } from '../utils/Store';

const clientSideEmotionCache = createEmotionCache();
export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const store = useStore(pageProps.initialReduxState)

  // Set dark mode based on media query
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = React.useState(prefersDarkMode);

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    };
  }, []);

  const _setDarkMode = (newmode) => {
    localStorage.setItem("mode", newmode);
    setDarkMode(newmode);
  };

  React.useEffect(() => {
    const mode = localStorage.getItem("mode") === "true";
    // set mode
    setDarkMode(mode);
  }, []);

  return (

    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ColorModeContext.Provider value={{ darkMode, setDarkMode: _setDarkMode }}>
          <ThemeProvider theme={darkMode ? darkTheme : theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </ColorModeContext.Provider>
      </CacheProvider>
    </Provider>

  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};