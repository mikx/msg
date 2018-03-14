import { actionTypes as types, urls } from '../constants'
import { callGet, callPost } from '../helpers'

export const signup = ({ email, password }) => dispatch => {
  dispatch({ type: types.SIGNUP_REQUEST })
  callPost({
    url: urls.SIGNUP,
    body: { email, password },
    success: types.SIGNUP_SUCCESS,
    failure: types.SIGNUP_FAILURE,
    dispatch,
  })
}

export const login = ({ email, password }) => dispatch => {
  dispatch({ type: types.LOGIN_REQUEST })
  callPost({
    url: urls.LOGIN,
    body: { email, password },
    success: types.LOGIN_SUCCESS,
    failure: types.LOGIN_FAILURE,
    dispatch,
  })
}

export const loginWithCookies = () => (dispatch, getState) => {
  const uid = getState().user.uid

  if (typeof uid !== 'undefined') return

  dispatch({ type: types.SESSION_REQUEST })
  callGet({
    url: urls.USER_UID,
    success: types.SESSION_SUCCESS,
    failure: types.SESSION_FAILURE,
    dispatch,
  })
}
