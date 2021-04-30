import * as React from 'react';
import { useRouter } from 'next/router'
import BlogPostCard from '../../components/BlogPostCard';
import Layout from '../../components/Layout';
import { useApplicationState, useAppDispatch } from '../../store';
import { fetchUserData } from '../../store/userSlice';
import { fetchBlogPosts } from '../../store/blogSlice';

const Post: React.FC = () => {

	const router = useRouter();
	const { slug } = router.query;
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
				<Layout pageTitle="slug">
					
				</Layout>
			}
		</React.Fragment>
	)
};

export default Post;