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
		root: {
			display: 'flex',
			flexDirection: 'row',
			'& li': {
				paddingLeft: 0,
			}
		},
		dividerBox: {
			height: 'auto',
			paddingRight: theme.spacing(3),
		},
		divider: {
			backgroundColor: theme.palette.secondary.main,
		},
		contentBox: {
			maxWidth: theme.breakpoints.width('md'),
			paddingRight: theme.spacing(3),
		},
	});
});

interface Props {
	children: React.ReactNode;
}

const FancyChild: React.FC<Props> = (props) => {

	const { children } = props;
	const classes = useStyles(useTheme());

	return (
		<React.Fragment>
			<Box className={classes.root}>
				<Box className={classes.dividerBox}>
					<Divider orientation="vertical" className={classes.divider} />
				</Box>
				<Box className={classes.contentBox}>
					{children}
				</Box>
			</Box>
		</React.Fragment>
	)

};

export default FancyChild;