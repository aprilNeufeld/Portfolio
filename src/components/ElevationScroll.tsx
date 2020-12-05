import * as React from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

export default function ElevationScroll(props: { children: React.ReactElement }) {
	const { children } = props;

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}