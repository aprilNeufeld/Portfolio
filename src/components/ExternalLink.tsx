import * as React from 'react';
import { Link, Typography, TypographyVariant } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { theme } from '../styles';

interface Props {
  url: string;
  color?: string;
  typography: TypographyVariant;
}

const ExternalLink: React.FC<Props> = ({ url, color, typography, children }) => {
  return (
    <Typography variant={typography} sx={{ display: 'flex', alignItems: 'center' }}>
      <Link href={url} underline="hover" target="_blank" rel="noopener noreferrer" sx={{ color }}>
        {children}
      </Link>
      <OpenInNewIcon fontSize="small" sx={{ paddingLeft: theme.spacing(0.5) }} />
    </Typography>
  );
};

export default ExternalLink;
