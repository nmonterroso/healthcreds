import React from 'react'
import TextField from 'material-ui/TextField'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../actions/user'

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`

class Login extends React.Component {
  static propTypes = {
    userToken: React.PropTypes.string.isRequired,
    login: React.PropTypes.func.isRequired,
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    const { email: { value: email }, password: { value: password } } = event.target
    this.props.login(email, password)
  }

  render() {
    if (this.props.userToken) {
      return (<Redirect to="/" />)
    }

    return (
      <LoginForm onSubmit={this.onFormSubmit}>
        <TextField
          floatingLabelText="email"
          name="email"
        />
        <TextField
          floatingLabelText="password"
          name="password"
          type="password"
        />
      </LoginForm>
    )
  }
}

const stateToProps = state => ({ user: state.user })
const dispatchToProps = {
  login,
}
const mergeProps = stateProps => ({ userToken: stateProps.user.token })
const options = {
  areStatesEqual: (prev, next) => prev.token === next.token,
}

export default connect(stateToProps, dispatchToProps, mergeProps, options)(Login)
