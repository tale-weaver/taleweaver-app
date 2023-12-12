"use client";

import React, { useState } from "react";
import { Button, buttonVariants } from '@/components/ui/button'
import { User } from "lucide-react";

const CommentSection: React.FC = () => {
  const [userName, setUserName] = useState("Apple"); // fake value
  const [userImage, setUserImage] = useState<string>("public/user.png"); // fake picture
  const [comments, setComments] = useState<string[]>([]); // TODO: retrieve from DB
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments((prevComments) => [...prevComments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div id="comments" className="content-center w-4/5">
      <h2 className={`mb-3 text-2xl font-semibold`}>留言區</h2>
      
      <div className="flex items-center justify-center">
        <textarea
          className="w-3/4 rounded-lg border-dashed border-2 m-2"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="在此輸入您的留言"
          style={{ width: "80%", minHeight: "80px" }}
        />
        <Button variant="default" onClick={handleAddComment}>留言</Button>
      </div>
      
      <div>
        {comments.length > 0 ? (
          <ul className="flex flex-col-reverse">
            {comments.map((comment, index) => (
              <li key={index}>
                {/* {userImage ? (
                  <img src={userImage} alt="" style={{ maxWidth: "100%" }} />
                ) : (<i className="fa-light fa-user"></i>)} */}
                <div className="flex items-center">
                  {/* 如果有頭像就用頭像，沒頭像就用這個人像符號代替 */}
                  <Button variant="ghost" disabled><User /></Button>
                  <strong>{userName} {index + 1}</strong>
                </div>
                <p className="rounded-lg w-3/4 pl-14">{comment}</p>
              </li>
            ))}
          </ul>
        ) : (<p>目前尚無留言，留下你的心得吧！</p>)
        }
      </div>
    </div>
  );
};

export default CommentSection;
