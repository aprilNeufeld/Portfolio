import * as React from 'react';
import { useApplicationState } from '../store';
import { useStyles } from '../styles'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

interface Props {

}

const Home: React.FC<Props> = () => {

	const user = useApplicationState(state => state.user.user);
	const styles = useStyles();

	return (
		<React.Fragment>
			<Box>
				<Typography variant="h2" gutterBottom className={styles.pageTitles}>
					Hi, I'm {user.basics.name}.
				</Typography>
				<Typography variant="h6">
					{user.basics.summary}
				</Typography>
			</Box>
		</React.Fragment>
	)

};

export default Home;