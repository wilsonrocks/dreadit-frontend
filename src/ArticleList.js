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

        const passedAuthorFilter = this.props.location.state.authorFilter;
        console.log(passedAuthorFilter);
        if (passedAuthorFilter) this.setState({authorFilter: passedAuthorFilter});

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
        console.log(this.state.authorFilter);
        
        return (
            <div className="ArticleList section">
                <div>
                    Display articles on <OrderDropDown
                        entries={topics}
                        onChange={({target:{value}}) => this.setState({topicFilter: value})}
                    /> by <OrderDropDown
                        entries={authors}
                        onChange={this.changeAuthorFilter}
                        selected={this.state.authorFilter}

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