import { actionTypes as types, urls } from '../constants'
import { callGet, callPost } from '../helpers'

export const signup = ({ email, password }) => dispatch => {
  dispatch({ type: types.SIGNUP_REQUEST })
  callPost({
    url: urls.SIGNUP,
    body: { email, password },
    success: data => dsp => dsp({ type: types.SIGNUP_SUCCESS, data: data }),
    failure: data => dsp => dsp({ type: types.SIGNUP_FAILURE, data: data }),
    dispatch,
  })
}

export const login = ({ email, password }) => dispatch => {
  dispatch({ type: types.LOGIN_REQUEST })
  callPost({
    url: urls.LOGIN,
    body: { email, password },
    success: data => dsp => {
      dsp({ type: types.LOGIN_SUCCESS, data: data })
      dsp({ type: types.WS_CONNECT })
    },
    failure: data => dsp => dsp({ type: types.LOGIN_FAILURE, data: data }),
    dispatch,
  })
}

export const loginWithCookies = () => (dispatch, getState) => {
  const uid = getState().user.uid

  if (typeof uid !== 'undefined') return

  dispatch({ type: types.SESSION_REQUEST })
  callGet({
    url: urls.USER_UID,
    success: data => dsp => {
      dsp({ type: types.SESSION_SUCCESS, data: data })
      dsp({ type: types.WS_CONNECT })
    },
    failure: data => dsp => dsp({ type: types.SESSION_FAILURE, data: data }),
    dispatch,
  })
}
