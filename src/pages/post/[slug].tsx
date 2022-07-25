import * as React from 'react';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { getClient } from '../../lib/sanity';
import BlockRenderer from '../../components/BlockRenderer';
import { FacebookShareButton, TwitterShareButton, RedditShareButton, LinkedinShareButton } from 'react-share';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Breadcrumbs, CardMedia, Divider, Typography, Theme, useTheme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import PageTitle from '../../components/PageTitle';
import { fetchUserState } from '../../lib/staticFetching';
import { usePreviewSubscription, urlFor } from '../../lib/sanity';
import { SanityClient } from '@sanity/client';
import { groq } from 'next-sanity';
import { GetStaticPaths, GetStaticProps } from 'next/types';

const useStyles = makeStyles((theme: Theme) => ({
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
      marginBottom: theme.spacing(5),
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
    color: theme.palette.action.disabled,
  },
}));

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
  title: string;
  slug: string;
  author: string;
  mainImage: any;
  publishedAt: string;
  body: any;
};

const defaults: PostType = {
  title: 'Title',
  slug: 'slug',
  author: 'Author',
  mainImage: '/images/placeholder.png',
  publishedAt: '2000-01-01',
  body: [],
};

interface Props {
  pageData: { post: PostType };
  shareUrl: string;
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
 * https://github.com/sanity-io/next-sanity/issues/16
 *
 */
const Post: React.FC<Props> = ({ pageData, shareUrl, preview }) => {
  // Get our styles
  const classes = useStyles(useTheme());

  // Load the live preview data
  const { data: post = defaults } = usePreviewSubscription(postQuery, {
    params: { slug: pageData?.post?.slug },
    initialData: pageData?.post, // we preserve the initial page data if it's a prerendered page
    enabled: preview,
  });

  // This is used for live preview with Sanity - the first time we load a
  // nonexistent post, router.isFallback will be true, and we show the page with
  // placeholder data until we can get data from the usePreviewSubscription hook.
  // After usePreviewSubscription rerenders the page, if there is still no page data
  // (i.e. there is no preview post to render), we default to a 404.
  const router = useRouter();

  if ((!router.isFallback || !preview) && !pageData?.post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  // Set defaults to avoid errors
  const {
    author = defaults.author,
    body = defaults.body,
    mainImage = defaults.mainImage,
    publishedAt = defaults.publishedAt,
    title = defaults.title,
  } = post;

  // Function that formats our post's date
  const formatDate = (datetime: string): string => {
    const date: Date = new Date(datetime);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <React.Fragment>
      <Layout pageTitle={title} preview={preview}>
        <React.Fragment>
          <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Typography color="textPrimary"></Typography>
          </Breadcrumbs>
          <PageTitle text={title} />
          <CardMedia image={urlFor(mainImage).url() ?? mainImage} className={classes.media} />
          <Typography variant="body1" className={classes.postDetails}>
            {'by ' + author + ' on ' + formatDate(publishedAt)}
          </Typography>
          <Typography variant="body1" className={classes.postBodyText} component="div">
            <BlockRenderer content={body} />
          </Typography>
          <Divider />
          <Box className={classes.shareButtonsContainer}>
            <FacebookShareButton url={shareUrl} quote={title} className={classes.shareButton}>
              <FacebookIcon className={classes.shareIcon} />
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl} title={title} className={classes.shareButton}>
              <TwitterIcon className={classes.shareIcon} />
            </TwitterShareButton>
            <RedditShareButton
              url={shareUrl}
              title={title}
              windowWidth={660}
              windowHeight={460}
              className={classes.shareButton}
            >
              <RedditIcon className={classes.shareIcon} />
            </RedditShareButton>
            <LinkedinShareButton url={shareUrl} title={title} className={classes.shareButton}>
              <LinkedInIcon className={classes.shareIcon} />
            </LinkedinShareButton>
          </Box>
        </React.Fragment>
      </Layout>
    </React.Fragment>
  );
};

/*
 * Using the paths returned by getStaticPaths, here we get the information
 * for a single post that will be displayed on this page.
 */
export const getStaticProps: GetStaticProps = async ({ params = {}, preview = false }) => {
  const sanityClient: SanityClient = getClient(preview);

  const { slug } = params;
  const post = await sanityClient.fetch(postQuery, { slug });
  const shareUrl = `https://www.aprilneufeld.ca/post/${slug}`;
  let initialReduxState = undefined;

  // Only bother initializing the user state if it isn't a post
  // preview page, because we've eliminated the header that uses the user
  // information on the post preview to speed things up
  if (!preview) {
    initialReduxState = {
      user: await fetchUserState(),
    };
  }

  return {
    props: {
      pageData: {
        post,
      },
      shareUrl,
      preview,
      initialReduxState,
    },
    revalidate: 5,
  };
};

/*
 * Called at build time, this function gets the paths of all our
 * individual blog posts.
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const sanityClient: SanityClient = getClient(false);

  // Call an external API endpoint to get post slugs
  const slugs = await sanityClient.fetch(groq`*[_type == "post" && defined(slug.current)][].slug.current`);

  // Get the paths we want to pre-render based on post slugs
  const paths = slugs.map((slug: any) => ({ params: { slug } }));

  return { paths, fallback: true };
};

export default Post;
