import { Observable } from 'rxjs'
import { combineEpics } from 'redux-observable'

import { actionTypes, urls } from '../constants'

const myEpic = action$ =>
  action$
    .ofType(actionTypes.SESSION_SUCCESS)
    .switchMapTo(
      Observable.webSocket({
        url: urls.BASE_WS,
        credentials: 'include',
      }),
    )
    .map(msg => ({ type: 'PONG', data: msg }))

const rootEpic = combineEpics(myEpic)

export default rootEpic
