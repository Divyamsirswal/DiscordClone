// ChatBox.jsx
import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import "./ChatBox.css"; // Import the new CSS file
import "./AdvancedChatBox.css"; // Import advanced styles
import { formatDistanceToNow } from "date-fns";

export default function ChatBox() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "Alice", text: "Hi there!", timestamp: new Date() },
    { id: 2, sender: "Bob", text: "Hello!", timestamp: new Date() },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: "You",
          text: newMessage,
          timestamp: new Date(),
        },
      ]);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  // Scroll to the bottom of the chat on new messages
  useEffect(() => {
    const messageContainer = document.getElementById("message-container");
    if (messageContainer) {
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-box">
      <div className="message-container" id="message-container">
        {messages.map((message) => (
          <div
            key={message.id}
            className={message.sender === "You" ? "self" : "other"}
          >
            <div className="avatar">
              <Avatar>{message.sender[0]}</Avatar>
            </div>
            <div className="message-content">
              <span className="sender">{message.sender}</span>
              <span className="text">{message.text}</span>
              <span className="timestamp">
                {formatDistanceToNow(message.timestamp, { addSuffix: true })}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyPress} // Add the onKeyDown event handler
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
      
    </div>
  );
}
