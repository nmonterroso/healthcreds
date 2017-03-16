import actionTypes from '../constants/actions'

export const initialState = {
  token: null,
  name: null,
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return action.data
    case actionTypes.LOGIN_FAILURE:
      console.log(state)
      return state
    default:
      console.log(state)
      return state
  }
}
