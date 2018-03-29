import React from 'react'
import { Button, Input, InputGroup } from 'reactstrap'

const ChatInputView = ({ handleChange, handleClick }) => (
  <div>
    <InputGroup>
      <Input
        type="text"
        placeholder="type your message here"
        onChange={handleChange}
      />
      <Button color="primary" className="ml-1" onClick={handleClick}>
        Send
      </Button>
    </InputGroup>
  </div>
)

export default ChatInputView
