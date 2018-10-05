import React,{ Component } from 'react'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  FormControl: {
    width: 100
  }
})

export default withStyles(styles)(class extends Component {
  state = this.getInitState()

  getInitState() {
    const { exercise } = this.props

    return exercise ? exercise : {
      title: '',
      description: '',
      muscles: ''
    }
  }

  handleChange = name => ({ target: { value } }) =>
    this.setState({
        [name]: value
    })

  handleSubmit = () => {
    // todo: validate

    const { exercise } = this.state

    this.props.onSubmit({
      ...exercise,
      id: exercise.title.toLocaleLowerCase().replace(/ /g, '-')
    })

    this.setState({
      open: false,
      exercise: {
        title: '',
        description: '',
        muscles: ''
      }
    })
  }

  render() {
    const { title, description, muscles } = this.state,
          { classes, muscles: categories } = this.props

    return <form>
    <TextField
      label="Title"
      value={title}
      onChange={this.handleChange('title')}
      margin="normal"
      className={classes.FormControl}
    />
    <br/>
    <FormControl className={classes.FormControl}>
   <InputLabel htmlFor="muscles">
     Muscles
   </InputLabel>
   <Select
     native
     value={muscles}
     onChange={this.handleChange('muscles')}
   >
     {categories.map(category =>
       <option key={category} value={category}>
         {category}
       </option>
     )}
   </Select>
 </FormControl>
    <br/>
    <TextField
      multiline
      rows="4"
      label="Description"
      value={description}
      onChange={this.handleChange('description')}
      margin="normal"
      className={classes.FormControl}
    />
    <br/>
    <Button
      color="primary"
      variant="raised"
      onClick={this.handleSubmit}
    >
      Create
    </Button>

    </form>
  }
})
