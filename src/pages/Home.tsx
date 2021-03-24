import * as React from 'react';
import { useApplicationState } from '../store';
import {
	Typography,
	Box
} from '@material-ui/core';
import PageTitle from '../components/PageTitle';

const Home: React.FC = () => {

	const user = useApplicationState(state => state.user.user);

	return (
		<React.Fragment>
			<Box>
				<PageTitle text="Hi, I'm April." />
				<Typography variant="h6">
					{user.basics.summary}
				</Typography>
			</Box>
		</React.Fragment>
	)

};

export default Home;