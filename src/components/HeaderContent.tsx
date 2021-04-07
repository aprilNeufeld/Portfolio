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
			<Typography variant="h2">
				{user.basics.name}
			</Typography>
			<Typography variant="h5" gutterBottom>
				<Link href={`https://gitconnected.com/${user.basics.username}`}>
					@{user.basics.username}
				</Link> | she/her
					</Typography>
			<Typography variant="body1" align="center" gutterBottom>
				{user.basics.label}
			</Typography>
			<Typography variant="body1" gutterBottom>
				<LocationOnOutlinedIcon /> {user.basics.region}
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