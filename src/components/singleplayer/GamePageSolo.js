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
    title: {
        fontFamily: FONTS.TITLE,
        color: "white",
        fontSize: "2.5em",
        marginTop: 100
    },
    grid: {
        // height: "100vh",
    },
    titleAndPanels: {
        height: "100%"
    },
}))

export default function GamePageSolo() {
    const [anchorEl, setAnchorEl] = useState(null)
    // TODO - set up in such a way where if we need to wait for initial screen to render, show a loading spinner
    // const [currentScene, setCurrentScene] = useState(initializeGame())
    const [currentScene, setCurrentScene] = useState(romeEvents["scene0"])
    const [currentSceneId, setCurrentSceneId] = useState("scene0")
    const classes = useStyles();

    const onClickSettingsMenuButton = (event) => {
        setAnchorEl(event.currentTarget);
        // setIsSettingMenuOpen(!isSettingsMenuOpen);
    }

    const onCloseSettingsMenu = () => {
        setAnchorEl(null);
    }

    const updateScene = (currentScene, buttonIndex) => {
        // setCurrentScene(getEventNode(currentScene, buttonIndex));
        const nextScene = currentScene.choices[buttonIndex].nextScene;
        setCurrentScene(romeEvents[nextScene]);
    }

    // componentdidstart lifecycle
    useEffect (() => {
        // setCurrentScene(initializeGame())
        // console.log(currentScene)
    }, [])

    useEffect(() => {
        console.log(currentScene);
    }, [currentScene])

    return (
        <>
            <Container className={classes.grid}>
                
                <Grid>
                    <Typography component="h1" className={classes.title}>
                            Ovni aventures
                    </Typography>
                </Grid>

                <Grid container direction="row" alignItems="stretch" justify="space-between">       
                    <Panels currentScene={currentScene} updateScene={updateScene}/>
                    <CharacterSideMenu
                        anchorEl={anchorEl}
                        onClickSettingsMenuButton={onClickSettingsMenuButton}
                        onCloseSettingsMenu={onCloseSettingsMenu}
                    />
                </Grid>
            </Container>
        </>
    )
}