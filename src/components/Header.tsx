﻿import * as React from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import ElevationScroll from './ElevationScroll';
import { Parallax } from 'react-parallax';
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
	useTheme
} from '@material-ui/core';
import { Page } from '../shared/types';


const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			zIndex: 2,
		},
		tabsLayout: {
			[theme.breakpoints.down('sm')]: {
				visibility: "hidden",
			},
		},
		menuButton: {
			marginRight: theme.spacing(2),
			[theme.breakpoints.up('md')]: {
				display: "none",
			},
		},
		appBar: {
			backgroundColor: 'transparent',
			zIndex: 0,
			boxShadow: 'none',
			transition: theme.transitions.create(['background-color', 'z-index', 'box-shadow'], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
		},
		appBarElevated: {
			backgroundColor: 'white',
			zIndex: 4,
			boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%),'
				+ '0px 4px 5px 0px rgb(0 0 0 / 14%),'
				+ '0px 1px 10px 0px rgb(0 0 0 / 12%)',
			transition: theme.transitions.create(['background-color', 'z-index', 'box-shadow'], {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
		},
	});
});

interface Props {
	children?: React.ReactNode;
	pages: Page[];
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
 * 
 * @param props Holds an array of type Page. Each Tab will correspond to 
 * a Page.
 */
const Header: React.FC<Props> = (props) => {

	const { pages, children } = props;
	const [drawerOpen, setDrawerOpen] = React.useState(false);
	const history = useHistory();
	const tabValue = React.useRef(
		pages.findIndex(page => history.location.pathname === page.path));
	const classes = useStyles(useTheme());

	const handleMenuSelection =
		(event: React.ChangeEvent<{}>, newValue: number) => {
			tabValue.current = newValue;
			history.push(pages[newValue].path);
		};

	const handleDrawerToggle = () => {
		setDrawerOpen(!drawerOpen);
	};

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return (
		<Paper className={classes.root}>
			<Parallax
				bgImage={require("../images/background.png")}
				blur={1}
				strength={-200}
			>
				<AppBar
					className={clsx(classes.appBar, {
						[classes.appBarElevated]: trigger
					})}
					elevation={0}
					color="transparent"
				>
					<Toolbar>
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
			</Parallax>
		</Paper>
	);

};

export default Header;