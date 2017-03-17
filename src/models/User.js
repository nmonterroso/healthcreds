import _ from 'lodash'

export const initialState = {
  isLoggedIn: false,
  name: null,
}

export default class User {
  constructor(state) {
    this.state = state
  }

  getState = () => this.state
  isLoggedIn = () => this.state.isLoggedIn
  getName = () => this.state.name

  withName = name => new User(Object.assign({}, this.state, { name }))
  withIsLoggedIn = isLoggedIn => new User(Object.assign({}, this.state, { isLoggedIn }))

  equals = other => _.isEqual(this.getState(), other.getState())
}
