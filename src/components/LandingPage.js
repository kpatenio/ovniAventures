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
        marginTop: 10,
        fontSize: FONTS.BODYFONTSIZE,
    },
    h2: {
        fontFamily: FONTS.BODY,
        color: "white",
        fontWeight: "bold",
        marginBottom: 20,
        fontSize: 30,
    },
    hr: {
        marginTop: 30,
        marginBottom: 30 
    },
    bodyText: {
        fontFamily: FONTS.BODY,
        color: "white",
        fontSize: FONTS.BODYFONTSIZE,
        lineHeight: 2
    },
    warning: {
        fontFamily: FONTS.BODY,
        color: "white",
        fontSize: FONTS.BODYFONTSIZE,
        lineHeight: 2,
    },
    warningBold: {
        fontWeight: "bold"
    },
    earth: {
        height: 200,
        width: 200,
    },
    textFieldLabel: {
        color: "white",
        fontFamily: FONTS.BODY,
        marginBottom: 15,
        fontSize: FONTS.BODYFONTSIZE,
    },
    textfield: {
        backgroundColor: "white",
        color: "black",
        fontFamily: FONTS.BODY,
        height: 40,
        padding: 10
    },
    box: {
        marginTop: 30,
        marginBottom: 30,
    },
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
                        <Typography variant="h3" className={classes.bodyText} paragraph>
                            {t('landingDescription')}
                        </Typography>

                        <hr className={classes.hr}/>
                        <Typography variant="h4" className={classes.warning} paragraph>
                            {t('landingDisclaimer1')}
                            {'\xa0'}
                            <Box component="span" className={classes.warningBold}>{t('landingDisclaimer1Bolded')}</Box>
                        </Typography>
                        <hr className={classes.hr}/>

                        <InputLabel className={classes.textFieldLabel}>
                            {t('landingLabelInputName')}
                        </InputLabel>

                        <TextField onChange={onChangeNameModalInput} variant="standard" fullWidth InputProps={{className: classes.textfield}}/>
                        <Button className={classes.button} onClick={onClickSolo} disabled={isInvalidName} variant="contained" color="primary" size="large" fullWidth>
                            {t('landingLabelNewGame')}
                        </Button>
                    </Box>

                    <CharacterSelect onClickLeft={onClickLeft} onClickRight={onClickRight} playerAvatarId={playerAvatarId}/>


                    <Box className={classes.box}>
                        <Typography variant="h2" className={classes.h2}>
                            {t('landingSubheaderAbout')}
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