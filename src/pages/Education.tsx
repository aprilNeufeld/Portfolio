import * as React from 'react';
import { useApplicationState } from '../store';
import {
	Typography,
	Box,
} from '@material-ui/core';
import PageTitle from '../components/PageTitle';
import DividerWithSpacing from '../components/DividerWithSpacing';

const Education: React.FC = () => {

	const user = useApplicationState(state => state.user.user);

	return (
		<React.Fragment>
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

		</React.Fragment>
	)

};

export default Education;