import * as React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Paper, Theme, useTheme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import HeaderBioContent from './HeaderBioContent';
import { theme } from '../styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: -10,
    marginBottom: -10,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    zIndex: 1,
    minHeight: 500,
  },
  paper: {
    flexGrow: 1,
    flexBasis: 'auto',
    [theme.breakpoints.down('md')]: {
      boxShadow: 'none',
    },
  },
}));

interface Props {
  children?: React.ReactNode;
  pageTitle: string;
  showBioContent?: boolean;
  preview?: boolean;
}

const Layout: React.FC<Props> = (props) => {
  const { children, pageTitle, showBioContent, preview } = props;
  const classes = useStyles(useTheme());

  return (
    <React.Fragment>
      <Head>
        <title>{`${pageTitle} - AprilNeufeld.ca`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <React.Fragment>
        {!preview && <Header>{showBioContent && <HeaderBioContent />}</Header>}
        <Container maxWidth="lg" className={classes.root}>
          <Paper elevation={2} className={classes.paper}>
            <Container
              maxWidth="md"
              sx={[
                {
                  px: {
                    xs: theme.spacing(0),
                    md: theme.spacing(6),
                  },
                  py: {
                    xs: theme.spacing(6),
                    md: theme.spacing(10),
                  },
                },
                !showBioContent && {
                  py: {
                    xs: theme.spacing(8),
                    lg: theme.spacing(12),
                  },
                },
              ]}
            >
              {children}
            </Container>
          </Paper>
        </Container>
      </React.Fragment>
      {!preview && <Footer />}
    </React.Fragment>
  );
};

export default Layout;
