import * as React from 'react';
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
import FancyChild from '../components/FancyChild';
import Layout from '../components/Layout';
import { useApplicationState, useAppDispatch } from '../store';
import { fetchUserData } from '../store/userSlice';
import { fetchGists } from '../store/gistsSlice';

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
			display: 'inline',
			marginBottom: theme.spacing(2),
		},
	});
});

const getLanguage = (lang: string): string => {
	return (lang === "TSX" ? "TypeScript" : lang)
}

const Projects: React.FC = () => {

	const user = useApplicationState(state => state.user);
	const gists = useApplicationState(state => state.gists);
	const dispatch = useAppDispatch();
	const classes = useStyles(useTheme());

	React.useEffect(() => {
		if (!user.loaded) {
			dispatch(fetchUserData());
		}
		if (!gists.loaded) {
			dispatch(fetchGists());
		}
	}, [user, gists, dispatch]);

	return (
		<React.Fragment>
			{user.loaded && gists.loaded &&
				<Layout>
					<PageTitle text='Projects' />
					{user.user.projects.map((project: any, index: number) => (
						<Box key={index} >
							<Typography variant="caption" display={'inline'}>
								repos/
					</Typography>
							<Typography variant="h5" className={classes.itemName} gutterBottom>
								<Link href={project.githubUrl}>
									{project.name}
								</Link>
							</Typography>
							<FancyChild>
								<Typography variant="body1" >
									{project.summary}
								</Typography>
							</FancyChild>
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
					{gists.gists.map((gist: any, index: number) => (
						<Box key={index} >
							<Typography variant="caption" display={'inline'}>
								gists/
					</Typography>
							<Typography variant="h5" className={classes.itemName}>
								<Link href={gist.html_url}>
									{(Object.keys(gist.files))[0]}
								</Link>
							</Typography>
							<FancyChild>
								<Typography variant="body1" >
									<Linkify>
										{gist.description}
									</Linkify>
								</Typography>
							</FancyChild>
							<Box className={classes.chipsContainerLeft} >
								<Chip
									className={classes.chip}
									label={getLanguage(
										gist.files[Object.keys(gist.files)[0]].language
									)}
									variant="outlined"
								/>
							</Box>
							<DividerWithSpacing />
						</Box>
					))}

				</Layout>
			}
		</React.Fragment>
	)
};

export default Projects;