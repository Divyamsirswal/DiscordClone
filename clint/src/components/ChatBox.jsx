import React, { useState } from "react";
import './ChatBox.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ChatBox() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "Alice", text: "Hi there!" },
    { id: 2, sender: "Bob", text: "Hello!" },
    
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([
        ...messages,
        { id: messages.length + 1, sender: "You", text: newMessage },
      ]);
      setNewMessage("");
    }
  };
  return (
    <div className="chat-box">
      <div className="message-container">
        {messages.map((message) => (
          <div
            key={message.id}
            className={` chat_message  ${message.sender === "You" ? "self" : "other"}`}
          >
            <span className="sender">{message.sender}</span>
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <Button variant="outlined" onClick={handleSendMessage}>Send</Button>
      </div>
      
    </div>
  );
}
