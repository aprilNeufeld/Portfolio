import * as React from 'react';
import { useApplicationState } from '../store';
import {
	Typography,
	Box
} from '@material-ui/core';
import PageTitle from '../components/PageTitle';
import DividerWithSpacing from '../components/DividerWithSpacing';

const months = ["", "January", "February", "March", "April",
	"May", "June", "July", "August", "September", "October", "November", "December"];

const Experience: React.FC = () => {
	const user = useApplicationState(state => state.user.user);
	
	return (
		<React.Fragment>
			<PageTitle text="Experience" />

			{user.work.map((work: any, index: number) => (
				<Box key={index} >
					<Typography variant="h5" >
						{work.position}
					</Typography>
					<Typography variant="h6">
						{work.company}  |  {months[work.start.month]} {work.start.year} - {months[work.end.month]} {work.end.year || "Present"}
					</Typography>

					<DividerWithSpacing />
				</Box>
			))}
		</React.Fragment>
	)

};

export default Experience;