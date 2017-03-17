import React from 'react'
import { connect } from 'react-redux'
import SettingsIcon from 'material-ui/svg-icons/action/settings'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import UserState from '../../reducers/models/UserState'
import { logout } from '../../actions/user'

class UserActions extends React.Component {
  static propTypes = {
    user: React.PropTypes.instanceOf(UserState).isRequired,
    logout: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      displaySettings: false,
    }
  }

  onLogout = () => {
    this.props.logout()
  }

  render() {
    if (!this.props.user.isLoggedIn()) {
      return false
    }

    const menuIcon = (
      <IconButton>
        <SettingsIcon
          onClick={this.onSettingsClicked}
        />
      </IconButton>
    )

    return (
      <IconMenu
        iconButtonElement={menuIcon}
      >
        <MenuItem
          onTouchTap={this.onLogout}
          leftIcon={<SettingsIcon />} // TODO: get a logout icon
          primaryText="Logout"
        />
      </IconMenu>
    )
  }
}

const stateToProps = state => ({ user: state.user })
const dispatchToProps = { logout }
const mergeProps = (stateProps, dispatchProps, ownProps) => Object.assign(
  {},
  ownProps,
  {
    user: new UserState(stateProps.user),
  },
  dispatchProps,
)

export default connect(stateToProps, dispatchToProps, mergeProps)(UserActions)
