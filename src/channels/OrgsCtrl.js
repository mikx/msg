import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getUserOrgs, setCurrentOrg } from '../actions/user'

class OrgsCtrl extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = { dropdownOpen: false }
  }

  componentDidMount = () => {
    this.props.getUserOrgs()
  }

  toggle() {
    this.setState({ dropdownOpen: !this.state.dropdownOpen })
  }

  render = () => {
    const { View, orgs, currentOrg, setCurrentOrg } = this.props
    return (
      <View
        orgs={orgs}
        currentOrg={currentOrg}
        setCurrentOrg={setCurrentOrg}
        dropdownOpen={this.state.dropdownOpen}
        toggle={this.toggle}
      />
    )
  }
}

const mapStateToProps = state => ({
  orgs: state.user.orgs || [],
  currentOrg: state.user.currentOrg || { uid: '0', name: 'No Current Org' },
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getUserOrgs: () => dispatch(getUserOrgs),
  setCurrentOrg: org => dispatch(setCurrentOrg(org)),
})

export default connect(mapStateToProps, mapDispatchToProps)(OrgsCtrl)
