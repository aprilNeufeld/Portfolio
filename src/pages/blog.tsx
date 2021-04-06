import * as React from 'react';
import PageTitle from '../components/PageTitle';
import BlogPost from '../components/BlogPost';
import Layout from '../components/Layout';
import { useApplicationState, useAppDispatch } from '../store';
import { fetchUserData } from '../store/userSlice';
import { fetchBlogPosts } from '../store/blogSlice';

const Blog: React.FC = () => {

	const user = useApplicationState(state => state.user);
	const blog = useApplicationState(state => state.blog);
	const dispatch = useAppDispatch();

	React.useEffect(() => {
		if (!user.loaded) {
			dispatch(fetchUserData());
		}
		if (!blog.loaded) {
			dispatch(fetchBlogPosts());
		}
	}, [user, blog, dispatch]);

	return (
		<React.Fragment>
			{user.loaded && blog.loaded &&
				<Layout>
					<PageTitle text='Blog' />
					{blog.posts &&
						blog.posts.map((post: any, index: number) => (
							<BlogPost key={index} post={post} />
						))}

				</Layout>
			}
		</React.Fragment>
	)
};

export default Blog;