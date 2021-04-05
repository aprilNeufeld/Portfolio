import * as React from 'react';
import { useApplicationState } from '../store';
import {
	Typography,
	Box,
} from '@material-ui/core';
import PageTitle from '../components/PageTitle';
import DividerWithSpacing from '../components/DividerWithSpacing';
import Layout from '../components/Layout';

const Education: React.FC = () => {

	const user = useApplicationState(state => state.user.user);

	return (
		<Layout user={user}>
			<PageTitle text="Education" />
			{user.education.map((education: any, index: number) => (
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
	)

};

export default Education;