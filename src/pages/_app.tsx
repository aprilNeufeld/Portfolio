import * as React from 'react';
import '../custom.css';
import type { AppProps } from 'next/app';
import { theme } from '../styles';
import { ThemeProvider } from '@material-ui/core';
import { ConnectedRouter } from 'connected-next-router';
import { wrapper } from '../store/configureStore';

const PortfolioApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<ConnectedRouter>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</ConnectedRouter>
	)
};

export default wrapper.withRedux(PortfolioApp);
