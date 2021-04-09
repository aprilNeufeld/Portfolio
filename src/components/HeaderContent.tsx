import * as React from 'react';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import {
	Typography,
	Box,
	Link,
	Chip,
	makeStyles,
	Theme,
	createStyles,
	useTheme,
	colors
} from '@material-ui/core';
import { useApplicationState } from '../store';

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			paddingBottom: theme.spacing(4),
			[theme.breakpoints.down('sm')]: {
				paddingTop: theme.spacing(1)
			},
			[theme.breakpoints.up('md')]: {
				paddingTop: theme.spacing(6)
			},
			position: 'relative',
			color: 'white',
			'& a:not(:hover)': {
				color: 'white',
			},
		},
		name: {
			marginRight: theme.spacing(1),
		},
		nameAndPronouns: {
			display: 'flex',
			alignItems: 'center',
			marginBottom: theme.spacing(1),
		},
		profilePictureContainer: {
			[theme.breakpoints.down('sm')]: {
				height: "200px",
			},
			[theme.breakpoints.up('md')]: {
				height: "300px",
			},
			width: "auto",
			border: 5,
			borderColor: colors.common.white,
			borderStyle: "solid",
			borderRadius: "300px",
			backgroundColor: "#ffffff4D",
			marginBottom: theme.spacing(2),
		},
		profilePicture: {
			[theme.breakpoints.down('sm')]: {
				width: "200px",
				height: "200px",
			},
			[theme.breakpoints.up('md')]: {
				width: "300px",
				height: "300px",
			},
			borderRadius: "300px",
		},
		chipsContainer: {
			paddingTop: theme.spacing(2),
			display: 'flex',
			justifyContent: 'center',
			flexWrap: 'wrap',
			'& > *': {
				margin: theme.spacing(0.5),
			},
		},
	});
});

const HeaderContent: React.FC = () => {

	const user = useApplicationState(state => state.user.user);
	const classes = useStyles(useTheme());

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			flexDirection="column"
			className={classes.root}
		>
			<Box className={classes.profilePictureContainer} >
				<img
					src={user.basics.picture}
					className={classes.profilePicture}
					alt=''
				/>
			</Box>
			<Box className={classes.nameAndPronouns}>
				<Typography variant="h3" className={classes.name}>
					{user.basics.name}
				</Typography>
				<Typography variant="h4">
					(She/Her)
			</Typography>
			</Box>
			<Typography variant="h4" gutterBottom>
				{user.basics.label}
			</Typography>
			<Typography variant="h6" align="center" gutterBottom>
				@tricksterCodess: <Link
					href={`https://github.com/${user.basics.username}`}
					underline='always'
				> gitHub</Link>  |  <Link
					href={`https://gitconnected.com/${user.basics.username}`}
					underline='always'
				>gitConnected	</Link>
			</Typography>
			<Box className={classes.chipsContainer}>
				{user.skills.map((skill: any, index: number) => (
					<Chip
						key={index}
						label={skill.name}
						color="primary"
					/>
				))}
			</Box>
		</Box>
	)

};

export default HeaderContent;