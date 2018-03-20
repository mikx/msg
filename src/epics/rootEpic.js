import { Observable } from 'rxjs'
import { combineEpics } from 'redux-observable'

import { actionTypes } from '../constants'

const myEpic = action$ =>
  action$
    .ofType(actionTypes.SESSION_SUCCESS)
    .switchMapTo(Observable.interval(1000))
    .take(3)
    .map(i => ({ type: 'PONG', data: i }))

const rootEpic = combineEpics(myEpic)

export default rootEpic
