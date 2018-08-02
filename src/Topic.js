import React from 'react';

import {getArticlesForTopic} from './api';

import {TopicError} from './Error';

import ArticleList from './ArticleList';

class Topic extends React.Component {

  state = {
    articles: [],
    loading: true,
  }

  componentDidMount () {
    const {_id} = this.props.match.params;

    getArticlesForTopic(_id)
    .then(response => {
      if (response.articles) this.setState({articles: response.articles, loading:false});
    });
  }

  render = () => {
    const {articles, loading} = this.state;
    const {_id} = this.props.match.params;

    if (loading) return <div/>;

    return articles.length > 0
    ? <ArticleList articles={articles}/>
    : <TopicError _id={_id}/>
  }

}

export default Topic;