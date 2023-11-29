"use client";

import React, { useState } from "react";
import { Button, buttonVariants } from '@/components/ui/button'


const CommentSection: React.FC = () => {
  const [userName, setUserName] = useState("Apple"); // fake value
  const [comments, setComments] = useState<string[]>([]); // TODO: retrieve from DB
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments((prevComments) => [...prevComments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div id="comments">
      <h2>留言區</h2>
      {comments.length > 0 ? (
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <strong>{userName}{index + 1}</strong>: {comment}
            </li>
          ))}
        </ul>
      ) : (
        <p>目前尚無留言，留下你的感受吧！</p>
      )}

      <div>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="在此輸入您的留言"
        />
        <Button variant="default" onClick={handleAddComment}>留言</Button>
      </div>
    </div>
  );
};

export default CommentSection;
