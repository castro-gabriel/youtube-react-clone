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
    ListSubheader,
    Typography,
    Box,
    Grid,
    Hidden,
    Switch
} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

import MenuIcon from '@material-ui/icons/Menu'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import AppsIcon from '@material-ui/icons/Apps'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import HomeIcon from '@material-ui/icons/Home'
import Subscriptions from '@material-ui/icons/Subscriptions'
import Whatshot from '@material-ui/icons/Whatshot'
import VideoLibrary from '@material-ui/icons/VideoLibrary'
import History from '@material-ui/icons/History'
import AddCircle from '@material-ui/icons/AddCircle'


const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.background.dark,
        height: '100vh'
    },
    appBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
    },
    menuIcon: {
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2)
    },
    drawer: {
        width: 260,
        flexShrink: 0,
    },
    drawerPaper: {
        paddingTop: 70,
        width: 260,
        borderRight: 'none'
    },
    icons: {
        paddingRight: theme.spacing(2)
    },
    logo: {
        height: 27,
    },
    grow: {
        flexGrow: 1
    },
    listItemText: {
        fontSize: 12
    },
    listItem: {
        paddingTop: 5,
        paddingBottom: 5
    },
    subheader: {
        textTransform: 'uppercase'
    }
}))


// Array com os vídes fakes para contrução do layout
const videos = [
    {
        id: 1,
        title:
            'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
        channel: 'Lucas Nhimi',
        views: '11 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb1.png',
    },
    {
        id: 2,
        title:
            'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
        channel: 'Lucas Nhimi',
        views: '957 mil visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb2.png',
    },
    {
        id: 3,
        title:
            'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
        channel: 'Lucas Nhimi',
        views: '106 mil visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb3.png',
    },
    {
        id: 4,
        title:
            'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
        channel: 'Lucas Nhimi',
        views: '5,6 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb4.png',
    },
    {
        id: 5,
        title:
            'EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26',
        channel: 'Lucas Nhimi',
        views: '2,2 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb5.png',
    },
    {
        id: 6,
        title: 'COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01',
        channel: 'Lucas Nhimi',
        views: '233 mil visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb6.png',
    },
    {
        id: 7,
        title:
            'PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01',
        channel: 'Lucas Nhimi',
        views: '118 mil visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb7.png',
    },
    {
        id: 8,
        title:
            'GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04',
        channel: 'Lucas Nhimi',
        views: '1,9 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb8.png',
    },
];

