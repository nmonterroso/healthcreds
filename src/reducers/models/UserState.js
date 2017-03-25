import { Record } from 'immutable'

const keys = {
  isLoggedIn: '__isLoggedIn',
  name: '__name',
  profileImage: '__profileImage',
}

const initialState = {
  [keys.isLoggedIn]: false,
  [keys.name]: null,
  [keys.profileImage]: null,
}

export default class UserState extends Record(initialState) {
  isLoggedIn = () => this.get(keys.isLoggedIn)
  getName = () => this.get(keys.name)
  getProfileImage = () => this.get(keys.profileImage)

  withName = name => new UserState(this.set(keys.name, name))
  withIsLoggedIn = isLoggedIn => new UserState(this.set(keys.isLoggedIn, isLoggedIn))
  withProfileImage = profileImage => new UserState(this.set(keys.profileImage, profileImage))
}
