import * as React from 'react';
import Link from 'next/link';
import { Typography, Container, Paper, Theme, useTheme } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    zIndex: 2,
    backgroundImage: "url('/images/background.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'top',
  },
  content: {
    padding: theme.spacing(3, 2),
    color: 'white',
    '& a': {
      textDecoration: 'underline',
      '&:hover': {
        color: theme.palette.primary.light,
      },
      '&:not(:hover)': {
        color: theme.palette.common.white,
      },
    },
  },
}));

const Footer: React.FC = () => {
  const classes = useStyles(useTheme());

  return (
    <Paper className={classes.root}>
      <Container maxWidth="xl" className={classes.content}>
        <Typography variant="body2">
          © 2021 April Neufeld: <Link href="https://github.com/aprilNeufeld"> gitHub</Link> |{' '}
          <Link href="https://gitconnected.com/aprilNeufeld">gitConnected </Link>
        </Typography>
      </Container>
    </Paper>
  );
};

export default Footer;
