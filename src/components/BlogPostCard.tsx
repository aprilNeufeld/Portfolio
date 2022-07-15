import * as React from 'react';
import Link from 'next/link';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
  makeStyles,
  Theme,
  createStyles,
  useTheme,
} from '@material-ui/core';
import BlockRenderer from './BlockRenderer';
import { urlFor } from '../lib/sanity';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    media: {
      height: 0,
      //paddingTop: '56.25%', // 16:9
      paddingTop: '62%',
    },
    cardActions: {
      padding: theme.spacing(2),
    },
    textContainer: {
      height: '90%',
      paddingBottom: '0!important',
      overflow: 'hidden',
    },
    textFadeContainer: {
      position: 'relative',
      zIndex: 10,
      height: '150px',
      overflow: 'hidden',
    },
    textFade: {
      position: 'absolute',
      top: 0,
      width: '100%',
      height: '110%',
      zIndex: 10,
      background:
        'linear-gradient(0deg, rgba(255,255,255,1) 10%, rgba(255,255,255,0.7) 30%, rgba(255,255,255,0.57) 50%, rgba(255,255,255,0) 80%)',
    },
    postBodyText: {
      position: 'relative',
      zIndex: 5,
      '& p': {
        marginBottom: theme.spacing(5),
      },
    },
  });
});

interface Props {
  post: any;
}

/**
 * A single blog post with truncated text, held in a Material-UI Card.
 * Links to a page with the post's full text.
 */
const BlogPostCard: React.FC<Props> = (props) => {
  const { post } = props;
  const classes = useStyles(useTheme());

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
      <Card elevation={4}>
        <CardHeader
          title={post.title}
          subheader={'by ' + post.author + (post.publishedAt ? ' on ' + formatDate(post.publishedAt) : '')}
        />
        <Divider />
        <CardMedia image={urlFor(post.mainImage).url() ?? '/images/placeholder.png'} className={classes.media} />
        <Divider />
        <Box className={classes.textFadeContainer}>
          <Box className={classes.textFade} />
          <CardContent className={classes.textContainer}>
            <Typography variant="body1" className={classes.postBodyText} component="div">
              <BlockRenderer content={post.body} />
            </Typography>
          </CardContent>
        </Box>
        <CardActions className={classes.cardActions}>
          <Typography>
            <Link href={`/post/${encodeURIComponent(post.slug.current)}`}>Read more</Link>
          </Typography>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

export default BlogPostCard;
