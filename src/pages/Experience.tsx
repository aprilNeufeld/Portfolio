import * as React from 'react';
import { useApplicationState } from '../store';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { useStyles } from '../styles';

interface Props {

}

const Experience: React.FC<Props> = () => {

	const user = useApplicationState(state => state.user.user);
	const months = ["", "January", "February", "March", "April",
		"May", "June", "July", "August", "September", "October", "November", "December"];
	const styles = useStyles();

	return (
		<React.Fragment>
			<Typography variant="h2" gutterBottom className={styles.pageTitles}>
				Experience
			</Typography>

			{user.work.map((work: any, index: number) => (
				<Box key={index} >
					<Typography variant="h5" >
						{work.position}
					</Typography>
					<Typography variant="h6">
						{work.company}  |  {months[work.start.month]} {work.start.year} - {months[work.end.month]} {work.end.year || "Present"}
					</Typography>
					<Box className={styles.dividerSpacingBox}>
						<Divider />
					</Box>
				</Box>
			))}
		</React.Fragment>
	)

};

export default Experience;