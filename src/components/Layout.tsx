import * as React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';
import { Container, Paper, Theme, useTheme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import HeaderContent from '../components/HeaderContent';

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
  content: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(6),
      paddingLeft: theme.spacing(6),
    },
    [theme.breakpoints.down('md')]: {
      paddingRight: 0,
      paddingLeft: 0,
    },
  },
}));

interface Props {
  children?: React.ReactNode;
  pageTitle: string;
  contentTitle?: string;
  preview?: boolean;
}

const Layout: React.FC<Props> = (props) => {
  const { children, pageTitle, contentTitle, preview } = props;
  const classes = useStyles(useTheme());

  return (
    <React.Fragment>
      <Head>
        <title>{preview ? pageTitle + ' Preview' : pageTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <React.Fragment>
        {!preview && (
          <Header>
            <HeaderContent />
          </Header>
        )}
        <Container maxWidth="lg" className={classes.root}>
          <Paper elevation={2} className={classes.paper}>
            <Container maxWidth="md" className={classes.content}>
              <div>
                {contentTitle && <PageTitle text={contentTitle} />}
                {children}
              </div>
            </Container>
          </Paper>
        </Container>
      </React.Fragment>
      {!preview && <Footer />}
    </React.Fragment>
  );
};

export default Layout;
