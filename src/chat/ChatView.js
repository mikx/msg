import React from 'react'
import Scroll from 'react-scrollbar'

import { height100 } from '../components/Styled'

const ChatView = ({ messages }) => {
  const items = messages.map((m, idx) => (
    <div className="text-left" key={idx}>
      {m.data.ts} - {m.data.text}
    </div>
  ))
  return (
    <Scroll className={height100} contentClassName="content" horizontal={false}>
      {items}
    </Scroll>
  )
}

export default ChatView
