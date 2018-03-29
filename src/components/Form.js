import React from 'react'
import PropTypes from 'prop-types'

import { TextField, Submit } from './Styled'

const Form = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <TextField
      type="email"
      name="email"
      placeholder="Email address"
      title="Enter your email address"
      required
    />
    <TextField
      type="password"
      name="password"
      placeholder="Password"
      title="Type your password"
      required
    />
    <Submit type="submit" value="Submit" />
  </form>
)

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default Form
