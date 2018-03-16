import gql from 'graphql-tag'
import client from '../apollo/client'
import { actionTypes as types } from '../constants'

const ORGS_QUERY = gql`
  query GetUserOrgsChannels {
    userOrgs {
      uid
      name
    }
    userAllOrgsChannels {
      uid
      name
      kind
      org_uid
    }
  }
`
const channelGrouper = (acc, x) => {
  const key = 'org_uid'
  const arr = acc[x[key]] || (acc[x[key]] = [])
  arr.push(x)
  return acc
}

const asyncUserOrgsChannels = async dispatch => {
  try {
    const result = await client.query({ query: ORGS_QUERY })
    dispatch({
      type: 'ORGS_SUCCESS',
      data: {
        orgs: result.data.userOrgs,
        orgChannelsMap: result.data.userAllOrgsChannels.reduce(
          channelGrouper,
          {},
        ),
      },
    })
  } catch (err) {
    dispatch({ type: 'ORGS_FAILURE', data: err })
  }
}

export const setCurrentOrg = org => (dispatch, getState) => {
  dispatch({
    type: types.SET_CURRENT_ORG,
    data: org,
  })
}

export const getUserOrgs = (dispatch, getState) => {
  dispatch({ type: types.ORGS_REQUEST })
  dispatch(asyncUserOrgsChannels)
}
