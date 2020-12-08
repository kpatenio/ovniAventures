import {
    Grid
} from '@material-ui/core';
import {
    makeStyles
} from '@material-ui/core/styles';
import {
    FONTS
} from '../../constants';
import StoryPanel from './StoryPanel';
import ChoicesPanel from './ChoicesPanel';

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

export default function Panels({currentScene, updateScene}) {
    const classes = useStyles();
    return (
        <Grid item direction="column" xs={8} justify="space-between" className={classes.titleAndPanels}>
            <StoryPanel currentScene={currentScene}/>
            <ChoicesPanel currentScene={currentScene} updateScene={updateScene}/>
        </Grid>
    )
}