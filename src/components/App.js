import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter, Switch } from 'react-router-dom'

import Login from './Login'

import Home from './Home'

import { Body } from './Styled'

const App = ({ user }) => (
  <Body>
    <Switch>
      {user.uid && <Route path="/" component={Home} />}
      <Route path="/login" component={Login} />
      <Redirect to="/login" />
    </Switch>
  </Body>
)

App.propTypes = {
  user: PropTypes.shape({}).isRequired,
}

export default withRouter(connect(state => ({ user: state.user }))(App))