function Home({darkMode, setDarkMode}) {
    const classes = useStyles()
    const theme = useTheme()

    return (
        <div className={classes.root}>
            <AppBar color='inherit' className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuIcon} aria-label="menu">
                        <MenuIcon />
                    </IconButton>

                    <img 
                        className={classes.logo} 
                        src={theme.palette.type === 'dark' ? '/images/white.png': '/images/black.png'} 
                        alt='YouTube' />

                    <div className={classes.grow} />

                    <Switch value={darkMode} onChange={() => setDarkMode(!darkMode)} className={classes.icon}/>

                    <IconButton className={classes.icons} >
                        <VideoCallIcon />
                    </IconButton>

                    <IconButton className={classes.icons} >
                        <AppsIcon />
                    </IconButton>

                    <IconButton className={classes.icons} >
                        <MoreVertIcon />
                    </IconButton>

                    <Button startIcon={<AccountCircleIcon />} variant='outlined' color="secondary">Fazer Login</Button>
                </Toolbar>
            </AppBar>

            <Box display='flex'>
                <Hidden mdDown>

                    <Drawer className={classes.drawer} variant='permanent' classes={{ paper: classes.drawerPaper }}>
                        <Toolbar>
                            <div className={classes.drawerContainer}>
                                <List>
                                    <ListItem button classes={{ root: classes.listItem }}>
                                        <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                                        <ListItemText classes={{ primary: classes.listItemText }} primary={'Inicio'} />
                                    </ListItem>

                                    <ListItem button classes={{ root: classes.listItem }}>
                                        <ListItemIcon>{<Whatshot />}</ListItemIcon>
                                        <ListItemText classes={{ primary: classes.listItemText }} primary={'Em Alta'} />
                                    </ListItem>

                                    <ListItem button classes={{ root: classes.listItem }}>
                                        <ListItemIcon>{<Subscriptions />}</ListItemIcon>
                                        <ListItemText classes={{ primary: classes.listItemText }} primary={'Inscrições'} />
                                    </ListItem>
                                </List>

                                <Divider />

                                <List>
                                    <ListItem button classes={{ root: classes.listItem }}>
                                        <ListItemIcon>{<VideoLibrary />}</ListItemIcon>
                                        <ListItemText classes={{ primary: classes.listItemText }} primary={'Biblioteca'} />
                                    </ListItem>

                                    <ListItem button classes={{ root: classes.listItem }}>
                                        <ListItemIcon>{<History />}</ListItemIcon>
                                        <ListItemText classes={{ primary: classes.listItemText }} primary={'Histórico'} />
                                    </ListItem>
                                </List>

                                <Divider />

                                <Box p={2}>
                                    <Typography variant='body2'>
                                        Faça Login para curtir vídeos, comentar e se inscrever
                            </Typography>

                                    <Box mt={2}>
                                        <Button variant='outlined' color='secondary' startIcon={<AccountCircleIcon />}>
                                            Fazer Login
                                </Button>
                                    </Box>
                                </Box>

                                <Divider />

                                <List
                                    component='nav'
                                    arial-labelledby='nested-list-subheader'
                                    subheader={
                                        <ListSubheader
                                            component='div'
                                            id='nested-list-subheader'
                                            className={classes.subheader}>
                                            O Melhor do YouTube
                                </ListSubheader>
                                    }>
                                    <ListItem button classes={{ root: classes.listItem }}>
                                        <ListItemIcon>{<AddCircle />}</ListItemIcon>
                                        <ListItemText classes={{ primary: classes.listItemText }} primary={'Músicas'} />
                                    </ListItem>

                                    <ListItem button classes={{ root: classes.listItem }}>
                                        <ListItemIcon>{<AddCircle />}</ListItemIcon>
                                        <ListItemText classes={{ primary: classes.listItemText }} primary={'Esportes'} />
                                    </ListItem>

                                    <ListItem button classes={{ root: classes.listItem }}>
                                        <ListItemIcon>{<AddCircle />}</ListItemIcon>
                                        <ListItemText classes={{ primary: classes.listItemText }} primary={'Jogos'} />
                                    </ListItem>

                                    <ListItem button classes={{ root: classes.listItem }}>
                                        <ListItemIcon>{<AddCircle />}</ListItemIcon>
                                        <ListItemText classes={{ primary: classes.listItemText }} primary={'Filmes'} />
                                    </ListItem>

                                    <ListItem button classes={{ root: classes.listItem }}>
                                        <ListItemIcon>{<AddCircle />}</ListItemIcon>
                                        <ListItemText classes={{ primary: classes.listItemText }} primary={'Ao Vivo'} />
                                    </ListItem>

                                    <ListItem button classes={{ root: classes.listItem }}>
                                        <ListItemIcon>{<AddCircle />}</ListItemIcon>
                                        <ListItemText classes={{ primary: classes.listItemText }} primary={'Destaques'} />
                                    </ListItem>
                                </List>


                            </div>
                        </Toolbar>
                    </Drawer>
                </Hidden>

                {/** Content - Videos */}
                <Box p={3}>
                    <Toolbar />
                    <Typography
                        variant='h5'
                        color='textPrimary'
                        style={{ fontWeight: 600 }}
                    >
                        Recomendados
                </Typography>

                    <Grid container spacing={4}>
                        {
                            videos.map((item, index) => (
                                <Grid item lf={3} md={4} sm={6} xs={12}>

                                    <Box>
                                        <img style={{ width: '100%' }} alt={item.title} src={item.thumb} />
                                        <Box>
                                            <Typography style={{ fontWeight: '600' }} gutterBottom variant='body1' color='textPrimary'>
                                                {item.title}
                                            </Typography>

                                            <Typography display='block' variant='body2' color='textSecondary'>
                                                {item.channel}
                                            </Typography>

                                            <Typography variant='body2' color='textSecondary'>
                                                {`${item.views} • ${item.date}`}
                                            </Typography>
                                        </Box>
                                    </Box>

                                </Grid>
                            ))
                        }
                    </Grid>


                </Box>

            </Box>
        </div>
    )
}

export default Home