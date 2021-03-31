import * as React from 'react';
import { useApplicationState } from '../store';
import {
	Box,
	Typography,
} from '@material-ui/core';
import PageTitle from '../components/PageTitle';
import DividerWithSpacing from '../components/DividerWithSpacing';
import FancyList from '../components/FancyList';

const months = [
	"",
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

const Experience: React.FC = () => {

	const user = useApplicationState(state => state.user.user);

	return (
		<React.Fragment>
			<PageTitle text="Experience" />

			{[...user.work, ...user.volunteer].map((work: any, index: number) => (
				<Box key={index} >
					<Typography variant="h5" >
						{work.position}
					</Typography>
					<Typography variant="body1">
						{
							(work.company || work.organization) + '  |  '
							+ months[work.start.month] + ' '
							+ work.start.year + ' - '
							+ (months[work.end.month] || '')
							+ (work.end.year || 'Present')
						}
					</Typography>
					{work.highlights.length > 0 &&
						<FancyList
							items={work.highlights}
						/>
					}
					<DividerWithSpacing />
				</Box>
			))}
		</React.Fragment>
	)

};

export default Experience;