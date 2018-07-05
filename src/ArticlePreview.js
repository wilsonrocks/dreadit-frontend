import React from 'react';
import {Link} from 'react-router-dom';

import Avatar from './Avatar';
import TopicName from './TopicName';
import AuthorName from './AuthorName';

function ArticlePreview ({_id, title, votes, belongs_to, created_by:{avatar_url, name, _id:author_id}}) {
    return (
        <div className= "column is-one-third">
            <div className= "article-preview media">
                <div className="media-left user">
                    <Avatar avatar_url={avatar_url} name={name} _id={author_id}/>
                    <AuthorName name={name} _id={author_id}/>
                </div>

                <div className="media-body">
                    <TopicName name={belongs_to.title} _id={belongs_to._id}></TopicName>
                    <Link to={`/articles/${_id}`}>{title}</Link>
                </div>

            </div>
        </div>
    );
}

export default ArticlePreview;
