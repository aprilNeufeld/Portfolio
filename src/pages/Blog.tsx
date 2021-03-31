import * as React from 'react';
import { useApplicationState } from '../store';
import {
	Typography,
	Box,
	makeStyles,
	Theme,
	createStyles,
	useTheme
} from '@material-ui/core';
import PageTitle from '../components/PageTitle';
import DividerWithSpacing from '../components/DividerWithSpacing';
import Linkify from 'react-linkify';

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {

		},
	});
});

const Blog: React.FC = () => {

	const blog = useApplicationState(state => state.blog);
	const classes = useStyles(useTheme());

	return (
		<React.Fragment>
			<PageTitle text='Blog' />
			{blog.loaded && blog.posts &&
				blog.posts.map((post: any, index: number) => (
					<Box key={index} >
						<Typography variant="h5" gutterBottom>
							{post.title}
						</Typography>
						<Typography variant="caption" >
							{post.author}
						</Typography>
						<DividerWithSpacing />
					</Box>
				))}
		</React.Fragment>
	)
};

export default Blog;