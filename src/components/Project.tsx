import * as React from 'react';
import Link from 'next/link';
import {
	Box,
	Chip,
	Divider,
	GridListTile,
	Typography,
	makeStyles,
	Theme,
	createStyles,
	useTheme,
	CardContent,
	Card,
} from '@material-ui/core';
import { ProjectType } from '../shared/types';
import Linkify from 'react-linkify';
import FancyChild from '../components/FancyChild';

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			height: '100%',
			flexGrow: 1,
			flexShrink: 1,
		},
		card: {
			display: 'flex',
			flexDirection: 'column',
		},
		chipsContainerLeft: {
			paddingTop: theme.spacing(2),
			display: 'flex',
			justifyContent: 'left',
			flexWrap: 'wrap',
			'& > *': {
				margin: theme.spacing(0.5),
			},
		},
		chip: {
			color: '#1ab9c5',
			borderColor: '#19b9c3',
		},
		description: {
		},
		itemName: {
			display: 'inline-block',
			marginBottom: theme.spacing(2),
		},
	});
});

interface Props {
	project: ProjectType;
}

const Project: React.FC<Props> = (props) => {

	const { project } = props;
	const classes = useStyles(useTheme());

	return (
		<GridListTile
			className={classes.root}
			cols={1}
		>
			<Card
				className={classes.card}
				elevation={0}
			>
				<CardContent>
					<Typography variant="caption" display={'inline'}>
						{project.type}s/
					</Typography> <Typography variant="h6" className={classes.itemName} gutterBottom>
						<Link href={project.url}>
							{project.name}
						</Link>
					</Typography>
					<FancyChild>
						<Linkify>
							<Typography variant="body1" className={classes.description}>
								{project.description}
							</Typography>
						</Linkify>
					</FancyChild>
					<Box className={classes.chipsContainerLeft}>
						{project.languages.map((language: string, index: number) => (
							<Chip
								key={index}
								className={classes.chip}
								label={language}
								variant="outlined"
							/>
						))}
					</Box>
				</CardContent>
				<Divider/>
			</Card>
		</GridListTile>
	)
};

export default Project;