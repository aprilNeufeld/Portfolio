import * as React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router'
import MenuIcon from '@material-ui/icons/Menu';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {
	Tabs,
	Tab,
	AppBar,
	Toolbar,
	IconButton,
	Drawer,
	Paper,
	makeStyles,
	Theme,
	createStyles,
	useTheme,
} from '@material-ui/core';
import { Page } from '../shared/types';

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			zIndex: 2,
			backgroundImage: "url('/images/background.png')",
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
		},
		tabsLayout: {
			[theme.breakpoints.down('sm')]: {
				visibility: "hidden",
			},
		},
		tabsLayoutVertical: {
			'& .MuiTabs-flexContainerVertical': {
				alignItems: 'center',
			},
		},
		toolbar: {
			justifyContent: 'center',
		},
		menuButton: {
			[theme.breakpoints.up('md')]: {
				display: "none",
			},
		},
		/*
		 * When we are at the top of the screen.
		 */
		appBar: {
			backgroundColor: 'transparent',
			zIndex: 10,
			boxShadow: 'none',
			color: theme.palette.grey[100],
			transition: theme.transitions.create(
				['background-color', 'z-index', 'box-shadow', 'color'], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
		},
		/*
		 * When we have scrolled down.
		 */
		appBarElevated: {
			backgroundColor: 'white',
			zIndex: 40,
			boxShadow: theme.shadows[4],
			color: theme.palette.text.primary,
			transition: theme.transitions.create(
				['background-color', 'z-index', 'box-shadow', 'color'], {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
		},
	});
});

/**
 * The collection of pages that we 
 * want to render.
 */
const pages: Page[] = [
	{
		path: '/',
		title: 'Home'
	},
	{
		path: '/projects',
		title: 'My Work'
	},
	{
		path: '/blog',
		title: 'Blog'
	},
]

interface Props {
	children?: React.ReactNode;
}

/**
 * A header component that holds a navigation menu above arbitrary
 * header content. The nav menu consists of material-ui Tabs. When a Tab
 * is selected, the new path is pushed to browser history.
 * 
 * While at the top of the page, the nav menu has a transparent background
 * and is overlaid atop the content.
 * 
 * When the user scrolls down, the nav menu elevates above the rest of the 
 * header and the page content, and it transitions to an opaque background
 * and contrasting foreground.
 */
const Header: React.FC<Props> = (props) => {

	const { children } = props;
	const router = useRouter();
	const [drawerOpen, setDrawerOpen] = React.useState(false);
	const classes = useStyles(useTheme());

	const tabValue = React.useRef(
		pages.findIndex(page => router.pathname === page.path) >= 0 ?
			pages.findIndex(page => router.pathname === page.path) :
			2
	);

	/**
	 * Handles a selection of a menu item by
	 * pushing the new path to browser history.
	 * 
	 * @param newValue the tab index of the selected item.
	 */
	const handleMenuSelection =
		(event: React.ChangeEvent<{}>, newValue: number) => {
			router.push(pages[newValue].path);
		};

	/**
	 * Handles selection of the hamburger menu
	 * icon in mobile.
	 */
	const handleDrawerToggle = () => {
		setDrawerOpen(!drawerOpen);
	};

	/**
	 * Handles a scroll event.
	 */
	const scrolled = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return (
		<Paper className={classes.root}>
			<AppBar
				className={clsx(classes.appBar, {
					[classes.appBarElevated]: scrolled
				})}
			>
				<Toolbar className={classes.toolbar}>
					<Tabs
						value={tabValue.current}
						onChange={handleMenuSelection}
						className={classes.tabsLayout}
					>
						{pages.map((page: Page) =>
							<Tab
								key={page.title}
								label={page.title}
							/>
						)};
								</Tabs>
					<IconButton
						edge="end"
						className={classes.menuButton}
						color="default"
						onClick={handleDrawerToggle}
					>
						<MenuIcon />
					</IconButton>
					<Drawer
						anchor="top"
						open={drawerOpen}
						onClose={handleDrawerToggle}
					>
						<Tabs
							value={tabValue.current}
							onChange={handleMenuSelection}
							orientation="vertical"
							className={classes.tabsLayoutVertical}
						>
							{pages.map((page: Page) =>
								<Tab
									key={page.title}
									label={page.title}
									onClick={handleDrawerToggle}
								/>
							)};
									</Tabs>
					</Drawer>
				</Toolbar>
			</AppBar>
			<Toolbar />
			{children}
		</Paper>
	);
};

export default Header;