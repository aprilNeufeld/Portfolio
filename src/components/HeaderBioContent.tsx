import * as React from 'react';
import Image from 'next/image';
import { Typography, Box, Chip, Theme, useTheme, colors } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { useApplicationState } from '../store';
import ContactLinks from './ContactLinks';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(1),
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(6),
    },
    position: 'relative',
    color: theme.palette.common.white,
  },
  name: {
    marginRight: theme.spacing(1),
  },
  nameAndPronouns: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  },
  title: {
    textAlign: 'center',
  },
  profilePictureContainer: {
    [theme.breakpoints.down('md')]: {
      height: 150,
      width: 150,
    },
    [theme.breakpoints.up('md')]: {
      height: 200,
      width: 200,
    },
    border: 5,
    borderColor: colors.common.white,
    borderStyle: 'solid',
    borderRadius: 300,
    backgroundColor: '#ffffff4D',
    marginBottom: theme.spacing(2),
  },
  profilePicture: {
    [theme.breakpoints.down('md')]: {
      width: 150,
      height: 150,
    },
    [theme.breakpoints.up('md')]: {
      width: 200,
      height: 200,
    },
    borderRadius: 300,
  },
  chipsContainer: {
    paddingTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

const HeaderBioContent: React.FC = () => {
  const user = useApplicationState((state) => state.user);
  const classes = useStyles(useTheme());

  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" className={classes.root}>
      <Box className={classes.profilePictureContainer}>
        <Image
          src="/images/avatar.png"
          className={classes.profilePicture}
          width={'100%'}
          height={'100%'}
          layout="responsive"
          priority
          alt="Profile avatar"
        />
      </Box>
      <React.Fragment>
        <Box className={classes.nameAndPronouns}>
          <Typography variant="h4" className={classes.name}>
            {user.basics.name}
          </Typography>
          <Typography variant="h5">(She/Her)</Typography>
        </Box>
        <Typography variant="h6" className={classes.title} gutterBottom>
          {user.basics.label}
        </Typography>
        <ContactLinks />
        <Box className={classes.chipsContainer}>
          {user.skills.map((skill: any, index: number) => (
            <Chip key={index} label={skill.name} color="primary" />
          ))}
        </Box>
      </React.Fragment>
    </Box>
  );
};

export default HeaderBioContent;
