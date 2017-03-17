import _ from 'lodash'

export const initialState = {
  isLoggedIn: false,
  name: null,
}

export default class UserState {
  constructor(state) {
    this.state = state
  }

  getState = () => this.state
  isLoggedIn = () => this.state.isLoggedIn
  getName = () => this.state.name

  withName = name => new UserState(Object.assign({}, this.state, { name }))
  withIsLoggedIn = isLoggedIn => new UserState(Object.assign({}, this.state, { isLoggedIn }))

  equals = other => _.isEqual(this.getState(), other.getState())
}
