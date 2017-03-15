import React from 'react'
import { actionTypes as types } from '../constants'

export const userShape = {
  token: React.PropTypes.string,
  name: React.PropTypes.string,
  points: React.PropTypes.number,
  costs: React.PropTypes.shape({
    full: React.PropTypes.number,
    snack: React.PropTypes.number,
  }),
}

export const initialState = {
  token: null,
  name: null,
  points: 0,
  costs: {
    full: 5,
    snack: 3,
  },
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case types.SIGNUP_SUCCESS:
    case types.LOGIN_SUCCESS:
      return action.data
    case types.LOGIN_FAILURE:
      console.log(state)
      return state
    default:
      console.log(state)
      return state
  }
}
