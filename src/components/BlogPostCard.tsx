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
	useTheme
} from '@material-ui/core';
import BlockRenderer from './BlockRenderer';

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
		cardActions: {
			padding: theme.spacing(2),
		},
		textContainer: {
			height: '100%',
		},
		textFadeContainer: {
			position: 'relative',
			zIndex: 10,
			height: '200px',
			overflow: 'hidden',
		},
		textFade: {
			position: 'absolute',
			top: 0,
			width: '100%',
			height: '100%',
			zIndex: 10,
			background: 'linear-gradient(0deg, rgba(255,255,255,1) 1%, rgba(255,255,255,0.7) 15%, rgba(255,255,255,0.5747330960854092) 20%, rgba(255,255,255,0) 80%)',
		},
		postBodyText: {
			position: 'relative',
			fontWeight: 300,
			lineHeight: 1.4,
			zIndex: 5,
			'& p': {
				marginBottom: theme.spacing(5)
			},
		},
		readMore: {
		},
		shareIcon: {
			color: theme.palette.action.disabled
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
			year: 'numeric', month: 'long', day: 'numeric'
		});
	}

	return (
		<React.Fragment>
			<Card elevation={4} >
				<CardHeader
					title={post.title}
					subheader={'by ' + post.author +
						(post.publishedAt ? ' on ' + formatDate(post.publishedAt) : '')}
				/>
				<Divider />
				<CardMedia
					image={post.mainImage.asset.url}
					className={classes.media}
				/>
				<Divider />
				<Box
					className={classes.textFadeContainer}
				>
					<Box
						className={classes.textFade}
					/>
					<CardContent className={classes.textContainer}>
						<Typography
							variant='body1'
							className={classes.postBodyText}
							component='div'
						>
							<BlockRenderer
								content={post.body[0]}
							/>
						</Typography>
					</CardContent>
				</Box>
				<CardActions
					className={classes.cardActions}
				>
					<Typography variant='caption' className={classes.readMore}>
						<Link
							href={`/post/${encodeURIComponent(post.slug.current)}`}
						>
							Read more
					</Link>
					</Typography>
				</CardActions>
			</Card>
		</React.Fragment>
	)
};

export default BlogPostCard;