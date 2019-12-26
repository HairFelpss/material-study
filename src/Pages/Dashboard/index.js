import React, { useState} from 'react';
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import Drawer from '../../Component/Drawer'
import TopBar from '../../Component/TopBar'


const useStyles = makeStyles(theme => ({
  toolbar: {
    ...theme.mixins.toolbar,
  },
}));


const Dashboard = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const toggleDrawer = (state) => setOpen(state || !open);

    const drawerSM = open ? 4 : 1
    const dashboardSM = open ? 8 : 11
    const drawerMD = open ? 3 : 1
    const dashboardMD = open ? 9 : 11
    const drawerLG = open ? 2 : 1
    const dashboardLG = open ? 10 : 11


    return (
        <>
          <CssBaseline />
          <TopBar toggleDrawer={toggleDrawer} open={open}/>
          <div className={classes.toolbar} />
          <Grid container>
            <Grid item
              sm={drawerSM} 
              md={drawerMD} 
              lg={drawerLG} 
            >
              <Drawer toggleDrawer={toggleDrawer} open={open}/>
            </Grid>
            <Grid item
              sm={dashboardSM}
              md={dashboardMD}
              lg={dashboardLG}
            >
                <Typography paragraph >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                donec massa sapien faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
                </Typography>
            </Grid>
          </Grid>
    </>
    )
};

export default Dashboard;
