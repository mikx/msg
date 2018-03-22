import React from 'react'
import PropTypes from 'prop-types'
import { Alert, Container, Row, Col } from 'reactstrap'

import Header from './Header'

import OrgsView from '../channels/OrgsView'
import OrgsCtrl from '../channels/OrgsCtrl'

import ChannelsView from '../channels/ChannelsView'
import ChannelsCtrl from '../channels/ChannelsCtrl'

import ChatCtrl from '../chat/ChatCtrl'
import ChatView from '../chat/ChatView'

import { Wrapper } from '../components/Styled'

const TemplateSidebar = props => (
  <Container className="container-fluid h-100 d-flex flex-column">
    <Header />
    <Row className="h-100">
      <Col sm="3">
        <OrgsCtrl View={OrgsView} />
        <ChannelsCtrl View={ChannelsView} />
      </Col>
      <Col sm="9">
        <div className="h-100 d-flex flex-column">
          <Alert color="primary">top</Alert>
          <Wrapper>
            <ChatCtrl View={ChatView} />
          </Wrapper>
          <Alert color="primary">bottom</Alert>
        </div>
      </Col>
    </Row>
  </Container>
)

export default TemplateSidebar
