import React, { useState } from "react";
import "./CommentWidget.css"; // Import your CSS file for styling

const Comment = ({ comment, handleCommentSubmit }) => (
  <div className="comment">
    <p>{comment.text}</p>
    {comment.comments && (
      <div className="replies">
        <h4>Replies:</h4>
        {comment.comments.map((reply) => (
          <Comment
            key={reply.id}
            comment={reply}
            handleCommentSubmit={handleCommentSubmit}
          />
        ))}
      </div>
    )}
    <div className="reply-input">
      <label htmlFor={`replyInput-${comment.id}`}>Reply:</label>
      <input
        id={`replyInput-${comment.id}`}
        type="text"
        placeholder="Type your reply here"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleCommentSubmit(e.target.value, comment.id);
            e.target.value = "";
          }
        }}
      />
    </div>
  </div>
);

const CommentWidget = () => {
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (text, parentId) => {
    const newComment = {
      id: new Date().getTime(),
      text,
      comments: [],
    };

    if (parentId) {
      const updatedComments = comments.map((comment) =>
        comment.id === parentId
          ? { ...comment, comments: [...comment.comments, newComment] }
          : comment
      );

      setComments(updatedComments);
    } else {
      setComments([...comments, newComment]);
    }
  };

  return (
    <div className="comment-widget">
      <h2>Comment Widget</h2>
      <div className="comments">
        {comments.length === 0 ? (
          <p>No comments yet.</p>
        ) : (
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>
                <Comment
                  comment={comment}
                  handleCommentSubmit={handleCommentSubmit}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="add-comment">
        <label htmlFor="commentInput">Add a comment:</label>
        <input
          id="commentInput"
          type="text"
          placeholder="Type your comment here"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleCommentSubmit(e.target.value);
              e.target.value = "";
            }
          }}
        />
      </div>
    </div>
  );
};

export default CommentWidget;
