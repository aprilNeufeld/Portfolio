import * as React from 'react';
import {
	Typography,
	Box,
} from '@material-ui/core';
import PageTitle from '../components/PageTitle';
import DividerWithSpacing from '../components/DividerWithSpacing';
import Layout from '../components/Layout';
import { useApplicationState, useAppDispatch } from '../store';
import { fetchUserData } from '../store/userSlice';

const Education: React.FC = () => {

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
					<PageTitle text="Education" />
					{user.user.education.map((education: any, index: number) => (
						<Box key={index} >
							<Typography variant="h5" >
								{education.institution}
							</Typography>
							<Typography variant="h6">
								{education.studyType}  |  {education.area}
							</Typography>

							<DividerWithSpacing />
						</Box>
					))}
				</Layout>
			}
		</React.Fragment>
	)

};

export default Education;