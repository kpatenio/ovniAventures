import React, { useState, useEffect } from 'react';
import {
    Route,
    NavLink,
} from 'react-router-dom';
import {
    Box,
    Grid,
    Typography
} from '@material-ui/core';

import {
    makeStyles
} from '@material-ui/core/styles';
import {
    FONTS,
} from '../constants';
import alien from '../alien-transparent.png';
import ufo from '../ufo.png'

const useStyles = makeStyles(() => ({
    h1: {
        fontFamily: FONTS.TITLE,
        color: "white",
      },
      imageAlien: {
        height: 200,
        width: 200,
    },
    imageUfo: {
        height: 175,
        width: 175,
        marginBottom: 16
    },
}))

export default function Header() {
    const classes = useStyles();
    return (
        <>
            <Box component="header">
                <Grid direction="row" container justify="space-between" className={classes.h1}>
                    <Grid item xs>
                        <Typography variant="h1" className={classes.h1}>
                            OVNI Aventures
                        </Typography>
                    </Grid>
                    <Grid item xs alignItems="baseline">
                        <img className={classes.imageAlien} src={alien}/>
                        <img className={classes.imageUfo} src={ufo}/>
                    </Grid>
                </Grid>
                <hr className={classes.hr}/>
            </Box>
        </>
    )
}