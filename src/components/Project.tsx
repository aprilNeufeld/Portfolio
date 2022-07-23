import * as React from 'react';
import Link from 'next/link';
import { Box, Chip, Divider, ListItem, Typography, Theme, useTheme, CardContent, Card } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';
import { ProjectType } from '../store/projectsSlice';
import Linkify from 'react-linkify';
import FancyChild from '../components/FancyChild';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    listItem: {
      display: 'block',
      [theme.breakpoints.down('md')]: {
        paddingRight: 0,
        paddingLeft: 0,
      },
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      backgroundColor: 'transparent',
      whiteSpace: 'break-spaces',
    },
    cardContent: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    chipsContainerLeft: {
      paddingTop: theme.spacing(2),
      display: 'flex',
      justifyContent: 'left',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
    chip: {
      color: '#1ab9c5',
      borderColor: '#19b9c3',
    },
    itemName: {
      display: 'inline-block',
      marginBottom: theme.spacing(2),
    },
  });
});

interface Props {
  project: ProjectType;
}

const Project: React.FC<Props> = (props) => {
  const { project } = props;
  const classes = useStyles(useTheme());

  return (
    <ListItem className={classes.listItem}>
      <Card className={classes.card} elevation={0}>
        <CardContent className={classes.cardContent}>
          <Typography variant="caption" display={'inline'}>
            {project.type}s/
          </Typography>{' '}
          <Typography variant="h6" className={classes.itemName} gutterBottom>
            <Link href={project.url}>{project.name}</Link>
          </Typography>
          <FancyChild>
            <Linkify>
              <Typography variant="body1">{project.description}</Typography>
            </Linkify>
          </FancyChild>
          <Box className={classes.chipsContainerLeft}>
            {project.keywords.map((keyword: string, index: number) => (
              <Chip key={index} className={classes.chip} label={keyword} variant="outlined" />
            ))}
          </Box>
        </CardContent>
        <Divider />
      </Card>
    </ListItem>
  );
};

export default Project;
