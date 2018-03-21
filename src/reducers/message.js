import { List, Map } from 'immutable'

import { actionTypes as types } from '../constants'

const defaultState = { ms: Map() }

const message = (state = defaultState, action) => {
  switch (action.type) {
    case types.ADD_MESSAGE:
      const { msg } = action.data
      const uid = msg.dst.uid
      const updated = state.ms.get(uid) || List()
      const ms = state.ms.set(uid, updated.push(msg))
      return { ms }

    default:
      return state
  }
}

export default message
