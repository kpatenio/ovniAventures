import React, {useState} from 'react';
import {
    Divider,
    Grid,
    List,
    ListItem,
    ListSubheader,
    Menu,
    MenuItem
} from '@material-ui/core';
import {
    KEYS,
    FONTS
} from '../../constants';
import {
    makeStyles
} from '@material-ui/core/styles';
import {useTranslation} from 'react-i18next';

import human1 from '../../images/humans/human1.png';
import human2 from '../../images/humans/human2.png';
import human3 from '../../images/humans/human3.png';
import human4 from '../../images/humans/human4.png';

const useStyles = makeStyles((theme) => ({
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
    image: {
        height: 100,
        width: 100,
        margin: 0
    }
}))

const humans = [
    human1,
    human2,
    human3,
    human4
]

export default function CharacterSideMenu() {
    const classes = useStyles();
    const {t} = useTranslation();
    const [anchorEl, setAnchorEl] = useState();
    
    const onClickSettingsMenuButton = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const onCloseSettingsMenu = () => {
        setAnchorEl(null);
    }


    return (
        <Grid item xs>
            <List className={classes.list} subheader={<ListSubheader component="h2" className={classes.subheader}>{t('soloLabelCharacter')}</ListSubheader>}>
                
                <ListItem className={classes.listitemtext}>{t('soloLabelName')}: {sessionStorage.getItem(KEYS.playerName)}</ListItem>
                {/* <ListItem className={classes.listitemtext}>Santé: {sessionStorage.getItem(KEYS.playerHealth)}%</ListItem> */}
                <ListItem>
                    <img
                        className={classes.image}
                        src={humans[sessionStorage.getItem(KEYS.playerAvatarId)]}
                    />
                </ListItem>
                <Divider className={classes.divider} />
                <List>
                    <ListItem button disableRipple disableTouchRipple disableFocusRipple onClick={onClickSettingsMenuButton} className={classes.listitemtext}>{t('soloLabelSettings')}</ListItem>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={onCloseSettingsMenu}
                        PaperProps={{style: {
                            color: 'black',
                            backgroundColor: 'white'
                        }}}
                        MenuListProps={{
                            style: {
                                fontFamily: FONTS.BODY,
                            }
                        }}
                    >
                        <MenuItem>Coming Soon!</MenuItem>
                    </Menu>
                </List>
            </List>
        </Grid>
    )
}