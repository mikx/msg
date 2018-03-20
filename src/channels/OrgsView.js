import React from 'react'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

const OrgsView = ({
  orgs,
  currentOrg,
  setCurrentOrg,
  dropdownOpen,
  toggle,
}) => {
  const orgsDropItems = orgs.map(org => (
    <DropdownItem key={org.uid} onClick={e => setCurrentOrg(org)}>
      {org.name}
    </DropdownItem>
  ))
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle outline caret className="btn-block">
        {currentOrg.name}
      </DropdownToggle>
      <DropdownMenu className="btn-block">{orgsDropItems}</DropdownMenu>
    </Dropdown>
  )
}

export default OrgsView
