const actionTypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT_REQUEST: 'LOGOUT_REQUEST',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_FAILURE: 'LOGOUT_FAILURE',
  RESTORE_SESSION_REQUEST: 'RESTORE_SESSION',
  POINT_ADD_REQUEST: 'POINT_ADD_REQUEST',
  POINT_ADD_SUCCESS: 'POINT_ADD_SUCCESS',
  POINT_ADD_FAILURE: 'POINT_ADD_FAILURE',
  SPEND_CRED_REQUEST: 'SPEND_CRED_REQUEST',
  SPEND_CRED_SUCCESS: 'SPEND_CRED_SUCCESS',
  SPEND_CRED_FAILURE: 'SPEND_CRED_FAILURE',
}

export const spendTypes = {
  FULL: 'FULL',
  SNACK: 'SNACK',
}

export default actionTypes
