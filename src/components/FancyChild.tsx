import * as React from 'react';
import clsx from 'clsx';
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
		blockQuote: {
			marginBottom: theme.spacing(5)
		},
		dividerBox: {
			height: 'auto',
			paddingRight: theme.spacing(3),
		},
		divider: {
			backgroundColor: theme.palette.secondary.main,
		},
		contentBox: {
			paddingRight: theme.spacing(3),
		},
	});
});

type Variant = 'blockquote' | 'list'

interface Props {
	children: React.ReactNode;
	variant?: Variant;
}

const FancyChild: React.FC<Props> = (props) => {

	const { children, variant } = props;
	const classes = useStyles(useTheme());

	return (
		<React.Fragment>
			<Box className={clsx(classes.root, {
				[classes.blockQuote]: variant === 'blockquote'
			})}>
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