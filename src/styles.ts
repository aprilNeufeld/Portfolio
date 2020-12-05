import {
	createMuiTheme,
	makeStyles,
	createStyles,
	Theme,
	responsiveFontSizes,
} from '@material-ui/core/styles';
import * as Colors from "@material-ui/core/colors";


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


export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		bodyContainer: {
			marginTop: -10,
			marginBottom: -10,
			flexGrow: 1,
			display: "flex!important",
			zIndex: 1,
			minHeight: 500,
		},
		bodyPaper: {
			flexGrow: 1,
			flexBasis: "auto",
			[theme.breakpoints.down('sm')]: {
				boxShadow: "none",
			},
		},
		secondBodyContainer: {
			paddingTop: theme.spacing(6),
			paddingBottom: theme.spacing(6),
			[theme.breakpoints.up('md')]: {
				paddingRight: "48px!important",
				paddingLeft: "48px!important",
			}
		},
		headerPaper: {
			zIndex: 2,
		},
		footerPaper: {
			zIndex: 2,
		},
		menuButton: {
			marginRight: theme.spacing(2),
			[theme.breakpoints.up('md')]: {
				display: "none",
			},
		},
		title: {
			flexGrow: 1,
		},
		horizontalTabsLayout: {
			[theme.breakpoints.down('sm')]: {
				visibility: "hidden",
			},
		},
		backgroundBox: {
			backgroundImage: "url('./images/background.png')",
		},
		profilePicture: {
			[theme.breakpoints.down('sm')]: {
				width: "200px",
				height: "200px",
				borderRadius: "100px"
			},
			[theme.breakpoints.up('md')]: {
				width: "300px",
				height: "300px",
				borderRadius: "150px"
			},
			border: 5,
			borderColor: Colors.common.white,
			borderStyle: "solid",
		},
		profilePictureContainer: {
			[theme.breakpoints.down('sm')]: {
				width: "200px",
				height: "200px",
				borderRadius: "100px"
			},
			[theme.breakpoints.up('md')]: {
				width: "300px",
				height: "300px",
				borderRadius: "150px"
			},
			backgroundColor: "#ffffff4D",
			marginBottom: theme.spacing(2),
		},
		headerContent: {
			paddingBottom: theme.spacing(4),
			[theme.breakpoints.down('sm')]: {
				paddingTop: theme.spacing(1)
			},
			[theme.breakpoints.up('md')]: {
				paddingTop: theme.spacing(6)
			},
		},
		chipsContainer: {
			paddingTop: theme.spacing(2),
			display: 'flex',
			justifyContent: 'center',
			flexWrap: 'wrap',
			'& > *': {
				margin: theme.spacing(0.5),
			},
		},
		chipsContainerLeft: {
			paddingTop: theme.spacing(2),
			display: 'flex',
			justifyContent: 'left',
			flexWrap: 'wrap',
			'& > *': {
				margin: theme.spacing(0.5),
			},
		},
		pageTitles: {
			marginBottom: theme.spacing(6)
		},
		dividerSpacingBox: {

			paddingTop: theme.spacing(4),
			paddingBottom: theme.spacing(4),
		},
		footerParallax: {
			flexGrow: 0,
			flexShrink: 1,
		},
		footer: {
			padding: theme.spacing(3, 2),
		},
	}),
);
