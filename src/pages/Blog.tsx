import * as React from 'react';
import { useApplicationState } from '../store';
import clsx from 'clsx';
import {
	Box,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Collapse,
	Divider,
	IconButton,
	Typography,
	makeStyles,
	Theme,
	createStyles,
	useTheme
} from '@material-ui/core';
import PageTitle from '../components/PageTitle';
import BlockContent from '@sanity/block-content-to-react';
import FancyChild from '../components/FancyChild';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		card: {

		},
		header: {

		},
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

const BlockRenderer = (props: any) => {
	const { style = 'normal' } = props.node;

	if (style === 'blockquote') {
		return (
			<FancyChild variant={'blockquote'}>
				{props.children}
			</FancyChild >
		)
	}

	return (BlockContent as any).defaultSerializers.types.block(props);
}

const Blog: React.FC = () => {

	const blog = useApplicationState(state => state.blog);
	const classes = useStyles(useTheme());
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const formatDate = (datetime: string): string => {
		const date: Date = new Date(datetime);
		return date.toLocaleDateString('en-US', {
			weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
		});
	}

	return (
		<React.Fragment>
			<PageTitle text='Blog' />
			{blog.posts &&
				blog.posts.map((post: any, index: number) => (
					<Card elevation={4} key={index} >
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
						<CardActions disableSpacing>
							<IconButton aria-label="share">
								<ShareIcon />
							</IconButton>
							<IconButton
								className={clsx(classes.expand, {
									[classes.expandOpen]: expanded,
								})}
								onClick={handleExpandClick}
								aria-expanded={expanded}
								aria-label="show more"
							>
								<ExpandMoreIcon />
							</IconButton>
						</CardActions>
						<Collapse
							in={expanded}
							timeout="auto"
							collapsedHeight="150px"
							className={classes.collapseContainer}
						>
							<Box
								className={clsx(classes.collapse, {
									[classes.collapseOpen]: expanded,
								})}
							/>
							<CardContent className={classes.cardContent}>
								<Typography
									variant='body1'
									className={classes.postBodyText}
									component='div'
								>
									<BlockContent
										blocks={post.body}
										serializers={{ types: { block: BlockRenderer } }}
									/>
								</Typography>
							</CardContent>
						</Collapse>
					</Card>
				))}
		</React.Fragment>
	)
};

export default Blog;