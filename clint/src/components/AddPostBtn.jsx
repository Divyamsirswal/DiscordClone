// AddPostBtn.jsx
import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import "./AddPostBtn.css";

export default function AddPostBtn() {
  return (
    <Link to="/add-post" className="add-post-link">
      <Button variant="contained" startIcon={<AddIcon />} className="add-post-btn">
        Add New Post
      </Button>
    </Link>
  );
}