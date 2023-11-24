// Import necessary components and styles
import React from "react";
import "./Dashboard.css"; // Import your CSS file
import PostList from "../components/PostList";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

export function Dashboard() {
  return (
    <div className="dashboard-container">
      <PostList />
      <Link to={"/chat"}>Chat Now</Link>
      {/* Add more dashboard content as needed */}
    </div>
  );
}
