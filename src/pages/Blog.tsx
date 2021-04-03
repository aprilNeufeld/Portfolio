import * as React from 'react';
import { useApplicationState } from '../store';
import PageTitle from '../components/PageTitle';
import BlogPost from '../components/BlogPost';

const Blog: React.FC = () => {

	const blog = useApplicationState(state => state.blog);
	
	return (
		<React.Fragment>
			<PageTitle text='Blog' />
			{blog.posts &&
				blog.posts.map((post: any, index: number) => (
					<BlogPost key={index} post={post} />
				))}
			
		</React.Fragment>
	)
};

export default Blog;