import actionTypes from '../constants/actions'
import { createAction } from './helper'
import firebaseDb from '../db/firebaseDb'

export function login(username, password) {
  return (dispatch, getState) => {
    dispatch(createAction(actionTypes.LOGIN_REQUEST))
    console.log(username, password)
    return Promise.resolve()
  }
}
