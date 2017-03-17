import actionTypes from '../constants/actions'
import { createAction } from './helper'
import firebase from '../backend/firebase'

export function login(username, password) {
  return (dispatch, getState) => {
    dispatch(createAction(actionTypes.LOGIN_REQUEST))
    return firebase.authenticate(username, password)
      .then((user) => {
        console.log('LOGIN', user)
        dispatch(createAction(actionTypes.LOGIN_SUCCESS))
      })
      .catch(() => dispatch(createAction(actionTypes.LOGIN_FAILURE)))
  }
}
