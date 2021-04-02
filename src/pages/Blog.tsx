import * as React from 'react';
import { useApplicationState } from '../store';
import {
	makeStyles,
	Theme,
	createStyles,
	useTheme
} from '@material-ui/core';
import PageTitle from '../components/PageTitle';
import BlogPost from '../components/BlogPost';

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		media: {
			height: 0,
			//paddingTop: '56.25%', // 16:9
			paddingTop: '62%'
		},
		expand: {
			transform: 'rotate(0deg)',
			marginLeft: 'auto',
			transition: theme.transitions.create('transform', {
				duration: theme.transitions.duration.shortest,
			}),
		},
		expandOpen: {
			transform: 'rotate(180deg)',
		},
		blockQuote: {
			marginBottom: '1rem',
		},
		collapseContainer: {
			position: 'relative',
		},
		collapse: {
			position: 'absolute',
			top: 0,
			width: '100%',
			height: '100%',
			background: 'linear-gradient(0deg, rgba(255,255,255,1) 19%, rgba(255,255,255,0.7829181494661922) 35%, rgba(255,255,255,0.5747330960854092) 57%, rgba(255,255,255,0) 100%)',
			transition: theme.transitions.create('background')
		},
		collapseOpen: {
			background: 'none',
			transition: theme.transitions.create('background'),
		},
		cardContent: {
		},
		postBodyText: {
			fontWeight: 300,
			lineHeight: 1.4,
			'& p': {
				marginBottom: theme.spacing(5)
			},
		}
	});
});

const Blog: React.FC = () => {

	const blog = useApplicationState(state => state.blog);
	const classes = useStyles(useTheme());
	
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