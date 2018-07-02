import React from 'react';
import {Link} from 'react-router-dom';

import Avatar from './Avatar';

function ArticlePreview ({_id, title, votes, belongs_to, created_by:{avatar_url, name}}) {
    return (
        <div className= "article-preview media">
            <div className="media-left user">
                <Avatar avatar_url={avatar_url} name={name}/>
                <p>{name}</p>
            </div>

            <div className="media-body">
                <Link to={`/article/${_id}`}>{title}</Link>
            </div>

        </div>
    );
}

export default ArticlePreview;
