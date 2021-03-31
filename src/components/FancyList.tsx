import * as React from 'react';
import {
	Box,
	ListItem,
	List,
	Divider,
	Typography,
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
		},
		dividerBox: {
			height: 'auto',
		},
		divider: {
			backgroundColor: theme.palette.secondary.main,
		},
		listItem: {
			alignItems: 'stretch',
		},
		bullet: {
			display: 'inline',
			whiteSpace: 'nowrap',
			marginRight: theme.spacing(1),
		},
	});
});

interface Props {
	bullet?: string;
	items: any[];
}

const FancyList: React.FC<Props> = (props) => {

	const { bullet, items } = props;
	const classes = useStyles(useTheme());

	return (
		<React.Fragment>
			<Box className={classes.root}>
				<Box className={classes.dividerBox}>
					<Divider orientation="vertical" className={classes.divider} />
				</Box>
				<List>
					{items.map((item: any, index: number) => (
						<ListItem key={index} className={classes.listItem}>
							<Typography
								variant="caption"
								className={classes.bullet}
							>
								{bullet || ''}
							</Typography>
							<Typography variant="body2" display={'inline'}>
								{item}
							</Typography>
						</ListItem>
					))}
				</List>
			</Box>
		</React.Fragment>
	)

};

export default FancyList;