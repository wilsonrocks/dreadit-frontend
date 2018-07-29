import React from 'react';
import {BASE_URL} from './constants';

import ArticlePreview from './ArticlePreview';
import OrderDropDown from './OrderDropDown';

const everyone = {value: '', text: 'Everyone'};
const allTopics = {value: '', text: 'All Topics'};

class ArticleList extends React.Component {

    state = {
        articles: [],
        authors: [everyone],
        topics: [allTopics],
        topicFilter: '',
        authorFilter: '',
    }

    componentDidMount () {


        Promise.all([

            fetch(`${BASE_URL}/articles`)
            .then(response => response.json()),

            fetch(`${BASE_URL}/topics`)
            .then(response=>response.json()),

            fetch(`${BASE_URL}/users`)
            .then(response=>response.json())

        ])
        .then(([{articles}, {topics}, {users}]) => {

            const newState = {};

            if (this.props.location.state) {
                const passedAuthorFilter = this.props.location.state.authorFilter || '';
                if (passedAuthorFilter) newState.authorFilter = passedAuthorFilter;
                const passedTopicFilter = this.props.location.state.topicFilter || '';
                if (passedTopicFilter) newState.topicFilter = passedTopicFilter;
            }

            newState.articles = articles;

            const newTopics = topics.map(
                ({title, _id}) => ({value: _id, text: title})
            )
            newState.topics = [allTopics, ...newTopics];

            const newUsers = users.map(
                ({name, _id}) => ({value: _id, text: name})
            )
            newState.authors = [everyone, ...newUsers];
            this.setState(newState);
        });

    }


    filteredArticles =  () => {
        const {authorFilter, articles} = this.state;

        const filteredByAuthor = (authorFilter !== '')
            ? articles.filter(({created_by:{_id}}) => _id === authorFilter)
            : articles;

        const {topicFilter} = this.state;

        const filteredByTopicAndAuthor =
        topicFilter !== ''
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
        const {topics, authors, topicFilter, authorFilter} = this.state;

        return (
            <div className="ArticleList section">
                <div>
                    Display articles on <OrderDropDown
                        entries={topics}
                        onChange={({target:{value}}) => this.setState({topicFilter: value})}
                        selected={topicFilter}
                    /> by <OrderDropDown
                        entries={authors}
                        onChange={this.changeAuthorFilter}
                        selected={authorFilter}
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