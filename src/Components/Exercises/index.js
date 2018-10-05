import React, { Fragment } from 'react'
import { Grid, Paper, Typography, IconButton } from '@material-ui/core/'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { Edit, Delete } from '@material-ui/icons';
import Form from './Form';
import { withStyles } from '@material-ui/core/styles';

// inline style
const styles = theme => ({
  Paper: {
    padding: 20,
    marginTop: 5,
    height: 500,
    overflow: 'auto'
  }
})

export default withStyles(styles)(
  ({
    classes,
    muscles,
    exercises,
    category,
    editMode,
    onSelect,
    exercise,
    exercise: {
      id,
      title = 'welcome',
      description = "please select an exercise from the list on the left."
    },
    onDelete,
    onSelectEdit,
    onEdit
    }) =>
    <Grid container>
     <Grid item xs={12} sm={6}>
       <Paper className={classes.Paper}>
         {exercises.map(([group, exercises]) =>
           !category || category === group
             ? <Fragment key={group}>
                 <Typography
                   variant='headline'
                   color='secondary'
                   style={{ textTransform: 'capitalize' }}
                 >
                   {group}
                 </Typography>
                 <List component="ul">
                   {exercises.map(({ id, title }) =>
                     <ListItem
                       key={id}
                       button
                       onClick={() => onSelect(id)}
                     >
                       <ListItemText primary={title} />
                       <ListItemSecondaryAction>
                         <IconButton color='primary' onClick={() => onSelectEdit(id)}>
                          <Edit />
                         </IconButton>
                         <IconButton color='primary' onClick={() => onDelete(id)}>
                          <Delete/>
                         </IconButton>
                       </ListItemSecondaryAction>
                     </ListItem>
                   )}
                 </List>
               </Fragment>
             : null
         )}
       </Paper>
     </Grid>
     <Grid item xs={12} sm={6}>
       <Paper className={classes.Paper}>
         <Typography
           variant="display1"
           color='secondary'
           guttorBottom
         >
           {title}
         </Typography>
        (editMode
          ? <Form
            key={id}
            exercise={exercise}
            muscles={muscles}
            onSubmit={onEdit}
            />
          <Typography
            variant="subheading"
          >
            {description}
          </Typography>
        )
       </Paper>
     </Grid>
   </Grid>
)
