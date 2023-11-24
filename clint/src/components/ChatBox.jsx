// ChatBox.jsx
import React, { useState } from "react";
import "./ChatBox.css"; // Import the new CSS file

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
            className={message.sender === "You" ? "self" : "other"}
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
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}
