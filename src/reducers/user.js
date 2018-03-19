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
      const { orgs } = action.data
      return { ...state, orgs }

    case types.ORGS_FAILURE:
      return { ...state, error: action.data }

    case types.CHANNELS_SUCCESS:
      const { channels } = action.data
      return { ...state, channels }

    case types.CHANNELS_FAILURE:
      return { ...state, error: action.data }

    case types.SET_CURRENT_ORG:
      const { currentOrg } = action.data
      return { ...state, currentOrg }

    case types.SET_CURRENT_CHANNEL:
      const { currentChannel } = action.data
      return { ...state, currentChannel }

    default:
      return state
  }
}

export default user
