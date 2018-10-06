import React from 'react'
import { AppBar, Typography } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import CreateDialog from '../Exercises/Dialog';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  flex: {
    flex: 1
  }
}

export default withStyles(styles)(({ classes }) =>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="headline" color="inherit" className={classes.flex} style={{flex: 1}}>
              Exercise Database
        </Typography>

        <CreateDialog />
      </Toolbar>
    </AppBar>
  )
