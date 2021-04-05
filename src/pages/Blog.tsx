import * as React from 'react';
import { useApplicationState } from '../store';
import PageTitle from '../components/PageTitle';
import BlogPost from '../components/BlogPost';
import Layout from '../components/Layout';

const Blog: React.FC = () => {

	const user = useApplicationState(state => state.user.user);
	const blog = useApplicationState(state => state.blog);
	
	return (
		<Layout user={user}>
			<PageTitle text='Blog' />
			{blog.posts &&
				blog.posts.map((post: any, index: number) => (
					<BlogPost key={index} post={post} />
				))}
			
		</Layout>
	)
};

export default Blog;