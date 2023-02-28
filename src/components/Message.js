
import React, { useState } from 'react';
export default function Message() {

    const [messageIndex, setMessageIndex] = useState(0);
    const messages = ['hello', 'welcome', 'hi', 'how are you'];
  
    function handleClick() {
        setMessageIndex((messageIndex + 1) % messages.length);
    }
  return (
    <div>
       <button onClick={handleClick}>
    {messages[messageIndex]}
  </button>
    </div>
  )
}
