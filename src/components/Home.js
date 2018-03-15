import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import OrgSelector from './OrgSelector'

const Home = ({ user }) =>
  user.uid ? <OrgSelector /> : <Redirect to="/login" />

Home.propTypes = {
  user: PropTypes.shape({}).isRequired,
}

export default connect(state => ({ user: state.user }))(Home)
