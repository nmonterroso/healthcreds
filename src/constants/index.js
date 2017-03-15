export const actionTypes = {
  SIGNUP_REQUEST: 'SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
  SIGNUP_FAILURE: 'SIGNUP_FAILURE',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
}

const API = 'https://react.didierfranc.com'

export const urls = {
  SIGNUP: `${API}/signup`,
  LOGIN: `${API}/login`,
  LOGIN_WITH_TOKEN: `${API}/token`,
}
