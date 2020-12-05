import * as React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useHistory } from 'react-router-dom';
import '../custom.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import HeaderContent from './HeaderContent';
import ElevationScroll from './ElevationScroll';
import { useApplicationState } from '../store';
import { actions } from '../store/actionCreators';
import { paths, pageNames } from '..';
import { useStyles } from '../styles';
import { Parallax } from 'react-parallax';

const Header: React.FC = () => {

	const [drawerOpen, setDrawerOpen] = useState(false);
	const tabValue = useApplicationState(state => state.values.tabValue);
	const dispatch = useDispatch();
	const history = useHistory();
	const styles = useStyles();

	const handleMenuSelection = (event: React.ChangeEvent<{}>, newValue: number) => {
		dispatch(actions.setTabValue(newValue));
		history.push(paths[newValue]);
	};

	const handleDrawerToggle = () => {
		setDrawerOpen(!drawerOpen);
	};


	return (
		<>
			<Parallax bgImage={require("../images/background.png")} blur={1} strength={-200}>
				<ElevationScroll>
					<AppBar elevation={0} color="transparent" className="header-bar">
						<Toolbar>
							<Tabs
								value={tabValue}
								onChange={handleMenuSelection}
								className={styles.horizontalTabsLayout}
							>
								{pageNames.map((page: string) =>
									<Tab key={page} label={page} />
								)};
								</Tabs>
							<IconButton
								edge="end"
								className={styles.menuButton}
								color="default"
								onClick={handleDrawerToggle}
							>
								<MenuIcon />
							</IconButton>
							<Drawer anchor="top" open={drawerOpen} onClose={handleDrawerToggle}>
								<Tabs
									value={tabValue}
									onChange={handleMenuSelection}
									orientation="vertical"
								>
									{pageNames.map((page: string) =>
										<Tab key={page} label={page} onClick={handleDrawerToggle} />
									)};
									</Tabs>
							</Drawer>
						</Toolbar>
					</AppBar>
				</ElevationScroll>
				<Toolbar />
				<HeaderContent />
			</Parallax>
		</>
	)

};

export default Header;