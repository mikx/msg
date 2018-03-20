import { Observable } from 'rxjs'
import { combineEpics } from 'redux-observable'

import { actionTypes, urls } from '../constants'

const wsConnect = Observable.webSocket({
  url: urls.BASE_WS,
  credentials: 'include',
}).map(msg => ({ type: 'PONG', data: msg }))

const wsReconnect = Observable.of({ type: actionTypes.WS_CONNECT }).delay(5000)

const myEpic = action$ =>
  action$
    .ofType(actionTypes.WS_CONNECT)
    .switchMapTo(Observable.concat(wsConnect, wsReconnect))

const rootEpic = combineEpics(myEpic)

export default rootEpic
