import React from 'react'
import { // imports necessarios do material-ui
    makeStyles,
    AppBar,
    Toolbar,
    IconButton,
    Button,
    Drawer,
    List,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import AppsIcon from '@material-ui/icons/Apps'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import HomeIcon from '@material-ui/icons/Home'
import Subscriptions from '@material-ui/icons/Subscriptions'
import Whatshot from '@material-ui/icons/Whatshot'

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.primary.main,
        height: '100vh' 
    },

    appBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1
    },

    menuIcon: {
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2)
    },

    drawer: {
        width: 240,
        flexShrink: 0
    },

    drawerPaper: {
        width: 240,
        borderRight: 'none'
    },

    icons: {
        paddingRight: theme.spacing(2)
    },

    logo: {
        height: 25,
    },

    grow: {
        flexGrow: 1
    },

    listItemText: {
        fontSize: 14
    }
}))


function Home(){
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar color='inherit' className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuIcon} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>

                    <img className={classes.logo} src='/images/black.png' alt='YouTube'/>

                    <div  className={classes.grow}/>
                    
                    <IconButton className={classes.icons} color="inherit">
                        <VideoCallIcon />
                    </IconButton>                 
                    
                    <IconButton className={classes.icons} color="inherit">
                        <AppsIcon />
                    </IconButton>
                    
                    <IconButton className={classes.icons} color="inherit">
                        <MoreVertIcon />
                    </IconButton>
                    
                    <Button startIcon={<AccountCircleIcon />} variant='outlined' color="secondary">Fazer Login</Button>
                </Toolbar>
            </AppBar>

            <Drawer className={classes.drawer} variant='permanent' classes={{paper: classes.drawerPaper}}>
                <Toolbar>
                    <div className={classes.drawerContainer}>
                        <List>
                            <ListItem button>
                                <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                                <ListItemText classes={{primary: classes.listItemText}} primary={'Inicio'} />
                            </ListItem>

                            <ListItem button>
                                <ListItemIcon>{<Whatshot />}</ListItemIcon>
                                <ListItemText classes={{primary: classes.listItemText}} primary={'Em Alta'} />
                            </ListItem>

                            <ListItem button>
                                <ListItemIcon>{<Subscriptions />}</ListItemIcon>
                                <ListItemText classes={{primary: classes.listItemText}} primary={'Inscrições'} />
                            </ListItem>
                        </List>

                        <Divider />
                    </div>
                </Toolbar>
            </Drawer>

        </div>
    )
}

export default Home