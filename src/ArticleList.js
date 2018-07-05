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


    filterAuthors = (name) => {

        const {authorFilter, authors} = this.state;

        if (name === '') return authors;
        return authors.filter(author => author.created_by._id === authorFilter);
    }

    filteredArticles =  () => {
        const {authorFilter, articles} = this.state;
        
        const filteredByAuthor = (authorFilter !== '')
            ? articles.filter(({created_by:{_id}}) => _id === authorFilter)
            : articles;

        const {topicFilter} = this.state;

        const filteredByTopicAndAuthor = topicFilter !== ''
            ? filteredByAuthor.filter(({belongs_to:{_id}}) => _id === topicFilter)
            : filteredByAuthor

        return filteredByTopicAndAuthor;

    }


    orderBy = () => {
        return this.props.match.url.slice(1);
    }

    changeAuthorFilter = ({target: {value}}) => {
        this.setState({authorFilter: value});
    }

    render () {
        const {topics, authors} = this.state;
        
        return (
            <div className="ArticleList section">
                <div>
                    Display articles on <OrderDropDown
                        entries={topics}
                        onChange={({target:{value}}) => this.setState({topicFilter: value})}
                    /> by <OrderDropDown
                        entries={authors}
                        onChange={this.changeAuthorFilter}
                    />
                </div>
                <div className="columns is-multiline">
                    {this.filteredArticles().map(
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