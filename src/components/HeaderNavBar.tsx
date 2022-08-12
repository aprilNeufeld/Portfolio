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
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Page } from '../shared/types';
import { theme } from '../styles';

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
  profilePictureContainer: {
    height: 50,
    width: 50,
    border: 1,
    borderStyle: 'solid',
    borderRadius: 300,
    backgroundColor: '#ffffff4D',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      height: 30,
      width: 30,
      marginRight: theme.spacing(1),
    },
  },
  profilePicture: {
    borderRadius: 300,
  },
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

  const navigateToHome = () => {
    router.push('/');
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
          <Toolbar
            sx={{
              justifyContent: 'space-between',
              flexGrow: 1,
              px: {
                xs: theme.spacing(0),
              },
            }}
          >
            <Box
              onClick={navigateToHome}
              sx={{ display: 'flex', alignItems: 'center', pl: theme.spacing(1), cursor: 'pointer' }}
            >
              <Box
                className={classes.profilePictureContainer}
                sx={[
                  {
                    borderColor: theme.palette.grey[100],
                  },
                  scrolled && {
                    borderColor: theme.palette.grey[800],
                  },
                ]}
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
              <Typography
                sx={{
                  fontSize: {
                    xs: '1rem',
                    sm: '1.2rem',
                  },
                  letterSpacing: '0.05em',
                }}
              >
                aprilNeufeld
              </Typography>
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
              onClick={handleDrawerToggle}
              size="large"
              sx={[
                {
                  color: theme.palette.grey[100],
                  display: { md: 'none' },
                },
                scrolled && {
                  color: theme.palette.text.secondary,
                },
              ]}
            >
              <MenuRoundedIcon fontSize="inherit" />
            </IconButton>
            <Drawer sx={{ display: { md: 'none' } }} anchor="top" open={drawerOpen} onClose={handleDrawerToggle}>
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
