import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import logo from '../../Images/logo.png';

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: 'transparent',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  whiteColor:{
    color: '#fff',
  },
  hide: {
    display: 'none',
  },
  title: {
    color: '#000',
  },
  logoImg: {
    width: 23,
  },
}));

export default function TopBar({ open, toggleDrawer }) {
  const classes = useStyles();

  return (
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <h4
            className={clsx({
              [classes.hide]: open,
            })}
          >
            <img src={logo} className={classes.logoImg} alt=''/>
          </h4>
          <Typography variant="h6" noWrap className={classes.title}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => toggleDrawer()}
            className={classes.btn}
          >
            <ChevronRightIcon />
          </IconButton>
          </Typography>
        </Toolbar>
      </AppBar>  
  );
}