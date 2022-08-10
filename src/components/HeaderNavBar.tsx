import * as React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Image from 'next/image';
import {
  Box,
  Tabs,
  tabsClasses,
  Tab,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Theme,
  useTheme,
  Typography,
  Container,
  toolbarClasses,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Page } from '../shared/types';

const useStyles = makeStyles((theme: Theme) => ({
  tabsLayout: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  tabsLayoutVertical: {
    [`& .${tabsClasses.flexContainerVertical}`]: {
      alignItems: 'center',
    },
  },
  drawerButton: {
    color: theme.palette.grey[100],
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerButtonElevated: {
    color: theme.palette.text.secondary,
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  profilePictureContainer: {
    height: 50,
    width: 50,
    border: 1,
    borderColor: theme.palette.grey[100],
    borderStyle: 'solid',
    borderRadius: 300,
    backgroundColor: '#ffffff4D',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  profilePictureContainerElevated: {
    borderColor: theme.palette.grey[800],
  },
  profilePicture: {
    borderRadius: 300,
  },
  /*
   * When we are at the top of the screen.
   */
  appBar: {
    backgroundColor: 'transparent',
    zIndex: 10,
    boxShadow: 'none',
    color: theme.palette.grey[100],
    transition: theme.transitions.create(['background-color', 'z-index', 'box-shadow', 'color'], {
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
    transition: theme.transitions.create(['background-color', 'z-index', 'box-shadow', 'color'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

/**
 * The collection of pages that we
 * want to render.
 */
const pages: Page[] = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/projects',
    title: 'My Work',
  },
  {
    path: '/blog',
    title: 'Blog',
  },
];

const HeaderNavBar: React.FC = () => {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const classes = useStyles(useTheme());

  // Find out which tab should be shown as selected based on the current
  // router path. If the path does not exist as part of our array, it's
  // one of our blog posts, so show the Blog tab as selected.
  const tabValue = React.useRef(
    pages.findIndex((page) => router.pathname === page.path) >= 0
      ? pages.findIndex((page) => router.pathname === page.path)
      : 2,
  );

  const handleMenuSelection = (event: React.SyntheticEvent<{}>, newValue: number) => {
    router.push(pages[newValue].path);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <React.Fragment>
      <AppBar
        className={clsx(classes.appBar, {
          [classes.appBarElevated]: scrolled,
        })}
      >
        <Container maxWidth="lg" sx={{ display: 'flex', minHeight: 80 }}>
          <Toolbar sx={{ justifyContent: 'space-between', flexGrow: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                className={clsx(classes.profilePictureContainer, {
                  [classes.profilePictureContainerElevated]: scrolled,
                })}
              >
                <Image
                  src="/images/avatar.png"
                  className={classes.profilePicture}
                  width={'100%'}
                  height={'100%'}
                  layout="responsive"
                  priority
                  alt="Profile avatar"
                />
              </Box>
              <Typography sx={{ fontSize: '1.2rem', letterSpacing: '0.05em' }}>aprilNeufeld</Typography>
            </Box>
            <Tabs
              value={tabValue.current}
              onChange={handleMenuSelection}
              className={classes.tabsLayout}
              indicatorColor="secondary"
              textColor="inherit"
            >
              {pages.map((page: Page) => (
                <Tab sx={{ minWidth: 100 }} key={page.title} label={page.title} />
              ))}
              ;
            </Tabs>
            <IconButton
              className={clsx(classes.drawerButton, {
                [classes.drawerButtonElevated]: scrolled,
              })}
              onClick={handleDrawerToggle}
              size="large"
            >
              <MenuRoundedIcon fontSize="inherit" />
            </IconButton>
            <Drawer className={classes.drawer} anchor="top" open={drawerOpen} onClose={handleDrawerToggle}>
              <Tabs
                value={tabValue.current}
                onChange={handleMenuSelection}
                orientation="vertical"
                className={classes.tabsLayoutVertical}
                indicatorColor="secondary"
                textColor="inherit"
              >
                {pages.map((page: Page) => (
                  <Tab key={page.title} label={page.title} onClick={handleDrawerToggle} />
                ))}
                ;
              </Tabs>
            </Drawer>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar sx={{ height: 80 }} />
    </React.Fragment>
  );
};

export default HeaderNavBar;
