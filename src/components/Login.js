import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Header from './Header'

import { login } from '../actions'

import { FormTitle, FooterLink } from './Styled'
import Form from './Form'

const Login = ({ user, login }) => {
  const handleSubmit = e => {
    e.preventDefault()
    const { email: { value: email }, password: { value: password } } = e.target
    login({ email, password })
  }

  return (
    <div>
      <Header />
      <FormTitle>Login</FormTitle>
      <Form onSubmit={handleSubmit} />
      {user.uid && <Redirect to="/" />}
    </div>
  )
}

Login.propTypes = {
  user: PropTypes.shape({}).isRequired,
  login: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({ user: state.user })
export default connect(mapStateToProps, { login })(Login)
