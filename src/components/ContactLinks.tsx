import * as React from 'react';
import ExternalLink from './ExternalLink';
import { useApplicationState } from '../store';
import { Box, Divider, TypographyVariant } from '@mui/material';
import { theme } from '../styles';

interface Props {
  color?: string;
  typography?: TypographyVariant;
}

const ContactLinks: React.FC<Props> = ({ color = theme.palette.common.white, typography = 'body1' }) => {
  const user = useApplicationState((state) => state.user);

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <ExternalLink url={`https://github.com/${user.basics.username}`} {...{ color, typography }}>
          gitHub
        </ExternalLink>
        <Divider orientation="vertical" flexItem sx={{ borderColor: color, marginX: theme.spacing(1.5) }} />
        <ExternalLink url={`https://gitconnected.com/${user.basics.username}`} {...{ color, typography }}>
          gitConnected
        </ExternalLink>
      </Box>
    </React.Fragment>
  );
};

export default ContactLinks;
