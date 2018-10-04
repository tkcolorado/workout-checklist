import React, { Component, Fragment } from 'react';
import { Add } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
    const { open } = this.state

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
           <form>
           </form>
         </DialogContent>
         <DialogActions>

           <Button color="primary" variant="raised">
             Create
           </Button>
         </DialogActions>
       </Dialog>
    </Fragment>
  }
}
