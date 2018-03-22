import React from 'react'

const ChatView = ({ messages }) => {
  const items = messages.map((m, idx) => (
    <div className="text-left" key={idx}>
      {m.data.ts} - {m.data.text}
    </div>
  ))
  return (
    <div
      ref={el =>
        el &&
        el.lastChild &&
        el.lastChild.scrollIntoView({ behavior: 'smooth' })
      }
    >
      {items}
    </div>
  )
}

export default ChatView
