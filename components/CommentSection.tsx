"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import axios from "axios";
import { useSearchParams } from "next/navigation";

// Define the Comment interface
interface Comment {
  username: string;
  avatar: string;
  commenter_id: string;
  review: string;
  rating: number;
  created_at: string;
}

// Define the CommentSection functional component
const CommentSection: React.FC = () => {
  const [userName, setUserName] = useState("User");
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");

  // Get the book_id from the URL parameters
  const searchParams = useSearchParams();
  const params = searchParams.get("book_id");

  // console.log("Now book id:", params);

  // Fetch already comments when the component mounts
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:5000/story/${params}`
        );

        if (response.status === 200) {
          const data = response.data.records;

          // console.log(data)
          setComments(data.comments);
        } else {
          console.error("Failed to fetch comments.");
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [params]);

  // console.log("Comments:", comments);

  // Function to handle adding a new comment
  const handleAddComment = async () => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:5000/story/${params}/comment`,
        {
          review: newComment,
          rating: 4,
        }
      );

      if (response.status === 200) {
        const data = response.data.records;

        // console.log(data);
        setComments((prevComments) => [...prevComments, data]);
        setNewComment("");
        setUserName(data.username);
      } else {
        console.error("Failed to add comment to the story.");
      }
    } catch (error) {
      console.error("Error adding comment to the story:", error);
    }
  };

  return (
    <div id="comments_area" className="content-center">
      <h2 className={`mb-3 text-2xl font-semibold`}>留言區</h2>

      <div className="flex items-center justify-center mb-4">
        <Button variant="ghost" disabled>
          <User size={20} />
        </Button>
        <textarea
          className="w-3/4 rounded-lg border-dashed border-2 m-2"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="在此輸入您的留言"
          style={{ width: "80%", minHeight: "80px" }}
        />
        <Button variant="default" onClick={handleAddComment}>
          留言
        </Button>
      </div>

      <div>
        {comments.length > 0 ? (
          <ul className="flex flex-col-reverse">
            {comments.map((comment, index) => (
              <li key={`${index}-${comment.commenter_id}`} className="mb-4">
                <Button variant="ghost" disabled>
                  {comment.avatar ? (
                    <img
                      src={comment.avatar}
                      className="w-8 h-8 rounded-full"
                      alt="User Avatar"
                    />
                  ) : (
                    <User size={20} />
                  )}
                </Button>

                <strong>{comment.username}</strong>
                <div className="flex items-start justify-end">
                  <div className="flex flex-col mr-2 text-right">
                    <span className="text-gray-500">{comment.created_at}</span>
                  </div>
                </div>
                <p className="rounded-lg w-3/4 pl-14">{comment.review}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>目前尚無留言，留下你的心得吧！</p>
        )}
      </div>
    </div>
    // <div id="comments_area" className="content-center">
    //   <h2 className={`mb-3 text-2xl font-semibold`}>留言區</h2>

    //   <div className="flex items-center justify-center">

    //     <Button variant="ghost" disabled>
    //       <User size={20} />
    //     </Button>
    //     <textarea
    //       className="w-3/4 rounded-lg border-dashed border-2 m-2"
    //       value={newComment}
    //       onChange={(e) => setNewComment(e.target.value)}
    //       placeholder="在此輸入您的留言"
    //       style={{ width: "80%", minHeight: "80px" }}
    //     />
    //     <Button variant="default" onClick={handleAddComment}>留言</Button>
    //   </div>

    //   <div>
    //     {comments.length > 0 ? (
    //       <ul className="flex flex-col-reverse">
    //         {comments.map((comment) => (
    //           <li key={comment.created_at} className="mb-4">

    //             <div className="flex items-center">

    //               <Button variant="ghost" disabled>
    //                 {comment.avatar ? (
    //                   <img src={comment.avatar} className="w-8 h-8 rounded-full" />
    //                 ) : (
    //                   <User size={20} />
    //                 )}
    //               </Button>

    //               <div className="flex flex-col ml-2">
    //                 <strong>{comment.username}</strong>
    //                 <span className="text-gray-500">{comment.created_at}</span>
    //               </div>

    //             </div>
    //             <p className="rounded-lg w-3/4 pl-14">{comment.review}</p>
    //           </li>
    //         ))}

    //       </ul>
    //     ) : (<p>目前尚無留言，留下你的心得吧！</p>)
    //     }
    //   </div>
    // </div>
  );
};

export default CommentSection;
