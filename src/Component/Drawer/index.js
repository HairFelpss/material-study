import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { Input } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MoodIcon from '@material-ui/icons/Mood';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import drawerBgImage from '../../Images/bg.jpg';

const drawerWidth = 300;

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
    backgroundImage: 'url(' + drawerBgImage + ')',
    color: '#fff',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  icon:{
    color: '#fff',
  },
  title: {
    paddingLeft: theme.spacing(3),
  },
  dividerColor: {
    backgroundColor: '#fff',
  },
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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

  const drawer = (
    <div>
      <h3 className={classes.title}>SYSMAP DASHBOARD</h3>
      <Divider className={classes.dividerColor} variant="middle" />
      <List>
        {firstListDrawerOptions.map(options => (
          <ListItem button key={options.id}>
            <ListItemIcon className={classes.icon}>{options.initial}</ListItemIcon>
            <ListItemText primary={options.title} />
          </ListItem>
        ))}
      </List>
      <Divider className={classes.dividerColor} variant="middle" />
      <Input className={classes.icon} placeholder="Pesquisar" autoFocus/>
      <SearchIcon />
      <List>
        {secondListDrawerOptions.map(options => (
          <ListItem button key={options.id}>
            <ListItemIcon className={classes.icon}>{options.image}</ListItemIcon>
            <ListItemText primary={options.title} />
          </ListItem>
        ))}
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
            edge="end"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
            {console.log('acerto mizeravi')}
          </IconButton>
          <Typography variant="h6" noWrap>
            Dashboard
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
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
             dashboard vai aqui
        </Typography>
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default ResponsiveDrawer;
