import React from 'react';
import Comment from './Comment'

function CommentList({comments}) {
    return (
      <div className="comment-list section">
        {comments.map(comment => {
            return <Comment
                {...comment}
                key={comment._id}
            />
        })}
      </div>
    );
  }

export default CommentList;