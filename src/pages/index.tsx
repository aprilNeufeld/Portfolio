import * as React from 'react';
import { Typography, Box, Theme, useTheme, List, ListItem } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import Layout from '../components/Layout';
import { useApplicationState } from '../store';
import FancyChild from '../components/FancyChild';
import { fetchUserState } from '../lib/staticFetching';
import { GetStaticProps } from 'next/types';
import StyledLink from '../components/StyledLink';
import PageTitle from '../components/PageTitle';

const useStyles = makeStyles((theme: Theme) => ({
  interests: {
    fontSize: theme.typography.h6.fontSize,
  },
  summary: {
    whiteSpace: 'pre-wrap',
  },
  plug: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
}));

const Home: React.FC = () => {
  const user = useApplicationState((state) => state.user);
  const classes = useStyles(useTheme());

  return (
    <React.Fragment>
      <Layout pageTitle="Home" showBioContent>
        <Box>
          <PageTitle text="Hi, I'm April." />
          <Typography variant="h6" className={classes.summary} gutterBottom>
            {user.basics.summary}
          </Typography>
          <Typography variant="h6" className={classes.plug}>
            Check out <StyledLink url="/projects">my repos and gists</StyledLink> for examples of my work!
          </Typography>
          <Typography variant="h6" gutterBottom>
            Things I love:
          </Typography>
          <FancyChild>
            <List>
              {user.interests.map((item: any, index: number) => (
                <ListItem key={index}>
                  <Typography variant="body1" className={classes.interests}>
                    {item.name}{' '}
                    {item.keywords.map((keyword: any, i: number) => (
                      <span key={keyword}>
                        {i % 2 === 0 && (
                          <span role="img" aria-label={item.keywords[i + 1]}>
                            {keyword}
                          </span>
                        )}
                      </span>
                    ))}
                  </Typography>
                  <p> </p>
                </ListItem>
              ))}
            </List>
          </FancyChild>
        </Box>
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

export default Home;
