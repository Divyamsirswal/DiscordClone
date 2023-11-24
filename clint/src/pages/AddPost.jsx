// AddPost.jsx
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
// import { useHistory } from "react-router-dom";
import "./AddPost.css"; // Import your CSS file

export default function AddPost() {
//   const history = useHistory();
  const [postData, setPostData] = useState({
    title: "",
    content: "",
    tags: "",
  });

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission (e.g., API call to save the post)
    console.log("Submitted:", postData);

    // Redirect back to the dashboard after submitting
    // history.push("/");
  };

  return (
    <div className="add-post-container">
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          margin="normal"
          name="title"
          value={postData.title}
          onChange={handleChange}
        />
        <TextField
          label="Content"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          margin="normal"
          name="content"
          value={postData.content}
          onChange={handleChange}
        />
        <TextField
          label="Tags"
          variant="outlined"
          fullWidth
          margin="normal"
          name="tags"
          value={postData.tags}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          startIcon={<SaveIcon />}
        >
          Save Post
        </Button>
      </form>
    </div>
  );
}
