import React from 'react'
import { ListGroup, ListGroupItem, Badge } from 'reactstrap'

const ChannelsView = ({ channels, currentChannel, setCurrentChannel }) => {
  const items = channels.map((c, idx) => (
    <ListGroupItem
      key={c.uid}
      active={c === currentChannel}
      onClick={() => setCurrentChannel(c)}
      className="d-flex justify-content-between align-items-center"
    >
      {c.name}
      <Badge pill>{idx}</Badge>
    </ListGroupItem>
  ))
  return <ListGroup>{items}</ListGroup>
}

export default ChannelsView
