import * as React from 'react';
import { Box, Link, Typography, TypographyVariant } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { theme } from '../styles';

interface Props {
  url: string;
  color?: string;
  isExternal?: boolean;
  typography?: TypographyVariant;
}

const StyledLink: React.FC<Props> = ({
  url,
  color = theme.palette.primary.dark,
  typography = 'inherit' as TypographyVariant,
  isExternal,
  children,
}) => {
  return (
    <Box sx={{ display: 'inline-block' }}>
      <Typography variant={typography} component="div" sx={{ display: 'flex', alignItems: 'center' }}>
        <Link
          href={url}
          underline="hover"
          {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
          sx={{ color }}
        >
          {children}
        </Link>
        {isExternal && <OpenInNewIcon fontSize="small" sx={{ paddingLeft: theme.spacing(1), color }} />}
      </Typography>
    </Box>
  );
};

export default StyledLink;
