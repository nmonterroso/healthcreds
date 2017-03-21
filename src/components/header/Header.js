import React from 'react'
import AppBar from 'material-ui/AppBar'
import UserMenu from './UserMenu'

const Header = () => {
  const userMenu = (<UserMenu />)

  return (
    <div>
      <AppBar
        title="Health Creds"
        iconStyleLeft={{
          display: 'none',
        }}
        iconElementRight={userMenu}
      />
    </div>
  )
}

export default Header
