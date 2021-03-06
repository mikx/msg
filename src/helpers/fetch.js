import fetch from 'isomorphic-fetch'

const request = async ({ method, url, body, success, failure, dispatch }) => {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      credentials: 'include',
    })
    if (response.ok) {
      const data = await response.json()
      dispatch(success(data))
    } else {
      dispatch(failure({ status: response.status }))
    }
  } catch (e) {
    dispatch(failure(e))
  }
}

export const callPost = params => request({ ...params, method: 'POST' })

export const callGet = params => request({ ...params, method: 'GET' })
