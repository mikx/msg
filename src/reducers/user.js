import { actionTypes as types } from '../constants'

const defaultState = {
  currentOrg: { uid: '', name: 'No Current Org' },
}

const user = (state = defaultState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return { ...state, uid: action.data.meta.uid }

    case types.LOGIN_FAILURE:
      return {}

    case types.SESSION_SUCCESS:
      return { ...state, uid: action.data.uid || action.data.uuid }

    case types.SESSION_FAILURE:
      return state

    case types.ORGS_SUCCESS:
      const orgs = action.data
      return { ...state, orgs, currentOrg: orgs[0] }

    case types.ORGS_FAILURE:
      return state

    default:
      return state
  }
}

export default user
