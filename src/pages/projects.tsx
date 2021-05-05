import * as React from 'react';
import {
	GridList,
	makeStyles,
	Theme,
	createStyles,
	useTheme
} from '@material-ui/core';
import Layout from '../components/Layout';
import { useApplicationState, useAppDispatch } from '../store';
import { fetchGists } from '../store/gistsSlice';
import { ProjectType } from '../shared/types';
import { useReducer } from 'react';
import Project from '../components/Project';
import { GetStaticProps } from 'next';
import { fetchUserState } from '../lib/staticFetching';

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

const mapGists = (projects: any[]): ProjectType[] => {
	let array: ProjectType[] = projects.map(
		(project: any) => {
			return {
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

/**
 * Reducer that maps both our repos and gists into a single array
 * of projects. Necessary since repos and gists are fetched from different
 * data sources and we don't want to repeat our layout.
 */
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
		if (user) {
			dispatchPageState({ type: 'map-repos', payload: user.projects });
		}
		if (gists.loaded) {
			dispatchPageState({ type: 'map-gists', payload: mapGists((gists.gists)) });
		}
		else if (!gists.pending) {
			dispatch(fetchGists());
		}
	}, [user, gists, dispatch]);

	return (
		<React.Fragment>

			<Layout pageTitle='My Work' contentTitle='Projects & Samples'>
				{gists.loaded &&
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
				}
			</Layout>
		</React.Fragment>
	)
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const userState = await fetchUserState();

	// Return part of our actual state object, which will be integrated
	// with our redux store when we navigate to this page
	return {
		props: {
			initialReduxState: {
				user: userState
			}
		}
	};
}
export default Projects;