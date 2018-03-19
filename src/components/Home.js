import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import TemplateSidebar from './TemplateSidebar'
import ChatView from '../chat/ChatView'

const Home = ({ user }) =>
  user.uid ? (
    <TemplateSidebar>
      <ChatView messages={[{ uid: 1, text: 'abc' }, { uid: 2, text: 'cde' }]} />
    </TemplateSidebar>
  ) : (
    <Redirect to="/login" />
  )

Home.propTypes = {
  user: PropTypes.shape({}).isRequired,
}

export default connect(state => ({ user: state.user }))(Home)
