import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Assignment from '@material-ui/icons/Assignment';
import ContactMail from '@material-ui/icons/ContactMail';
import Description from '@material-ui/icons/Description';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft(props) {
  const nameToInd = {
    "about-me": 0,
    "projects": 1,
    "resume": 2,
    "contact-info": 3
  }

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(nameToInd[props.currPage]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleListItemClick = (name) => {
    setSelectedIndex(nameToInd[name]);
    props.pageChange(name);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Nicholas Jones - Software Engineer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
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
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
      </main>
    </div>
  );
}

PersistentDrawerLeft.propTypes = {
  pageChange: PropTypes.func.isRequired,
  //currPage: PropTypes.string.isRequired
}