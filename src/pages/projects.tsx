import * as React from 'react';
import {
	List,
	makeStyles,
	Theme,
	createStyles,
	useTheme,
} from '@material-ui/core';
import Layout from '../components/Layout';
import { useApplicationState, useAppDispatch } from '../store';
import { fetchProjects, ProjectType } from '../store/projectsSlice';
import Project from '../components/Project';
import { GetStaticProps } from 'next';
import { fetchUserState } from '../lib/staticFetching';
import ProjectSkeleton from '../components/ProjectSkeleton';

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		list: {
			padding: 0,
		},
		projectSkeleton: {
			display: 'flex',
			flexDirection: 'column',
			height: '100%',
			width: '100%',
			flexGrow: 1,
			flexShrink: 1,
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
	});
});


const Projects: React.FC = () => {

	const projectsState = useApplicationState(state => state.projects);
	const dispatch = useAppDispatch();
	const classes = useStyles(useTheme());
	const placeholders: number[] = [1, 2, 3];

	React.useEffect(() => {
		if (!projectsState.loaded && !projectsState.pending) {
			dispatch(fetchProjects());
		}
	}, [projectsState, dispatch]);

	return (
		<React.Fragment>
			<Layout pageTitle='My Work' contentTitle='Projects & Samples'>
				<List
					className={classes.list}
				>
					{projectsState.loaded ? (
						projectsState.projects.map((project: ProjectType, index: number) => (
							<Project key={index} project={project} />
						))
					) : (
							placeholders.map((index: number) => (
								<ProjectSkeleton key={index} />
							))
						)
					}
				</List>
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