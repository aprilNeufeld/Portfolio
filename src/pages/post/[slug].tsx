import * as React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import Layout from '../../components/Layout';
import sanityClient from '../../sanityClient';
import BlockRenderer from '../../components/BlockRenderer';
import {
	FacebookShareButton,
	TwitterShareButton,
	RedditShareButton,
	LinkedinShareButton,
} from 'react-share';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import RedditIcon from '@material-ui/icons/Reddit';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {
	Box,
	Breadcrumbs,
	CardMedia,
	Divider,
	Typography,
	makeStyles,
	Theme,
	createStyles,
	useTheme
} from '@material-ui/core';
import PageTitle from '../../components/PageTitle';
import { fetchUserState } from '../../lib/staticFetching';

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		blockQuote: {
			marginBottom: '1rem',
		},
		breadcrumbs: {
			marginBottom: theme.spacing(4),
			'& a': {
				textDecoration: 'none',
			},
		},
		media: {
			height: 0,
			//paddingTop: '56.25%', // 16:9
			paddingTop: '62%',
			marginBottom: theme.spacing(4),
		},
		postBodyText: {
			position: 'relative',
			fontWeight: 300,
			lineHeight: 1.4,
			'& p': {
				marginBottom: theme.spacing(5)
			},
		},
		postDetails: {
			color: theme.palette.text.secondary,
		},
		shareButtonsContainer: {
			display: 'flex',
			flexDirection: 'row',
			paddingTop: theme.spacing(2),
		},
		shareButton: {
			marginLeft: theme.spacing(1),
		},
		shareIcon: {
			color: theme.palette.action.disabled
		},
	});
});

interface Props {
	post: any;
	shareUrl: string;
}

const Post: React.FC<Props> = (props) => {

	const { post, shareUrl } = props;
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
				<Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
					<Link href="/">
						Home
					</Link>
					<Link href="/blog">
						Blog
					</Link>
					<Typography color="textPrimary"></Typography>
				</Breadcrumbs>
				<PageTitle text={post.title} />
				<CardMedia
					image={post.mainImage.asset.url}
					className={classes.media}
				/>
				<Typography
					variant='body1'
					className={classes.postDetails}
				>
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
				<Divider />
				<Box className={classes.shareButtonsContainer}>
					<FacebookShareButton
						url={shareUrl}
						quote={post.title}
						className={classes.shareButton}
					>
						<FacebookIcon className={classes.shareIcon} />
					</FacebookShareButton>
					<TwitterShareButton
						url={shareUrl}
						title={post.title}
						className={classes.shareButton}
					>
						<TwitterIcon className={classes.shareIcon} />
					</TwitterShareButton>
					<RedditShareButton
						url={shareUrl}
						title={post.title}
						windowWidth={660}
						windowHeight={460}
						className={classes.shareButton}
					>
						<RedditIcon className={classes.shareIcon} />
					</RedditShareButton>
					<LinkedinShareButton
						url={shareUrl}
						title={post.title}
						className={classes.shareButton}
					>
						<LinkedInIcon className={classes.shareIcon} />
					</LinkedinShareButton>
				</Box>
			</Layout >
		</React.Fragment >
	)
};

/*
 * Called at build time, this function gets the paths of all our
 * individual blog posts.
 */
export const getStaticPaths: GetStaticPaths = async () => {
	// Call an external API endpoint to get post slugs
	const slugs = await sanityClient.fetch(
		`*[_type == "post" && defined(slug.current)][].slug.current`
	);

	// Get the paths we want to pre-render based on post slugs
	const paths = slugs.map((slug: any) => ({ params: { slug } }));

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
	const shareUrl = `https://www.tricksterCodess.com/post/${post.slug}`;

	const userState = await fetchUserState();

	return {
		props: {
			post,
			shareUrl,
			initialReduxState: {
				user: userState
			}
		}
	};
}

export default Post;