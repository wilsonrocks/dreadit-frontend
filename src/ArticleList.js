import React from 'react';

import ArticlePreview from './ArticlePreview';

function ArticleList ({articles}) {
        return (
            <div className="ArticleList section">
                <div className="columns is-multiline">
                    {articles.map(
                        article => {
                            return <ArticlePreview {...article} key={article._id}/>
                        }
                    )}
                </div>
            </div>
        );
    }

export default ArticleList;