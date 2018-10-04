import React from 'react'
import { AppBar, Typography } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import CreateDialog from '../Exercises/Dialogs/Create';

export default ({ muscles }) =>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="headline" color="inherit" style={{flex: 1}}>
              Exercise Database
        </Typography>

        <CreateDialog muscles={muscles} />
      </Toolbar>
    </AppBar>
