import React, { Fragment } from 'react'
import { Grid, Paper, Typography, IconButton } from '@material-ui/core/'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { Edit, Delete } from '@material-ui/icons';
import Form from './Form'

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflow: 'auto'
  }
}

export default ({
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
   <Grid item sm>
     <Paper style={styles.Paper}>
       {exercises.map(([group, exercises]) =>
         !category || category === group
           ? <Fragment key={group}>
               <Typography
                 variant="headline"
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
                       <IconButton onClick={() => onSelectEdit(id)}>
                        <Edit />
                       </IconButton>
                       <IconButton onClick={() => onDelete(id)}>
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
   <Grid item sm>
     <Paper style={styles.Paper}>
      (editMode
        ? <Form
          exercise={exercise}
          muscles={muscles}
          onSubmit={onEdit}
          />
        | <Fragment>
        <Typography
          variant="display1"
        >
          {title}
        </Typography>
        <Typography
          variant="subheading"
          style={{marginTop: 20}}
        >
          {description}
        </Typography>

        </Fragment>
      )
     </Paper>
   </Grid>
 </Grid>
