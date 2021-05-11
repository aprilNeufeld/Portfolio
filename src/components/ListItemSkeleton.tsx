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

type SkeletonType = {
	chips: ChipType[];
}

type ChipType = {
	width: string;
}

/**
 * Returns an array of n..x items that each contain a width property (default
 * of 2 to 6 items). The width ranges from p..y rem (default 3-7).
 */
const getChips = (
	minChips: number,
	maxChips: number,
	minWidth: number,
	maxWidth: number
): ChipType[] => {
	let chips: ChipType[] = [];
	const numChips = Math.floor(Math.random() * (maxChips - minChips)) + minChips;

	for (var i = 0; i < numChips; i++) {
		chips.push({
			width: (
				Math.floor(Math.random() * (maxWidth - minWidth)) + minWidth) + "rem"
		});
	}

	return chips;
}

interface Props {
	numCards?: number,
	minChips?: number,
	maxChips?: number,
	minWidth?: number,
	maxWidth?: number
}

/**
 * A skeleton component that looks roughly like a card, with a title, 
 * a picture or block of text, and a variable number of chips of variable 
 * width at the bottom.
 * 
 * The user can define how many 'cards' should be loaded (default 3).
 */
const ListItemSkeleton: React.FC<Props> = (props) => {

	const {
		numCards = 3,
		minChips = 2,
		maxChips = 6,
		minWidth = 3,
		maxWidth = 7
	} = props;
	const classes = useStyles(useTheme());
	const [cards, setCards] = React.useState<SkeletonType[]>();

	React.useEffect(() => {
		// Generate our array of n cards
		const cardArray: SkeletonType[] = [];
		for (var i = 0; i < numCards; i++) {
			cardArray.push({
				chips: getChips(minChips, maxChips, minWidth, maxWidth)
			})
		}
		setCards(cardArray);
	}, [])

	return (
		<React.Fragment>
			{cards && cards.map((card, index: number) => (
				<ListItem
					key={index}
					className={classes.listItem}
				>
					<Typography variant="h6" component="div" gutterBottom>
						<Skeleton />
					</Typography>
					<Skeleton height={100} variant="rect" />
					<Box className={classes.chipsContainerLeft}>
						{card.chips && card.chips.map((chip, i: number) => (
							<Skeleton
								key={i}
								className={classes.chip}
								width={chip.width}
								height={"32px"}
								variant="rect"
							/>
						))}
					</Box>
					<DividerWithSpacing spacing={2} />
				</ListItem>
			))}
		</React.Fragment>
	)
};

export default ListItemSkeleton;