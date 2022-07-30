import * as React from 'react';
import { Typography, Container, Paper, Theme, useTheme } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';
import ContactLinks from './ContactLinks';
import { theme } from '../styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    zIndex: 2,
    backgroundImage: "url('/images/background.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'top',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(3, 5),
    color: theme.palette.common.white,

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: theme.spacing(4),
    },
  },
  copyright: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(0.5),
    },
  },
}));

const Footer: React.FC = () => {
  const classes = useStyles(useTheme());

  return (
    <Paper className={classes.root}>
      <Container maxWidth="lg" className={classes.content}>
        <Typography variant="body1" className={classes.copyright}>
          © 2021 April Neufeld
        </Typography>
        <ContactLinks />
      </Container>
    </Paper>
  );
};

export default Footer;
