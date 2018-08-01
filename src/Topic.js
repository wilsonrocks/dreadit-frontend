import React from 'react';

import {getArticlesForTopic} from './api';

import {TopicError} from './Error';

import ArticleList from './ArticleList';

class Topic extends React.Component {

  state = {
    articles: [],
  }

  componentDidMount () {
    const {_id} = this.props.match.params;

    getArticlesForTopic(_id)
    .then(response => {
      if (response.articles) this.setState({articles: response.articles});
    });
  }

  render = () => {
    const {articles} = this.state;
    const {_id} = this.props.match.params;

    return articles.length > 0
    ? <ArticleList articles={articles}/>
    : <TopicError _id={_id}/>
  }

}

export default Topic;