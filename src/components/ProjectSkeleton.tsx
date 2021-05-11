import * as React from 'react';
import {
	Box,
	ListItem,
	Typography,
	makeStyles,
	Theme,
	createStyles,
	useTheme,
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import DividerWithSpacing from './DividerWithSpacing';

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		listItem: {
			paddingLeft: 0,
			display: 'block',
		},
		chip: {
			borderRadius: "16px",
		},
		chipsContainerLeft: {
			paddingTop: theme.spacing(1),
			display: 'flex',
			justifyContent: 'left',
			flexWrap: 'wrap',
			'& > *': {
				margin: theme.spacing(0.5),
			},
		},
		itemName: {
			marginBottom: theme.spacing(2),
		},
	});
});

type ChipType = {
	width: string;
}

const getChips = (): ChipType[] => {
	let chips: ChipType[] = [];
	const numChips = Math.floor(Math.random() * 4) + 2;

	for (var i = 0; i < numChips; i++) {
		chips.push({ width: (Math.floor(Math.random() * 4) + 3) + "rem" });
	}

	return chips;
}

/**
 * A skeleton component that roughly matches the appearance of a single
 * Project component. Used as a placeholder while our projects are loading.
 */
const ProjectSkeleton: React.FC = () => {

	const classes = useStyles(useTheme());
	const [chips, setChips] = React.useState<ChipType[]>();

	React.useEffect(() => {
		setChips(getChips());
	}, [])

	return (
		<ListItem
			className={classes.listItem}
		>
			<Typography variant="h6" component="div" gutterBottom>
				<Skeleton />
			</Typography>
			<Skeleton height={100} variant="rect" />
			<Box className={classes.chipsContainerLeft}>
				{chips && chips.map((chip, index: number) => (
					<Skeleton
						key={index}
						className={classes.chip}
						width={chip.width}
						height={"32px"}
						variant="rect"
					/>
				))}
			</Box>
			<DividerWithSpacing spacing={2} />
		</ListItem>
	)
};

export default ProjectSkeleton;