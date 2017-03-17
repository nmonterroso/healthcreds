import React from 'react'
import AppBar from 'material-ui/AppBar'
import UserActions from './UserActions'

const Header = () => {
  const userActions = (<UserActions />)

  return (
    <div>
      <AppBar
        title="Health Creds"
        iconStyleLeft={{
          display: 'none',
        }}
        iconElementRight={userActions}
      />
    </div>
  )
}

export default Header
