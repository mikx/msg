import React from 'react'
import { ListGroup, ListGroupItem, Badge } from 'reactstrap'

const ChatView = ({ messages }) => {
  const items = messages.map((m, idx) => <div key={m.uid}>{m.text}</div>)
  return <div className="container-fluid">{items}</div>
}

export default ChatView
