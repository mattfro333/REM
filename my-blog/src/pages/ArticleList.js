import React from 'react';
import {Link} from 'react-router-dom';
import articleContent from './article-content';

const ArticlesList = () => (
  <>
    <h1>Articles</h1>
    {articleContent.map((article, key) => (
       <Link className="list-item" key={key} to={`/article/${article.name}`}>
       <h3>{article.title}</h3>
       </Link>
    ))}
  </>
);

export default ArticlesList;
