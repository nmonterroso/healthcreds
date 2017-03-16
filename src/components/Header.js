import React from 'react'
import AppBar from 'material-ui/AppBar'
import { connect } from 'react-redux'
import SettingsIcon from 'material-ui/svg-icons/action/settings'
import IconButton from 'material-ui/IconButton'

class Header extends React.Component {
  static propTypes = {
    userToken: React.PropTypes.string,
  }

  onSettingsClicked = () => {
    console.log('clicked the settings!')
  }

  render() {
    let settingsIcon = null;

    if (this.props.userToken) {
      settingsIcon = (
        <IconButton>
          <SettingsIcon
            onClick={this.onSettingsClicked}
          />
        </IconButton>
      )
    }

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
}

const stateToProps = state => ({ user: state.user })
const mergeProps = stateProps => ({ userToken: stateProps.user.token })
const options = {
  areStatesEqual: (prev, next) => prev.token === next.token,
}

export default connect(stateToProps, null, mergeProps, options)(Header)
