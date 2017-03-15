import React from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { connect } from 'react-redux'

export default connect()(class Header extends React.Component {
  state = {
    menuOpen: false,
  }

  openDialog = () => {
    this.setState({ menuOpen: true })
  }

  closeDialog = () => {
    this.setState({ menuOpen: false })
  }

  onMenuItemClick = () => {
    this.closeDialog();
  }

  onDrawerRequestChange = (open) => {
    if (open) {
      this.openDialog()
    } else {
      this.closeDialog()
    }
  }

  render() {
    return (
      <div>
        <AppBar
          title="Health Creds"
          iconStyleLeft={{
            display: 'none',
          }}
        />
      </div>
    )
  }
})
