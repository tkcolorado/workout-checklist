import React, { Component, Fragment } from 'react';
import { Add } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

//Native select
import Form from './Form'

export default class extends Component {
  state = {
    open: false
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const { open } = this.state,
          { muscles, onCreate } = this.props

    return <Fragment>
       <Button variant="fab" onClick={this.handleToggle} mini>
         <Add/>
       </Button>

      <Dialog
         open={open}
         onClose={this.handleToggle}
       >
         <DialogTitle id="form-dialog-title">
           Create a new exercise
         </DialogTitle>
         <DialogContent>
           <DialogContentText>
             please fill out the form below
           </DialogContentText>
           <Form
            muscles={muscles}
            onSubmit={onCreate}
           />
         </DialogContent>
       </Dialog>
    </Fragment>
  }
}
