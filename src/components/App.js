import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import Home from './Home'
import Login from './Auth/Login'
import Signup from './Auth/Signup'
import Header from './Header'
import { Body } from './Styled'

const App = ({ user }) => (
  <Body>
    <Header />
    {user.token ? <Route path="/" component={Home} /> : <Redirect to="/login" />}
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
  </Body>
)

App.propTypes = {
  user: React.PropTypes.shape({}).isRequired,
}

export default connect(state => ({ user: state.user }))(App)
