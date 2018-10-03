import React, { Fragment } from 'react'
import { Grid, Paper, Typography } from '@material-ui/core/'
import List from '@material-ui/core/List';
import { ListItem, ListItemText } from '@material-ui/core/'

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflow: 'auto'
  }
}

export default ({ exercises }) =>
  <Grid container sm>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {exercises.map(([group, exercises]) =>
          <Fragment>
          <Typography
            variant="headline"
            style={{ textTransform: 'capitalize' }}
            >
            {group}
          </Typography>
          <List component="ul">
            {exercises.map(({ title }) =>
            <ListItem button>
              <ListItemText primary={title} />
            </ListItem>
          )}
      </List>
      </Fragment>
      )}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>
        <Typography
          variant="display"
        >
          welcolme!
        </Typography>
      </Paper>
    </Grid>
  </Grid>
