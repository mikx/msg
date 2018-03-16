import React from 'react'
import { ListGroup, ListGroupItem, Badge } from 'reactstrap'

const Channels = () => (
  <ListGroup>
    <ListGroupItem className="d-flex align-items-center">
      Cras justo odio <Badge pill>14</Badge>
    </ListGroupItem>
    <ListGroupItem className="d-flex justify-content-between align-items-center">
      Dapibus ac facilisis in <Badge pill>2</Badge>
    </ListGroupItem>
    <ListGroupItem className="d-flex justify-content-between align-items-center">
      Morbi leo risus <Badge pill>1</Badge>
    </ListGroupItem>
  </ListGroup>
)

export default Channels
