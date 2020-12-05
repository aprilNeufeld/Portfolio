import * as React from 'react';
import { useApplicationState } from '../store';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useStyles } from '../styles';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';

interface Props {

}

const Projects: React.FC<Props> = () => {

	const user = useApplicationState(state => state.user.user);
	const styles = useStyles();

	return (
		<React.Fragment>
			<Typography variant="h2" gutterBottom className={styles.pageTitles}>
				Projects
			</Typography>

			{user.projects.map((project: any, index: number) => (
				<Box key={index} >
					<Typography variant="h5" gutterBottom>
						{project.name}
					</Typography>
					<Typography variant="h6" >
						{project.summary}
					</Typography>
					<Box className={styles.chipsContainerLeft} >
						{[...project.languages, ...project.libraries].map((item: any, index: number) => (
							<Chip
								key={index}
								color="secondary"
								label={item}
								variant="outlined"
							/>
						))}
					</Box>
					<Box className={styles.dividerSpacingBox}>
						<Divider />
					</Box>
				</Box>
			))}

		</React.Fragment>
	)
};

export default Projects;