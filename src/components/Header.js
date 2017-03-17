import React from 'react'
import AppBar from 'material-ui/AppBar'
import { connect } from 'react-redux'
import SettingsIcon from 'material-ui/svg-icons/action/settings'
import IconButton from 'material-ui/IconButton'
import UserState from '../reducers/models/UserState'

class Header extends React.Component {
  static propTypes = {
    user: React.PropTypes.instanceOf(UserState).isRequired,
  }

  onSettingsClicked = () => {
    console.log('clicked the settings!')
  }

  render() {
    let settingsIcon = null

    if (this.props.user.isLoggedIn()) {
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
const mergeProps = stateProps => ({ user: new UserState(stateProps.user) })
const options = {
  areStatesEqual: (prev, next) => new UserState(prev).equals(new UserState(next)),
}

export default connect(stateToProps, null, mergeProps, options)(Header)
