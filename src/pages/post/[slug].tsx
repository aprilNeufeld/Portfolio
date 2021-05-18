import * as React from 'react';
import ErrorPage from 'next/error';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router'
import Link from 'next/link';
import Layout from '../../components/Layout';
import { getClient } from '../../lib/sanity';
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
import { usePreviewSubscription } from '../../lib/sanity';
import { SanityClient } from '@sanity/client';
import { groq } from 'next-sanity';

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

export const postQuery = groq`*[_type == "post" && slug.current == $slug] | order(_updatedAt desc)[0]{
				_id,
				title,
				"slug": slug.current,
				"author": author->name,
				mainImage,
				publishedAt,	
				body
				}`;

// The structure of a single post's data
type PostType = {
	title: string,
	slug: string,
	author: string,
	mainImage: {
		asset: {
			id: string,
			url: string,
		}
	},
	publishedAt: string,
	body: any
}

type PageDataType = {
	post: PostType,
	shareUrl: string
}

const defaultData: PageDataType = {
	post: {
		title: "Title",
		slug: '',
		author: "Author",
		mainImage: {
			asset: {
				id: "Image ID",
				url: '/images/placeholder.png',
			}
		},
		publishedAt: "2021-05-17",
		body: []
	},
	shareUrl: ''
}

interface Props {
	pageData: PageDataType;
	preview: boolean;
}
/*
 * LINKS:
 * https://github.com/sanity-io/sanity-template-nextjs-blog-comments
 * https://github.com/sanity-io/sanity-template-nextjs-ecommerce
 * https://github.com/sanity-io/next-sanity
 * https://dev.to/mornir/how-to-handle-content-previews-from-sanity-in-nuxt-3127
 * https://www.sanity.io/docs/preview-content-on-site
 * https://www.sanity.io/docs/http-mutations
 * https://stackoverflow.com/questions/63221030/access-preview-api-from-a-cms-in-next-js
 * 
 */
const Post: React.FC<Props> = (props) => {

	const { pageData = defaultData, preview } = props;
	const post = React.useRef(pageData.post);

	// This is used for live preview with Sanity - the first time we load a 
	// nonexistent post, router.isFallback will be true, and we show the page with
	// placeholder data until we can get data from the usePreviewSubscription hook. 
	// After usePreviewSubscription rerenders the page, if there is still no page data
	// (i.e. there is no preview post to render), we default to a 404.
	const router = useRouter()
	if ((!router.isFallback || !preview) && (!pageData?.post?.slug)) {
		console.log("ERRORPAGE:_____________ ");
		console.log("pageData=" + JSON.stringify(pageData, null, 1));
		return <ErrorPage statusCode={404} />
	}

	const getOptions = () => {
		return {
			params: { slug: pageData.post.slug },
			initialData: pageData, // we preserve the initial page data if it's a prerendered page
			enabled: preview,
		}
	};

	// Load the live preview data, defaulting to placeholder data if there is none 
	const {
		data: { post: postData, shareUrl } = pageData
	} = usePreviewSubscription(postQuery, getOptions())

	
	React.useEffect(() => {
		console.log("Updated post " + (postData ? "has data." : "is UNDEFINED."));

		post.current = postData;

	}, [postData]);

	React.useEffect(() => {
		console.log("RENDERING");
	})

	const classes = useStyles(useTheme());

	const formatDate = (datetime: string): string => {
		const date: Date = new Date(datetime);
		return date.toLocaleDateString('en-US', {
			year: 'numeric', month: 'long', day: 'numeric'
		});
	}

	return (
		<React.Fragment>
			<Layout pageTitle={post.current?.title ?? ''}>
				{post.current &&
					<React.Fragment>
						<Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
							<Link href="/">
								Home
					</Link>
							<Link href="/blog">
								Blog
					</Link>
							<Typography color="textPrimary"></Typography>
						</Breadcrumbs>
					<PageTitle text={post.current.title} />
						<CardMedia
						image={post.current.mainImage.asset.url ?? '/images/placeholder.png'}
							className={classes.media}
						/>
						<Typography
							variant='body1'
							className={classes.postDetails}
						>
						{'by ' + post.current.author +
							(post.current.publishedAt ? ' on ' +
							formatDate(post.current.publishedAt) : '')}
						</Typography>
						<Typography
							variant='body1'
							className={classes.postBodyText}
							component='div'
						>
							<BlockRenderer
							content={post.current.body}
							/>
						</Typography>
						<Divider />
						<Box className={classes.shareButtonsContainer}>
							<FacebookShareButton
								url={shareUrl ?? ''}
							quote={post.current.title}
								className={classes.shareButton}
							>
								<FacebookIcon className={classes.shareIcon} />
							</FacebookShareButton>
							<TwitterShareButton
								url={shareUrl ?? ''}
							title={post.current.title}
								className={classes.shareButton}
							>
								<TwitterIcon className={classes.shareIcon} />
							</TwitterShareButton>
							<RedditShareButton
								url={shareUrl ?? ''}
							title={post.current.title}
								windowWidth={660}
								windowHeight={460}
								className={classes.shareButton}
							>
								<RedditIcon className={classes.shareIcon} />
							</RedditShareButton>
							<LinkedinShareButton
								url={shareUrl ?? ''}
							title={post.current.title}
								className={classes.shareButton}
							>
								<LinkedInIcon className={classes.shareIcon} />
							</LinkedinShareButton>
						</Box>
					</React.Fragment>
				}
			</Layout >
		</React.Fragment >
	)
};

/*
 * Using the paths returned by getStaticPaths, here we get the information
 * for a single post that will be displayed on this page.
 */
export const getStaticProps: GetStaticProps = async ({ params = {}, preview = false }) => {
	const sanityClient: SanityClient = getClient(preview);

	const { slug } = params;
	const post = await sanityClient.fetch(postQuery, { slug });
	const shareUrl = `https://www.tricksterCodess.com/post/${slug}`;

	const userState = await fetchUserState();

	return {
		props: {
			pageData: {
				post,
				shareUrl,
			},
			preview,
			initialReduxState: {
				user: userState
			}
		},
		revalidate: 1,
	};
}

/*
 * Called at build time, this function gets the paths of all our
 * individual blog posts.
 */
export const getStaticPaths: GetStaticPaths = async () => {
	console.log("In getStaticPaths");
	const sanityClient: SanityClient = getClient(false);

	// Call an external API endpoint to get post slugs
	const slugs = await sanityClient.fetch(
		groq`*[_type == "post" && defined(slug.current)][].slug.current`
	);

	// Get the paths we want to pre-render based on post slugs
	const paths = slugs.map((slug: any) => ({ params: { slug } }));

	return { paths, fallback: true, }
}

export default Post;