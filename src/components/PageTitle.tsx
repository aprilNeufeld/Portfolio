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
			marginBottom: theme.spacing(6)
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
			<Typography variant="h2"
				gutterBottom
				className={classes.title}
			>
				{text}
			</Typography>
		</React.Fragment>
	)

};

export default PageTitle;