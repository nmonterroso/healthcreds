import actionTypes from '../constants/actions'

export const initialState = {
  balance: 0,
  costs: {
    full: 5,
    snack: 3,
  },
}

export default function points(state = initialState, action) {
  switch (action.type) {
    case actionTypes.POINT_ADD_REQUEST:
      return state
    default:
      return state
  }
}
