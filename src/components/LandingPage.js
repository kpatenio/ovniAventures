import React, { useState, useEffect } from 'react';
import {
    makeStyles
} from '@material-ui/core/styles';
import {
    Box,
    Button,
    Container,
    InputLabel,
    Link,
    TextField,
    Typography
} from '@material-ui/core';
import {
    useHistory
} from 'react-router-dom';
import {
    AVATARS,
    FONTS,
    MODES,
    KEYS
} from '../constants';
import CharacterSelect from './CharacterSelect'
import { useTranslation } from 'react-i18next';

/**
 * This ensures that we customize styling of Material UI components.
 * This could potentially be refactored using something more structured like "ThemeProvider" sometime in the future.
 * 
 * Source: https://material-ui.com/styles/advanced/#overriding-styles-classes-prop
 */
const useStyles = makeStyles((theme) => ({
    button: {
        fontFamily: FONTS.BODY,
        marginBotton: 10,
        marginTop: 10
    },
    h1: {
      fontFamily: FONTS.TITLE,
      color: "white",
    },
    h2: {
        fontFamily: FONTS.BODY,
        color: "white",
        fontWeight: "bold",
        marginBottom: 20
    },
    h3: {
        fontFamily: FONTS.BODY,
        color: "white",
        fontSize: "1.5em",
        lineHeight: 2
    },
    hr: {
        marginTop: 30,
        marginBottom: 30 
    },
    bodyText: {
        fontFamily: FONTS.BODY,
        color: "white",
        fontSize: 16,
        lineHeight: 2
    },
    warning: {
        fontFamily: FONTS.BODY,
        color: "white",
        fontSize: "1.1em",
        lineHeight: 2,
    },
    warningLabel: {
        fontWeight: "bold"
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
    earth: {
        height: 200,
        width: 200,
    },
    textfield: {
        backgroundColor: "white",
        color: "black",
        fontFamily: FONTS.BODY,
        height: 40,
        padding: 10
    },
    box: {
        padding: 30,
    },
    rules: {
        margin: 10
    }
}))

let listOfAvatars = [];
for (let key in AVATARS) {
    listOfAvatars.push(key)
}

function LandingPage() {

    const classes = useStyles();
    const history = useHistory();
    const {t, i18n} = useTranslation();

    const [playerName, setPlayerName] = useState()
    const [isInvalidName, setIsInvalidName] = useState(true);
    const [mode, setMode] = useState('')
    const [playerAvatarId, setPlayerAvatarId] = useState(0);

    const onClickLeft = () => {
        if (playerAvatarId === 0) {
            setPlayerAvatarId(3);
        } else {
            setPlayerAvatarId(playerAvatarId - 1);
        }
    }

    const onClickRight = () => {
        if (playerAvatarId === 3) {
            setPlayerAvatarId(0);
        } else {
            setPlayerAvatarId(playerAvatarId + 1);
        }
    }

    const onClickSolo = (e) => {
        if (!isInvalidName) {
            setMode(MODES.SINGLEPLAYER);
        }
    }

    const onChangeNameModalInput = (e) => {
        setPlayerName(e.target.value);
    }

    useEffect(() => {
        if (playerName === undefined || !playerName.trim()) {
            setIsInvalidName(true);
        } else {
            setIsInvalidName(false);
        }
    }, [playerName])

    useEffect(() => {
        if (mode === MODES.SINGLEPLAYER) {
            sessionStorage.setItem(KEYS.playerName, playerName);
            sessionStorage.setItem(KEYS.playerAvatarId, playerAvatarId);
            sessionStorage.setItem(KEYS.playerHealth, 100);
            history.push('/' + MODES.SINGLEPLAYER);
        }
    }, [mode])

    return (
        <>
            <Container>
                <Box component="main">
                    <Box className={classes.box}>
                        <Typography variant="h2" className={classes.h2}>
                            {t('landingSubheader')}
                        </Typography>
                        <Typography variant="h3" className={classes.h3} paragraph>
                            {t('landingDescription')}
                        </Typography>
                        <Typography variant="h4" className={classes.warning} paragraph>
                            {t('landingDisclaimer1')}
                            {'\xa0'}
                            <Box component="span" className={classes.warningLabel}>{t('landingDisclaimer1Bolded')}</Box>
                        </Typography>

                        <hr className={classes.hr}/>

                        <InputLabel style={{color: "white", fontFamily: FONTS.BODY, marginBottom: 10, fontSize: 16}}>
                            {t('landingLabelInputName')}
                        </InputLabel>

                        <TextField onChange={onChangeNameModalInput} variant="standard" fullWidth InputProps={{className: classes.textfield}}/>
                        <Button className={classes.button} onClick={onClickSolo} disabled={isInvalidName} variant="contained" color="primary" size="large" fullWidth>
                            {t('landingLabelNewGame')}
                        </Button>
                        <CharacterSelect onClickLeft={onClickLeft} onClickRight={onClickRight} playerAvatarId={playerAvatarId}/>
                    </Box>


                    <Box className={classes.box}>
                        <Typography variant="h2" className={classes.h2}>
                            {t('landingSubheaderAbout')}:
                        </Typography>
                        <Typography variant="body1" className={classes.bodyText}>
                            <Box component="span" fontStyle="italic">Ovni aventures{'\xa0'}</Box>
                            {t('landingAboutIsInspiredBy')}
                            <Box component="span" fontStyle="italic">{'\xa0'}OVNI{'\xa0'}</Box>
                            {t('landingAboutOfAuthors')}
                            {'\xa0'}
                            {t('landingAboutCreatedBy')}
                            {'\xa0'}
                            <Link href="https://github.com/kpatenio/ovniAventures" underline="always" target="_blank" rel="noopener">Katherine Patenio</Link>
                            {','}
                            {'\xa0'}
                            {t('landingAboutProjectClassCopyright')}
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default LandingPage;