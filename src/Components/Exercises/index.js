import React, { Fragment } from 'react'
import { Grid, Paper, Typography, IconButton } from '@material-ui/core/'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { Edit, Delete } from '@material-ui/icons';
import Form from './Form';
import { withStyles } from '@material-ui/core/styles';
import { withContext } from '../../context'

// inline style
const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 3,
    overflow: 'auto',
    [theme.breakpoints.up('sm')]:{
      marginTop: 5,
      height: 'calc(100% - 10px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: '100%'
    }
  },
  '@global': {
    'html, body, #root': {
      height: '100%'
    }
  },
  container: {
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px - 48px)'
    },
    [theme.breakpoints.up('xs')]: {
      height: 'calc(100% - 56px - 48px)'
    }
  },
  item: {
    [theme.breakpoints.down('xs')]: {
      height: '50%'
    }
  }
})

const Exercises =
  ({
    classes,
    muscles,
    getExercisesByMuscles,
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
    <Grid container className={classes.container} >
     <Grid item className={classes.item} xs={12} sm={6}>
       <Paper className={classes.paper}>
         {getExercisesByMuscles.map(([group, exercises]) =>
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
     <Grid item className={classes.item} xs={12} sm={6}>
       <Paper className={classes.paper}>
         <Typography
           variant="display1"
           color='secondary'
           gutterBottom
         >
           {title}
         </Typography>
        (editMode
          ? 
          <Form
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
       </Paper>
     </Grid>
   </Grid>

export default withContext(withStyles(styles)(Exercises))
