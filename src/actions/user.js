import actionTypes from '../constants/actions'
import { createAction } from './helper'
import backend from '../backend/firebase'
import UserState from '../reducers/models/UserState'

export function login(username, password) {
  return (dispatch) => {
    dispatch(createAction(actionTypes.LOGIN_REQUEST))
    return backend.authenticate(username, password)
      .then(userData => dispatch(createAction(actionTypes.LOGIN_SUCCESS, { userData })))
      .catch(() => dispatch(createAction(actionTypes.LOGIN_FAILURE)))
  }
}

export function restoreSession() {
  return (dispatch) => {
    dispatch(createAction(actionTypes.RESTORE_SESSION_REQUEST))
    return backend.restoreSession()
      .then((userData) => {
        if (userData !== null) {
          dispatch(createAction(actionTypes.LOGIN_SUCCESS, { userData }))
        }
      })
  }
}

export function logout() {
  return (dispatch, getState) => {
    const user = getState().user
    if (!user.isLoggedIn()) {
      return Promise.resolve()
    }

    dispatch(createAction(actionTypes.LOGOUT_REQUEST))
    return backend.logout()
      .then(() => dispatch(createAction(actionTypes.LOGOUT_SUCCESS)))
      .catch(() => dispatch(createAction(actionTypes.LOGOUT_FAILURE)))
  }
}

export function updateUserProfile(userData) {
  return (dispatch) => {
    dispatch(createAction(actionTypes.UPDATE_PROFILE_REQUEST))
    return backend.updateUserData(userData)
      .then(() => dispatch(createAction(actionTypes.UPDATE_PROFILE_SUCCESS)))
      .catch(() => dispatch(createAction(actionTypes.UPDATE_PROFILE_FAILURE)))
  }
}
