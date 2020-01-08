import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';
import Assignment from '@material-ui/icons/Assignment';
import Description from '@material-ui/icons/Description';
import ContactMail from '@material-ui/icons/ContactMail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function ResponsiveDrawer(props) {
    const nameToInd = {
        "about-me": 0,
        "projects": 1,
        "resume": 2,
        "contact-info": 3
    }
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const mobileOpen = props.mobileOpen;
    const setMobileOpen = props.setMobileOpen;
    const [selectedIndex, setSelectedIndex] = React.useState(nameToInd[props.currPage]);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleListItemClick = (name) => {
        setSelectedIndex(nameToInd[name]);
        props.pageChange(name);
    }

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                <ListItem
                    button key='About me'
                    selected={selectedIndex == nameToInd["about-me"]}
                    onClick={() => handleListItemClick("about-me")}
                >
                    <ListItemIcon><QuestionAnswer /></ListItemIcon>
                    <ListItemText primary={'About me'} />
                </ListItem>
                <ListItem
                    button key='Projects'
                    selected={selectedIndex == nameToInd["projects"]}
                    onClick={() => handleListItemClick("projects")}
                >
                    <ListItemIcon><Assignment /></ListItemIcon>
                    <ListItemText primary={'Projects'} />
                </ListItem>
                <ListItem
                    button key='Resume'
                    selected={selectedIndex == nameToInd["resume"]}
                    onClick={() => handleListItemClick("resume")}
                >
                    <ListItemIcon><Description /></ListItemIcon>
                    <ListItemText primary={'Resume'} />
                </ListItem>
                <ListItem
                    button key='Contact Info'
                    selected={selectedIndex == nameToInd["contact-info"]}
                    onClick={() => handleListItemClick("contact-info")}
                >
                    <ListItemIcon><ContactMail /></ListItemIcon>
                    <ListItemText primary={'Contact Info'} />
                </ListItem>
            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Nicholas Jones - Software Engineer
                    </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    );
}

ResponsiveDrawer.propTypes = {
    pageChange: PropTypes.func.isRequired,
    currPage: PropTypes.string.isRequired,
    mobileOpen: PropTypes.bool.isRequired,
    setMobileOpen: PropTypes.func.isRequired
}
