import * as React from 'react';
import {
	Typography,
	makeStyles,
	Theme,
	createStyles,
	useTheme
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		title: {
			marginBottom: theme.spacing(4),
			color: theme.palette.primary.main,
			lineHeight: 1.5,
		},
	});
});

interface Props {
	text: string;
}

const PageTitle: React.FC<Props> = (props) => {

	const { text } = props;
	const classes = useStyles(useTheme());

	return (
		<React.Fragment>
			<Typography
				variant="overline"
				gutterBottom
				className={classes.title}
				component='div'
			>
				{text}
			</Typography>
		</React.Fragment>
	)
	
};

export default PageTitle;