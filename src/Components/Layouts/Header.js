import React from 'react'
import { AppBar, Typography } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';

export default props =>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="headline" color="inherit">
              Display 4
        </Typography>
      </Toolbar>
    </AppBar>
