import * as React from 'react';
import { Box, Typography, TypographyVariant } from '@mui/material';
import { theme } from '../styles';
import Linkify from 'react-linkify';
import StyledLink from './StyledLink';
import customMatchDecorator from '../lib/customMatchDecorator';

interface Props {
  color?: string;
  typography?: TypographyVariant;
}

const StyledLinkify: React.FC<Props> = ({
  color = theme.palette.primary.dark,
  typography = 'inherit' as TypographyVariant,
  children,
}) => {
  return (
    <Linkify
      matchDecorator={customMatchDecorator}
      componentDecorator={(decoratedHref, decoratedText, key) => (
        <Box key={key} sx={{ display: 'inline-block' }}>
          <StyledLink url={decoratedHref} isExternal {...{ typography, color }}>
            {decoratedText}
          </StyledLink>
        </Box>
      )}
    >
      <Typography variant={typography} component="div">
        {children}
      </Typography>
    </Linkify>
  );
};

export default StyledLinkify;
