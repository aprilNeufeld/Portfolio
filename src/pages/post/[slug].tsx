import * as React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '../../components/Layout';
import sanityClient from '../../sanityClient';
import BlockRenderer from '../../components/BlockRenderer';
import {
	Typography,
	makeStyles,
	Theme,
	createStyles,
	useTheme
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		media: {
			height: 0,
			//paddingTop: '56.25%', // 16:9
			paddingTop: '62%'
		},
		blockQuote: {
			marginBottom: '1rem',
		},
		postBodyText: {
			position: 'relative',
			fontWeight: 300,
			lineHeight: 1.4,
			'& p': {
				marginBottom: theme.spacing(5)
			},
		},
		shareIcon: {
			color: theme.palette.action.disabled
		},
	});
});

interface Props {
	post: any;
}

const Post: React.FC<Props> = (props) => {

	const { post } = props;
	const classes = useStyles(useTheme());

	const formatDate = (datetime: string): string => {
		const date: Date = new Date(datetime);
		return date.toLocaleDateString('en-US', {
			year: 'numeric', month: 'long', day: 'numeric'
		});
	}

	return (
		<React.Fragment>
			<Layout pageTitle={post.title}>
				<Typography>
					{'by ' + post.author +
						(post.publishedAt ? ' on ' +
							formatDate(post.publishedAt) : '')}
				</Typography>
				<Typography
					variant='body1'
					className={classes.postBodyText}
					component='div'
				>
					<BlockRenderer
						content={post.body}
					/>
				</Typography>
			</Layout >
		</React.Fragment >
	)
};

/*
 * Called at build time, this function gets the paths of all our
 * individual blog posts.
 */
export const getStaticPaths: GetStaticPaths = async () => {
	// Call an external API endpoint to get posts
	const posts = await sanityClient.fetch(
		`*[_type == "post"]{
				slug
				}`
	);

	// Get the paths we want to pre-render based on posts
	const paths = posts.map((post: any) => {
		return {
			params: { slug: post.slug.current },
		}
	});

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: false }
}

/*
 * Using the paths returned by getStaticPaths, here we get the information
 * for a single post that will be displayed on this page.
 */
export const getStaticProps: GetStaticProps = async ({ params }) => {
	const post = await sanityClient.fetch(
		`*[_type == "post" && slug.current == "${params!.slug}"][0]{
				title,
				"slug": slug.current,
				"author": author->name,
				mainImage {
						asset->{
						_id,
						url
					}
				},
				publishedAt,	
				body
				}`
	);
	return { props: { post } };
}

export default Post;