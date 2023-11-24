// ChatPage.jsx
import React from 'react';
import ChatBox from '../components/ChatBox';
import './ChatPage.css'; // Import your CSS file

export default function ChatPage() {
  return (
    <div className="chat-page-container">
      <div className="friends-list">
        <h2>Your Friends</h2>
        <ul>
          <li>Friend 1</li>
          <li>Friend 2</li>
          <li>Friend 3</li>
          {/* Add more friends as needed */}
        </ul>
      </div>
      <div className="chat-section">
        <div className="chat-section-header">
          <h1>Messages</h1>
        </div>
        <div className="chat-section-content">
          <ChatBox />
        </div>
      </div>
    </div>
  );
}
