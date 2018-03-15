import gql from 'graphql-tag'
import client from '../apollo/client'
import { actionTypes as types } from '../constants'

const ORGS_QUERY = gql`
  query GetUserOrgs {
    userOrgs {
      uid
      name
    }
  }
`

const asyncUserOrgs = async dispatch => {
  const result = await client.query({ query: ORGS_QUERY })
  dispatch({
    type: 'ORGS_SUCCESS',
    data: result.data.userOrgs,
  })
}

export const getUserOrgs = (dispatch, getState) => {
  dispatch({ type: types.ORGS_REQUEST })
  dispatch(asyncUserOrgs)
}
