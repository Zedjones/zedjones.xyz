import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProjectCard from './ProjectCard';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        width: "90%"
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function SpacingGrid() {
    const classes = useStyles();

    return (
        <Grid 
            container 
            direction="column" 
            className={classes.root} 
            spacing={2}
            alignItems="center">
            <Grid key={0} item className={classes.paper}>
                <ProjectCard />
            </Grid>
            <Grid key={1} item className={classes.paper}>
                <ProjectCard />
            </Grid>
        </Grid>
    );
}
