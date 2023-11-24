// Import necessary components and styles
import React from "react";
import "./Post.css"; // Import your CSS file
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// You can use PropTypes to define the expected shape of your PostObj
Post.propTypes = {
  PostObj: PropTypes.shape({
    id: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default function Post({ PostObj }) {
  return (
    <Link key={PostObj.id} to={`/post/${PostObj.id}`} className="post-link">
      <div className="post-container">
        <img
          src={PostObj.picture}
          alt="Post_Image"
          className="centered-image rounded-2xl"
        />
        <div className="post-content">
          <h2 className="post-title">{PostObj.title}</h2>
          <p className="post-body">{PostObj.body}</p>
        </div>
      </div>
    </Link>
  );
}
