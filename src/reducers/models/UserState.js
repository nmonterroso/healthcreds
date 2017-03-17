import Immutable from 'immutable'

const keys = {
  isLoggedIn: 'isLoggedIn',
  name: 'name',
}

export const initialState = Immutable.fromJS({})
  .set(keys.isLoggedIn, false)
  .set(keys.name, null)

export default class UserState {
  constructor(state) {
    this.state = state
  }

  getState = () => this.state
  isLoggedIn = () => this.state.get(keys.isLoggedIn)
  getName = () => this.state.get(keys.name)

  withName = name => new UserState(this.state.set(keys.name, name))
  withIsLoggedIn = isLoggedIn => new UserState(this.state.set(keys.isLoggedIn, isLoggedIn))
}
