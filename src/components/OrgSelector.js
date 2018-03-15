import React, { Component } from 'react'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import { connect } from 'react-redux'

import { getUserOrgs } from '../actions/user'

class OrgSelector extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = { dropdownOpen: false }
  }

  componentDidMount = () => {
    this.props.loadOrgs()
  }

  toggle() {
    this.setState({ dropdownOpen: !this.state.dropdownOpen })
  }

  orgsDropItems = orgs =>
    orgs.map(org => (
      <DropdownItem onClick={this.props.setCurrentOrg(org)}>
        {org.name}
      </DropdownItem>
    ))

  render() {
    const { orgs, currentOrg } = this.props
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>{currentOrg.name}</DropdownToggle>
        <DropdownMenu>{this.orgsDropItems(orgs)}</DropdownMenu>
      </Dropdown>
    )
  }
}

const mapStateToProps = state => ({
  orgs: state.user.orgs || [],
  currentOrg: state.user.currentOrg,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadOrgs: () => dispatch(getUserOrgs),
  setCurrentOrg: org => console.log(org),
})

export default connect(mapStateToProps, mapDispatchToProps)(OrgSelector)
