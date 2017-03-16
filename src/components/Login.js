import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {
  static propTypes = {
    userToken: React.PropTypes.string,
  }

  render() {
    if (this.props.userToken) {
      return (<Redirect to="/" />)
    }

    return (
      <div>please log in!</div>
    )
  }
}

const stateToProps = state => ({ user: state.user })
const mergeProps = stateProps => ({ userToken: stateProps.user.token })
const options = {
  areStatesEqual: (prev, next) => prev.token === next.token,
}

export default connect(stateToProps, null, mergeProps, options)(Login)
