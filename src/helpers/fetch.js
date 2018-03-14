import fetch from 'isomorphic-fetch'

const request = async ({ method, url, body, success, failure, dispatch }) => {
  try {
    const res = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    const data = await res.json()
    dispatch({ type: success, data })
  } catch (e) {
    dispatch({ type: failure })
  }
}

export const callPost = params => request({ ...params, method: 'POST' })

export const callGet = params => request({ ...params, method: 'GET' })
