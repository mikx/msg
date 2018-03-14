import { actionTypes as types } from '../constants'

const user = (state = {}, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return action.data

    case types.LOGIN_FAILURE:
      return {}

    case types.SESSION_SUCCESS:
      return { ...state, uid: action.data.uid }

    case types.SESSION_FAILURE:
      return { ...state, uid: action.data.uid }

    default:
      return state
  }
}

export default user
