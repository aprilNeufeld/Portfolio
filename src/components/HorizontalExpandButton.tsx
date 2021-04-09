import * as React from 'react';
import clsx from 'clsx';
import { ButtonBase, createStyles, IconButton, makeStyles, useTheme, Theme } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) => {
	const buttonTransition = {
		duration: theme.transitions.duration.shortest,
	};
	return createStyles({
		root: {
			display: 'flex',
			width: '100%',
			transition: theme.transitions.create(['min-width', 'background-color'], buttonTransition),
			padding: theme.spacing(0, 0),
			'&:hover:not($disabled)': {
				cursor: 'pointer',
			},
			'&$expanded': {
				minWidth: 64,
			},
			'&$focused': {
				backgroundColor: theme.palette.action.focus,
			},
			'&$disabled': {
				opacity: theme.palette.action.disabledOpacity,
			},
		},
		icon: {
			transform: 'rotate(0deg)',
			transition: theme.transitions.create('transform', buttonTransition),
			'&:hover': {
				// Disable the hover effect for the IconButton,
				// because a hover effect should apply to the entire Expand button and
				// not only to the IconButton.
				backgroundColor: 'transparent',
			},
			'&$expanded': {
				transform: 'rotate(180deg)',
			},
		},
		/* Pseudo-class applied if `disabled={true}`. */
		disabled: {
		},
		/* Pseudo-class applied if `expanded={true}`. */
		expanded: {
		},
		/* Pseudo-class applied if `focused={true}`. */
		focused: {
		},
	});
});

interface Props {
	onClick: () => void;
	className?: string;
	expanded: boolean;
}

const HorizontalExpandButton: React.FC<Props> = (props) => {

	const { onClick, className, expanded } = props;
	const classes = useStyles(useTheme());

	const handleClick = () => {
		onClick();
	}

	return (
		<ButtonBase
			component="div"
			className={clsx(
				classes.root,
				{
					[classes.expanded]: expanded,
				},
				className,
			)}
			onClick={handleClick}
		>
			<IconButton
				className={clsx(
					classes.icon,
					{
						[classes.expanded]: expanded,
					}
				)}
				component="div"
				aria-hidden
			>
				<ExpandMore />
			</IconButton>
		</ButtonBase>
	)
};

export default HorizontalExpandButton;