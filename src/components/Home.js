import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import ActionList from './actions/ActionList'

const Home = ({ userToken }) => {
  if (!userToken) {
    return (<Redirect to="/login" />)
  }

  return (
    <ActionList />
  )
}

Home.propTypes = {
  userToken: React.PropTypes.string.isRequired,
}

const stateToProps = state => ({ user: state.user })
const mergeProps = stateProps => ({ userToken: stateProps.user.token })
const options = {
  areStatesEqual: (prev, next) => prev.token === next.token,
}

export default connect(stateToProps, null, mergeProps, options)(Home)
