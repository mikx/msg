import React, { Component } from 'react'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import { connect } from 'react-redux'

import { getUserOrgs, setCurrentOrg } from '../actions/user'

class OrgSelector extends Component {
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

  orgsDropItems = orgs =>
    orgs.map(org => (
      <DropdownItem key={org.uid} onClick={e => this.props.setCurrentOrg(org)}>
        {org.name}
      </DropdownItem>
    ))

  render() {
    const { orgs, currentOrg } = this.props
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle outline caret className="btn-block">
          {currentOrg.name}
        </DropdownToggle>
        <DropdownMenu className="btn-block">
          {this.orgsDropItems(orgs)}
        </DropdownMenu>
      </Dropdown>
    )
  }
}

const mapStateToProps = state => ({
  orgs: state.user.orgs || [],
  currentOrg: state.user.currentOrg,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getUserOrgs: () => dispatch(getUserOrgs),
  setCurrentOrg: org => dispatch(setCurrentOrg(org)),
})

export default connect(mapStateToProps, mapDispatchToProps)(OrgSelector)
