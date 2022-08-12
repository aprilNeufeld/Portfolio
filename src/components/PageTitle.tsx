import { Typography } from '@mui/material';
import * as React from 'react';

import { theme } from '../styles';

interface Props {
  text: string;
}

const PageTitle: React.FC<Props> = (props) => {
  const { text } = props;

  return (
    <React.Fragment>
      <Typography
        variant="overline"
        component="div"
        sx={{
          pb: theme.spacing(4),
          color: theme.palette.primary.main,
          lineHeight: 1.5,
        }}
      >
        {text}
      </Typography>
    </React.Fragment>
  );
};

export default PageTitle;
