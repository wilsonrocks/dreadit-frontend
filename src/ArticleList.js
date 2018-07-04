import React from 'react';
import {BASE_URL} from './constants';

import ArticlePreview from './ArticlePreview';
import OrderDropDown from './OrderDropDown';


class ArticleList extends React.Component {

    state = {
        articles: [],
        authors: [],
        topics: [],
    }

    componentDidMount () {
        fetch(`${BASE_URL}/articles`)
        .then(response => response.json())
        .then(({articles}) => {
            this.setState({articles})
        });

        fetch(`${BASE_URL}/topics`)
        .then(response=>response.json())
        .then(({topics})=>{
            const newTopics = topics.map(
                ({title, _id}) => ({value: _id, text: title})
            )
            this.setState({topics:newTopics});
        });
    }

    orderBy = () => {
        return this.props.match.url.slice(1);
    }

    render () {
        const {articles} = this.state;
        return (
            <div className="ArticleList section">
                <div>
                    Display articles on <OrderDropDown entries={this.state.topics}/> by <OrderDropDown entries={this.state.authors}/>
                </div>
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
}

export default ArticleList;