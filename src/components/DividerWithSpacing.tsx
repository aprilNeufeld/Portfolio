import * as React from 'react';
import { Box, Divider, useTheme } from '@material-ui/core';

interface Props {
  spacing?: number;
}

/**
 * A horizontal divider that has padding above and below.
 *
 * @param props { spacing } The amount by which we will multiply
 *		theme.spacing to give us the padding to add above and
 *		below the divider.
 */
const DividerWithSpacing: React.FC<Props> = (props) => {
  const { spacing } = props;
  const theme = useTheme();

  return (
    <React.Fragment>
      <Box
        style={{
          paddingTop: spacing ? theme.spacing(spacing) : theme.spacing(4),
          paddingBottom: spacing ? theme.spacing(spacing) : theme.spacing(4),
        }}
      >
        <Divider />
      </Box>
    </React.Fragment>
  );
};

export default DividerWithSpacing;
