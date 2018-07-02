import React from 'react';
import {BASE_URL} from './constants';

import ArticlePreview from './ArticlePreview';


class ArticleList extends React.Component {

    state = {
        articles: [],
    }

    componentDidMount () {
        fetch(`${BASE_URL}/articles`)
        .then(response => response.json())
        .then(({articles}) => {
            this.setState({articles})
        });
    }

    orderBy = () => {
        return this.props.match.url.slice(1);
    }

    render () {
        const {articles} = this.state;
        return (
            <div className="ArticleList section">
            {articles.map(
                article => {
                    return <ArticlePreview {...article} key={article._id}/>
                }
            )}
            </div>
        );
    }
}

export default ArticleList;