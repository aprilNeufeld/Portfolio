import {
	createMuiTheme,
	responsiveFontSizes,
} from '@material-ui/core/styles';


export const theme = responsiveFontSizes(createMuiTheme({
	palette: {
		primary: {
			main: "#755b96"
		},
		secondary: {
			main: "#6bd6dd"
		}
	},
	typography: {
	}
}));
