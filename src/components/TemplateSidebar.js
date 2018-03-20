import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'reactstrap'

import Header from './Header'

import OrgsView from '../channels/OrgsView'
import OrgsCtrl from '../channels/OrgsCtrl'
import ChannelsView from '../channels/ChannelsView'
import ChannelsCtrl from '../channels/ChannelsCtrl'

const Template = ({ children }) => (
  <div>
    <Container fluid>
      <Row>
        <Col sm="2">
          <OrgsCtrl View={OrgsView} />
          <ChannelsCtrl View={ChannelsView} />
        </Col>
        <Col sm="10">{children}</Col>
      </Row>
    </Container>
  </div>
)

Template.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Template
