import {
    Grid,
    Typography
} from '@material-ui/core';
import {
    makeStyles
} from '@material-ui/core/styles';
import {
    FONTS,
    KEYS
} from '../../constants';

const useStyles = makeStyles((theme) => ({
    storyPanel: {
        color: "white",
        fontSize: "1.5em",
        minHeight: 550,
        border: "2px white solid",
        padding: 20
    },
    storyPanelText: {
        fontFamily: FONTS.BODY,
        margin: 15,
        lineHeight: 1.75,
        fontSize: 18
    },
    storyPanelTextLocation: {
        fontFamily: FONTS.BODY,
        fontSize: 18
    },
    storyPanelTextPrompt: {
        fontFamily: FONTS.BODY,
        fontSize: 18,
        fontWeight: "bold",
        margin: 15,
        lineHeight: 1.75
    }
}))

export default function StoryPanel({currentScene}) {
    const classes = useStyles();
    return (
        <Grid item className={classes.storyPanel}>
        <Typography component="p" gutteclassrBottom paragraph className={classes.storyPanelTextLocation}>Emplacement: {currentScene.location}</Typography>
        <Typography component="p" className={classes.storyPanelText}>
            {currentScene.description}
        </Typography>
        <Typography component="p" className={classes.storyPanelTextPrompt}>
            {currentScene.prompt}
        </Typography>
    </Grid>
    )
}