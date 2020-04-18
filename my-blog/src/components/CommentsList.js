import React from 'react';

const CommentsList = ({ comments }) => (
  <>
  <h3 className="clow">Comments:</h3>
  <br></br>
  {comments.map((comment, key) => (
    <div className="comment" key={key}>
      <h4>{comment.username}</h4>
      <p>{comment.text}</p>
    </div>
  ))}
  </>
)

export default CommentsList
