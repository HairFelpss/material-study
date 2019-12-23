import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import drawerBgImage from '../../Images/bg.jpg';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    backgroundImage: 'url(' + drawerBgImage + ')',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundImage: 'url(' + drawerBgImage + ')',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  whiteColor:{
    color: '#fff',
  },
  title: {
    paddingLeft: theme.spacing(3),
  },
  dividerColor: {
    backgroundColor: '#fff',
  },
}));

export default function MiniDrawer({ toggleDrawer, open }) {
  const classes = useStyles();
  const theme = useTheme();

  const firstListDrawerOptions = [
    {id: 1, title: 'Felipe Alves', initial:<Avatar src="/static/images/avatar/3.jpg" />},
    {id: 1, title: 'My Profile', initial: 'MP'},
    {id: 2, title: 'Edit Profile', initial: 'EP'},
    {id: 3, title: 'Settings', initial: 'S'},
 ]

  const secondListDrawerOptions = [
      {id: 0, title: 'Dashboard', image:<DashboardIcon />},
      {id: 1, title: '7 Notifications', image:<NotificationsIcon />},
      {id: 2, title: 'Profile', image:<PersonIcon />},
  ]


  return (
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton className={classes.whiteColor} onClick={() => toggleDrawer()}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider className={classes.dividerColor}/>
        <List>
          {firstListDrawerOptions.map(options => (
          <ListItem button key={options.id}>
            <ListItemIcon className={classes.whiteColor}>{options.initial}</ListItemIcon>
            <ListItemText className={classes.whiteColor} primary={options.title} />
          </ListItem>
          ))}
        </List>
        <Divider className={classes.dividerColor} />
        <List>
          {secondListDrawerOptions.map(options => (
            <ListItem button key={options.id}>
             <ListItemIcon className={classes.whiteColor}>{options.image}</ListItemIcon>
             <ListItemText className={classes.whiteColor} primary={options.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
  );
}