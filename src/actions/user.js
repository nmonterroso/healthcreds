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
      .catch((e) => {
        console.error('login failed', e)
        dispatch(createAction(actionTypes.LOGIN_FAILURE))
      })
  }
}

export function restorePastSession() {
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
