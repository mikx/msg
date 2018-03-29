import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { send } from '../actions/send'

class ChatInputCtrl extends Component {
  constructor(props) {
    super(props)
    this.state = { input: '' }
    this.handleChange.bind(this)
    this.handleClick.bind(this)
  }

  handleChange = e => this.setState({ input: e.target.value })

  handleClick = e => this.props.send(this.props.channel, this.state.input)

  render = () => {
    const { View } = this.props
    return (
      <View handleChange={this.handleChange} handleClick={this.handleClick} />
    )
  }
}

const mapStateToProps = state => ({
  channel: state.user.currentChannel,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  send: (cnl, msg) => dispatch(send(cnl, msg)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatInputCtrl)
