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
    alignItems: 'center',
    padding: theme.spacing(3, 2),
    color: theme.palette.common.white,
  },
}));

const Footer: React.FC = () => {
  const classes = useStyles(useTheme());

  return (
    <Paper className={classes.root}>
      <Container maxWidth="xl" className={classes.content}>
        <Typography variant="body2" sx={{ paddingRight: theme.spacing(1) }}>
          © 2021 April Neufeld:
        </Typography>
        <ContactLinks typography="body2" />
      </Container>
    </Paper>
  );
};

export default Footer;
