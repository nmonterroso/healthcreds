import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../actions/user'

const LoginForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 65%;
  margin: 0 auto;
`

const LoginButton = styled(RaisedButton)`
  align-self: flex-end;
  margin-top: 1rem;
`

class Login extends React.Component {
  static propTypes = {
    userToken: React.PropTypes.string.isRequired,
    login: React.PropTypes.func.isRequired,
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.login(this.emailField.input.value, this.passwordField.input.value)
  }

  emailField = null;
  passwordField = null;

  render() {
    if (this.props.userToken) {
      return (<Redirect to="/" />)
    }

    return (
      <LoginForm onSubmit={this.onFormSubmit}>
        <h2>Login</h2>
        <TextField
          ref={(emailField) => { this.emailField = emailField }}
          floatingLabelText="email"
          name="email"
          fullWidth
        />
        <TextField
          ref={(passwordField) => { this.passwordField = passwordField }}
          floatingLabelText="password"
          name="password"
          type="password"
          fullWidth
        />
        <LoginButton
          onTouchTap={this.onFormSubmit}
          label="login"
          primary
        />
      </LoginForm>
    )
  }
}

const stateToProps = state => ({ user: state.user })
const dispatchToProps = {
  login,
}
const mergeProps = (stateProps, dispatchProps, ownProps) => Object.assign(
  {},
  ownProps,
  {
    userToken: stateProps.user.token,
  },
  dispatchProps,
)
const options = {
  areStatesEqual: (prev, next) => prev.token === next.token,
}

export default connect(stateToProps, dispatchToProps, mergeProps, options)(Login)
