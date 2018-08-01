import React from 'react';

import ArticleList from './ArticleList';
import {BASE_URL} from './constants';

class AllArticles extends React.Component {

  state = {
    articles: [],
  }

  componentDidMount () {
    fetch(`${BASE_URL}/articles`)
    .then(response => response.json())
    .then(({articles}) => {
      this.setState({articles});
    });
  }

  render = () => <ArticleList {...this.state}/>
  
}


export default AllArticles;