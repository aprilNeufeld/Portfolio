import * as React from 'react';
import BlogPostCard from '../components/BlogPostCard';
import Layout from '../components/Layout';
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
			<Layout pageTitle='Blog'>
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

export default Blog;