import * as React from 'react';
import { Link, Typography, TypographyVariant } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { theme } from '../styles';

interface Props {
  url: string;
  color?: string;
  isExternal?: boolean;
  typography: TypographyVariant;
}

const StyledLink: React.FC<Props> = ({ url, color, typography, isExternal, children }) => {
  return (
    <Typography variant={typography} sx={{ display: 'flex', alignItems: 'center' }}>
      <Link
        href={url}
        underline="hover"
        {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
        sx={{ color }}
      >
        {children}
      </Link>
      {isExternal && <OpenInNewIcon fontSize="small" sx={{ paddingLeft: theme.spacing(0.5) }} />}
    </Typography>
  );
};

export default StyledLink;
