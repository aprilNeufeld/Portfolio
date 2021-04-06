import * as React from 'react';
import { useApplicationState, useAppDispatch } from '../store';
import {
	Typography,
	Box
} from '@material-ui/core';
import PageTitle from '../components/PageTitle';
import Layout from '../components/Layout';
import { fetchUserData } from '../store/userSlice';
import { useRouter } from 'next/router';

const Home: React.FC = () => {
	const user = useApplicationState(state => state.user.user);
	const userLoaded = useApplicationState(state => state.user.loaded);
	const dispatch = useAppDispatch();
	const router = useRouter();

	React.useEffect(() => {
		if (!userLoaded) {
			console.log("in dispatch");
			console.log(JSON.stringify(dispatch(fetchUserData()), null, 2));
		}
	}, []);

	return (
		<React.Fragment>
			{userLoaded &&
				<Layout router={router} user={user}>
				<Box>
						<PageTitle text="Hi, I'm April." />
						<Typography variant="h6">
							{user.basics.summary}
						</Typography>
				</Box>
				</Layout>
			}
		</React.Fragment>
	)
};

export default Home;