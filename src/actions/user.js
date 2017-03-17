import actionTypes from '../constants/actions'
import { createAction } from './helper'
import backend from '../backend/firebase'

export function login(username, password) {
  return (dispatch) => {
    dispatch(createAction(actionTypes.LOGIN_REQUEST))
    return backend.authenticate(username, password)
      .then((name) => {
        dispatch(createAction(actionTypes.LOGIN_SUCCESS, { name }))
      })
      .catch(() => dispatch(createAction(actionTypes.LOGIN_FAILURE)))
  }
}
