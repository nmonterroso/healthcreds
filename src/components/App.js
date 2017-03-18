import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Header from './header/Header'
import UserState from '../reducers/models/UserState'

const App = ({ user }) => {
  const paths = []

  if (user.isLoggedIn()) {
    paths.push(
      <Route path="/" component={Home} />,
    )
  } else {
    paths.push(<Redirect to="/login" />)
  }

  paths.push(<Route path="/login" component={Login} />)

  return (
    <div>
      <Header />
      {paths}
    </div>
  )
}


App.propTypes = {
  user: React.PropTypes.instanceOf(UserState).isRequired,
}

const stateToProps = state => ({ user: state.user })
const mergeProps = stateProps => ({ user: new UserState(stateProps.user) })

export default connect(stateToProps, null, mergeProps)(App)
