import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import ActionList from './actions/ActionList'
import User from '../models/User'

const Home = ({ user }) => {
  if (!user.isLoggedIn()) {
    return (<Redirect to="/login" />)
  }

  return (
    <ActionList />
  )
}

Home.propTypes = {
  user: React.PropTypes.instanceOf(User).isRequired,
}

const stateToProps = state => ({ user: state.user })
const mergeProps = stateProps => ({ user: new User(stateProps.user) })
const options = {
  areStatesEqual: (prev, next) => new User(prev).equals(new User(next)),
}

export default connect(stateToProps, null, mergeProps, options)(Home)
