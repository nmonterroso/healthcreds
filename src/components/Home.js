import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import ActionList from './actions/ActionList'
import UserState from '../reducers/models/UserState'

const Home = ({ user }) => {
  if (!user.isLoggedIn()) {
    return (<Redirect to="/login" />)
  }

  return (
    <ActionList />
  )
}

Home.propTypes = {
  user: React.PropTypes.instanceOf(UserState).isRequired,
}

const stateToProps = state => ({ user: state.user })
const mergeProps = stateProps => ({ user: new UserState(stateProps.user) })
const options = {
  areStatesEqual: (prev, next) => new UserState(prev).equals(new UserState(next)),
}

export default connect(stateToProps, null, mergeProps, options)(Home)
