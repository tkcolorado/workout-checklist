import React,{ Component } from 'react'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// const styles = theme => ({
//   FormControl: {
//     width: 250
//   }
// })

export default class extends Component {
  state = this.getInitState()

  getInitState() {
    const { exercise } = this.props

    return exercise ? exercise : {
      title: '',
      description: '',
      muscles: ''
    }
  }

  // static getDerivedStateFromProps({ exercise }) {
  //   return exercise || null
  // }

  handleChange = name => ({ target: { value } }) =>
    this.setState({
      [name]: value
    })


    handleSubmit = () => {
      // TODO: validate

      this.props.onSubmit({
        id: this.state.title.toLocaleLowerCase().replace(/ /g, '-'),
        ...this.state
      })

      // this.setState(this.getInitState())
    }

  render() {
    const { title, description, muscles } = this.state,
          { exercise, muscles: categories } = this.props

    return <form>
    <TextField
      label="Title"
      value={title}
      onChange={this.handleChange('title')}
      margin="normal"
      fullWidth
    />
    <br/>
    <FormControl fullWidth>
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
      fullWidth
    />
    <br/>
    <Button
      color="primary"
      variant="raised"
      onClick={this.handleSubmit}
      disabled={!title || !muscles}
    >
      {exercise ? 'Edit' : 'Create'}
    </Button>

    </form>
  }
}
