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
    Menu,
    MenuItem,
    Paper,
    Typography
} from '@material-ui/core';
import {
    makeStyles
} from '@material-ui/core/styles';
import human1 from '../../images/humans/human1.png';
import human2 from '../../images/humans/human2.png';
import human3 from '../../images/humans/human3.png';
import human4 from '../../images/humans/human4.png';
import {
    FONTS,
    KEYS
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
    },
    image: {
        height: 100,
        width: 100,
        margin: 0
    },
    settingsMenu: {
        fontFamily: FONTS.BODY,
        backgroundColor: 'red'
    }
}))

const humans = [
    human1,
    human2,
    human3,
    human4
]

export default function GamePageSolo() {
    const [anchorEl, setAnchorEl] = useState(null)
    const [isSettingsMenuOpen, setIsSettingMenuOpen] = useState(false);
    const classes = useStyles();

    const onClickSettingsMenuButton = (event) => {
        setAnchorEl(event.currentTarget);
        // setIsSettingMenuOpen(!isSettingsMenuOpen);
    }

    const onCloseSettingsMenu = () => {
        setAnchorEl(null);
    }

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
                            
                            <ListItem className={classes.listitemtext}>Nom: {localStorage.getItem(KEYS.playerName)}</ListItem>
                            <ListItem className={classes.listitemtext}>Santé: {localStorage.getItem(KEYS.playerHealth)}%</ListItem>
                            <ListItem>
                                <img
                                    className={classes.image}
                                    src={humans[localStorage.getItem(KEYS.playerAvatarId)]}
                                />
                            </ListItem>
                            <Divider className={classes.divider} />
                            <List>
                                <ListItem button onClick={onClickSettingsMenuButton} className={classes.listitemtext}>Paramètres</ListItem>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={onCloseSettingsMenu}
                                    PaperProps={{style: {
                                        color: 'white',
                                        backgroundColor: '#3c3742'
                                    }}}
                                    MenuListProps={{
                                        style: {
                                            fontFamily: FONTS.BODY,
                                        }
                                    }}
                                >
                                    <MenuItem>À propos</MenuItem>
                                    <MenuItem>Passer à l'anglais</MenuItem>
                                    <MenuItem>Quitter</MenuItem>
                                </Menu>
                            </List>
                        </List>
                    </Grid>

                </Grid>
            </Container>
        </>
    )
}