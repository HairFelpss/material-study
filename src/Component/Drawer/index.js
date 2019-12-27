import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import drawerBgImage from '../../Images/bg.jpg';

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
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
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
  },
  transparentBg: {
    backgroundColor: 'transparent',
  },
  icon: {
    marginHorizontal: theme.spacing(5),
    color: '#fff',
  },
  hideIcon: {
    display: 'none',
  },
  content: {
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

export default function MiniDrawer({ open }) {
  const classes = useStyles();

  const firstListDrawerOptions = [
    {id: 0, title: 'Felipe Alves', initial:<Avatar className={classes.transparentBg} src="/static/images/avatar/3.jpg" />},
    {id: 1, title: 'My Profile', initial: <Avatar className={classes.transparentBg}>MP</Avatar>},
    {id: 2, title: 'Edit Profile', initial: <Avatar className={classes.transparentBg}>EP</Avatar>},
    {id: 3, title: 'Settings', initial: <Avatar className={classes.transparentBg}>S</Avatar>},
 ]

  const secondListDrawerOptions = [
      {id: 0, title: 'Dashboard', image:<Avatar className={classes.transparentBg}><DashboardIcon /> </Avatar>},
      {id: 1, title: '7 Notifications', image:<Avatar className={classes.transparentBg}><NotificationsIcon /> </Avatar>},
      {id: 2, title: 'Profile', image:<Avatar className={classes.transparentBg}><PersonIcon /> </Avatar>},
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
          <h4 className={clsx({ 
            [classes.icon]: open,
            [classes.hideIcon]: !open,
            })}
          >
            SYSMAP 
          </h4>
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