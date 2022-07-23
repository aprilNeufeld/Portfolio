import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import ServerStyleSheets from '@mui/styles/ServerStyleSheets';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`
							https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_GOOGLE_ANALYTICS_ID}
					`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
								window.dataLayer = window.dataLayer || [];
								
								function gtag() {
									dataLayer.push(arguments);
								}
								
								gtag('js', new Date());

								gtag('config', '${process.env.NEXT_GOOGLE_ANALYTICS_ID}');
           
								`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

/**
 * This is necessary configuration to be able to use Material-UI with
 * static site generation.
 * Taken from https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_document.js
 * so that we can statically generate our individual post pages without
 * the styling conflicting with client-side styling.
 */
MyDocument.getInitialProps = async (ctx) => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};

export default MyDocument;
