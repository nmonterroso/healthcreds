import actionTypes from '../constants/actions'
import { createAction } from './helper'
import backend from '../backend/firebase'
import UserState from '../reducers/models/UserState'

export function login(username, password) {
  return (dispatch) => {
    dispatch(createAction(actionTypes.LOGIN_REQUEST))
    return backend.authenticate(username, password)
      .then(name => dispatch(createAction(actionTypes.LOGIN_SUCCESS, { name })))
      .catch(() => dispatch(createAction(actionTypes.LOGIN_FAILURE)))
  }
}

export function restoreSession() {
  return (dispatch) => {
    dispatch(createAction(actionTypes.RESTORE_SESSION_REQUEST))
    return backend.restoreSession()
      .then(([loggedIn, name]) => {
        if (loggedIn) {
          dispatch(createAction(actionTypes.LOGIN_SUCCESS, { name }))
        }
      })
  }
}

export function logout() {
  return (dispatch, getState) => {
    if (new UserState(getState().user).isLoggedIn()) {
      return Promise.resolve()
    }

    dispatch(createAction(actionTypes.LOGOUT_REQUEST))
    return backend.logout()
      .then(() => dispatch(createAction(actionTypes.LOGOUT_SUCCESS)))
      .catch(() => dispatch(createAction(actionTypes.LOGOUT_FAILURE)))
  }
}
