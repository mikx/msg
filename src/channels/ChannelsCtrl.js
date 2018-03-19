import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setCurrentChannel } from '../actions/user'

class ChannelsCtrl extends Component {
  constructor(props) {
    super(props)
  }

  render = () => {
    const { View, channels, currentChannel, setCurrentChannel } = this.props
    return (
      <View
        channels={channels}
        currentChannel={currentChannel}
        setCurrentChannel={setCurrentChannel}
      />
    )
  }

  static defaultProps = {
    channels: [],
  }
}

const mapStateToProps = state => ({
  channels: state.user.channels,
  currentChannel: state.user.currentChannel,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setCurrentChannel: channel => dispatch(setCurrentChannel(channel)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChannelsCtrl)
