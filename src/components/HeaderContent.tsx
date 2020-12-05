import * as React from 'react';
import { useApplicationState } from '../store';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useStyles } from '../styles';
import Link from '@material-ui/core/Link';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Chip from '@material-ui/core/Chip';

interface Props {

}

const HeaderContent: React.FC<Props> = () => {

	const user = useApplicationState(state => state.user.user);
	const styles = useStyles();
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			flexDirection="column"
			className={styles.headerContent}
		>	
			<Box className={styles.profilePictureContainer} >
				<img src={user.basics.picture} className={styles.profilePicture} />
				</Box>
			<Typography variant="h2">
				{user.basics.name}
			</Typography>
			<Typography variant="h5" gutterBottom>
				<Link href={`https://gitconnected.com/${user.basics.username}`} color="secondary" className="header-link">
					@{user.basics.username}
				</Link> | she/her
			</Typography>
			<Typography variant="body1" align="center" gutterBottom>
				{user.basics.label}
			</Typography>
			<Typography variant="body1" gutterBottom>
				<LocationOnOutlinedIcon /> {user.basics.region}
			</Typography>
			<Box className={styles.chipsContainer}>
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