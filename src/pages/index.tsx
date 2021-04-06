import * as React from 'react';
import {
	Typography,
	Box
} from '@material-ui/core';
import PageTitle from '../components/PageTitle';
import Layout from '../components/Layout';
import { useApplicationState, useAppDispatch } from '../store';
import { fetchUserData } from '../store/userSlice';

const Home: React.FC = () => {

	const user = useApplicationState(state => state.user);
	const dispatch = useAppDispatch();

	React.useEffect(() => {
		if (!user.loaded) {
			dispatch(fetchUserData());
		}
	}, [user, dispatch]);

	return (
		<React.Fragment>
			{user.loaded &&
				<Layout>
					<Box>
						<PageTitle text="Hi, I'm April." />
						<Typography variant="h6">
							{user.user.basics.summary}
						</Typography>
					</Box>
				</Layout>
			}
		</React.Fragment>
	)
};

export default Home;