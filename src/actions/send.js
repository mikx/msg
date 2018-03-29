import { actionTypes as types, urls } from '../constants'
import { callGet, callPost } from '../helpers'

export const send = (channel, message) => dispatch => {
  dispatch({ type: types.SEND_MESSAGE_REQUEST })
  callPost({
    url: urls.SEND_MESSAGE,
    body: { channelUid: channel.uid, text: message },
    success: data => dsp =>
      dsp({ type: types.SEND_MESSAGE_SUCCESS, data: data }),
    failure: data => dsp =>
      dsp({ type: types.SEND_MESSAGE_FAILURE, data: data }),
    dispatch,
  })
}
