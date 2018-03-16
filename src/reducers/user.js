import { actionTypes as types } from '../constants'

const defaultState = {
  currentOrg: { uid: '', name: 'No Current Org' },
}

const user = (state = defaultState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return { ...state, uid: action.data.meta.uid }

    case types.LOGIN_FAILURE:
      return { ...state, error: action.data }

    case types.SESSION_SUCCESS:
      return { ...state, uid: action.data.uid || action.data.uuid }

    case types.SESSION_FAILURE:
      return { ...state, error: action.data }

    case types.ORGS_SUCCESS:
      const { orgs, orgChannelsMap } = action.data
      return { ...state, orgs, currentOrg: orgs[0], orgChannelsMap }

    case types.ORGS_FAILURE:
      return { ...state, error: action.data }

    case types.SET_CURRENT_ORG:
      return { ...state, currentOrg: action.data }

    default:
      return state
  }
}

export default user
