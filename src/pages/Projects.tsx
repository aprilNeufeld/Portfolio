﻿import * as React from 'react';
import { useApplicationState } from '../store';
import {
	Typography,
	Box,
	Chip,
	Link,
	makeStyles,
	Theme,
	createStyles,
	useTheme
} from '@material-ui/core';
import PageTitle from '../components/PageTitle';
import DividerWithSpacing from '../components/DividerWithSpacing';
import Linkify from 'react-linkify';

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
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
		itemName: {
			display: 'inline-block',
		},
	});
});

const Projects: React.FC = () => {

	const user = useApplicationState(state => state.user.user);
	const gists = useApplicationState(state => state.gists.gists);
	const classes = useStyles(useTheme());

	return (
		<React.Fragment>
			<PageTitle text='Projects' />
			{user.projects.map((project: any, index: number) => (
				<Box key={index} >
					<Typography variant="caption" display={'inline'}>
						repos/
					</Typography>
					<Typography variant="h5" className={classes.itemName} gutterBottom>
						<Link href={project.githubUrl}>
							{project.name}
						</Link>
					</Typography>
					<Typography variant="body1" >
						{project.summary}
					</Typography>
					<Box className={classes.chipsContainerLeft} >
						{[...project.languages, ...project.libraries].map(
							(item: any, index: number) => (
								<Chip
									key={index}
									className={classes.chip}
									label={item}
									variant="outlined"
								/>
							))}
					</Box>
					<DividerWithSpacing />
				</Box>
			))}
			{gists.map((gist: any, index: number) => (
				<Box key={index} >
					<Typography variant="caption" display={'inline'}>
						gists/
					</Typography>
					<Typography variant="h5" className={classes.itemName} gutterBottom>
						<Link href={gist.html_url}>
							{(Object.keys(gist.files))[0]}
						</Link>
					</Typography>
					<Typography variant="body1" >
						<Linkify>
							{gist.description}
						</Linkify>
					</Typography>
					<Box className={classes.chipsContainerLeft} >
						<Chip
							className={classes.chip}
							label={JSON.stringify((Object.entries(gist.files))[0], null, 2)}
							variant="outlined"
						/>
					</Box>
					<DividerWithSpacing />
				</Box>
			))}

		</React.Fragment>
	)
};

export default Projects;