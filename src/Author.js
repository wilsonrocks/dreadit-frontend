import React from 'react';

import {getArticlesForAuthor} from './api';

import {AuthorError} from './Error';

import ArticleList from './ArticleList';

class Author extends React.Component {

  state = {
    articles: [],
    loading: true,
  }

  componentDidMount () {
    const {_id} = this.props.match.params;

    getArticlesForAuthor(_id)
    .then(response => {
      if (response.articles) this.setState({
        articles: response.articles,
        loading: false,
      });
    });
  }

  render = () => {
    const {
      articles,
      loading,
    } = this.state;
    const {_id} = this.props.match.params;

    if (loading) return <div/>;

    return articles.length > 0
    ? <ArticleList articles={articles}/>
    : <AuthorError _id={_id}/>
  }

}

export default Author;