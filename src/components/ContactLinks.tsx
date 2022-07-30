import * as React from 'react';
import StyledLink from './StyledLink';
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
        <StyledLink url={`https://github.com/${user.basics.username}`} {...{ color, typography, isExternal: true }}>
          gitHub
        </StyledLink>
        <Divider orientation="vertical" flexItem sx={{ borderColor: color, marginX: theme.spacing(1.5) }} />
        <StyledLink
          url={`https://gitconnected.com/${user.basics.username}`}
          {...{ color, typography, isExternal: true }}
        >
          gitConnected
        </StyledLink>
      </Box>
    </React.Fragment>
  );
};

export default ContactLinks;
