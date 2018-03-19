import gql from 'graphql-tag'
import client from '../apollo/client'
import { actionTypes as types } from '../constants'

// ==================================== orgs

const ORGS_QUERY = gql`
  query GetUserOrgs {
    userOrgs {
      uid
      name
    }
  }
`
export const getUserOrgs = async dispatch => {
  dispatch({ type: types.ORGS_REQUEST })
  try {
    const result = await client.query({ query: ORGS_QUERY })
    const orgs = result.data.userOrgs

    dispatch({
      type: 'ORGS_SUCCESS',
      data: { orgs },
    })

    dispatch(setCurrentOrg(orgs[0]))
  } catch (err) {
    dispatch({ type: 'ORGS_FAILURE', data: err })
  }
}

// ==================================== channels

const CHANNELS_QUERY = gql`
  query GetOrgChannels($uid: String!) {
    userSingleOrgChannels(orgUid: $uid) {
      uid
      name
      kind
      org_uid
    }
  }
`

export const getOrgChannels = uid => async dispatch => {
  dispatch({ type: types.CHANNELS_REQUEST })
  try {
    const result = await client.query({
      query: CHANNELS_QUERY,
      variables: { uid },
    })
    const channels = result.data.userSingleOrgChannels
    dispatch({
      type: 'CHANNELS_SUCCESS',
      data: { channels },
    })
  } catch (err) {
    dispatch({ type: 'CHANNELS_FAILURE', data: err })
  }
}

// ==================================== set current org

export const setCurrentOrg = org => dispatch => {
  dispatch({
    type: types.SET_CURRENT_ORG,
    data: { currentOrg: org },
  })
  dispatch(getOrgChannels(org.uid))
}

export const setCurrentChannel = channel => dispatch => {
  dispatch({
    type: types.SET_CURRENT_CHANNEL,
    data: { currentChannel: channel },
  })
}
