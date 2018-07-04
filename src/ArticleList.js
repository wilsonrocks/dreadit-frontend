import React from 'react';
import {BASE_URL} from './constants';

import ArticlePreview from './ArticlePreview';
import OrderDropDown from './OrderDropDown';


const everyone = {value: '', text: 'Everyone'};
const allTopics = {value: null, text: 'All Topics'};


class ArticleList extends React.Component {

    state = {
        articles: [],
        authors: [everyone],
        topics: [allTopics],
        topicFilter: '',
        authorFilter: '',
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
            this.setState({topics:[allTopics, ...newTopics]});
        });

        fetch(`${BASE_URL}/users`)
        .then(response=>response.json())
        .then(({users})=>{
            const newUsers = users.map(
                ({name, _id}) => ({value: _id, text: name})
            )
            this.setState({authors: [everyone, ...newUsers]});
        });
    }


    filterAuthors = (authors, name) => {
        if (name === '') return authors;
        return authors.filter(author => author.created_by._id === this.state.authorFilter);
    }

    orderBy = () => {
        return this.props.match.url.slice(1);
    }

    changeAuthorFilter = ({target: {value}}) => {
        this.setState({authorFilter: value});
    }

    render () {
        const {articles, topics, authors} = this.state;
        const filteredArticles = this.filterAuthors(articles, this.state.authorFilter);
        
        return (
            <div className="ArticleList section">
                <div>
                    Display articles on <OrderDropDown
                        entries={topics}
                    /> by <OrderDropDown
                        entries={authors}
                        onChange={this.changeAuthorFilter}
                    />
                </div>
                <div className="columns is-multiline">
                    {filteredArticles.map(
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