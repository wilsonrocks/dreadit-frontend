import React from 'react';

function ArticleList({match:{url}}) {
    return <p>List of articles for {url}</p>;
}

export default ArticleList;