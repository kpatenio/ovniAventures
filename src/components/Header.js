import React, { useState, useEffect } from 'react';
import {
    Route,
    NavLink,
} from 'react-router-dom';
import {
    AppBar,
    Box,
    Button,
    Container,
    Grid,
    Typography
} from '@material-ui/core';
import {
    makeStyles
} from '@material-ui/core/styles';
import {
    FONTS,
} from '../constants';
import alien from '../images/alien-transparent.png';
import ufo from '../images/ufo.png'
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => ({
    container: {
        height: 70
    },
    appBarContainer: {
        // background: "transparent",
        boxShadow: "none",
        background: "#1e1c21",
        // background: "#37333d",
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 30,
        paddingTop: 30,
    },
    languageButton: {
        fontSize: 20,
        color: "white",
        fontFamily: FONTS.BODY,
        fontWeight: "bold",
    },
    h1: {
        fontFamily: FONTS.TITLE,
        color: "white",
        fontSize: 30,
      },
    // imageAlien: {
    //     height: 50,
    //     width: 50,
    // },
    // imageUfo: {
    //     height: 175,
    //     width: 175,
    //     marginBottom: 16
    // },
}))

export default function Header() {
    const classes = useStyles();
    const history = useHistory();
    const {t, i18n} = useTranslation();

    const onClickLanguageButtonHandler = () => {
        if (i18n.language === 'en') {
            i18n.changeLanguage('fr')
        } else {
            i18n.changeLanguage('en')
        }
    }

    const onClickHeaderTitle = () => {
        if (history.location.pathname === '/solo') {
            const shouldRedirect = window.confirm(t('headerLeaveDisclaimer'));
            if (shouldRedirect) {
                history.replace('/');
            }
        }
    }

    return (
        <>
            <Container component="header" className={classes.container}>
                <Box component="nav" className={classes.navContainer}>
                    <AppBar position="fixed" className={classes.appBarContainer}>
                        <Grid direction="row" container justify="space-between" className={classes.h1}>
                            <Grid item xs>
                                <Button onClick={onClickHeaderTitle}>
                                    <Typography variant="h1" className={classes.h1}>
                                        OVNI aventures
                                    </Typography>
                                </Button>
                            </Grid>
                            <Grid>
                                <Button onClick={onClickLanguageButtonHandler} disableRipple disableTouchRipple disableFocusRipple className={classes.languageButton}>{t('headerLanguage')}</Button>
                            </Grid>
                            {/* <Grid item xs alignItems="baseline">
                                    <img className={classes.imageAlien} src={alien}/>
                                <img className={classes.imageUfo} src={ufo}/>
                                </Grid> */}
                        </Grid>
                    </AppBar>
                </Box>
            </Container>
        </>
    )
}