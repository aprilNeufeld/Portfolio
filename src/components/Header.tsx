import { Paper, useTheme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import * as React from 'react';
import HeaderNavBar from './HeaderNavBar';

const useStyles = makeStyles(() => ({
  root: {
    zIndex: 2,
    backgroundImage: "url('/images/background.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

interface Props {
  children?: React.ReactNode;
}

/**
 * A header component that holds a navigation menu above arbitrary
 * header content.
 */
const Header: React.FC<Props> = (props) => {
  const { children } = props;
  const classes = useStyles(useTheme());

  return (
    <Paper className={classes.root} square>
      <HeaderNavBar />
      {children}
    </Paper>
  );
};

export default Header;
