import React, { useState, useEffect } from 'react';
import {
    makeStyles
} from '@material-ui/core/styles';
import {
    Box,
    Button,
    Container,
    Grid,
    InputLabel,
    Link,
    TextField,
    Typography
} from '@material-ui/core';
import {
    useHistory
} from 'react-router-dom';
import {
    FONTS,
    MODES
} from '../constants';
import ovni from '../ovni-transparent.png';
import earth from '../earth.png';

const useStyles = makeStyles((theme) => ({
    button: {
        // border: "5px solid white",
        fontFamily: FONTS.BODY,
        fontWeight: "bold",
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
        marginBottom: 20
    },
    hr: {
        marginTop: 30,
        marginBottom: 30 
    },
    bodyText: {
        fontFamily: FONTS.BODY,
        color: "white"
    },
    image: {
        height: 200,
        width: 200,
    },
    earth: {
        height: 200,
        width: 200,
    },
    textfield: {
        backgroundColor: "white",
        // backgroundColor: "#1e1c21",
        color: "black",
        fontFamily: FONTS.BODY,
        height: 40,
        padding: 10
    },
    box: {
        padding: 30,
        // width: "50%"
        // backgroundColor: "#352945",
        // border: "2px solid black"
    }
}))

function LandingPage() {

    const classes = useStyles();

    const [playerName, setPlayerName] = useState()
    const [isInvalidName, setIsInvalidName] = useState(true);
    const [mode, setMode] = useState('')
    const history = useHistory();

    const onClickSolo = (e) => {
        if (!isInvalidName) {
            setMode(MODES.SINGLEPLAYER);
        }
    }

    const onChangeNameModalInput = (e) => {
        setPlayerName(e.target.value)
    }

    useEffect(() => {
        if (playerName === undefined || !playerName.trim()) {
            setIsInvalidName(true)
        } else {
            setIsInvalidName(false)
        }
    }, [playerName])

    useEffect(() => {
        // TODO - constant
        if (mode === MODES.SINGLEPLAYER) {
            history.push('/' + MODES.SINGLEPLAYER)
        }
    }, [mode])

    return (
        <>
            <Container>
                <Box component="header">
                    <Grid direction="row" container justify="space-between" className={classes.h1}>
                        <Grid item xs>
                            <Typography variant="h1" className={classes.h1}>
                                OVNI Aventures
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <img className={classes.image} src={ovni}/>
                        </Grid>
                    </Grid>
                    <hr className={classes.hr}/>
                </Box>
                
                <Box component="main">
                    <Box className={classes.box}>
                        <Typography variant="h2" className={classes.h2}>
                                Mode en solo
                        </Typography>
                        <Typography variant="body1" className={classes.bodyText} paragraph>
                            Affrontez les conséquences d'un adversaire CPU! L'ovni prendra une décision au hasard, alors il faut être prêt.e à s'adapter pour survivre.
                        </Typography>
                        <InputLabel style={{color: "white", fontFamily: FONTS.BODY, marginBottom: 10}}>
                        Saisir votre nom pour commencer:
                        </InputLabel>
                        <TextField onChange={onChangeNameModalInput} variant="standard" fullWidth InputProps={{className: classes.textfield}}/>
                        <Button className={classes.button} onClick={onClickSolo} disabled={isInvalidName} variant="contained" color="primary" size="large" fullWidth>
                            Nouvelle partie
                        </Button>
                    </Box>

                    <Box className={classes.box}>
                        <Typography variant="h2" className={classes.h2}>
                            Les règles
                        </Typography>
                        <Typography variant="body1" className={classes.bodyText}>
                            Assumer le rôle d'un personnage humain et affronter les conséquences de vos propres décisions... ainsi que celles d'autres! Essayez-vous de survivre jusqu'à la fin du jeu en faisant le bon choix pendant votre parcours.
                        </Typography>
                        <ul className={classes.bodyText}>
                            <li>L'ovni et vous, vous jouerez à tour de rôle, et chaque décision affecte les décisions possibles pour chaque joueur.</li>
                            <li>Vous commencez avec la santé pleine - un action nuisible la deminue. Si votre santé est toute épuisée, c'est « game over » pour vous!</li>
                            <li>Si vous survivez la partie, vous gagnerez!</li>
                        </ul>
                    </Box>

                    <Box className={classes.box}>
                        <Typography variant="h2" className={classes.h2}>
                            À propos
                        </Typography>
                        <Typography variant="body1" className={classes.bodyText}>
                            <Box component="span" fontStyle="italic">Ovni aventures</Box> est inspiré par le livre <Box component="span" fontStyle="italic">OVNI</Box> des auteurs Fabrice Parme et Lewis Trondheim. Réalisé par <Link href="https://github.com/kpatenio/ovniAventures" underline="always" target="_blank" rel="noopener"> Katherine Patenio</Link>, le jeu est un recréation du livre original en format numérique et de la perspective d'un personnage humain.    
                        </Typography>
                    </Box>

                    <Grid container justify="center">
                        <Grid item>
                            <img className={classes.earth} src={earth}/>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default LandingPage;