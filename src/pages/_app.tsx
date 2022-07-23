import * as React from 'react';
import '../custom.css';
import type { AppProps } from 'next/app';
import { theme } from '../styles';
import { ThemeProvider, Theme, StyledEngineProvider } from '@mui/material';
import { useStore } from '../store/configureStore';
import { Provider } from 'react-redux';

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

const PortfolioApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  // pageProps comes from any pages that use getStaticProps at build time
  const store = useStore(pageProps.initialReduxState);

  /**
   * Necessary to be able to use Material-UI with SSG on our
   * individual posts pages.
   */
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  );
};

export default PortfolioApp;
