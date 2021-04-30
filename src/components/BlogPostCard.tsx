import * as React from 'react';
import clsx from 'clsx';
import { push } from 'connected-next-router';
import { useAppDispatch } from '../store';
import {
	Box,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Collapse,
	Divider,
	Link,
	Typography,
	makeStyles,
	Theme,
	createStyles,
	useTheme
} from '@material-ui/core';
import HorizontalExpandButton from './HorizontalExpandButton';
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
			padding: 0,
		},
		collapseContainer: {
			position: 'relative',
		},
		collapse: {
			position: 'absolute',
			top: 0,
			width: '100%',
			height: '100%',
			zIndex: 10,
			background: 'linear-gradient(0deg, rgba(255,255,255,1) 1%, rgba(255,255,255,0.7) 15%, rgba(255,255,255,0.5747330960854092) 20%, rgba(255,255,255,0) 80%)',
			transition: theme.transitions.create('background, zIndex')
		},
		collapseOpen: {
			background: 'none',
			zIndex: 0,
			transition: theme.transitions.create('background, zIndex'),
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
	const dispatch = useAppDispatch();
	const classes = useStyles(useTheme());
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const formatDate = (datetime: string): string => {
		const date: Date = new Date(datetime);
		return date.toLocaleDateString('en-US', {
			year: 'numeric', month: 'long', day: 'numeric'
		});
	}

	const handleReadMore = () => {
		//dispatch(push('/posts/'+ post.slug));
	};

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
				<Collapse
					in={expanded}
					timeout="auto"
					collapsedHeight="200px"
					className={classes.collapseContainer}
				>
					<Box
						className={clsx(classes.collapse, {
							[classes.collapseOpen]: expanded,
						})}
					/>
					<CardContent>
						<Typography
							variant='body1'
							className={classes.postBodyText}
							component='div'
						>
							<BlockRenderer
								content={post.body}
							/>
						</Typography>
					</CardContent>
				</Collapse>
				<CardActions
					disableSpacing
					className={classes.cardActions}
				>
					<Link
						href={`/post/${encodeURIComponent(post.slug.current)}`}
						onClick={handleReadMore}
					>
						Read more
					</Link>
					<HorizontalExpandButton
						onClick={handleExpandClick}
						expanded={expanded}
						aria-expanded={expanded}
						aria-label="show more"
					/>
				</CardActions>
			</Card>
		</React.Fragment>
	)
};

export default BlogPostCard;