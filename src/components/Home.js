import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import TemplateSidebar from './TemplateSidebar'

import ChatCtrl from '../chat/ChatCtrl'
import ChatView from '../chat/ChatView'

const Home = ({ user }) =>
  user.uid ? (
    <TemplateSidebar>
      <ChatCtrl View={ChatView} />
    </TemplateSidebar>
  ) : (
    <Redirect to="/login" />
  )

Home.propTypes = {
  user: PropTypes.shape({}).isRequired,
}

export default connect(state => ({ user: state.user }))(Home)
