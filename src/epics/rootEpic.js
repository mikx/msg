import { Observable } from 'rxjs'
import { combineEpics } from 'redux-observable'

import { actionTypes as types, urls } from '../constants'

const wsConnect = Observable.webSocket({
  url: urls.BASE_WS,
  credentials: 'include',
})
  .map(msg => ({ type: types.ADD_MESSAGE, data: msg }))
  .onErrorResumeNext(wsReconnect)

const wsReconnect = Observable.of({ type: types.WS_CONNECT }).delay(10000)

const myEpic = action$ =>
  action$
    .ofType(types.WS_CONNECT)
    .switchMapTo(Observable.concat(wsConnect, wsReconnect))

const rootEpic = combineEpics(myEpic)

export default rootEpic
