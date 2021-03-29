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
					<Typography variant="h5" gutterBottom>
						repos/
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
									color="secondary"
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
					<Typography variant="h5" gutterBottom>
						gists/
						<Link href={gist.html_url}>
							{(Object.keys(gist.files))[0]}
						</Link>
					</Typography>
					<Typography variant="body1" >
						{gist.description}
					</Typography>
					<DividerWithSpacing />
				</Box>
			))}

		</React.Fragment>
	)
};

export default Projects;