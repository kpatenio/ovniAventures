import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    Container,
    Drawer,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemText,
    ListSubheader,
    Paper,
    Typography
} from '@material-ui/core';
import {
    makeStyles
} from '@material-ui/core/styles';
import {
    FONTS
} from '../../constants';

const useStyles = makeStyles((theme) => ({
    button: {
        fontFamily: FONTS.BODY,
        marginTop: 10,
        marginBottom: 10
    },
    storyPanel: {
        color: "white",
        fontSize: "1.5em",
        minHeight: 550,
        border: "2px white solid",
        padding: 20
    },
    choicePanel: {
        height: "50%",
    },
    list: {
        width: 200,
        marginLeft: 50,
        color: "white",
        fontFamily: FONTS.BODY,
    },
    subheader: {
        fontFamily: FONTS.BODY,
        color: "white",
        fontSize: "1.5em",
        paddingLeft: 0,
    },
    title: {
        fontFamily: FONTS.TITLE,
        color: "white",
        fontSize: "2.5em",
        marginTop: 100
    },
    divider: {
        backgroundColor: "white",
        marginTop: 30,
        marginBottom: 30
    },
    listitemtext: {
        height: 100,
        fontFamily: FONTS.BODY
    },
    grid: {
        // height: "100vh",
    },
    storyPanelText: {
        fontFamily: FONTS.BODY,

    },
    titleAndPanels: {
        height: "100%"
    }
}))

export default function GamePageSolo() {
    const classes = useStyles();
    return (
        <>
            <Container className={classes.grid}>
                <Grid>
                    <Typography component="h1" className={classes.title}>
                            Mode en solo
                    </Typography>
                </Grid>

                <Grid container direction="row" alignItems="stretch" justify="space-between">
                    
                    {/*Title and panels*/}
                    <Grid item direction="column" xs={8} justify="space-between" className={classes.titleAndPanels}>
                        <Grid item className={classes.storyPanel}>
                            <Typography component="p" className={classes.storyPanelText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh sed pulvinar proin gravida hendrerit lectus a. Pharetra vel turpis nunc eget lorem dolor sed. Quis auctor elit sed vulputate mi sit amet mauris commodo. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Quisque id diam vel quam. Nisi scelerisque eu ultrices vitae auctor. Neque vitae tempus quam pellentesque nec. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Sagittis aliquam malesuada bibendum arcu.
                            </Typography>
                        </Grid>

                        {/*Panels*/}
                        <Grid item direction="column">
                            <Grid item>
                                <Box className={classes.choicePanel}>
                                    <Button variant="contained" className={classes.button} fullWidth>Choice 1</Button>
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box className={classes.choicePanel}>
                                    <Button variant="contained" className={classes.button} fullWidth>Choice 2</Button>
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box className={classes.choicePanel}>
                                    <Button variant="contained" className={classes.button} fullWidth>Choice 3</Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/*List*/}
                    <Grid item xs>
                        <List className={classes.list} subheader={<ListSubheader component="h2" className={classes.subheader}>Personnage</ListSubheader>}>
                            <ListItem className={classes.listitemtext}>Nom:</ListItem>
                            <ListItem className={classes.listitemtext}>Santé:</ListItem>
                            <ListItem className={classes.listitemtext}>Inventaire:</ListItem>
                            <Divider className={classes.divider} />
                            <List>
                            <ListItem button className={classes.listitemtext}>Paramètres</ListItem>
                            </List>
                        </List>
                    </Grid>

                </Grid>
            </Container>
        </>
    )
}