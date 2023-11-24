// Import necessary components and styles
import React from "react";
import "./Dashboard.css"; // Import your CSS file
import PostList from "../components/PostList";
import NavBar from "../components/NavBar";

export function Dashboard() {
  return (
    <div className="dashboard-container">
      <PostList />
      {/* Add more dashboard content as needed */}
    </div>
  );
}
