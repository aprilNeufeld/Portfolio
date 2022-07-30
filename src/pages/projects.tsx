import * as React from 'react';
import { List, Theme, useTheme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import Layout from '../components/Layout';
import { useApplicationState, useAppDispatch } from '../store';
import { fetchProjects, ProjectType } from '../store/projectsSlice';
import ProjectItem from '../components/ProjectItem';
import { fetchUserState } from '../lib/staticFetching';
import ListItemSkeleton from '../components/ListItemSkeleton';
import { GetStaticProps } from 'next/types';

const useStyles = makeStyles((theme: Theme) => ({
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
}));

const Projects: React.FC = () => {
  const projectsState = useApplicationState((state) => state.projects);
  const dispatch = useAppDispatch();
  const classes = useStyles(useTheme());

  React.useEffect(() => {
    if (!projectsState.loaded && !projectsState.pending) {
      dispatch(fetchProjects());
    }
  }, [projectsState, dispatch]);

  return (
    <React.Fragment>
      <Layout pageTitle="My Work" contentTitle="Projects & Samples">
        <List className={classes.list}>
          {projectsState.loaded ? (
            projectsState.projects.map((project: ProjectType, index: number) => (
              <ProjectItem key={index} project={project} />
            ))
          ) : (
            <ListItemSkeleton />
          )}
        </List>
      </Layout>
    </React.Fragment>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const userState = await fetchUserState();

  // Return part of our actual state object, which will be integrated
  // with our redux store when we navigate to this page
  return {
    props: {
      initialReduxState: {
        user: userState,
      },
    },
    revalidate: 60,
  };
};
export default Projects;
