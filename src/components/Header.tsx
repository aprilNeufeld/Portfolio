import * as React from 'react';
import { useHistory } from 'react-router-dom';
import '../custom.css'
import MenuIcon from '@material-ui/icons/Menu';
import ElevationScroll from './ElevationScroll';
import { Parallax } from 'react-parallax';
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

	return (
		<Paper className={classes.root}>
			<Parallax
				bgImage={require("../images/background.png")}
				blur={1}
				strength={-200}
			>
				<ElevationScroll>
					<AppBar
						elevation={0}
						color="transparent"
						className="header-bar"
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
				</ElevationScroll>
				<Toolbar />
				{children}
			</Parallax>
		</Paper>
	);

};

export default Header;