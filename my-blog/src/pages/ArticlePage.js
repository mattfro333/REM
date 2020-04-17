import React, { useState, useEffect } from 'react';
import ArticlesList from '../components/ArticlesList';
import NotFoundPage from './NotFoundPage';
import articleContent from './article-content';
import CommentsList from '../components/CommentsList.js';
import UpvotesSection from '../components/UpvotesSection.js'

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`http://localhost:8000/api/articles/${name}`);
            const body = await result.json();
            console.log(result);
            console.log(body);
            setArticleInfo(body);
        }
        fetchData();
    }, [name]);

    if (!article) return <NotFoundPage />

    const otherArticles = articleContent.filter(article => article.name !== name);

    return (
        <>
        <h1>{article.title}</h1>
        <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />
        {article.content.map((paragraph, key) => (
            <p key={key}>{paragraph}</p>
        ))}
        <CommentsList comments={articleInfo.comments}/>
        <h3>Other Articles:</h3>
        <ArticlesList articles={otherArticles} />
        </>
    );
}

export default ArticlePage;
