import React, { useState, useEffect } from 'react';
import {
    Container,
    Grid,
    Typography
} from '@material-ui/core';
import {
    makeStyles
} from '@material-ui/core/styles';
import {
    FONTS,
} from '../../constants';
import CharacterSideMenu from './CharacterSideMenu';
import Panels from './Panels';
import {translation as romeEvents} from '../../events/singleplayer/romeEvents/romeEventsFR';

const useStyles = makeStyles((theme) => ({
    grid: {
        // height: "100vh",
        marginTop: 40
    },
}))

export default function GamePageSolo() {
    // TODO (maybe) - set up in such a way where if we need to wait for initial screen to render, show a loading spinner
    const [currentScene, setCurrentScene] = useState(romeEvents["scene0"])
    const classes = useStyles();

    const updateScene = (currentScene, buttonIndex) => {
        // setCurrentScene(getEventNode(currentScene, buttonIndex));
        const nextScene = currentScene.choices[buttonIndex].nextScene;
        setCurrentScene(romeEvents[nextScene]);
    }

    useEffect(() => {
        console.log(currentScene);
    }, [currentScene])

    return (
        <>
            <Container className={classes.grid}>
                <Grid container direction="row" alignItems="stretch" justify="space-between">       
                    <Panels currentScene={currentScene} updateScene={updateScene}/>
                    <CharacterSideMenu/>
                </Grid>
            </Container>
        </>
    )
}