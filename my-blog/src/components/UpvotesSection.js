import React from 'react';

const UpvotesSection = ({articleName, upvotes, setArticleInfo}) => {
    const upVoteArticle = async () => {
    const result = await fetch(`/api/articles/${articleName}/upvote`, {
          method: 'post',
    });
    const body = await result.json();
    setArticleInfo(body);
  }
  return (
  <div id="upvotes-section">
  <button onClick={() => upVoteArticle()}>Add Upvote</button>
  <h5>This post has been upvoted {upvotes} times</h5>
  </div>
);
}
export default UpvotesSection;
