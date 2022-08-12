import * as React from 'react';
import BlogPostCard from '../components/BlogPostCard';
import ListItemSkeleton from '../components/ListItemSkeleton';
import Layout from '../components/Layout';
import { fetchUserState } from '../lib/staticFetching';
import { useApplicationState, useAppDispatch } from '../store';
import { fetchBlogPosts } from '../store/blogSlice';
import { GetStaticProps } from 'next/types';
import PageTitle from '../components/PageTitle';
import { Box } from '@mui/material';
import { theme } from '../styles';

const Blog: React.FC = () => {
  const blog = useApplicationState((state) => state.blog);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (!blog.loaded && !blog.pending) {
      dispatch(fetchBlogPosts());
    }
  }, [blog, dispatch]);

  return (
    <React.Fragment>
      <Layout pageTitle="Blog">
        <PageTitle text="Blog" />
        <Box
          sx={{
            mt: {
              xs: theme.spacing(2),
              md: theme.spacing(4),
            },
          }}
        >
          {blog.loaded ? (
            blog.posts.map((post: any, index: number) => <BlogPostCard key={index} post={post} />)
          ) : (
            <ListItemSkeleton />
          )}
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

export default Blog;
