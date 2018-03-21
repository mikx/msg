import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { List, Map } from 'immutable'

class ChatCtrl extends Component {
  constructor(props) {
    super(props)
  }

  render = () => {
    const { View, messages } = this.props
    console.log(messages.size)
    return <View messages={messages} />
  }

  static defaultProps = {
    messages: List(),
  }
}

const mapStateToProps = state => ({
  messages: state.message.ms.get('00000000-0000-4000-8000-000000000000'),
})

const mapDispatchToProps = (dispatch, ownProps) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ChatCtrl)
