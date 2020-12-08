import {
    Box,
    Button,
    Grid,
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
    choicePanel: {
        height: "50%",
    }
}))

export default function ChoicesPanel({currentScene, updateScene}) {
    const classes = useStyles();

    return (
        <Grid item direction="column">
            <Grid item>
                {currentScene.choices[0] ? (
                    <Box className={classes.choicePanel}>
                        <Button onClick={() => updateScene(currentScene, 0)} variant="contained" className={classes.button} fullWidth>{currentScene.choices[0]["buttonLabel"]}</Button>
                    </Box>
                ) : null}
            </Grid>
            <Grid item>
                {currentScene.choices[1] ? (
                    <Box className={classes.choicePanel}>
                        <Button onClick={() => updateScene(currentScene, 1)} variant="contained" className={classes.button} fullWidth>{currentScene.choices[1]["buttonLabel"]}</Button>
                    </Box>
                    ) : null}
            </Grid>
            <Grid item>
            {currentScene.choices[2] ? (
                    <Box className={classes.choicePanel}>
                        <Button onClick={() => updateScene(currentScene, 2)} variant="contained" className={classes.button} fullWidth>{currentScene.choices[2]["buttonLabel"]}</Button>
                    </Box>
                ) : null}
            </Grid>
        </Grid>

    )
}