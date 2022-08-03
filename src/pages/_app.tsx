import * as React from 'react';
import '../custom.css';
import type { AppProps } from 'next/app';
import { theme } from '../styles';
import { ThemeProvider } from '@mui/material/styles';
import { useStore } from '../store/configureStore';
import { Provider } from 'react-redux';
import createEmotionCache from '../lib/createEmotionCache';
import { CacheProvider, EmotionCache } from '@emotion/react';
import Head from 'next/head';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface Props extends AppProps {
  emotionCache?: EmotionCache;
}

const PortfolioApp: React.FC<Props> = ({ Component, pageProps, emotionCache = clientSideEmotionCache }) => {
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
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </CacheProvider>
  );
};

export default PortfolioApp;
