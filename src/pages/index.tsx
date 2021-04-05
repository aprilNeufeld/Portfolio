import * as React from 'react';
import { useApplicationState } from '../store';
import {
	Typography,
	Box
} from '@material-ui/core';
import PageTitle from '../components/PageTitle';
import Layout from '../components/Layout';

const Home: React.FC = () => {

	const user = useApplicationState(state => state.user.user);

	return (
		<Layout user={user}>
			<Box>
				<PageTitle text="Hi, I'm April." />
				<Typography variant="h6">
					{user.basics.summary}
				</Typography>
			</Box>
		</Layout>
	)
};

export default Home;