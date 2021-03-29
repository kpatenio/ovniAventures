import React, { useState, useEffect } from 'react';
import {
    Button,
    Grid,
    Paper
} from '@material-ui/core';
import human1 from '../images/humans/human1.png';
import human2 from '../images/humans/human2.png';
import human3 from '../images/humans/human3.png';
import human4 from '../images/humans/human4.png';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    paper: {
        height: 200,
        width: 400
    },
    image: {
        height: 200
    },
}))

const humans = [
    human1,
    human2,
    human3,
    human4,
]

export default function CharacterSelect({onClickLeft, onClickRight, playerAvatarId}) {
    const classes = useStyles();
    return (
        <>
        <Grid container justify="center">
        <Paper className={classes.paper}>
            <Grid item container justify="center" alignItems="center">
                <Grid item>
                    <Button onClick={onClickLeft}><ArrowBackIosIcon/></Button>
                </Grid>
                <Grid item>
                    <img src={humans[playerAvatarId]} className={classes.image}></img>
                </Grid>
                <Grid item>
                    <Button onClick={onClickRight}><ArrowForwardIosIcon/></Button>
                </Grid>
            </Grid>
            </Paper>
            </Grid>
        </>
    )
}