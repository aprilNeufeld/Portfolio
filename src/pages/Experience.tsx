import * as React from 'react';
import { useApplicationState } from '../store';
import {
	Box,
	Typography,
	ListItem,
	List
} from '@material-ui/core';
import PageTitle from '../components/PageTitle';
import DividerWithSpacing from '../components/DividerWithSpacing';
import FancyChild from '../components/FancyChild';

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
					<Typography variant="h5" gutterBottom>
						{work.position}
					</Typography>
					<Typography variant="h6" gutterBottom>
						{
							(work.company || work.organization) + '  |  '
							+ months[work.start.month] + ' '
							+ work.start.year + ' - '
							+ (months[work.end.month] || '')
							+ (work.end.year || 'Present')
						}
					</Typography>
					{work.highlights.length > 0 &&
						<FancyChild>
							<List>
								{work.highlights.map((item: any, index: number) => (
									<ListItem key={index}>
										<Typography variant="body1" display={'inline'}>
											{item}
										</Typography>
									</ListItem>
								))}
							</List>
						</FancyChild>
					}
					<DividerWithSpacing />
				</Box>
			))}
		</React.Fragment>
	)

};

export default Experience;