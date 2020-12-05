import * as React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

interface TabPageProps {
	children?: React.ReactNode;
	index: any;
	value: any;
}

export default function TabPage(props: TabPageProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpage"
			hidden={value !== index}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					{children}
				</Box>
			)}
		</div>
	);
}
