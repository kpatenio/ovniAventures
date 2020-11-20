import React from 'react';
import {
    Box,
    Grid
} from '@material-ui/core';
import {
    makeStyles
} from '@material-ui/core/styles';
import earth from '../earth.png';

const useStyles = makeStyles(() => ({
    earth: {
        height: 200,
        width: 200,
    },
}))

export default function Footer() {
    const classes = useStyles();
    return (
    <>
        <Box component="footer">
            <Grid container justify="center">
                <Grid item>
                    <img className={classes.earth} src={earth}/>
                </Grid>
            </Grid>
        </Box>
    </>
    );
}