import React from 'react';
import {Link} from 'react-router-dom';

function ArticlePreview ({_id, title, votes, created_by, body, belongs_to}) {
    return (
        <div className= "article-preview">
            <Link to={`/article/${_id}`}>{title}</Link>
        </div>
    );
}

export default ArticlePreview;
