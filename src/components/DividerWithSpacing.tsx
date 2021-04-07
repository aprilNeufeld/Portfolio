import * as React from 'react';
import {
	Box,
	Divider,
	makeStyles,
	Theme,
	createStyles,
	useTheme
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		dividerSpacingBox: {
			paddingTop: theme.spacing(4),
			paddingBottom: theme.spacing(4),
		},
	});
});

const DividerWithSpacing: React.FC = () => {

	const classes = useStyles(useTheme());

	return (
		<React.Fragment>
			<Box className={classes.dividerSpacingBox}>
				<Divider />
			</Box>
		</React.Fragment>
	)

};

export default DividerWithSpacing;