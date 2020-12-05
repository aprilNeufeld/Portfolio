import * as React from 'react';
import { useApplicationState } from '../store';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useStyles } from '../styles';
import Divider from '@material-ui/core/Divider';

interface Props {

}

const Education: React.FC<Props> = () => {

	const user = useApplicationState(state => state.user.user);
	const styles = useStyles();

	return (
		<React.Fragment>
			<Typography variant="h2" gutterBottom className={styles.pageTitles}>
				Education
			</Typography>

			{user.education.map((education: any, index: number) => (
				<Box key={index} >
					<Typography variant="h5" >
						{education.institution}
					</Typography>
					<Typography variant="h6">
						{education.studyType}  |  {education.area}
					</Typography>
					<Box className={styles.dividerSpacingBox}>
						<Divider />
					</Box>
				</Box>
			))}

		</React.Fragment>
	)

};

export default Education;