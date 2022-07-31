import * as React from 'react';
import { Box, Chip, Divider, ListItem, Typography, Theme, useTheme, CardContent, Card } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { ProjectType } from '../store/projectsSlice';
import FancyChild from './FancyChild';
import StyledLink from './StyledLink';
import StyledLinkify from './StyledLinkify';

const useStyles = makeStyles((theme: Theme) => ({
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
}));

interface Props {
  project: ProjectType;
}

const ProjectItem: React.FC<Props> = (props) => {
  const { project } = props;
  const classes = useStyles(useTheme());

  return (
    <ListItem className={classes.listItem}>
      <Card className={classes.card} elevation={0}>
        <CardContent className={classes.cardContent}>
          <Typography variant="caption" display={'inline'}>
            {project.type}s/
          </Typography>{' '}
          <Box className={classes.itemName}>
            <StyledLink url={project.url} typography="h6" isExternal>
              {project.name}
            </StyledLink>
          </Box>
          <FancyChild>
            <StyledLinkify typography={'body1'}>{project.description}</StyledLinkify>
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

export default ProjectItem;
