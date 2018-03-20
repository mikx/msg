const BASE = `http://${process.env.C9_HOSTNAME}:7070`

export const SIGNUP = `${BASE}/signup`
export const LOGIN = `${BASE}/session`
export const USER_UID = `${BASE}/user/id`
export const GRAPHQL = `${BASE}/graphql`

export const BASE_WS = `ws://${process.env.C9_HOSTNAME}:7070/user/connect`
