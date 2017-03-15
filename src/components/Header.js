import React from 'react'
import AppBar from 'material-ui/AppBar'
import { connect } from 'react-redux'
import SettingsIcon from 'material-ui/svg-icons/action/settings'
import IconButton from 'material-ui/IconButton'

export default connect()(class Header extends React.Component {
  onSettingsClicked = () => {
    console.log('clicked the settings!')
  }

  render() {
    const settingsIcon = (
      <IconButton>
        <SettingsIcon
          onClick={this.onSettingsClicked}
        />
      </IconButton>
    )

    return (
      <div>
        <AppBar
          title="Health Creds"
          iconStyleLeft={{
            display: 'none',
          }}
          iconElementRight={settingsIcon}
        />
      </div>
    )
  }
})
