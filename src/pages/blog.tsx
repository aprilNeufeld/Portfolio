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
	const stateRouter = useApplicationState(state => state.router);
	const [hash, setHash] = React.useState(stateRouter.location.hash);
	const url = React.useRef("https://www.trickstercodess.com/blog");

	React.useEffect(() => {
		if (!user.loaded) {
			dispatch(fetchUserData());
		}
		if (!blog.loaded) {
			dispatch(fetchBlogPosts());
		}
		else {
			if (hash !== stateRouter.location.hash) {
				setHash(stateRouter.location.hash);
			}
		}
	}, [user, blog, dispatch, stateRouter.location.hash]);

	return (
		<React.Fragment>
			{user.loaded && blog.loaded &&
				<Layout>
					<PageTitle text='Blog' />
					{blog.posts &&
						blog.posts.map((post: any, index: number) => (
							<BlogPost
								key={index}
								post={post}
								url={url.current}
								hash={hash}
							/>
						))}
				</Layout>
			}
		</React.Fragment>
	)
};

export default Blog;