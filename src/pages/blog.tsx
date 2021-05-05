import { GetStaticProps } from 'next';
import * as React from 'react';
import BlogPostCard from '../components/BlogPostCard';
import Layout from '../components/Layout';
import { fetchUserState } from '../lib/staticFetching';
import { useApplicationState, useAppDispatch } from '../store';
import { fetchBlogPosts } from '../store/blogSlice';

const Blog: React.FC = () => {

	const blog = useApplicationState(state => state.blog);
	const dispatch = useAppDispatch();

	React.useEffect(() => {
		if (!blog.loaded && !blog.pending) {
			dispatch(fetchBlogPosts());
		}
	}, [blog, dispatch]);

	return (
		<React.Fragment>
			<Layout pageTitle='Blog' contentTitle='Blog'>
				{blog.loaded && blog.posts &&
					blog.posts.map((post: any, index: number) => (
						<BlogPostCard
							key={index}
							post={post}
						/>
					))}
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

export default Blog;