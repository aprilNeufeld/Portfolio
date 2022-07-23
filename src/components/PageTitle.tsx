import * as React from 'react';
import { Typography, Theme, useTheme } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    title: {
      marginBottom: theme.spacing(4),
      color: theme.palette.primary.main,
      lineHeight: 1.5,
    },
  });
});

interface Props {
  text: string;
}

const PageTitle: React.FC<Props> = (props) => {
  const { text } = props;
  const classes = useStyles(useTheme());

  return (
    <React.Fragment>
      <Typography variant="overline" gutterBottom className={classes.title} component="div">
        {text}
      </Typography>
    </React.Fragment>
  );
};

export default PageTitle;
