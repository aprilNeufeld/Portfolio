import * as React from 'react';
import { useApplicationState } from '../store';
import clsx from 'clsx';
import {
	Box,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Collapse,
	Divider,
	IconButton,
	Paper,
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
import MoreVertIcon from '@material-ui/icons/MoreVert';

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
		postBody: {
			paddingLeft: theme.spacing(3),
			paddingRight: theme.spacing(3),
		},
		postBodyText: {
			fontWeight: 300,
			fontSize: '1.25rem',
			lineHeight: 1.4,
			'& p': {
				marginBottom: theme.spacing(5)
			}
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

	return BlockContent.defaultSerializers.types.block(props);
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
		return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
	}

	return (
		<React.Fragment>
			<PageTitle text='Blog' />
			{blog.loaded && blog.posts &&
				blog.posts.map((post: any, index: number) => (
					<Card elevation={4} key={index} >
						<CardMedia
							image={post.mainImage.asset.url}
							className={classes.media}
						/>
						<Divider />
						<CardActions disableSpacing>
							<CardHeader
								title={post.title}
								subheader={'by ' + post.author +
									(post.publishedAt ? ' on ' + formatDate(post.publishedAt) : '')}
							/>
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
						<Collapse in={expanded} timeout="auto" unmountOnExit>
							<CardContent className={classes.postBody}>
								<Typography variant='h5' className={classes.postBodyText}>
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