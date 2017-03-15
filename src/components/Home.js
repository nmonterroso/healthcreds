import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const select = state => ({ user: state.user })

export default connect(select)(class Home extends React.Component {
  static propTypes = {
    user: React.PropTypes.shape({
      token: React.PropTypes.string,
    }).isRequired,
  }

  render() {
    if (false && !this.props.user.token) {
      return (<Redirect to="/login" />)
    }

    return (
      <div>hi</div>
    )
  }
})
