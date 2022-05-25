import React, { useEffect, useState } from "react";
import axios from "axios";

import "./index.css";
import { useNavigate } from "react-router-dom";

const PostList = ({ user }) => {
  const [posts, setPosts] = useState([]);

  let intials =
    user.name.split(" ")[0].charAt(0).toUpperCase() +
    user.name.split(" ")[1].charAt(0).toUpperCase();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [user.id]);

  const navigate = useNavigate();

  return (
    <div className="post-list">
      <div className="post-list__header">
        <div className="post-list__heade--title">
          <h1>Post</h1>
          <i
            className="fas fa-times"
            onClick={() => {
              navigate("/");
            }}
          ></i>
        </div>
        <div className="post-list__sub-header">
          <div id="profileImage">{intials}</div>
          <h3> {user.name}</h3>
        </div>
      </div>

      {posts.map((post) => (
        <div className="post-list__post" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
