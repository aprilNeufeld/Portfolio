import * as React from 'react';
import {
	GridList,
	makeStyles,
	Theme,
	createStyles,
	useTheme
} from '@material-ui/core';
import PageTitle from '../components/PageTitle';
import Layout from '../components/Layout';
import { useApplicationState, useAppDispatch } from '../store';
import { fetchUserData } from '../store/userSlice';
import { fetchGists } from '../store/gistsSlice';
import { ProjectType } from '../shared/types';
import { useReducer } from 'react';
import Project from '../components/Project';

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		gridList: {
			width: '100%',
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'space-around',
			overflow: 'hidden',
			backgroundColor: theme.palette.background.paper,
		},
	});
});

const getLanguage = (lang: string): string => {
	return (lang === "TSX" ? "TypeScript" : lang)
}

const mapProjects = (projects: any[]): ProjectType[] => {
	let array: ProjectType[] = projects.map(
		(project: any) => {
			let p: ProjectType;
			if ('githubUrl' in project) {
				p = {
					description: project.summary,
					languages: [...project.languages, ...project.libraries],
					name: project.name,
					type: 'repo',
					url: project.githubUrl
				}
			}
			else {
				p = {
					description: project.description,
					languages: [
						getLanguage(
							project.files[Object.keys(project.files)[0]].language
						)
					],
					name: (Object.keys(project.files))[0],
					type: 'gist',
					url: project.html_url
				}
			}
			return p;
		});

	return array;
}

interface MapReposAction {
	type: 'map-repos';
	payload: any[];
}

interface MapGistsAction {
	type: 'map-gists';
	payload: any[];
}

type MapAction = MapReposAction | MapGistsAction;

type PageState = {
	projects: ProjectType[],
	reposLoaded: boolean,
	gistsLoaded: boolean
}

const initialState: PageState = {
	projects: [],
	reposLoaded: false,
	gistsLoaded: false
}

const reducer = (state: PageState, action: MapAction) => {
	switch (action.type) {
		case 'map-repos':
			if (state.reposLoaded) {
				return state;
			}
			return {
				...state,
				projects: [
					...action.payload,
					...state.projects,
				],
				reposLoaded: true,
			}
		case 'map-gists':
			if (state.gistsLoaded) {
				return state;
			}
			return {
				...state,
				projects: [
					...state.projects,
					...action.payload,
				],
				gistsLoaded: true,
			}
		default:
			return initialState;
	}
}

const Projects: React.FC = () => {

	const user = useApplicationState(state => state.user);
	const gists = useApplicationState(state => state.gists);
	const [pageState, dispatchPageState] = useReducer(reducer, initialState);
	const dispatch = useAppDispatch();
	const classes = useStyles(useTheme());

	React.useEffect(() => {
		if (!user.loaded) {
			dispatch(fetchUserData());
		}
		else {
			dispatchPageState({ type: 'map-repos', payload: mapProjects(user.user.projects) });
		}
		if (!gists.loaded) {
			dispatch(fetchGists());
		}
		else {
			dispatchPageState({ type: 'map-gists', payload: mapProjects((gists.gists)) });
		}
	}, [user, gists, dispatch]);

	return (
		<React.Fragment>
			{user.loaded && gists.loaded &&
				<Layout pageTitle='My Work' contentTitle='Projects & Samples'>
					<GridList
						className={classes.gridList}
						cols={3}
					spacing={4}
					cellHeight='auto'
					>
						{pageState.projects.map((project: ProjectType, index: number) => (
							<Project key={index} project={project} />
						))}
					</GridList>
				</Layout>
			}
		</React.Fragment>
	)
};

export default Projects;