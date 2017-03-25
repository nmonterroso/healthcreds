import React from 'react'
import { connect } from 'react-redux'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import Avatar from 'material-ui/Avatar'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import UserState from '../../reducers/models/UserState'
import LogoutIcon from '../../icons/LogoutIcon'
import { logout } from '../../actions/user'

class UserMenu extends React.Component {
  static propTypes = {
    user: React.PropTypes.instanceOf(UserState).isRequired,
    logout: React.PropTypes.func.isRequired,
  }

  onLogout = () => {
    this.props.logout()
  }

  render() {
    if (!this.props.user.isLoggedIn()) {
      return false
    }

    let menuIcon = (<MoreVertIcon />)
    if (this.props.user.getProfileImage()) {
      menuIcon = (
        <Avatar
          src={this.props.user.getProfileImage()}
          size={30}
        />
      )
    }

    return (
      <IconMenu
        iconButtonElement={<IconButton>{menuIcon}</IconButton>}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        targetOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem
          onTouchTap={this.onLogout}
          leftIcon={<LogoutIcon />}
          primaryText="Logout"
        />
      </IconMenu>
    )
  }
}

const stateToProps = state => ({ user: state.user })
const dispatchToProps = { logout }
export default connect(stateToProps, dispatchToProps)(UserMenu)
